import React, { useEffect, useState } from "react";
import "./Today.css";
import Axios from "axios";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Today = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([])

  // This is called when an instance of a component is being created and inserted into the DOM

  const getCryptoCurrencies = async() => {
    try{
      const returnedData = await Axios.get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DOGE&tsyms=USD"
      )
      const currencyArray = Object.entries(returnedData.data)
      console.log(currencyArray)
      // we're setting the latest prices in the state to the prices gotten from cryptocurrency
      setCryptoCurrencies(currencyArray)
      setTimeout(() => {console.log(currencyArray)}, 0)
    }catch(error){
      console.log(error)
    }
  } 
    useEffect(() => {
      getCryptoCurrencies()
    }, [])
  return (
    <div className="today--section container">
      <div className="columns today--section--box">
        {
          cryptoCurrencies?.map( currency => (
            <div className="column top-currency-section">
              <h5>$ {currency[1]?.USD.toLocaleString()}</h5>
              <p style={{fontSize: "14px"}}>1 {currency[0]}</p>
            </div>
          ))
        }
      </div>
      <Link style={{ display: "inline-flex", fontSize: "12px", color: "#AA01FA", justifyContent: "center", alignItems: "center" }} to="/more">
        <p style={{ fontWeight: "600", margin: "auto", paddingRight: "10px" }}>View more</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
export default Today;
