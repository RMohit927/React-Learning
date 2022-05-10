import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.items = this.props.item;
    }
  render() {
    return (
      <table border="1">
          <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {this.items.map((item) => {
              return(
                <tr key={item.itemName}>
                    <td>{item.itemName}</td>
                    <td>{item.price}</td>
                </tr>
              );
          })}
          </tbody>
      </table>
    )
  }
}

