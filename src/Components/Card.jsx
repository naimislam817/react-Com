import React from 'react';
function Card() {
  
  const data = [
   { image: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Amazon Basics', descriptioon: 'Hello this is a product from Amazon Basics' },
   { image:  'https://images.unsplash.com/photo-1585253068148-fa05bef5d15c?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Daily Objects', descriptioon: 'Hello this is a product from Daily Objects'},  
  { image: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Apple', descriptioon: 'This is a product from Apple' },
  ]
      
  
  return (
   <div className='w-full h-screen flex item-center justify-center gap-10 bg-zinc-200'>
   {data.map((elem , index) => (
     <div key={index} className='w-52 px-3 py-4 bg-zinc-100 rounded-md overflow-hiddenabsolute '> 
    <div className='w-full h-32 bg-zinc-300'>
        <img className='w-full h-ful object-cover' 
        src={elem.image}
         alt="" />
    </div>
    <div className='w-full px-3 py-4'>
        <h2 className='font-semibold'>{elem.name}</h2>
        <p className='text-xs mt-5'>{elem.descriptioon}</p>
    </div>
    </div>
    ))}
   
   </div>

  );
}
export default Card;