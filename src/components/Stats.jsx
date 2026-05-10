import React from 'react'
import icon04 from '../assets/img/icon-04.png'
import icon05 from '../assets/img/icon-05.png'
import icon06 from '../assets/img/icon-06.png'
import icon07 from '../assets/img/icon-07.png'

const Stats = () => {
  return (
    <div className='bg-[#F5F7FA] py-10 px-5 md:px-0'>
        <div className='container mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h3 className='text-[2.25rem] font-semibold text-[#4D4D4D] leading-[1.25]'>Helping a local<br /><span className='text-[#4CAF4F]'>business reinvent itself</span></h3>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 text-center md:text-left'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <img className='m-5'  src={icon04} alt="" />
                        <div>
                            <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold' >2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center'>
                        <img className='m-5'  src={icon05} alt="" />
                        <div>
                            <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold' >46,328</h4>
                            <p>Clubs</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center'>
                        <img className='m-5'  src={icon06} alt="" />
                        <div>
                            <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold' >828,867</h4>
                            <p>Event Bookings</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center'>
                        <img className='m-5' src={icon07} alt="" />
                        <div>
                            <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold' >1,926,436</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats