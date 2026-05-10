import React from 'react'
import img02 from '../assets/img/img-02.png'

const How = () => {
  return (
    <div className='py-10'>
        <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
                <img src={img02} alt="" />
            </div>
            <div>
                <h3 className='mt-5 md:mt-0 text-[2.25rem] font-semibold text-[#4D4D4D] leading-[1.25]'>How to design your site footer like<br /> we did</h3>
                <p className='text-[#717171] mt-5'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <a className='inline-flex justify-center items-center mt-10 py-3 px-8 bg-[#4CAF4F] text-white rounded-md' href="">Learn More </a>
            </div>
        </div>
    </div>
  )
}

export default How