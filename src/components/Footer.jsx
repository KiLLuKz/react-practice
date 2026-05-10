import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa6'
import logoWhite from '../assets/img/logo-white.png'

const Footer = () => {
  return (
    <div className='bg-[#263238] py-20'>
        <div className='container mx-auto max-w-[1320px]'>
            <div  className='grid grid-cols-1 m-10 md:m-0 md:grid-cols-2'> 
                <div>
                    <img src={logoWhite} alt="" />
                    <p className='my-10 text-[#F5F7FA]'>Copyright © 2020 Landify UI <br />All rights reserved</p>

                    <ul className='flex md:flex-row'>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href=""><FaInstagram/></a></li>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href=""><FaDribbble/></a></li>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href=""><FaTwitter/></a></li>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href=""><FaYoutube/></a></li>
                    </ul>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <h4 className=' text-white font-semibold text-[1.25rem]'>Company</h4>
                        <ul className='flex flex-col mb-5'>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem]' href="">About us</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem]' href="">Blog</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem]' href="">Contact Us</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem]' href="">Pricing</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem]' href="">Testmonials</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className=' text-white font-semibold text-[1.25rem]'>Support</h4>
                        <ul className='flex flex-col mb-5'>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem] ' href="">Help Center</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem] ' href="">Term of service</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem] ' href="">Legal</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem] ' href="">Privacy policy</a></li>
                            <li className='mt-2'><a className='text-[#F5F7FA] text-[0.875rem] ' href="">Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className=' text-white font-semibold text-[1.25rem]'>Stay up to date</h4>
                        <form action="" className='flex mt-5'>
                            <div className='relative'>
                                <input className='bg-white/20 text-[white] text-[0.875rem] px-4 py-2 rounded-md' type="text" placeholder='Your email address'/>
                                <button className='absolute top-[10px] right-[10px] cursor-pointer' type='submit'> <FaRegPaperPlane className='text-white'/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer