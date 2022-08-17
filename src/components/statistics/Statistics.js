import React,{  useState,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { axiosInstance } from '../../network/axiosInstance';

const Statistics = () => {
    const [users,setUsers]=useState({
      
    });
    const [username,setUsername]=useState([]);  
    let count=0; 
    const [postNum,setPostNum]=useState(null); 
    
const  getUsersData=()=>{
    axiosInstance.get('/admin/users')
       .then((res)=>{

          setUsers(res.data);
           for(const i of res.data){
            setUsername(i.firstName);
            for(const j of i.sharedPosts){
                count+=1;
                setPostNum(count);
            }
           
           }  
        // console.log(res.data);

       })
       .catch((err)=>{
        console.log(err)
    });

    
   }
   
    useEffect(() => {
    
        getUsersData();
   
},[]);
  




// const sharedP=users?.map((el)=>{

//     console.log(el.firstName+" , "+el.sharedPosts.length);
    
 
   
// });
// console.log(sharedP);

    return (

        <BarChart
          width={500}
          height={300}
          data={users}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey={JSON.stringify(username)}/>
   
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={postNum} fill="#8884d8" />
          <Bar dataKey='' fill="#82ca9d" />
        </BarChart>
    );
}

export default Statistics;
