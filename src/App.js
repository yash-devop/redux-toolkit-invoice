import { Image, Send } from "lucide-react";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [imageURL , setImageURL] = useState(null);

  const handleImage=(event)=>{
    const img = event.target.files[0];
    const url = URL.createObjectURL(img)
    setImageURL(url)

  }
  return (
    <>
       <div className="bg-[#f2f3f5e8] w-full">
          <div className="flex flex-col lg:flex-row w-full">

              {/* LeftSide box*/}
              <div className="max-w-[1100px] mx-auto w-full h-screen p-4 bg-white">

                {/* Image Upload */}
                <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 w-full sm:max-h-[180px] sm:h-full pb-4">
                    {
                       imageURL ? <img src={imageURL} className="w-[200px] h-[200px] object-contain"/> : (
                          <>
                            <div onClick={()=>document.getElementById("upload_img").click()} className="max-w-[200px] cursor-pointer flex flex-col text-sm gap-3 items-center justify-center w-full h-full border-2 border-dashed border-blue-400 rounded-lg">
                              <Image size={40}/>
                              <p>Upload Logo </p>
                              <input type="file" onChange={handleImage} hidden id="upload_img" accept="image/*"/>
                            </div>
                          </>
                       )
                    }

                    <div className="max-w-[300px] w-full">
                        <h1 className="font-bold text-xl pb-2">INVOICE</h1>
                        <div className="flex flex-col gap-2">
                          <input type="text" placeholder="Company Name"  className="bg-[#eeeeee] focus:bg-transparent border outline-none p-2 rounded-lg" />
                          <input type="text" placeholder="Customer's Name" className="bg-[#eeeeee] focus:bg-transparent border outline-none p-2 rounded-lg" />
                          <h1 className="font-semibold">Invoice Date: <span className="text-gray-400">06 May 2024</span></h1>

                        </div>
                    </div>

                </div>  
                <hr />

                {/* Content */}
                <div className="pt-4 flex items-center justify-between gap-2 ">
                   <div className="flex flex-col gap-2 w-full">
                      <label className="font-medium">Billing To Address</label>
                      <input type="text" placeholder="Who is this invoice to ?" className="bg-[#eeeeee] focus:bg-transparent border outline-none p-3 rounded-lg w-full" />
                   </div>


                   <div className="flex flex-col gap-2 w-full">
                      <label className="font-medium">Billing From Address</label>
                      <input type="text" placeholder="Who is this invoice to ?" className="bg-[#eeeeee] focus:bg-transparent border outline-none p-3 rounded-lg w-full" />
                   </div>

                </div>
                <div className="flex flex-col gap-2 w-full pt-4">
                   <h1>Enter your items</h1>
                   <AddItem />
                </div>

              </div>



              {/* RightSide box*/}
              <div className="flex flex-col items-center gap-2 h-screen max-w-[400px] w-full mx-auto p-4">
                 <button className="p-3  font-bold w-full border border-black text-black">
                    Preview
                 </button>
                 <button className="flex items-center justify-center gap-3 p-3 text-white font-bold w-full bg-blue-600">
                    <Send size={20}/>
                    Send Invoice
                 </button>
              </div>

          </div>
       </div>
    </>
  );
}

export default App;
