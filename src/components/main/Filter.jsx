import React, { Component } from "react";
import "./Filter.css";

export default class Filter extends Component {
  state = {
    activeData: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  filterSize = (subC, category, array) => {
    const subCategoryLength = array.filter((item) => item[category] === subC);
    return subCategoryLength.length;
  };

  linkActive = (active) => {
    let link = "filter-link ";
    link += active ? "active" : "unactive-link";
    return link;
  };

  badgeActive = (active) => {
    let badge = "badge ";
    badge += active ? "active-badge" : "unactive-badge";
    return badge;
  }

  changeClassHandler = (e) => {
    const {activeData} = this.state;
    const clickedLink = parseInt(e.currentTarget.parentNode.getAttribute("data-id"))
    console.log(clickedLink)
    const filteringActiveData = activeData.map((_, idx) => {
      if(idx === clickedLink) {
        return 1;
      } 
      return 0;
    })
    console.log(filteringActiveData)
    this.setState({
      activeData: filteringActiveData,
    })
    window.scrollTo(0, 0);
  }

  render() {
    const { data, onFilter } = this.props;
    const { activeData } = this.state;
    

    return (
      <div className="filter-wrapper">
        <div className="filter-title">
          <h2>Filter by:</h2>
        </div>
        <div className="all-cards-parent" id="all">
          <div className="show-all" data-id="0">
            <button onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[0])}>
              Show all
            </button>
            <span className={this.badgeActive(activeData[0])} >{data.length}</span>
          </div>
        </div>
        <div id="gender" className="gender">
          <h3 className="title-gender">Gender</h3>
          <div className="show-male space-bottom" data-id="1">
            <button onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[1])} >
              Male
            </button>
            <span className={this.badgeActive(activeData[1])}>
              {this.filterSize("MALE", "gender", data)}
            </span>
          </div>
          <div className="show-female" data-id="2">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[2])}>
              Female
            </button>
            <span className={this.badgeActive(activeData[2])}>
              {this.filterSize("FEMALE", "gender", data)}
            </span>
          </div>
        </div>
        <div id="brand" className="brand" >
          <h3 className="title-brand">Brand</h3>
          <div className="space-bottom" data-id="3">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[3])}>
              LE GRAND BIKES
            </button>
            <span className={this.badgeActive(activeData[3])}>
              {this.filterSize("LE GRAND BIKES", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="4">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[4])}>
              KROSS
            </button>
            <span className={this.badgeActive(activeData[4])}>
              {this.filterSize("KROSS", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="5">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[5])}>
              EXPLORER
            </button>
            <span className={this.badgeActive(activeData[5])}>
              {this.filterSize("EXPLORER", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="6">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[6])}>
              VISITOR
            </button>
            <span className={this.badgeActive(activeData[6])}>
              {this.filterSize("VISITOR", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="7">
            <button onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[7])}>
              PONY
            </button>
            <span className={this.badgeActive(activeData[7])}>
              {this.filterSize("PONY", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="8">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[8])}>
              FORCE
            </button>
            <span className={this.badgeActive(activeData[8])}> 
              {this.filterSize("FORCE", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="9">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[9])}>
              E-BIKES
            </button>
            <span className={this.badgeActive(activeData[9])}>
              {this.filterSize("E-BIKES", "brand", data)}
            </span>
          </div>
          <div className="space-bottom" data-id="10">
            <button  onClick={(e) => {
              onFilter(e);
              this.changeClassHandler(e);
            }} className={this.linkActive(activeData[10])}>
              IDEAL
            </button>
            <span className={this.badgeActive(activeData[10])}>
              {this.filterSize("IDEAL", "brand", data)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
