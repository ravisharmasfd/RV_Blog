import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../BackendApi';
import { ICommentForm } from '../types';
interface IProps{
    slug:string;
}
const CommentBox = ({ slug }:IProps) => {
  const nameRef:any = useRef();
  const emailRef:any = useRef();
  const messageRef:any = useRef();
    
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [commentResult, setCommentResult] = useState<string>("");
  

  const handlePostSubmission = async() => {
    const name = nameRef.current.value as string;
    const email = emailRef.current.value as string;
    const message = messageRef.current.value as string;
    
    if (!name || !email || !message) {
      return;
    }
    const commentObj:ICommentForm = {
      name,
      email,
      message,
      postSlug:slug,
    };
    try {
        await submitComment(commentObj);
        setCommentResult("Comment submitted for review !");
        nameRef.current.value="";
        emailRef.current.value="";
        messageRef.current.value="";
        

    } catch (error) {
      setCommentResult("Error while submitting comment")       
    }
    setShowSuccessMessage(true)
    setTimeout(()=>{setShowSuccessMessage(false)},3500)
};

  return (
    <div className="bg-white/20 shadow-lg rounded-lg p-8 pb-12 mb-8 w-full">
      <h3 className="text-xl text-white mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={messageRef} required  className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" required ref={nameRef}  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" required ref={emailRef}  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="mt-8">
        <button type="button" onClick={handlePostSubmission} className=" hover:bg-third inline-block bg-primary text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-sm float-right font-semibold mt-3 text-third">{commentResult}</span>}
      </div>
    </div>
  );
};

export default CommentBox;
