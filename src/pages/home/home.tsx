import React from 'react'
import MainBanner from "./../../components/mainBanner/mainBanner.tsx"
import SearchInput from "./../../components/input/searchInput.tsx"
import Badge from "./../../components/badge/badge.tsx"
import MenuCard from "./../../components/card/menuCard.tsx"
import MenuCard2 from "./../../components/card/menuCard2.tsx"

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* main banner */}
      <MainBanner />
      
      {/* search */}
      <SearchInput />
      
      {/* category */}
      <div className="flex items-center overflow-x-auto gap-4">
        <Badge status="active">🍣 Sushi</Badge>
        <Badge>🍜 Ramen</Badge>
      </div>
      
      {/* menu */}
      <div className="flex items-start gap-4 overflow-x-auto">
        <MenuCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Nu4wuMtSiDdlO2JgDAD_Ke6BXT_aC4zs_CT_Ts0M-zMn15YpRGvgkg&s=10"
        title="Korean Hotdog Original"
        price="25.000" />
        <MenuCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNZMXgjjtNbEEJcqPl1Gf6mN0qmE3zAUGwefLTw0Cv67XSBqmV8ztgl0&s=10"
        title="Korean Hotdog Jumbo"
        price="25.000" />
        <MenuCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJoH2VdJob0xauAZJwVTW7gXZixZFUcGA1th1O77JvJZswXzEIqJfTA4iB&s=10"
        title="Korean Hotdog Mozarella"
        price="25.000" />
      </div>
      
      {/* popular food */}
      <div className="mt-3 flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-black/80">Popular Food</h1>
        
        <div className="flex flex-col gap-3">
          <MenuCard2
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Nu4wuMtSiDdlO2JgDAD_Ke6BXT_aC4zs_CT_Ts0M-zMn15YpRGvgkg&s=10"
          title="Corndog Original"
          price="12.000"
          />
          <MenuCard2
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Nu4wuMtSiDdlO2JgDAD_Ke6BXT_aC4zs_CT_Ts0M-zMn15YpRGvgkg&s=10"
          title="Corndog Potato"
          price="15.000"
          />
          <MenuCard2
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Nu4wuMtSiDdlO2JgDAD_Ke6BXT_aC4zs_CT_Ts0M-zMn15YpRGvgkg&s=10"
          title="Corndog Mozarella"
          price="15.000"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Home