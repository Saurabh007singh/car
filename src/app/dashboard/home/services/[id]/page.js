"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function SingleHomeBanner() {
  const { id } = useParams(); // bannerId
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
    setStatusMessage(""); // reset status
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    const formData = new FormData();
    formData.append("serviceId", id);
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      setUploading(true);
      const res = await axios.post(`/api/upload/home/services/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatusMessage("Images uploaded successfully ✅");
      console.log("Upload response:", res.data);
      setSelectedFiles([]); // clear after success
    } catch (err) {
      console.error("Upload error:", err);
      setStatusMessage("Something went wrong ❌");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow rounded w-full">
      <h2 className="text-xl font-semibold mb-4">Upload Home Banner Images</h2>
      <span>Upload instructions
        you can add upto 2 images only<br></br> 
        rename the images card image as 1 and icon image as 2<br></br> 
       .first card image shoud be  of size  312x334px<br></br>
       .second icon image should be of size 256x256px <br></br> 
        {/* 3.2nd image should be a bigger image of card or any other image this image is for video preview size 1320X616px<br></br>  */}
       
      
      </span>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Images (max 2):
        </label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-black file:text-white file:rounded hover:file:bg-gray-800"
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="mb-4 grid grid-cols-3 gap-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="rounded border p-1">
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                className="object-cover w-full h-24 rounded"
              />
              <p className="text-xs text-center mt-1">{file.name}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0}
        className={`w-full py-2 px-4 rounded text-white ${
          uploading || selectedFiles.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-gray-800"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Images"}
      </button>

      {statusMessage && (
        <p className="mt-4 text-sm text-center text-green-600">{statusMessage}</p>
      )}
    </div>
  );
}
