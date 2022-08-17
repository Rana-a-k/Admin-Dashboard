import React from 'react'
import { useSelector } from 'react-redux';
import Chart from '../../components/home/Chart';
import Navbar from '../../components/home/Navbar'
import Sidebar from '../../components/home/Sidebar'
import Widget from '../../components/home/Widget'

function Home() {
    const userState = useSelector((state) => state.userData.userData);
    const postState = useSelector((state) => state.postData.postData);
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <Sidebar/>
            </div>
            <div className='col-span-10'>
                <Navbar/>
                <div className='flex justify-around my-8'>
                    <Widget number={userState.length} title={"users"}/>
                    <Widget number={postState.length} title={"posts"}/>
                </div>
                <div>
                    <Chart/>
                </div>
            </div>
        </div>
    )
}

export default Home