import React from 'react'
import AddAdminForm from '../../components/addAdminForm/AddAdminForm'
import Sidebar from '../../components/home/Sidebar'

function Admins() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <Sidebar/>
            </div>
            <div className='col-span-8 '>
                <AddAdminForm/>
            </div>
        </div>
    )
}

export default Admins