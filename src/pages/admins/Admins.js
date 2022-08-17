import React from 'react'
import Sidebar from '../../components/home/Sidebar'

function Admins() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <Sidebar/>
            </div>
            <div>
                admin
            </div>
        </div>
    )
}

export default Admins