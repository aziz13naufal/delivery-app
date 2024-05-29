import { useState } from 'react'
import CartIcon from "./../icon/cart.tsx"

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  
  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar)
  }
  
  return (
    <div className="w-full h-16 bg-[#f5f5f5]/30 flex items-center justify-between px-6 fixed top-0 left-0 z-50 backdrop-blur-lg">
      {/* header */}
      <div className="w-6 h-4 flex flex-col justify-between opacity-50 hover:opacity-100 smooth-animation"
      onClick={handleToggleNavbar}>
        <span className="w-[55%] h-[2px] bg-black rounded-full"></span>
        <span className="w-full h-[2px] bg-black rounded-full"></span>
        <span className="w-[75%] h-[2px] bg-black rounded-full"></span>
      </div>
      
      <div>
        <h1 className="text-xl">Explore</h1>
      </div>
      
      <div className="opacity-50 hover:opacity-100 smooth-animation">
        <CartIcon />
      </div>
      
      {/* sidebar */}
     <div className={`absolute w-full h-dvh top-0 left-0 mt-16 flex smooth-animation ${toggleNavbar ? "" : "-ml-[100%]"}`}>
       <div className="w-[80%] bg-[#f5f5f5]"></div>
       <div className="w-[20%] bg-black/20"
       onClick={() => setToggleNavbar(false)}></div>
     </div>
    </div>
  )
}

export default Navbar