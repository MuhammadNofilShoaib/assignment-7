import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center overflow-hidden pb-[30px] px-[20px] md:px-[40px] xl:px-[160px]">
                <div className="font-[500] text-[15px] md:text-[21px] leading-[25.2px] text-[#2429AF]">Mehmet Akif Karasu ⏤ 2020</div>
                <div className="flex justify-center items-center gap-[40px] font-[500] text-[15px] md:text-[21px] leading-[25.2px] text-[#181717]">
                    <Link href="/">Artstation</Link>
                    <Link href="/">Linkedin</Link>
                    <Link href="/">Twitter</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
