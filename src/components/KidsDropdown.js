import React, { useContext } from 'react';
import { AppContext } from '../context/dataProvider';
import { Menu } from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'



const KidsDropdown = () => {

   const value = useContext(AppContext)
   const kids = value.kids
   const setKids = value.setKids
   

   const lis = [
    {name: '0 kids'},
    {name: '1 Kid'},
    {name: '2 Kids'},
    {name: '3 Kids'},
    {name: '4 Kids'}
    
   ]

  return (

      <Menu as='div' className='h-full w-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>{kids}
        <BsChevronDown/>
      </Menu.Button>
      <Menu.Items as="ul" 
      className='bg-white absolute w-full flex flex-col z-40'
       
       >
        {lis.map((li, index) => {
           return <Menu.Items 
           onClick={() => setKids(li.name) }
           className='border-b last-of-type:border-b-0 h-12
           hover:bg-black hover:text-white w-full flex items-center justify-center' 
           key={index} as='li'>{li.name}</Menu.Items>
        })}
      </Menu.Items>
      </Menu>

  )
};

export default KidsDropdown;
