import React, {Component} from "react";
import {Link} from "react-router-dom";
import QrReader from "react-qr-scanner";
import walmart1 from "../images/walmart.png";
import robo from "../images/chatbot-logo.png";
import HamburgerMenu from "./Hamburger"
// import menu from "../../public/";
import "./service.css";

class QrContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      result: "Hold QR Code Steady and Clear to Scan",
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleScan(result) {
    if (!this.state.data) {
      this.setState({
        data: result,
      });
    }
  }

  handleError(err) {
    console.error(err);
  }
  

  render() {
    return (
      <div className="parent1">
        <div className="Navbar">
          <div className="logo-head">
            {/* image */}
            <img src={walmart1} alt="walmart-logo" />
            {/* heading */}
            {/* <h4>Walmart</h4> */}
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
                <Link to="/chatbot">Chat with <img src={robo} alt="chatbot" /> </Link>
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
            }}
          >
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
              <button className="add-to-cart">Add to Cart</button>
              <button className="cancel-item">Cancel item</button>
              </div>

            </div>
          </div>

          <div className="list">
            <ul>
              <li>
                item-1 <button className="del">x</button>
              </li>
              <li>
                item-2 <button className="del">x</button>
              </li>
              <li>
                item-3 <button className="del">x</button>
              </li>
              <li>
                item-4 <button className="del">x</button>
              </li>
              <li>
                item-5 <button className="del">x</button>
              </li>
            </ul>
          </div>
           <div className="final">
            <div className="amounting">
              <span className="text-amt">Net $</span> 
              <span className="amount">100.00</span>
            </div>
          <button className="btn-2">CHECKOUT 🛒</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QrContainer;
