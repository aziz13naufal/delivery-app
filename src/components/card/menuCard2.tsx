import React from 'react'

const MenuCard2 = ({image, price, title}: any) => {
  return (
    <div className="w-full p-4 rounded-3xl bg-white border-2 border-white flex gap-4">
      {/* image */}
      <img src={image} className="bg-zinc-200 w-20 h-20 rounded-2xl object-cover pointer-events-none" />
      
      {/* text */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base prevent-select text-black/70">{title}</h2>
        <span className="text-xl font-semibold prevent-select text-black/80">{price}</span>
      </div>
    </div>
  )
}

export default MenuCard2