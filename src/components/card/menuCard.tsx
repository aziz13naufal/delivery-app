import React from 'react'

const MenuCard = ({image, title, price}: any) => {
  return (
    <div className="w-[200px] rounded-3xl bg-white overflow-clip flex flex-col shrink-0 smooth-animation border-2 border-white">
      <img src={image} className="w-full h-[150px] object-center pointer-events-none" />
      
      <div className="flex flex-col p-4 gap-2">
        <h1 className="text-base prevent-select text-black/70">{title}</h1>
        <span className="text-xl font-semibold prevent-select text-black/80">{price}</span>
      </div>
      
    </div>
  )
}

export default MenuCard