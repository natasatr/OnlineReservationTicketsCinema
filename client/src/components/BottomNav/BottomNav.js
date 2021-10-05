import './BottomNav.css';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import ikona from "./ikona2.png"


function BottomNav() {
    const [listOfKina, setListOfKina] = useState([]);
    
    useEffect(() => {
      axios.get("http://localhost:3001/kino").then((response) => {
          setListOfKina(response.data);
      });
    }, []);
  
    return (
        <div className="main-footer">
          <div className="footer-containter">
            <div className="row">
    
              <div className="col1">
                <h1>BAAAAAAAAA</h1>
                <ul className="stilkolone1">
                  <li>1</li>
                  <li>1</li>
                  <li>88</li>
                </ul>
              </div>

              <div className="col1">
              <h4>baalala</h4>
                <ul className="stilkolone1">
                  <li>6</li>
                  <li>99</li>
                  <li>1562</li>
                </ul>
              

              </div>
             
            </div>
          </div>
        </div>
        )
}
     
  
  export default BottomNav
