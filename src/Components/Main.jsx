import React, { useState } from 'react'
 const Main = () => {
    const [item,setItem]=useState([])
    const [inputvalue,setInputValue]=useState('')

    const additems=()=>{
        setItem([...item,inputvalue])
        setInputValue('')
}

return (

    //dynamic list items add
    <div>
        <input type="text" value={inputvalue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={additems}>submit</button>
        <ul>
            {item.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>

    </div>




  
  
  )

}
export default Main;




//toggle functionality//
// import React, { useState } from 'react'

// export const Main = () => {
//     const [ison,setIson]=useState(false)

//     const toggleclick=()=>{
//         setIson(!ison)
//     }
//   return (
//     <div>

//         <h1>{ison? "ON" : "OFF"}</h1>
//          <button onClick={toggleclick}>click on me</button>
//     </div>
   
//   )
// }



//tabs components//

// import React, { useState } from 'react'

// export const Main = () => {
//     const [activeTab,setActiveTab]=useState("Home");
//     const tabrendering=()=>{
//         switch (activeTab){
//             case 'Home':
//                 return <div>Homepage</div>
//             case 'Profile':
//                 return <div>Profile</div>
//             case 'Settings':
//                 return <div>Settings</div>
//             default:
//                 return <div>Homepage</div>

//         }
//     }
//   return (
//     <div>
//     <div>
//         <button onClick={()=>setActiveTab('Home')}>Home</button>
//         <button onClick={()=>setActiveTab('Profile')}>Profile</button>
//         <button onClick={()=>setActiveTab('Settings')}>Settings</button>
//     </div>
//     <div>
//         {tabrendering()}
//     </div>
//     </div>
//   )
// }




// import React, { Component, useState } from 'react'
// const tabs=[
//     {
//         label:"Home",component:<div>HomePage</div>
//     },
//     {
//         label:"Profile",component:<div>ProfilePage</div>
//     },
//     {
//         label:"Settings",component:<div>SettingsPage</div>
//     },
// ]

// const Main = () => {
//     const [activetab,setActiveTab]=useState(tabs[0].label)

//     const tabChanger=()=>{

//         const currentTab=tabs.find((tab)=>tab.label===activetab);
//         return currentTab?currentTab.component:<div>Homepage</div>

//     }

   
//   return (
//     <div className='p-4  '>
//         <div className='flex  mb-4 max-w-screen-xl mx-auto'>
//             {
//                 tabs.map((tab)=>(
//                     <div key={tab.label} onClick={()=>setActiveTab(tab.label)} className={`px-4 py-2  ${activetab === tab.label?'bg-black text-white':'bg-slate-500 text-white'}`}>{tab.label}</div>
//                 ))
//             }
//         </div>
//         <div className='bg-slate-400 rounded max-w-screen-xl mx-auto'>
//             {tabChanger()}
//         </div>

//     </div>
//   )
// }

// export default Main




// import React,{useState} from 'react'

// const Main = () => {
//     const [isToggled, setIsToggled] = useState(false);

//     const handleToggle = () => {
//         setIsToggled(!isToggled);
//       };

//   return (
//      <button
//       className={`w-20 h-8 bg-slate-200 rounded-full duration-300 ease-in-out p-2 flex items-center ${isToggled ? 'bg-red-500':''}`}
//       onClick={handleToggle}
//     >
//       <div
//         className={`w-6 h-6 rounded-full bg-slate-50 transform duration-300 ease-in-out ${isToggled?"translate-x-8":""}`}
//       ></div>
//     </button>
//   )
// }

// export default Main






// import React, { useState } from 'react';

// const Main = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     email: ''
//   });

//   const isFormValid = formData.name && formData.age && formData.email;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="mt-1 p-2 block w-full border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="age" className="block text-gray-700">Age</label>
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           className="mt-1 p-2 block w-full border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="mt-1 p-2 block w-full border rounded"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={!isFormValid}
//         className={`w-full p-2 rounded ${isFormValid ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Main;



// form validations with react hook//


// import React, { useState } from 'react'
// import {useForm} from 'react-hook-form'
// import {z } from 'zod'
// import {zodResolver} from '@hookform/resolvers/zod'

// const schema = z.object({
//   name: z.string().min(1, 'Name is required') .regex(/^[A-Za-z\s]+$/, 'Name must contain only alphabetic characters and spaces'),
//   password: z.string().min(5, 'Password must be at least 5 characters'),
//   cpassword: z.string().min(5, 'Confirm password must be at least 5 characters'),
//   url: z.string().url('invalid url'),
//   description: z.string().optional(),
//   phonenumber: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits')
// }).refine(data => data.password === data.cpassword, {
//   message: 'Passwords do not match',
//   path: ['cpassword'],
// });

// const Main = () => {
//   const [formdata,setFormData]=useState(null)
//   const { register, handleSubmit, reset,formState: { errors } } = useForm({
//     resolver: zodResolver(schema)
//   });

//   const submitter = (data) => {
//     setFormData(data)
//     console.log(data);
//     alert("sucessfully submit the form")
//     reset()
//   }
//   console.log(formdata)

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit(submitter)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//           <input type="text" {...register('name')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//           {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//           <input type="password" {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//           {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
//           <input type="password" {...register('cpassword')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//           {errors.cpassword && <p className="text-red-500 text-xs italic">{errors.cpassword.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
//           <input {...register('url')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//           {errors.url && <p className="text-red-500 text-xs italic">{errors.url.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
//           <textarea {...register('description')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//           {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
//           <input type="number" {...register('phonenumber')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//           {errors.phonenumber && <p className="text-red-500 text-xs italic">{errors.phonenumber.message}</p>}
//         </div>
//         <div className="flex items-center justify-between">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Main;







// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const schema = z.object({
//   name: z.string().min(1, 'Name is required').regex(/^[A-Za-z\s]+$/, 'Name must contain only alphabetic characters and spaces'),
//   password: z.string().min(5, 'Password must be at least 5 characters'),
//   cpassword: z.string().min(5, 'Confirm password must be at least 5 characters'),
//   url: z.string().url('Invalid URL'),
//   description: z.string().optional(),
//   phonenumber: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits')
// }).refine(data => data.password === data.cpassword, {
//   message: 'Passwords do not match',
//   path: ['cpassword'],
// });

// const Main = () => {
//   const [formData, setFormData] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const { register, handleSubmit, reset, formState: { errors } } = useForm({
//     resolver: zodResolver(schema)
//   });

//   const submitter = (data) => {
//     setFormData(data);
//     console.log(data);
//     alert("Successfully submitted the form");
//     reset();
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button onClick={() => setIsOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Form</button>
      
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative z-10">
//             <form onSubmit={handleSubmit(submitter)}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//                 <input type="text" {...register('name')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                 {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <input type="password" {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                 {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
//                 <input type="password" {...register('cpassword')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                 {errors.cpassword && <p className="text-red-500 text-xs italic">{errors.cpassword.message}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
//                 <input {...register('url')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                 {errors.url && <p className="text-red-500 text-xs italic">{errors.url.message}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
//                 <textarea {...register('description')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                 {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
//                 <input type="number" {...register('phonenumber')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                 {errors.phonenumber && <p className="text-red-500 text-xs italic">{errors.phonenumber.message}</p>}
//               </div>
//               <div className="flex items-center justify-between">
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//                 <button type="button" onClick={() => setIsOpen(false)} className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;




// // src/App.js
// import React from 'react';
// import { FaSearch } from 'react-icons/fa'; // Importing a search icon from react-icons

// function Main() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="pl-2 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//       </div>
//     </div>
//   );
// }

// export default Main;






// import React, { useState } from 'react';

// function Main() {
//   const [inputValue, setInputValue] = useState(10);
//   const [multiplier, setMultiplier] = useState(null);
//   const [result, setResult] = useState(null);
//   const [activeButton, setActiveButton] = useState(null);

//   const handleInputChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     setInputValue(isNaN(value) ? '' : value);
//   };

//   const handleMultiplierClick = (multiplierValue) => {
//     setMultiplier(multiplierValue);
//     setActiveButton(multiplierValue);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (multiplier !== null) {
//       setResult(inputValue * multiplier);
//       setActiveButton(null);  // Reset the active button after submit
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md w-80">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputValue">
//             Input Value
//           </label>
//           <input
//             id="inputValue"
//             type="number"
//             value={inputValue}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4 flex justify-around">
//           <button
//             type="button"
//             onClick={() => handleMultiplierClick(10)}
//             className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeButton === 10 ? 'bg-black text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
//           >
//             10x
//           </button>
//           <button
//             type="button"
//             onClick={() => handleMultiplierClick(100)}
//             className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeButton === 100 ? 'bg-black text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
//           >
//             100x
//           </button>
//           <button
//             type="button"
//             onClick={() => handleMultiplierClick(1000)}
//             className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeButton === 1000 ? 'bg-black text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
//           >
//             1000x
//           </button>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={multiplier === null || inputValue === ''}
//             className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${multiplier === null || inputValue === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       {result !== null && (
//         <div className="mt-6 bg-white p-4 shadow-md rounded-md w-80 text-center">
//           <p className="text-xl font-bold">Result: {result}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Main;












