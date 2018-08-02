import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Store from './Store';

class StoreLanding extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/products').then(response => {
      this.setState({
        allProducts: response.data
      })
    })
  }

  render() {
    let storeItems = this.state.allProducts.map((e) => {
      return (
        <div>
          Name: {e.name} <br />
          Price: ${e.price} <br />
          Description: {e.description} <br />
          <Link to={`/store/${e.id}`}><button>{e.name}</button></Link>
        </div>
      )
    })
    if (this.state.allProducts.length > 0) {
      return (
        <div>
          {storeItems}
        </div>
      )
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}

export default StoreLanding;