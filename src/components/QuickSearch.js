import React, { Component } from 'react'
import Mealtype from './Mealtype';

export default class QuickSearch extends Component {
    constructor(){
        super();
        this.state={
            mealtypes:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:6767/mealtype', { method: 'GET' }) // Use 'GET' as a string
            .then(response => response.json())
            .then(data => this.setState({ mealtypes: data.data }))
            .catch(error => console.error('Error fetching data:', error));
    }
    
  render() {
    let quickSearchList=this.state.mealtypes.length && this.state.mealtypes.map((item)=><Mealtype item={item}></Mealtype>)
    return (
      <div>
        <div className="quicksearch">
                <p className="quicksearchHeading">
                    Quick Searches
                    </p>
                <p className="quicksearchSubHeading">
                    Discover restaurants by type of meal
                    </p>
                <div className="container-fluid">
                    <div className="row">
                       
                      {quickSearchList}
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}
