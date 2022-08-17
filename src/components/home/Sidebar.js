import React from 'react'
import {MdDashboard, MdOutlineAdminPanelSettings, MdPostAdd} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {BiLogOut} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='border-r-2 min-h-screen'>
            <div className='h-20 flex justify-center items-center border-b-2'>
                <span className='text-3xl font-bold text-indigo-500'>Rasma</span>
            </div>
            <div className='ml-5'>
                <ul className='p-2'>
                    <p className='text-sm text-indigo-500'>Main</p>
                    <NavLink to={"/"} className={({isActive})=>
                        (isActive ? "flex p-5 text-lg text-indigo-500 font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100" : "flex p-5 text-lg font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100")}>
                        <MdDashboard className='text-indigo-500'/><span className='mx-4'>Dashboard</span>
                    </NavLink>
                    <p className='text-sm text-indigo-500'>List</p>
                    <NavLink to={"/admins"} className={({isActive})=>
                        (isActive ? "flex p-5 text-lg text-indigo-500 font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100" : "flex p-5 text-lg font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100")}>
                        <MdOutlineAdminPanelSettings className='text-indigo-500'/><span className='mx-4'>Admins</span>
                    </NavLink>
                    <NavLink to={"/users"} className={({isActive})=>
                        (isActive ? "flex p-5 text-lg text-indigo-500 font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100" : "flex p-5 text-lg font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100")}>
                        <AiOutlineUser className='text-indigo-500'/><span className='mx-4'>Users</span>
                    </NavLink>
                    <NavLink to={"/posts"} className={({isActive})=>
                        (isActive ? "flex p-5 text-lg text-indigo-500 font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100" : "flex p-5 text-lg font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100")}>
                        <MdPostAdd className='text-indigo-500'/><span className='mx-4'>Posts</span>
                    </NavLink>
                    <p className='text-sm text-indigo-500'>User</p>
                    <NavLink to={"/profile"} className={({isActive})=>
                        (isActive ? "flex p-5 text-lg text-indigo-500 font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100" : "flex p-5 text-lg font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100")}>
                        <CgProfile className='text-indigo-500'/><span className='mx-4'>Profile</span>
                    </NavLink>
                    <li className='flex p-5 text-lg font-semibold items-center rounded-lg cursor-pointer hover:bg-indigo-100'><BiLogOut className='text-indigo-500'/><span className='mx-4'>Logout</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar