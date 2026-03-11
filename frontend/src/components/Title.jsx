import React from 'react'

function Title({text1, text2}) {
  return (
    <div className="inline-flex flex-col gap-0">
      <span className="text-[35px] md:text-[52px] font-black leading-none tracking-tight">
        <span className="text-white">{text1} </span>
        <span className="text-transparent" style={{WebkitTextStroke: '1.5px #e11d48'}}>{text2}</span>
      </span>
    </div>
  )
}

export default Title