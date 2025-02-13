import React from 'react'
import { downArrow } from '../assets';
import { useNavigate } from 'react-router';

const ProofBox = ({ title, value }) => {
const navigate = useNavigate();
function handleDownload(value){
console.log(value);
}

  return (
    <div onClick={()=> handleDownload(value)} className="flex justify-around cursor-pointer bg-[#28282e]  items-center w-[150px]">
      <img className='w-[40px] ml-[10px]' src= {downArrow}  />
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rounded-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default ProofBox