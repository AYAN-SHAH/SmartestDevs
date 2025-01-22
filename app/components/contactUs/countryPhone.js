"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CountryPhone = () => {

    const [phone, setPhone] = useState('');

    const handlePhoneChange = (value) => {
      setPhone(value);
    };
  
  return (

    <div className="container mt-0">
   
    <PhoneInput
      country={'us'}
      value={phone}
      onChange={handlePhoneChange}
      inputStyle={{
        width: '100%',
        padding: '10px',
      }}
      buttonStyle={{
        padding: '10px',
      }}
      
      dropdownClass={'custom-dropdown'}
    />
   
  </div>

  )
}

export default CountryPhone