import React from 'react'
import { IAuthorProps } from '../types'
import Image from 'next/image';

function AuthorBox({author}:IAuthorProps) {
  return (
    <div className="text-center w-full  p-8 relative rounded-lg bg-fourth mt-12 mb-12 bg-opacity-20">
    <div className="absolute left-[calc(50%-50px)] top-[-50px] w-[100px] aspect-square overflow-hidden">
      <Image
        alt={author.name}
        fill
        className="align-middle rounded-full"
        src={author.avatar.secure_url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.description}</p>
  </div>
  )
}

export default AuthorBox