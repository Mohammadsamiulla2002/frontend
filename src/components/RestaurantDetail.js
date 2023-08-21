import React from 'react'
import Header from './Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../Styles/Details.css'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function RestaurantDetail() {

let {rName}=useParams()

const[restaurant,setRestaurant]=useState({})

useEffect(() => {
  fetch(`http://localhost:6767/restaurant/details/${rName}`, { method: "GET" })
    .then(response => response.json())
    .then(data =>{setRestaurant(data.data)});
}, []);


const{name,thumb,cost,address,Cuisine}=restaurant

let cuisineList=!(Cuisine==undefined) && Cuisine.length && Cuisine.map((item)=>item.name)


  return (
    <div>
      <Header/>
      <div>
  <img src={thumb} height="400px" width="100%" />
</div>

      <div >
        <h2>{name}</h2>
      </div>
      <div>
      <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <div className='about'>About the place</div>
      <div className='head'>Cuisine</div>
      {cuisineList}
      <div className='head'>Average Cost</div>
      <div className='value'>&#8377; {cost}</div>
    </TabPanel>
    <TabPanel>
     <div className='head'>Phone Number</div>
     <div className='value'>+91-123456789</div>
     <div className='head'>{name}</div>
     <div className='value'>{address}</div>
    </TabPanel>
  </Tabs>
      </div>
    </div>
  )
}
