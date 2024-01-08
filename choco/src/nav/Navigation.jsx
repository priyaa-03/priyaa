import React from 'react'

function Navigation() {
  return (
    <>
        
        <div id="sticky-banner" className=" fixed top-0 start-0 z-50 flex bg-pink-50 justify-between w-full ">
  <div className="ml-3">
    <ul className="flex gap-[3rem] h-[5rem]">
      <li className="text-2xl pt-5 ml-[3rem]">Fantasie Fine Chocolates, 1946.</li>
      <li className="pt-5">Home</li>
      <li className="pt-5">About</li>
      <li className="pt-5">Speciality</li>
    </ul>
  </div>

  <div className="mr-3">
    <ul className="flex gap-3 h-[5rem] flex-row-reverse">
      <button className="bg-gray-800 text-gray-50 p-[2rem]">Order</button>
    </ul>
  </div>
</div>



    
    </>
  )
}

export default Navigation