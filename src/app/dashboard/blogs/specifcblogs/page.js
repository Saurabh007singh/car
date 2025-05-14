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
import {  SpecificBlogElements } from "@/config/const ";
import axios from "axios";

import { useEffect } from "react";
import { SpecificBlogTile } from "@/components/home/admin/specificblogtile";



const initialFormData = {

 images:[],
  bannerHeading: "",
  bannerSubHeading: "",
  author:"",
 views:"",
  mainHeading: "",
  mainSubHeading: "",
  para1:"",
  cardHeading2: "",
  cardSubHeading2: "",
  para2:"",
  cardHeading3: "",
  cardSubHeading3: "",
  para3:"",
  cardHeading4: "",
  cardSubHeading4: "",
  para4:"",
  cardHeading5: "",
  cardSubHeading5: "",
  para5:"",
  vidUrl:""
};



export default function ChangeHomeBanner(){

const [serviceData,setServiceData]=useState([])
 const [banners, setBanners] = useState([]);
  const [createProductDialogue, setCreateProductDialogue] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [currentEditedId,setCurrentEditedId]=useState(null);
const [currAddId,setCurrAddId]=useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
       
        const res = await axios.get("/api/home/blog");
        setBanners(res.data.data); // assuming your API returns { success, data }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
  
    fetchServices();
    const fetchSpecificServices = async () => {
      try {
       
        const res = await axios.get("/api/blogs/specificblog");
        setServiceData(res.data.data); // assuming your API returns { success, data }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
  
    fetchSpecificServices();
  }, []);

  

  const onSubmit =async(e)=>{
    e.preventDefault();
    if(currentEditedId != null){
      const result = await axios.put(
        `/api/blogs/specificblog/${currentEditedId}`, // ← Next.js App Router route
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
          `/api/blogs/specificblog`, // ← Next.js App Router route
          {...formData,id:currAddId},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        setCreateProductDialogue(false)}
      
  }

return(<div className="flex flex-col">
<span className="text-lg font-extrabold">You can make changes to services pages from here</span>

<div>


      <div className="grid gap-2 md:grid-cols-4 lg-grid-cols-4 ">{banners && banners.length>0 ? banners.map((productItems) => (<SpecificBlogTile key={productItems._id} product={productItems} serviceData={serviceData.filter(service=>service.id === productItems._id)}    setCurrentEditedId={setCurrentEditedId} initialFormData={initialFormData} setFormData={setFormData} setCreateProductDialogue={setCreateProductDialogue} setCurrAddId={setCurrAddId}></SpecificBlogTile>)):<span>No services addded</span>}
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
                formControls={SpecificBlogElements}
              ></CommonForm>
            </div>
          </SheetContent>
        </Sheet>
      
    </div>
</div>
)
}