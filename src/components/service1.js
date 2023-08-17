import React, {Component} from "react";
import {Link} from "react-router-dom";
import QrReader from "react-qr-scanner";
import walmart1 from "../images/walmart.png";
import robo from "../images/chatbot-logo.png";
import HamburgerMenu from "./Hamburger";
import "./service.css";

class QrContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      result: "Hold QR Code Steady and Clear to Scan",
      cartItems: [], // Initialize an empty array for cart items
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.addToCart = this.addToCart.bind(this); // Add a method for adding to cart
    this.removeFromCart = this.removeFromCart.bind(this); // Add a method for removing from cart
  }

  handleScan(result) {
    if (!this.state.data) {
      this.setState({
        data: result,
      });
    }
  }

  handleCancel() {
    this.setState({
      data: null,
      result: "Hold QR Code Steady and Clear to Scan", // Reset the result message
    });
  }

  handleError(err) {
    console.error(err);
  }

  addToCart() {
    const {data, cartItems} = this.state;
    if (data && data.text) {
      const newItem = data.text;
      this.setState({
        cartItems: [...cartItems, newItem], // Add the new item to cart
        data: null, // Clear the scanned data after adding to cart
      });
    }
  }

  removeFromCart(index) {
    const cartItems = [...this.state.cartItems];
    cartItems.splice(index, 1);
    this.setState({cartItems});
  }

  render() {
    return (
      <div className="parent1">
        <div className="Navbar">
          <div className="logo-head">
            <img src={walmart1} alt="walmart-logo" />
          </div>
          <HamburgerMenu />
          <div className="options">
            <ul>
              <li>
                <Link to="/newpage">Change your location</Link>
              </li>
              <li>
                <Link to="#">Our Policy</Link>
              </li>
              <li className="chatter">
                <Link to="/chatbot">
                  Chat with <img src={robo} alt="chatbot" />{" "}
                </Link>
              </li>
              <li>
                <Link to="/productdetector">Product-Detector</Link>
              </li>
              <li>
                <Link to="#">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="first-row">
            <button className="btn-1">Click here to scan</button>
            <button className="selection">Select ✅</button>
          </div>
          <div className="camera-scan">
            <span style={{marginBottom: "9px", fontWeight: "700"}}>
              Hold QR Code Steady and Clear to Scan
            </span>
            <QrReader
              delay={1000}
              className="scanner"
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
          <div
            className="scanned-result"
            style={{
              display:
                this.state.data && this.state.data.text ? "block" : "none",
            }}>
            <div className="scanned-box">
              <p className="scanned-result-heading">Scanned Result:</p>
              <p className="final-results">
                {this.state.data &&
                  this.state.data.text.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>

              <div className="action-scanned">
                <div className="quantity">
                  Qty: <input className="quantity-field" type="number" />
                </div>
                <button className="add-to-cart" onClick={this.addToCart}>
                  Add to Cart
                </button>
                <button className="cancel-item" onClick={this.handleCancel}>
                  Cancel item
                </button>
              </div>
            </div>
          </div>
          <div className="list">
            <span
              style={{
                marginBottom: "9px",
                fontWeight: "700",
                fontSize: "15px",
                color: "black",
              }}>
              Your cart contains
            </span>
            <ol type="1">
              {this.state.cartItems.map((item, index) => (
                <li key={index}>
                  {item}{" "}
                  <button
                    className="del"
                    onClick={() => this.removeFromCart(index)}>
                    x
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="final">
            <div className="amounting">
              <span className="text-amt">Net $</span>
              <span className="amount">100.00</span>
            </div>
            <button className="btn-2">
              <Link to="/transaction">CHECKOUT 🛒</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QrContainer;
