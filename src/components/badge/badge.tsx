import React from 'react'

const Badge = ({children, status}: any) => {
  return (
    <div className={`w-fit h-fit px-5 py-2 rounded-full prevent-select border-2 border-white ${status == "active" ? "bg-white text-[#b44c51]" : "bg-[#f9f9f9] text-black/50"}`}>{children}</div>
  )
}

export default Badge