import React from 'react'
import SearchIcon from "./../icon/search.tsx"

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full flex items-center bottom-0 ml-5 opacity-50">
        <SearchIcon />
      </div>
      <input 
        type="text" 
        className="bg-[#f9f9f9] w-full py-4 border-2 border-white rounded-3xl outline-none pl-14 pr-6 text-base"
        placeholder="Cari disini"
        name="" />
    </div>  
  )
}

export default SearchInput