import { Image } from "lucide-react";
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
       <div className="bg-[#f2f3f5e8] overflow-hidden">
          <div className="flex flex-col lg:flex-row">

              {/* LeftSide box*/}
              <div className="max-w-[1100px] w-full h-screen p-4 bg-white">

                {/* Image Upload */}
                <div className=" flex justify-between items-center gap-3 w-full max-h-[180px] h-full pb-4">
                    {
                       imageURL ? <img src={imageURL} className="w-[200px] h-[200px] object-contain"/> : (
                          <>
                            <div onClick={()=>document.getElementById("upload_img").click()} className="max-w-[200px] cursor-pointer flex flex-col text-sm gap-3 items-center justify-center w-full h-full border-2 border-dashed border-blue-400 rounded-lg">
                              <Image size={40}/>
                              <p>Upload Logo </p>
                              <input type="file"  onChange={handleImage} hidden id="upload_img" accept="image/*"/>
                            </div>
                          </>
                       )
                    }

                    <div className="max-w-[300px] w-full">
                        <h1 className="font-semibold ">INVOICE</h1>
                        <div className="flex flex-col gap-2">
                          <input type="text" placeholder="Who is this invoice to ?" className="border outline-none p-3 rounded-lg" />
                          <input type="text" placeholder="Who is this invoice to ?" className="border outline-none p-3 rounded-lg" />
                          <h1>Invoice Date: 06 May 2024</h1>

                        </div>
                    </div>

                </div>  
                <hr />

                {/* Content */}
                <div className="pt-4 flex items-center justify-between gap-2 ">
                   <div className="flex flex-col gap-2 w-full">
                      <label>Billing Address</label>
                      <input type="text" placeholder="Who is this invoice to ?" className="border outline-none p-3 rounded-lg w-full" />
                      <label>Billing Address</label>
                      <input type="text" placeholder="Who is this invoice to ?" className="border outline-none p-3 rounded-lg w-full" />
                   </div>


                   <div className="flex flex-col gap-2 w-full">
                      <label>Billing Address</label>
                      <input type="text" placeholder="Who is this invoice to ?" className="border outline-none p-3 rounded-lg w-full" />
                      <label>Billing Address</label>
                      <input type="text" placeholder="Who is this invoice to ?" className="border outline-none p-3 rounded-lg w-full" />
                   </div>

                </div>
                <div className="flex flex-col gap-2 w-full pt-4">
                   <h1>Enter your items</h1>
                   <AddItem />
                </div>

              </div>



              {/* RightSide box*/}
              <div className="h-screen w-fit p-4">
                <h1>right</h1>
              </div>

          </div>
       </div>
    </>
  );
}

export default App;
