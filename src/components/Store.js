import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.id}`).then(product => {
      this.setState({
        product: product.data[this.props.match.params.id-1]
      })
    })
  }
  render() {
    const {product} = this.state;
    return(
      <div>
      <h1>{product.name}</h1>
      <p>{`$${product.price}`}</p>
      <p>{`${product.description}`}</p>
      <Link to="/storelanding" ><button>Back to Store</button></Link>
     </div>
    )
  }
}