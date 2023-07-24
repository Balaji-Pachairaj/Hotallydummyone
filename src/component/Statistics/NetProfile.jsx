import React from 'react'
import { Card } from 'react-bootstrap'
import "./NetProfile.css";


const NetProfile = () => {
  return (
    <div className='w-100 d-flex justify-content-center mb-5 mt-5'>
      <Card className='netProfileCard'>
        <div className='netHeader pt-2'>
            <Card.Title>02 Jan 2023</Card.Title>
        </div>
        <hr className='m-0' />
        <div className='w-100 p-3'>
            <div className='d-flex justify-content-between'> 
                <p className='fs-2 text-end'>Net cost</p>
                <p className='fs-2 text-center'>:</p>
                <p className='fs-2 text-center'>9089</p>
            </div>
            <div className='d-flex justify-content-between'> 
                <p className='fs-2 text-end'>Revenue</p>
                <p className='fs-2 text-center'>:</p>
                <p className='fs-2 text-center'>9089</p>
            </div>
            <div className='d-flex justify-content-between'> 
                <p className='fs-2 text-end'>Net Profile</p>
                <p className='fs-2 text-center'>:</p>
                <p className='fs-2 text-center'>9089</p>
            </div>
        </div>
      </Card>
    </div>
  )
}

export default NetProfile
