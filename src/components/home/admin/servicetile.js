import { useRouter } from 'next/navigation';

export function ServiceTile({
  product,
  setCurrentEditedId,
  setFormData,
  setCreateProductDialogue,
  handleDelete,
})


{
  
  const router = useRouter();
  return (
    <div className="w-full relative flex flex-col border-4 justify-between max-w-sm mx-auto">
      <div
        className="relative h-[400px] cursor-pointer"
        onClick={() => {
          router.push(`/dashboard/home/services/${product._id}`);
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
            setCurrentEditedId(product?._id);
            setFormData(product);
          }}
        >
          Edit
        </button>
        <button onClick={() => handleDelete(product?._id)}>Delete</button>
      </div>
      
    </div>
  );
}
