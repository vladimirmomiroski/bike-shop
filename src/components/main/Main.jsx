import React, { Component } from 'react'
import './Main.css'
import Filter from './Filter'
import Cards from './cards/Cards'

export default class Main extends Component {

    state = {
    mainData: [],
    filterData: [],
    }

    componentDidMount() {
        fetch("https://json-project3.herokuapp.com/products")
        .then(res => res.json())
        .then(mainData => {
            this.setState({
                mainData,
                filterData: mainData,
            })
        })
    }

    filteringDataHandler = (e) => {
        const {mainData} = this.state;
        const category = e.currentTarget.parentNode.parentNode.id
        const subC = e.currentTarget.innerText.toUpperCase()
        console.log(category, subC)
         if(category === "all") {
            this.setState({
            filterData: mainData,
            })
         } 
         if(category === "gender") {
           const genderFiltered = mainData.filter(item => item.gender === subC)
           this.setState({
               filterData: genderFiltered,
           })
         }
         if(category === "brand") {
           const brandFiltered = mainData.filter(item => item.brand === subC)
           this.setState({
               filterData: brandFiltered,
           })
         }
    }

    render() {
        const {mainData, filterData} = this.state;
        
        return (
            <div className='center main-content'>
            <Filter data={mainData} onFilter={this.filteringDataHandler}/>
             <Cards  data={filterData}/>
            </div>
        )
    }
}
