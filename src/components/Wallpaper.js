import React, { Component } from 'react'
import homepage from '../Assets/homepageimg.png'
import '../Styles/Wallpaper.css'
import {Link} from 'react-router-dom'

export default class Wallpaper extends Component {

    constructor(){
        super();
        this.state={
            locations:[],
            restaurants:[]
        }
        console.log("Wallpaper constructor is called")
    }

    fetchRestaurants = (event) => {
        fetch(`http://localhost:6767/restaurant/${event.target.value}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => this.setState({ restaurants: data.data }))
            .catch(error => console.error('Error fetching data:', error));
    }
    
    static getDerivedStateFromProps(props,state){
        // console.log("get derived statee from props is called")
        return{}
    }
    shouldComponentUpdate(){
        return true
    }
    // getSnapshotBeforeUpdate(prevProps,prevState){
    //     // console.log(`get snap shot before update is called with previous props ${prevProps} and previous state ${prevState.locations}`)
    // }
    componentDidUpdate(){
        // console.log("Wallpapaper component did update is called")
    }
    componentDidMount(){
        // console.log("wallpaper componenet did mount is called")

        fetch('http://localhost:6767/location',{method:'GET'}).
        then(response=>response.json()).
        then(data=>this.setState({locations:data.data}))
        .catch(error => console.error('Error fetching data:', error));
    }
  render() {
    // console.log("render from wallpaper is called")
    let locationOptions=this.state.locations.length && this.state.locations.map(
        (item)=>
    <option key={item.name} value={item.city_id}>{item.name}</option>)
    let restaurantsList=this.state.restaurants.length &&<ul>
        {
            this.state.restaurants.map((item)=>
            <li key={item.name}>
                <Link to={`/details/${item.name}`}>
                {item.name}
                </Link>
                
            </li>)
        }
    </ul>
    return (
        
      <div>
                <div>
                <img src={homepage} width='100%' height='450' />

                <div className="logo">
                    e!
                </div>
                <div className="headings">
                    Find the best restaurants, cafes, bars 
                        </div>
                <div className="locationSelector">
                    <select className="locationDropdown" onChange={this.fetchRestaurants}>
                       <option value="0">Select</option>
                       {locationOptions}
                    </select>
                    <div id="notebooks" >
                        <input className="restaurantsinput" type="text" placeholder="Search Restaurant" />
                        {restaurantsList}
                    </div>
                   
                </div>
            </div >
        </div>
    )
  }
}


