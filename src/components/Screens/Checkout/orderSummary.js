import './orderSummary.css';
import Coupon from "../../../assets/checkout/coupon.png";
import Edit from "../../../assets/checkout/edit.svg";
import Transit from "../../../assets/checkout/transit.png"

function App() {
  return (
    <div className="checkout__app">
      <h3>Order summary</h3>
      <div className="item">
        <div className="checkout__item">
          <img
            src="https://images.unsplash.com/photo-1591348278999-ee1d0c06ed7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3N8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="item pic"
          />
          <div className="name__vendor">
            <p>
              Your Name Customized Leather Ladies Wallet
              <span className="quantity"> x1</span>
            </p>
            <p className="vendor">Vendor: </p>
          </div>
          <p className="price">₹199.00</p>
        </div>
      </div>

      <div className="edit">
        <div className="checkout__edit">
          <div className="edit__item">
            <img src={Edit} alt="note" />
            <p>Note</p>
          </div>
          <div className="vertical__line"></div>
          <div className="edit__item">
            <img src={Transit} alt="shipping" />
            <p>Shipping</p>
          </div>
          <div className="vertical__line"></div>
          <div className="edit__item">
            <img src={Coupon} alt="coupon" />
            <p>Coupon</p>
          </div>
        </div>
      </div>

      <div className="amt">
        <div className="subtotal">
          <p>Subtotal</p>
          <div className="subtotal__amt">₹199.00</div>
        </div>
      </div>
      <div className="amt">
        <div className="shipping">
          <p>Shipping</p>
          <div className="rate__amt">Flat rate: ₹60.00</div>
        </div>
      </div>
      <div className="total">
        <p>Total</p>
        <div className="total__amt">₹259.00</div>
      </div>
    </div>
  );
}

export default App;
