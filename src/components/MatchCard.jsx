import React from 'react'
import dog from '../assets/images/dog1.png'

export default function MatchCard() {
  return (
    <div className='p-5 shadow bg-white w-fit'>
        <div>
            <img src={dog} alt="" className='h-80 w-80'/>
        </div>
        <div>Name: Bruno</div>
        <div>Age: 2</div>
        <div>Breed: Golden Retriever</div>
    </div>
  )
}
