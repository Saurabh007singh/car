"use client"
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { homebannerElements } from "@/config/const ";
import axios from "axios";

import { useEffect } from "react";
import { BannerTile } from "@/components/home/admin/bannertile";
import { ServiceBannerTile } from "@/components/home/admin/servicebannertile";
import { BlogBannerTile } from "@/components/home/admin/blogbannertile";



const initialFormData = {
 images:[],
  heading: "",
  subHeading: "",
};



export default function ChangeServiceBanner(){


 const [banners, setBanners] = useState([]);
  const [createProductDialogue, setCreateProductDialogue] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [currentEditedId,setCurrentEditedId]=useState(null);

  const fetchBanners = async () => {
    try {
      const res = await axios.get("/api/blogs/banner");
      setBanners(res.data.data); // assuming your API returns { success, data }
    } catch (err) {
      console.error("Error fetching banners:", err);
    }
  };

  useEffect(() => {
   
  
    fetchBanners();
  }, []);

  const handleDelete=async(id)=>{
    const result=await axios.delete(`/api/blogs/banner/${id}`).then(()=>fetchBanners())
  }

  const onSubmit =async(e)=>{
    e.preventDefault();
   if(currentEditedId !=null){const result = await axios.put(
    `/api/blogs/banner/${currentEditedId}`, // ← Next.js App Router route
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )}else{const result = await axios.post(
          `/api/blogs/banner`, // ← Next.js App Router route
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )}
        
        setCreateProductDialogue(false)
  }

return(<div className="flex flex-col">
<span className="text-lg font-extrabold">You can make changes to home banner from here</span>

<div>

<button className="bg-black text-white p-2 rounded"
          onClick={() => {
            setCreateProductDialogue(true);
            setCurrentEditedId(null)
            setFormData(initialFormData)
          }}
        >
          Add new Banner
        </button>
      <div className="grid gap-2 md:grid-cols-4 lg-grid-cols-4 ">{banners && banners.length>0 ? banners.map((productItems) => (<BlogBannerTile key={productItems._id} product={productItems} setCurrentEditedId={setCurrentEditedId} setFormData={setFormData} setCreateProductDialogue={setCreateProductDialogue} handleDelete={handleDelete}></BlogBannerTile>)):<span>No banner addded</span>}
      </div>
     

        <Sheet
          open={createProductDialogue}
          onOpenChange={() => {
            setCreateProductDialogue(false);
            setCurrentEditedId(null);
            setFormData(initialFormData)
          }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader className="text-lg font-semibold ">
              <SheetTitle>{currentEditedId !=null ? 'Edit Product':'Add New Product'}</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            
            <div className="py-6">
              <CommonForm
                buttonText={currentEditedId !==null ? "EDIT":"ADD"}
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormData}
                formControls={homebannerElements}
              ></CommonForm>
            </div>
          </SheetContent>
        </Sheet>
      
    </div>
</div>
)
}