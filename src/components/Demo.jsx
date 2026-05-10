import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Demo = () => {
  return (
    <div className='bg-[#F5F7FA] py-10 flex justify-center text-center'>
        <div>
            <h3 className='text-[4rem] leading-[1.25] font-semibold text-[#263238]'>Pellentesque suscipit <br />fringilla libero eu.</h3>
        <a className='inline-flex justify-center items-center mt-10 py-3 px-8 bg-[#4CAF4F] text-white rounded-md' href="">Get a Demo <HiOutlineArrowNarrowRight className='ml-2'/></a>
        </div>
    </div>
  )
}

export default Demo