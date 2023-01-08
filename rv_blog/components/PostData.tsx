import React from 'react'
interface IHtmlDataProps{
    htmlData:string;
}
function PostData({htmlData}:IHtmlDataProps) {
  return (
    <section className='text-white text-left px-4 w-full' dangerouslySetInnerHTML={{ __html: htmlData }}></section>
  )
}

export default PostData