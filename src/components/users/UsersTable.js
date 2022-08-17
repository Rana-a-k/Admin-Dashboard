import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../network/axiosInstance";
import { addUserData } from "../../Store/UserSlice/UserDataSlice";

function UsersTable() {
    const userState = useSelector((state) => state.userData.userData);
    const dispatch = useDispatch();
    useEffect(() => {
        axiosInstance
            .get("/admin/users")
            .then((res) => {
                dispatch(addUserData(res.data));
            })
            .catch((err) => console.log(err));
        }, []);
    const deleteHandler = (id)=>{
        axiosInstance
        .delete(`/admin/users/${id}`)
        .then(res=>{
            axiosInstance
            .get("/admin/users")
            .then((res) => {
                dispatch(addUserData(res.data));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <table className='rounded-lg'>
                <thead className='h-24 bg-indigo-500 text-white'>
                <tr className=''>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>User ID</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>First Name</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>lastName</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>Email</th>
                    <th className='w-1/6 p-2 border-r border-indigo-300'>Shared Posts</th>
                    <th className='w-1/6 p-2 border-indigo-300'>Delete</th>
                </tr>
                </thead>
                <tbody>
                {userState?.map((user,index)=>{
                    return(
                    <tr key={index} className="odd:bg-white even:bg-indigo-100 h-14 hover:bg-rose-200">
                        <td className='text-center'>{user.userId}</td>
                        <td className='text-center'>{user.firstName}</td>
                        <td className='text-center'>{user.lastName}</td>
                        <td className='text-center'>{user.email}</td>
                        {<td className='text-center'>{user.sharedPosts.length}</td>}
                        <td className='text-center'><button className='p-2 rounded-lg bg-red-500 text-white' onClick={()=>deleteHandler(user._id)}>Delete</button></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable