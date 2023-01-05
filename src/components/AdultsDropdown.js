import React, { useContext } from 'react';
import { AppContext } from '../context/dataProvider';
import { Menu } from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'



const AdultsDropdown = () => {

   const value = useContext(AppContext)
   const setAdults = value.setAdults
   const adults =  value.adults


   const lis = [
    {name: '1 Adult'},
    {name: '2 Adults'},
    {name: '3 Adults'},
    {name: '4 Adults'}
    
   ]

  return (

      <Menu as='div' className='h-full w-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>{adults}
        <BsChevronDown/>
      </Menu.Button>
      <Menu.Items as="ul" 
      onClick={() => setAdults}
      className='bg-white absolute w-full flex flex-col z-40'
       
       >
        {lis.map((li, index) => {
           
           return <Menu.Items 
           onClick={() => setAdults(li.name)}
           className='border-b last-of-type:border-b-0 h-12
           hover:bg-black hover:text-white w-full flex items-center justify-center' 
           key={index} as='li'>{li.name}</Menu.Items>
        })}
      </Menu.Items>
      </Menu>

  )
};

export default AdultsDropdown;
