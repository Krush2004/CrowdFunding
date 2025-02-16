import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ethers } from 'ethers';
import axios from 'axios'

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader, Uploader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign, address } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: '',
    workProof: ''
  });
  
  const [file, setFile]= useState("");
  const [fileUrl, SetFileUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!address) return;
     else{

       checkIfImage(form.image, async (exists) => {
         if(exists) {
           setIsLoading(true)
           await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
           setIsLoading(false);
           navigate('/home');
         } else {
           alert('Provide valid image URL');
           setForm({ ...form, image: '' });
         }
       })
     }
  }

  const docSubmit = async (e) => {
    e.preventDefault()
    try{
     const fileData = new FormData();
     fileData.append("file",file)
    setIsUploading(true)
     const responseData = await axios({
       method: "post",
       url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
       data: fileData,
       headers: {
       pinata_api_key: "18d90f8a5912026d3d56",
       pinata_secret_api_key: "a5d5eee8014d4c7a88efb34edcbd9f947bbfc8a9760463cc38cece12ca89b5e6 ",
       "Content-Type": "multipart/form-data",
       }
       });
       setIsUploading(false)
       const fileUrl="https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash;
       console.log('Uploaded file URL: ', fileUrl);
       SetFileUrl(fileUrl)
       setForm((prevForm) => ({
         ...prevForm,
         workProof: fileUrl, // Correctly set the file URL in state
      }));
 
    }catch(err){
    console.log(err)
    }
   }

  return (
    <div id='form-container' className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />} {isUploading && <Uploader />}
      <div className="camp-title flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="camp-title font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField 
            labelName="Story *"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
          className="text-black"
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
            className="mb-[0px]"
          />

        
        <FormField 
            labelName="Proof of Work *"
            inputType="file"
            placeholder="Place image URL of your proof of work"
            handleChange={(e)=> {
              setFile(e.target.files[0])
            }}
            className="mb-[0px]"
          />
         <button onClick={docSubmit}
         className='bg-yellow-300 max-w-[100px] py-[10px] rounded-[10px] align-middle ' >IPFS Upload</button>
         
        

          <p className=" bg-red-400 px-4 py-2 flex mt-[20px]
           mb-0  text-center" style={{ display: address ? "none" : "block" }}  >
            ⚠️ Please connect your wallet to create a campaign.</p>

          <div  style={{ cursor: address ? "pointer" : "not-allowed" }} 
           className="flex justify-center items-center mt-[20px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
            />
          </div>
          
      </form>
    </div>
  )
}

export default CreateCampaign