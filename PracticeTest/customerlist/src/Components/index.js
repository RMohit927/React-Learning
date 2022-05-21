import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [counter, setCounter] = useState(0);

  const addCustomerHandler = (event) => {
    if (customerName.trim().length === 0) {
      return;
    }
    setCustomerList((prevCustList) => {
      return [
        ...prevCustList,
        { name: customerName, id: `list-item${counter}` },
      ];
    });
    setCounter(counter + 1);
    setCustomerName("");
  };

  const customerNameChangeHandler = (event) => {
    setCustomerName(event.target.value);
  };

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          onChange={customerNameChangeHandler}
          placeholder="Name"
          value={customerName}
          data-testid="app-input"
        />
        <button
          type="submit"
          className="ml-30 btn btn-success"
          data-testid="submit-button"
          onClick={addCustomerHandler}
        >
          Add Customer
        </button>
      </section>

      <List customerList={customerList} />
    </div>
  );
}

const List = ({ customerList }) => {
  if (customerList.length === 0) {
    return <ul></ul>;
  } else {
    return (
      <ul className="styled mt-50" data-testid="customer-list">
        {customerList.map((customer) => (
          <li
            className="slide-up-fade-in"
            data-testid={customer.id}
            key={customer.id}
          >
            {customer.name}
          </li>
        ))}
      </ul>
    );
  }
};

export default CustomerList;
