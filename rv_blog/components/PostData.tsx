import React from 'react'
interface IHtmlDataProps{
    htmlData:string;
}
function PostData({htmlData}:IHtmlDataProps) {
    console.log(htmlData)
  return (
    <section className='text-white text-left' dangerouslySetInnerHTML={{ __html: htmlData }}></section>
  )
}

export default PostData