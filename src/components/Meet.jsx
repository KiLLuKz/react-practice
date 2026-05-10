import React from 'react'
import Tim from '../assets/img/tim-smith.png'
import clientImgLogo01 from '../assets/img/clients/client-01.png'
import clientImgLogo02 from '../assets/img/clients/client-02.png'
import clientImgLogo03 from '../assets/img/clients/client-03.png'
import clientImgLogo04 from '../assets/img/clients/client-04.png'
import clientImgLogo05 from '../assets/img/clients/client-05.png'
import clientImgLogo06 from '../assets/img/clients/client-06.png'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Meet = () => {
  return (
    <div className='bg-[#F5F7FA] py-10'>
        <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={Tim} alt="" />
            </div>
            <div>
                <p className='text-[#717171] my-5'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h3 className='mt-5 md:mt-0 text-[1.25rem] font-semibold text-[#4CAF4F]'>Tim Smith</h3>
                <p className='text-[#89939E]'>British Dragon Boat Racing Association</p>
                <ul className='flex flex-col items-center md:flex-row md:justify-between mt-10'>
                    <li><img src={clientImgLogo01} alt="" /></li>
                    <li><img src={clientImgLogo02} alt="" /></li>
                    <li><img src={clientImgLogo03} alt="" /></li>
                    <li><img src={clientImgLogo04} alt="" /></li>
                    <li><img src={clientImgLogo05} alt="" /></li>
                    <li><img src={clientImgLogo06} alt="" /></li>
                    <li><a href="" className='text-[#4CAF4F] flex items-center font-bold '>Meet all customers <HiOutlineArrowNarrowRight className='ml-1'/> </a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Meet