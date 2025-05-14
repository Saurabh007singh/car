import { useRouter } from 'next/navigation';

export function SpecificServiceTile({
  product,
  setCurrentEditedId,
  setFormData,
  setCreateProductDialogue,
initialFormData,
setCurrAddId,
serviceData
})


{
 

  const router = useRouter();
  return (
    <div className="w-full relative flex flex-col border-4 justify-between max-w-sm mx-auto">
      <div
        className="relative h-auto cursor-pointer"
        onClick={() => {
          router.push(`/dashboard/services/specificservices/${product._id}`);
        }}
      >
       <div className="flex flex-col justify-between items-center mb-2">
        {
          product.images.length != 0? <><img src={product?.images[0]} alt={"banner"}/>
          <img src={product?.images[1]} alt={"banner"} className="h-10 w-10"/></>:null
        }
        </div>
      </div>
        
    
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            
            setCreateProductDialogue(true);
            setCurrentEditedId(serviceData[0]?._id);
            setFormData(serviceData[0]);
          }} className='bg-black text-white cursor-pointer p-1'
        >
          Edit
        </button>
        {serviceData.length === 0 ? <button className="bg-black text-white p-2 rounded"
          onClick={() => {
            setCreateProductDialogue(true);
            setCurrentEditedId(null)
            setFormData(initialFormData)
            setCurrAddId(product?._id)
          }}
        >
          Add to service
        </button>:null}
        
      </div>
      
    </div>
  );
}
