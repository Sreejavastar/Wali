import React, {Component} from "react";
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
    return (
      <div className="parent1">
        <div className="Navbar">
          <div className="logo-head">
            {/* image */}
            image
            {/* heading */}
            <h4>Walmart</h4>
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
              // delay={1000}
              className="scanner"
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
          <div className="scanned-result">
            Scanned Result: {this.state.data && <p>{this.state.data.text}</p>}
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
