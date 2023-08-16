import React, {Component, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import QrReader from "react-qr-scanner";
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
    // const scanned_result_display = useState(false);
    return (
      <div className="parent1">
        <div className="Navbar">
          <div className="logo-head">
            {/* image */}
            image
            {/* heading */}
            <h4>Walmart</h4>
          </div>
          <div className="Hamburger" style={{display: "none"}}>
            <div className="options1" style={{display: "none"}}>
              <ul>
                <li>
                  <Link to="#">Change your location</Link>
                </li>
                <li>
                  <Link to="#">Our Policy</Link>
                </li>
                <li>
                  <Link to="#">News Updates</Link>
                </li>
                <li>
                  <Link to="#">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="options">
            <ul>
              <li>
                <Link to="#">Change your location</Link>
              </li>
              <li>
                <Link to="#">Our Policy</Link>
              </li>
              <li>
                <Link to="#">News Updates</Link>
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
              className="scanner"
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
          <div
            className="scanned-result"
            // style={{
            //   display:
            //     this.state.data && this.state.data.text ? "block" : "none",
            // }}
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
              <div className="quantity">
                Qty: <input className="quantity-field" type="number" />
              </div>
              <button className="add-to-cart">Add to Cart</button>
              <button className="cancel-item">Cancel item</button>
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
          <button className="btn-2">CHECKOUT 🛒</button>
        </div>
      </div>
    );
  }
}

export default QrContainer;
