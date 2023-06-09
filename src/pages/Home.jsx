import React from 'react'
import HomeCard from '../components/HomeCard'
import Filter from '../components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import homeAction from '../redux/actions/HomeData'


const Home = () => {
  const dispatch = useDispatch();
  const {getVideos} = useSelector(state=>state.getVideos)

  useEffect(()=>{
    dispatch(homeAction('new'))
  },[dispatch])

  console.log("getVideos",getVideos)
  return (
    <div className='m-3'>
      <Filter/>
      <div className='flex flex-wrap m-2'>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      </div>
      
      
    </div>
  )
}

export default Home