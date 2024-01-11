import { Plus, Trash, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const AddItem = () => {
  const [items , setItems] = useState([]);
  const handleAddItem=()=>{
      console.log("s");
  }
  const handleRemoveItem=()=>{
      console.log("s");
  }
  return (
    <>
        <div className='flex items-center justify-between gap-4'>
            <input type="text" placeholder='Enter your item' className='border outline-none w-full p-3 rounded-lg'/>
            <div className='flex items-center gap-4'>
                <div onClick={handleAddItem} className='bg-emerald-400 hover:opacity-90 cursor-pointer  flex items-center justify-center rounded-lg text-white min-w-[50px] h-[50px]'>
                    <Plus size={23}/>    
                </div>
                <div onClick={handleRemoveItem} className='bg-red-400 hover:opacity-90 cursor-pointer flex items-center justify-center rounded-lg text-white  min-w-[50px] h-[50px]'>
                    <Trash2 size={23}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddItem