import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../network/axiosInstance";
import { addPostData } from '../../Store/UserSlice/PostsDataSlice';

function PostsTable() {
    const postState = useSelector((state) => state.postData.postData);
    const dispatch = useDispatch();
    useEffect(() => {
        axiosInstance
            .get("/admin/posts")
            .then((res) => {
                dispatch(addPostData(res.data));
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        }, []);
    const deleteHandler = (id)=>{
        axiosInstance
        .delete(`/admin/posts/${id}`)
        .then(res=>{
            axiosInstance
            .get("/admin/posts")
            .then((res) => {
                dispatch(addPostData(res.data));
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <table>
                <thead className='h-24 bg-indigo-500 text-white'>
                <tr>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>Creator Name</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>Created at</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>Content</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>User ID</th>
                    <th className='w-1/6 p-2 border-indigo-300'>Delete</th>
                </tr>
                </thead>
                <tbody>
                {postState?.map((post,index)=>{
                    return(
                    <tr key={index} className="odd:bg-white even:bg-indigo-100 h-14 hover:bg-rose-200">
                        <td className='text-center'>{post.creatorName}</td>
                        <td className='text-center'>{post.createdAt}</td>
                        <td className='text-center'>{post.content}</td>
                        <td className='text-center'>{post.userId}</td>
                        {/* <td>{user.sharedPosts.map(post=>post.postId)}</td> */}
                        <td className='text-center'><button className='p-2 rounded-lg bg-red-500 text-white' onClick={()=>deleteHandler(post._id)}>Delete</button></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default PostsTable