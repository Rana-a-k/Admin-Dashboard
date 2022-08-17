import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/home/Navbar'
import Sidebar from '../../components/home/Sidebar'
import { axiosInstance } from '../../network/axiosInstance'
import { addAdminData } from '../../Store/UserSlice/AdminDataSlice'

function Profile() {
    const adminState = useSelector(state => state.adminData.adminData)
    const dispatch = useDispatch()
    useEffect(()=>{
        axiosInstance.get("/admin/profile")
        .then((res)=>{
            dispatch(addAdminData(res.data));
            console.log(res.data);
        })
        .catch((error)=>console.log(error))
    },[])
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
            <Sidebar/>
            </div>
            <div className='col-span-10'>
                <Navbar/>
                <div className='w-11/12 mx-auto my-10'>
                    profile
                </div>
            </div>
        </div>
    )
}

export default Profile