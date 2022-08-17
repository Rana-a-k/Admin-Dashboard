import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../../components/home/Navbar'
import Sidebar from '../../components/home/Sidebar'
import Widget from '../../components/home/Widget'
import Loader from '../../components/Loader/Loader';
import Statistics from '../../components/statistics/Statistics';
import { axiosInstance } from '../../network/axiosInstance';

function Home() {
    const userState = useSelector((state) => state.userData.userData);
    const postState = useSelector((state) => state.postData.postData);
    
    const [allUsers,setAllUsers]=useState([]);
    const [allPosts,setAllPosts]=useState([]);

    useEffect(() => {
        axiosInstance.get('/admin/users')
        .then((res)=>{
    
            setAllUsers(res.data);
           
        })
        .catch((err)=>console.log(err));

       axiosInstance.get('/admin/posts')
       .then((res)=>setAllPosts(res.data))
       .catch((err)=>console.log(err));

    }, []);
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <Sidebar/>
            </div>
            <div className='col-span-10'>
                <Navbar/>
                <div className='flex justify-around my-8'>
                    
                    <Widget number={allUsers.length} title={"users"}/>
                   
                    <Widget number={allPosts.length} title={"posts"}/>
                </div>
                <div>
                    Chart
                   <Statistics/>
                </div>
            </div>
        </div>
    )
}

export default Home