import React, { useState, useEffect } from 'react'


export default function Meme() {
  const [memeImage,setMemeImage]=useState(
    {
    randomImage:"http://i.imgflip.com/1bij.jpg",
    topText:"",
    bottomText:""

  }
);
  const [allMemeIamges,setAllMemeImages]=useState([]);

    function handleOnclick(){
        const randomNumber=Math.floor(Math.random() * allMemeIamges.length);
        const url=allMemeIamges[randomNumber].url;
        setMemeImage((previmg)=>{
          return {
            ...previmg,
            randomImage:url
          }
        });
       
    }

    function handleChnge( event){
      const {name,value}=event.target;
      setMemeImage((prevData) => ({
        ...prevData,  
        [name]: value  
      }));
    }

    useEffect(
      function(){
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(data=>setAllMemeImages(data.data.memes))
    },[])
  

  return (
    <div className='meme'>
      <pre>{JSON.stringify(setMemeImage,null,2)}</pre>
        <main className='main'>
        <input className='input1' value={memeImage.topText} name='topText' onChange={handleChnge} type='text' placeholder='Top text'></input>
      <input className='input2' type='text' value={memeImage.bottomText} name='bottomText' onChange={handleChnge} placeholder='Bottom text'></input>
        </main>
        <button onClick={handleOnclick}>Get a new meme image  🖼</button>
        <div className='me'>
            <img 
            src={memeImage.randomImage} 
            className='memeimg' alt=''
            />
            <h1 className='top'>{memeImage.topText}</h1>
            <h1 className='bottom'>{memeImage.bottomText}</h1>
        </div >
       
    </div>
  )
}
