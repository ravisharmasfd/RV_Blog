import React, { useState } from 'react'
function Accordian({title,children}:any) {
    const [open , setOpen] =  useState<boolean>(false);
  return (
    <div className='w-full'>
    <button onClick={()=>{setOpen(!open)}}><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <g id="style=stroke"> <g id="arrow-short-down"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.47455 8.21481C4.77525 7.92994 5.24995 7.94277 5.53482 8.24347L11.0829 14.0998C11.576 14.6202 12.4048 14.6202 12.8978 14.0998L18.4459 8.24347C18.7308 7.94277 19.2055 7.92994 19.5062 8.21482C19.8069 8.49969 19.8197 8.97439 19.5348 9.27509L13.9867 15.1314C12.9021 16.2763 11.0787 16.2763 9.99399 15.1314L4.44589 9.27509C4.16102 8.97439 4.17385 8.49969 4.47455 8.21481Z" fill="#000000"></path> </g> </g> </g></svg>
    <span>{title}</span>
    </button>
    <div >{children}</div>
    </div>
  )
}

export default Accordian