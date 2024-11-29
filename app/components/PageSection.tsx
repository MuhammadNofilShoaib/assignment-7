import Link from 'next/link';
import React from 'react'

interface PageSec {
  pageNum: number;
  firstPara: string;
  secondPara?: string;
  linkText: string;
}

function PageSection({ pageNum, firstPara, secondPara, linkText }: PageSec) {
  return (
    <div className="py-[114px] border-b border-black px-[20px] md:px-[40px] overflow-hidden text-center md:text-left">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-[30px] lg:gap-[200px] xl:gap-[300px]'>
        <div className="flex flex-col gap-[150px] w-[340px] h-full md:h-[364.68px] justify-between items-center md:items-baseline">
          <div className="flex flex-col justify-center items-center md:items-start gap-[35px]">
            <h1 className='text-[#181717] font-[500] text-[18px] leading-[21.87px] '>0{pageNum} / PROJECT NAME</h1>
            <h1 className='font-[400] text-[18px] leading-[21.87px] text-[#181717]  mx-[30px] md:mx-auto'>{firstPara}</h1>
            <h1 className="font-[400] text-[14px] leading-[17.01px] text-[#606060]  mx-[30px] md:mx-auto">{secondPara}</h1>
          </div>
          <div className="">
            <Link href="/" className='font-[500] text-[18px] leading-[21.87px] underline underline-offset-4'>{linkText}</Link>
          </div>
        </div>
        <div className="w-[640px] h-[364.68px] bg-[#606060]"></div>
      </div>
    </div>
  )
}

export default PageSection
