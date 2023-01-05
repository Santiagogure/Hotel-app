import React, {useState} from 'react';

import 'react-datepicker'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { BsCalendar } from "react-icons/bs"
import '../datepicker.css'

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false)

  return  (
  <div className='relative flex items-center justify-end h-full '>
    <div className='absolute z-10 pr-8'>
      <div>
       <BsCalendar/>
      </div>
    </div>
    <ReactDatePicker 
     className='w-full h-full'
     selected={startDate} 
     placeholderText='Check in'
     onChange={(date) => setStartDate(date)}
    />
  </div>
  )
};

export default CheckIn;
