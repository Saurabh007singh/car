"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Enquires() {

  const [limit,setLimit]=useState(20);
  
  const [users,setUsers]=useState(null);
  const [currentPage,setCurrentPage]=useState(1);
const [totalPages,setTotalPages]=useState(null)

console.log(currentPage,totalPages)
  async function fetchEnquiry(){
  const result=await axios.get(`/api/contact/${limit}/${currentPage}`);
  console.log(result?.data)

setTotalPages(result?.data.pagination?.totalPages)
  setUsers(result?.data?.data)
  return result
  }

useEffect(()=>{
fetchEnquiry()
},[currentPage])


const handlePrevPage=()=>{
  if(currentPage>1){
    setCurrentPage(currentPage-1)
  }
}

const handleNextPage=()=>{
  if(currentPage<totalPages){
    setCurrentPage(currentPage+1)
  }
}


  return (
    
    <>
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm tracking-wider">
            <th className="py-3 px-6 border-b">Name</th>
            <th className="py-3 px-6 border-b">Email</th>
            <th className="py-3 px-6 border-b">Phone</th>
            <th className="py-3 px-6 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id} className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b">{user?.name}</td>
              <td className="py-3 px-6 border-b">{user?.email}</td>
              <td className="py-3 px-6 border-b">{user?.phone}</td>
              <td className="py-3 px-6 border-b">{user?.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-5">
      <button disabled={currentPage === 1} onClick={handlePrevPage} className="bg-red-500 p-1 text-white cursor-pointer">
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button disabled={currentPage === totalPages} onClick={handleNextPage} className="bg-red-500 p-1 text-white cursor-pointer">
        Next
      </button>
      </div>
    </div>
    </>
  );
}
