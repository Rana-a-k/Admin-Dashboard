import React,{useState,useEffect, useRef, useContext} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addAuthentication } from '../../Store/UserSlice/AuthSlice';

const LoginForm = () => {
  
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const auth=useSelector((state)=>state.auth);

    const [user,setUser]=useState({
        email:"",
        password:""
    });
   


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addAuthentication(user));
        console.log(user);
        setUser("");
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">

        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center text-indigo-500">Log In</h1>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                    value={user.email}
                    required
                    placeholder="Email" />

                <input 
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    id="password"
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    value={user.password}
                    required
                    placeholder="Password" />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                   Login
                </button>
    
                
                </form>
            </div>
            <div className="text-grey-dark mt-6">
                Don't have an account?
                <Link to='/signup' className="no-underline border-b border-blue-500 text-blue-500">
                    Sing Up
                </Link>
            </div>
        </div>
    </div>
    );
}

export default LoginForm;
