import { useRouter,NextRouter } from 'next/router'
import React, { useState } from 'react'
import { ICategoriesProps, ICategory } from '../types'
import Link from 'next/link'

export default function NavBottom({categories}:ICategoriesProps) {
    const router: NextRouter = useRouter();
    const {slug} = router.query;
  return (
    <div className='w-full h-[15%] border-white border-solid border-b-2 mt-4 flex flex-row justify-between'>
        <div className='flex-row flex justify-center items-center gap-x-6 text-white flex-wrap'>
        <Link href="/" className={' hover:text-third '+ `${router.pathname == '/' && 'text-third'}`}>
                    RECENT
                </Link>
        {
            categories.map((cat:ICategory)=>{
                return <Link href={`/category/${cat.slug}`}  key={cat.id} className={' hover:text-third '+ `${(cat.slug==slug)&& 'text-third'}`}>
                    {cat.title.toUpperCase()}
                </Link>
            })
        }
        </div>
        
    </div>
  )
}
