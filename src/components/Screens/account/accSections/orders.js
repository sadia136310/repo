import React from 'react'

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders__header">
        <div className="order__col1">Order</div>
        <div className="order__col2">Date</div>
        <div className="order__col3">Status</div>
        <div className="order__col4">Total</div>
        <div className="order__col5">Actions</div>
      </div>
      <div className="orders__item">
        <div className="order__col1">#1727</div>
        <div className="order__col2">December 19, 2022</div>
        <div className="order__col3">Pending payment</div>
        <div className="order__col4">
          <span className="bold">₹788.00</span> for 2 items
        </div>
        <div className="order__col5">
          <button>PAY</button>
          <button>VIEW</button>
          <button>CANCEL</button>
        </div>
      </div>
      <div className="orders__item gray">
        <div className="order__col1">#1521</div>
        <div className="order__col2">November 9, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item">
        <div className="order__col1">#1466</div>
        <div className="order__col2">November 8, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 2 items
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item gray">
        <div className="order__col1">#1457</div>
        <div className="order__col2">November 8, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item">
        <div className="order__col1">#1454</div>
        <div className="order__col2">November 8, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item gray">
        <div className="order__col1">#1451</div>
        <div className="order__col2">November 8, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 items
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item">
        <div className="order__col1">#1450</div>
        <div className="order__col2">November 8, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item gray">
        <div className="order__col1">#1449</div>
        <div className="order__col2">November 8, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item">
        <div className="order__col1">#1443</div>
        <div className="order__col2">November 7, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹0.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <div className="orders__item gray">
        <div className="order__col1">#1441</div>
        <div className="order__col2">November 7, 2022</div>
        <div className="order__col3">Processing</div>
        <div className="order__col4">
          <span className="bold">₹2.00</span> for 1 item
        </div>
        <div className="order__col5">
          <button>VIEW</button>
        </div>
      </div>
      <button>NEXT</button>
    </div>
  );
}

export default Orders
