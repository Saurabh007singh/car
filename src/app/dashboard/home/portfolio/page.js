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
import {  portfolioElements, serviceElements } from "@/config/const ";
import axios from "axios";

import { useEffect } from "react";
import { ServiceTile } from "@/components/home/admin/servicetile";
import { PortfolioTile } from "@/components/home/admin/portfoliotile";



const initialFormData = {
 images:[],
cardHeading: "",
cardSubHeading: "",
};



export default function ChangeHomeBanner(){


 const [banners, setBanners] = useState([]);
  const [createProductDialogue, setCreateProductDialogue] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [currentEditedId,setCurrentEditedId]=useState(null);

  const fetchServices = async () => {
    try {
     
      const res = await axios.get("/api/home/portfolio");
      setBanners(res.data.data); // assuming your API returns { success, data }
    } catch (err) {
      console.error("Error fetching banners:", err);
    }
  };

  useEffect(() => {
   
  
    fetchServices();
  }, []);

  const handleDelete=async(id)=>{
    await axios.delete(`/api/home/portfolio/${id}`).then(()=>fetchServices())
    await axios.delete(`/api/portfolio/specificportfolio/${id}`)
  }

  const onSubmit =async(e)=>{
    e.preventDefault();
    if(currentEditedId != null){
      const result = await axios.put(
        `/api/home/portfolio/${currentEditedId}`, // ← Next.js App Router route
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      setCreateProductDialogue(false)
    }else{ 
       const result = await axios.post(
          `/api/home/portfolio`, // ← Next.js App Router route
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        setCreateProductDialogue(false)}
      
  }

return(<div className="flex flex-col">
<span className="text-lg font-extrabold">You can make changes to portofolio on home page from here</span>

<div>

<button className="bg-black text-white p-2 rounded"
          onClick={() => {
            setCreateProductDialogue(true);
            setCurrentEditedId(null)
            setFormData(initialFormData)
          }}
        >
          Add new Portfolio
        </button>
      <div className="grid gap-2 md:grid-cols-4 lg-grid-cols-4 ">{banners && banners.length>0 ? banners.map((productItems) => (<PortfolioTile key={productItems._id} product={productItems} setCurrentEditedId={setCurrentEditedId} setFormData={setFormData} setCreateProductDialogue={setCreateProductDialogue} handleDelete={handleDelete}></PortfolioTile>)):<span>No portfolio addded</span>}
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
                formControls={portfolioElements}
              ></CommonForm>
            </div>
          </SheetContent>
        </Sheet>
      
    </div>
</div>
)
}