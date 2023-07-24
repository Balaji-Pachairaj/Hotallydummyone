import React, { useEffect } from 'react'
import StatHeader from '../component/Statistics/StatHeader'
import Chartjs from '../component/Statistics/Chartjs'
import NetProfile from '../component/Statistics/NetProfile'
import { useDispatch } from 'react-redux'
import {gettingDataFromBillingDatabase } from "../store/statistic"
const Statistics = () => {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(gettingDataFromBillingDatabase())
  })
  return (
    <div>
      <StatHeader />   
      <Chartjs /> 
      <NetProfile />  
    </div>
  )
}

export default Statistics
