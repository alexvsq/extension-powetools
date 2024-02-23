import React, { useState, useEffect } from 'react';


export default function ClearCopy() {
  const [inputTextClean, setInputTextClean] = useState("");
  const [inputTextDelete, setInputTextDelete] = useState("");
  const [inputTextDeleteText, setInputTextDeleteText] = useState("");

  const copyText = async () => {
    try {

      navigator.clipboard.writeText(inputTextClean)
    } catch (error) {
      console.error("Error copyText:", error);
    }
  }

  const replace = async () => {
    try {

      const newText = inputTextDeleteText.replaceAll(inputTextDelete, "");
      navigator.clipboard.writeText(newText);
      setInputTextDelete('')
    } catch (error) {
      console.log(error);
    }
  }


  //navigator.clipboard.writeText(color.sRGBHex)

  return (
    <>
      <div className=' flex flex-col gap-3 '>
        <p>Clean Copy</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          copyText();
        }}>
          <div className=' border border-[#222222] rounded-[10px] '>
            <input
              type="text"
              // maxLength={20}
              className=' bg-transparent focus:outline-none h-full py-2 px-3 w-full'
              placeholder='copy here the text'
              minLength={1}
              value={inputTextClean}
              required
              onChange={(e) => setInputTextClean(e.target.value)}
            />
          </div>
          <div className='flex justify-end my-2'>
            <input
              type="submit"
              value="Clean Text"
              className='px-3 text-white py-2 border border-[#222222] transition rounded-[10px] font-semibold hover:bg-[#00d722]'
            />
          </div>
        </form>
      </div>

      <div className=' flex flex-col gap-3 '>
        <p>Delete characters</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          replace();
        }}>


          <div className=' border border-[#222222] rounded-[10px] mb-2'>
            <input
              type="text"
              //  maxLength={20}
              className=' bg-transparent focus:outline-none h-full py-2 px-3 text-white w-full'
              placeholder='text here'
              minLength={1}
              value={inputTextDeleteText}
              required
              onChange={(e) => setInputTextDeleteText(e.target.value)}
            />
          </div>

          <div className=' border border-[#222222] rounded-[10px] '>
            <input
              type="text"
              //  maxLength={20}
              className=' bg-transparent focus:outline-none h-full py-2 px-3  text-red-400 w-full'
              placeholder='word will elimininated'
              minLength={1}
              value={inputTextDelete}
              required
              onChange={(e) => setInputTextDelete(e.target.value)}
            />
          </div>




          <div className='flex justify-end my-2'>
            <input
              type="submit"
              value="Delete characters"
              className='px-3 text-white py-2 border border-[#222222] transition rounded-[10px] font-semibold hover:bg-[#00d722]'
            />
          </div>

        </form>

      </div>
    </>
  );
}
