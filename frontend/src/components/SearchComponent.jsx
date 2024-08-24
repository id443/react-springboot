import React, { Component } from 'react';

export default class SearchComponent extends Component {

    state = { searchString: '' }
 
    handleChange = (e) => {
      this.setState({ searchString:e.target.value });
    }
 
    render() {
 
      var searchItems = this.props.items,
          searchString = this.state.searchString.trim().toLowerCase();
 
      if (searchString.length > 0) {
        searchItems = searchItems.filter(function(i) {
          return i.name.toLowerCase().match( searchString );
        });
      }
 
      return (
        <div>
           <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..."/>
           <ul>
             {searchItems.map(function(i) {
                 return <li>{i.name} <a href={i.url}>{i.url}</a></li>;
             }) } 
           </ul>
        </div>
      );
    }
 }
 