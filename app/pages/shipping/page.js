import React from 'react'
import Image from 'next/image'
import Placeholder from '../../assets/images/image.png'

const Shipping = () => {
  return (
    <div>
        <main>
            <div className='flex justify-center my-8'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-3'>
                        <Image 
                            src={Placeholder}
                            width= {160} 
                            height={160} 
                            alt='placholder image' 
                            className=''
                        />
                    </div>
                    <div>
                        <form>
                            <p>Shipping Information</p>
                            <p>We ship within 2 working days</p>
                            <hr/>
                            <p>Full Name</p>
                            <input name='fullname' placeholder='Value'/>
                            <hr/>
                            <p>Location</p>
                            <select name='location'>
                                <option value='Iloilo'>Iloilo</option>
                                <option value='Capiz'>Capiz</option>
                                <option value='Aklan'>Aklan</option>
                                <option value='Antique'>Antique</option>
                            </select>
                            <hr/>
                            <p>Delivery Note</p>
                            <textarea name='deliverynote'/>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Shipping