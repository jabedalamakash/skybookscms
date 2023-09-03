import React from 'react';
import {FaTrash, FaEdit} from 'react-icons/fa';

const Book = ({data,handleDelete}) => {

return (
 <div className='w-full px-5 mb-20 border-box sm:px-0 sm:w-[80%] mx-auto'>

  {!data.length ? null : <>
    <div className="overflow-x-auto bg-[#F3F4F8] px-5 py-10   sm:p-40 rounded-xl">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Book Name</th>
        <th>Author Name </th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>

    
      {/* row 1 */}
      
      <tbody>
        {data &&data.map((book)=>{
          return (
            <tr key={book.id} className=''>

            <th>{book.icbn}</th>
            <td >{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>

            <td className='flex gap-6'>
            <span>
            <button><FaEdit size={15}/></button>              
              </span>
              
              <span>
                <button onClick={()=>handleDelete(book.icbn)}><FaTrash size={15}/></button>              
              </span>

              
              </td>
            
          </tr>
          )

        })}

      </tbody>
    
    
  </table>
</div>
  
  
  
  
  
  </>}



        </div>
    );
};

export default Book;