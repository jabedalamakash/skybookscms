"use client"

import React, { useState } from 'react';
import Book from './Book';

const AddBook = () => {


    const [idata,setIdata] = useState({
        icbn:"",
         title:"",
          author:"", 
          category:"Uncategorized"});

        const [bdata,setBdata] = useState([]);

    const handleChange = (e) =>{
        setIdata({...idata,[e.target.name]:e.target.value});

    }

    const handleClick = (e) =>{
        e.preventDefault();
        setBdata([...bdata,idata]);
        setIdata({
        icbn:"",
        title:"",
         author:"", 
         category:"Uncategorized"})
    }

    const deleteBtn=()=>{
        const filterbook=bdata.filter((item)=>{

            return  item.icbn !== idata.icbn;
        })
        setBdata(filterbook);

    }


    
 console.log("Data",bdata);



    return (
        <>
            <section className='w-ful px-5 mb-20 sm:px-0 sm:w-[80%] mx-auto'>

                {/* <{Book main={bdata} title={bdata.title} id={bdata.id} name={bdata.author} category={bdata.category} /> */}

                        <Book data={bdata} handleDelete={deleteBtn}/>



                <div>
                <h3 className='text-center sm:text-left text-3xl font-bold mb-10'>Add New Book</h3>
                <form onSubmit={handleClick} >
                <div className='flex flex-col  sm:flex-row '>

                <input type="number" name="icbn" min={0}  placeholder='ICBN Number' required value={idata.icbn} onChange={handleChange} className='p-4  w-full sm:w-1/5 border-2 sm:mr-4 mb-5 sm:mb-0 rounded-lg'  />

                <input type="text" name="title" placeholder="Book Title" required value={idata.title} onChange={handleChange} className='p-4  w-full sm:w-1/3 border-2 rounded-lg sm:mr-4 mb-5 sm:mb-0 ' />

                <input type="text" name="author" required placeholder='Author Name' value={idata.author} onChange={handleChange} className='p-4 w-full sm:w-1/3 border-2 rounded-lg mb-5 sm:mb-0  sm:mr-4'  />

                <select id="Category" name="category" required  defaultValue={idata.category} onChange={handleChange} className='p-4 w-full sm:w-1/5 border-2 mb-5 sm:mb-0 sm:mr-4 rounded-lg'>
                <option value="Fiction">Fiction</option>
                <option value="Non-fiction">Non-fiction</option>
                <option value="Religious">Religious</option>
                <option value="Career And Academic" >Career And Academic</option>
                <option value="Uncategorized" >Uncategorized</option>
                </select>

                <button type="submit" className='p-4 font-bold bg-blue-500 text-white  rounded-lg'>Add Book</button>

                </div>


                </form>

                </div>




            </section>

        </>
    );
};

export default AddBook;