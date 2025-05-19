"use client"

import Link from "next/link"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo, TLU } from "./extension"

export default function BodyLayout() {
  const [ barHidden, setBarHidden ] = useState(true)

  const links = [
    {id: 1, name: 'Nhà', path: 'sdfsdf' },
    {id: 2, name: 'Về chúng tôi', path: 'sdfsdf' },
    {id: 3, name: 'Liên hệ', path: 'sdfsdf' },
  ]

  const barClick = (event) => {
    event.stopPropagation()
    setBarHidden(!barHidden)
  }

  const barClose = () => {
    setBarHidden(true)
    console.log('hi')
  }

  const currentUrl = usePathname();

  useEffect(() => {
    if (!barHidden)
      window.addEventListener('click', barClose)

    return () => {
      window.removeEventListener('click', barClose)
    }
  })

    return (
      <div className="flex flex-col z-50 fixed top-0 border-b w-full justify-center items-center text-xl p-res font-medium bg-cyan-500">
        <Logo />
        {/* <div 
          className={ 
            barHidden ? "hidden md:flex justify-between font-medium text-lg text-gray-700" :
            "absolute bg-white top-14 right-4 items-center rounded-lg shadow-lg bw-white flex flex-col font-normal"
          }>
          { links.map((link) => (
            <Link 
              key={link.id} 
              href={link.path}
              className={(barHidden ? "" : "m-3 mx-6 w-full") 
                + "flex items-center mx-4 hover:text-blue-600 transition"}>
              { link.name }</Link>
          )) }
          <TLU className="hidden md:block" />
        </div>
        <div className="flex items-center md:hidden">
          <i 
            className="cursor-pointer fa-solid fa-bars"
            onClick={ barClick }
          ></i>
          <TLU className="block md:hidden" />
        </div> 
      </div> */}
    </div>
)}