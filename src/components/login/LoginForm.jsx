import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginForm() {

    const { login, setEmail, setPassword, email, password, fullName, setFullName }= useAuth();

    const navigate = useNavigate();
     

    function onSubmit(event) {
        event.preventDefault();

        console.log("fullName:", fullName);
        console.log("email:", email);
        console.log("password:", password);

        if (email && password) {
            login();
            navigate("/");
        }

        setEmail("");
        setPassword("");
        
    }

    function setEmailFn(event) {
        setEmail(event.target.value);
    }

    function setPasswordFn(event) {
        setPassword(event.target.value);
    }
    function setFullNameFn(event) {
        setFullName(event.target.value);
    }

  return (
   <div className="min-h-screen bg-linewar-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
     <form onSubmit={onSubmit} className="max-w-md w-full bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl space-y-6"> 

     <div className="text-center mb-8">
       <h2 className="text-4xl font-extrabold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Welcome Back</h2>
       <p className="text-gray-600">Login to continue your journey</p>
     </div>

     <div>
       <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
       <input type='text' placeholder='John Doe' onChange={setFullNameFn} value={fullName} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200" />
     </div>

     <div>
       <label className="block text-gray-700 font-semibold mb-2">Email</label>
       <input type='email' placeholder='abc@gmail.com' onChange={setEmailFn} value={email} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200" />
     </div>
     
     <div>
       <label className="block text-gray-700 font-semibold mb-2">Password</label>
       <input type='current-password' placeholder='Enter your password' onChange={setPasswordFn} value={password} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200" />
     </div>

     <button type='submit' className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Login Now</button>

     </form>
   </div>
  )
}

export default LoginForm