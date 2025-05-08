import React, { useState } from 'react'

export const AccordionItem = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className="acordion-item border-b border-[#f1f1f1] mb-[25px]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-3 focus:outline-none flex justify-between items-center"
            >
                <h3 className="text-[24px] font-normal">{title}</h3>
                <span className="text-[24px] font-semibold">{isOpen ? '-' : '+'}  </span>
            </button>
            {/* {isOpen && ( */}
            <div className={`transition-all duration-700 ease-in overflow-hidden ${
                isOpen ? 'max-h-96 ' : 'max-h-0'
                }`}
            >
                <div className={`pb-5`}>
                    <p>{content}</p>
                </div>
            </div>
            {/* )} */}
        </div>
    </>
  )
}
