import React, { Component } from 'react'
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
      const cartInfo = [
          {itemName: "Laptop", price: 80000},
          {itemName: "TV", price: 120000},
          {itemName: "Washing Machine", price: 50000},
          {itemName: "Mobile", price: 30000},
          {itemName: "Fridge", price: 70000}
      ];
    return (
      <div>
          <h1>Item Ordered: </h1>
          <Cart item={cartInfo}/>
      </div>
    )
  }
}

export default OnlineShopping;