import React, {useState} from 'react';

import 'react-datepicker'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { BsCalendar } from "react-icons/bs"
import '../datepicker.css'

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false)

  return  (
  <div className='relative flex items-center justify-end h-full cursor-pointer'>
    <div className='absolute z-10 pr-8'>
      <div>
       <BsCalendar/>
      </div>
    </div>
    <ReactDatePicker 
     className='w-full h-full'
     selected={endDate} 
     placeholderText='Check out'
     onChange={(date) => setEndDate(date)}
    />
  </div>
  )
};

export default CheckOut;
