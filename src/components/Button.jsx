import React from 'react'
import { Link } from 'react-router-dom'

function Button({ transparent, text }) {
  return (
    <Link>
      <button className={`py-4 cursor-pointer px-10 rounded-sm border-2 text-lg font-normal transition-all
        ${transparent ? "bg-white text-[#313131] active:opacity-75 border-white hover:bg-[#49ad09] hover:border-[#49ad09] hover:text-white" : "bg-[#49ad09] active:bg-[#49ad09] active:text-white text-white active:opacity-75 border-white hover:bg-white hover:border-[#49ad09] hover:text-[#49ad09]"}
        `}>
        {text}
      </button>
    </Link>
  )
}

export default Button