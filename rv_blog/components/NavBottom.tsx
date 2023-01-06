import { useRouter,NextRouter } from 'next/router'
import React from 'react'
import { ICategoriesProps, ICategory } from '../types'
import Link from 'next/link'

export default function NavBottom({categories}:ICategoriesProps) {
    const router: NextRouter = useRouter();
    

  return (
    <div className='w-full h-1/10 border-white border-solid border-b-2 mt-4 hidden md:flex flex-row justify-between'>
        <div className='flex-row flex justify-start items-center gap-x-6'>
        {
            categories.map((cat:ICategory)=>{
                return <Link href={`/category/${cat.slug}`}  key={cat.id} className='text-white hover:text-third'>
                    {cat.title}
                </Link>
            })
        }
        </div>
        <div className="flex items-center">
                <svg
                    className="h-4 fill-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input 
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1 bg-primary text-white"
                />
            </div>
    </div>
  )
}
