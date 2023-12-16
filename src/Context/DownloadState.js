import React, { createContext, useContext, useEffect, useState } from 'react';


const DownloadContext = createContext();
const DownloadContextProvider = ({ children }) => {

  const [downloadData, setDownloadData] = useState();

  useEffect(() => {
  const Localdata= localStorage.getItem("LocalSave")   
  console.log(Localdata)
  setDownloadData(JSON.parse(Localdata))
})

  // const getsingleproduct = async (id)=>{
  //     const json = await axios.get(`${host}/download/${id}`)
  //     console.log(json)
  //       console.log("deleting the note with id" + getsingleproduct._id)
  return (
    <DownloadContext.Provider value={{ setDownloadData, downloadData }}>

      {children}

    </DownloadContext.Provider>
  )
};

export default DownloadContextProvider;

export const useDownloadContext = () => 

useContext(DownloadContext) ;