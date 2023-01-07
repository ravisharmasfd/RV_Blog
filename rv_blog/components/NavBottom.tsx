import { useRouter,NextRouter } from 'next/router'
import React, { useState } from 'react'
import { ICategoriesProps, ICategory } from '../types'
import Link from 'next/link'
import SearchBar from './SearchBar';

export default function NavBottom({categories}:ICategoriesProps) {
    const router: NextRouter = useRouter();
    const {slug} = router.query;
  return (
    <div className='w-full h-1/10 border-white border-solid border-b-2 mt-4 hidden md:flex flex-row justify-between'>
        <div className='flex-row flex justify-start items-center gap-x-6 text-white'>
        <Link href="/" className={' hover:text-third '+ `${router.pathname == '/' && 'text-third'}`}>
                    Recent
                </Link>
        {
            categories.map((cat:ICategory)=>{
                return <Link href={`/category/${cat.slug}`}  key={cat.id} className={' hover:text-third '+ `${(cat.slug==slug)&& 'text-third'}`}>
                    {cat.title}
                </Link>
            })
        }
        </div>
        <SearchBar/>
        
    </div>
  )
}
