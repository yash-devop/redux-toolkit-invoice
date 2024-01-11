import { Plus, Trash, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const AddItem = () => {
  const [items , setItems] = useState([]);



  const [product , setProducts] = useState({
    productName : "",
    quantity: 1,
    price: 0
  })



  const handleAddItem=()=>{
     setItems([...items , product])
  }
  const handleRemoveItem=(index)=>{
    const newItems = [...items];
    newItems.splice(index, 1); // Remove the item at the specified index
    setItems(newItems);
  }
  return (
    <>
        {
            items.map((item , index)=>(
                <>
                    <div className='flex gap-4 items-center'>
                        <p>{index + 1}</p>
                        <input type="text" value={item?.productName} disabled className='w-full p-3'/>
                        <div onClick={()=>handleRemoveItem(index)} className='bg-red-400 hover:opacity-90 cursor-pointer flex items-center justify-center rounded-lg text-white  min-w-[40px] h-[40px]'>
                        <Trash2 size={20}/>
                    </div>
                </div>
                </>
            ))
        }
        <div className='flex items-center justify-between gap-6'>
            <input onChange={(e)=>setProducts({...product , productName: e.target.value})} type="text" value={product.productName} placeholder='Add Item' className='border outline-none w-full p-3 rounded-lg'/>
            <div className='flex items-center gap-4'>
                <label>
                    <h1>Quantity</h1>
                </label>
                <input type="number" defaultValue={1} className='border min-w-[20px] w-full outline-none p-2' />
                <label>
                    <h1>Price</h1>
                </label>
                <input type="number" defaultValue={1} className='border min-w-[80px] w-full outline-none p-2' />
                <button onClick={handleAddItem} disabled={product.productName.trim() === "" ? true : false}  className='disabled:bg-gray-400 bg-emerald-400 hover:opacity-90 cursor-pointer  flex items-center justify-center rounded-lg text-white min-w-[40px] h-[40px]'>
                    <Plus size={23}/>    
                </button>
            </div>
        </div>
    </>
  )
}

export default AddItem