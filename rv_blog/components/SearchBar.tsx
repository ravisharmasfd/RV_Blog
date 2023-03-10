import { NextRouter, useRouter } from 'next/router';
import React, { useState } from 'react'

function SearchBar() {
    const [searchString,setSearchString] = useState('')
    const router: NextRouter = useRouter();
    function handleSearch (e:React.KeyboardEvent){
        if(e.key == "Enter"){
            router.push(`/search/${searchString}`);
        }
    }
  return (
    <div className="flex items-center justify-center flex-row w-4/5 md:2/5 rounded-xl focus-within:border-2 border-solid border-white mt-1 border-2 md:border-0">
                <svg
                    className="h-4 fill-white md:fill-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input
                    onKeyDown={(e)=>handleSearch(e)}
                    value={searchString}
                    onChange={(e)=>{setSearchString(e.target.value)}}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1 bg-secondary md:bg-primary text-white w-3/4"
                />
            </div>
  )
}

export default SearchBar