import React, { useState, useEffect } from "react";
import "./History.css";
import axios from "axios";
import moment from "moment";

const History = () => {
  const [todayPrice, setTodayPrice] = useState({})
  const [yesterdayPrice, setYesterdayPrice] = useState({})
  const [twoDaysPrice, setTwoDaysPrice] = useState({})
  const [threeDaysPrice, setThreeDaysPrice] = useState({})
  const [fourDaysPrice, setFourDaysPrice] = useState({})

  // This function gets the ETH price for a specific timestamp/date. The date is passed in as an argument
  const getETHPrices = (date) => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=" +
        date
    );
  }
  // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
  const getBTCPrices = (date) => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=" +
        date
    );
  }
  // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
  const getLTCPrices = (date) => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=" +
        date
    );
  }

   // This function gets the DOGE price for a specific timestamp/date. The date is passed in as an argument
   const getDOGEPrices = (date) => {
    return axios.get(
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=DOGE&tsyms=USD&ts=" +
        date
    );
  }

  // This function gets the today price
  const getTodayPrice = () => {
    let t = moment().unix()
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required
    axios.all([getETHPrices(t), getBTCPrices(t), getLTCPrices(t), getDOGEPrices(t)])
    .then(axios.spread((eth, btc, ltc, doge) => {
      let f = {
        date: moment.unix(t).format("MMMM Do YYYY"),
        eth: eth?.data?.ETH?.USD.toLocaleString(),
        btc: btc?.data?.BTC?.USD.toLocaleString(),
        ltc: ltc?.data?.LTC?.USD.toLocaleString(),
        doge: doge?.data?.DOGE?.USD.toLocaleString()
      }
      // Set the state of todayprice to the content of the object f
      setTodayPrice(f);
    }));
  }

  // This function gets the prices for the yesterday.
  const getYesterdayPrice = () => {
    // Get yesterday's date in timestamp
    let t = moment().subtract(1, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([getETHPrices(t), getBTCPrices(t), getLTCPrices(t), getDOGEPrices(t)])
    .then(axios.spread((eth, btc, ltc, doge) => {
      let f = {
        date: moment.unix(t).format("MMMM Do YYYY"),
        eth: eth?.data?.ETH?.USD.toLocaleString(),
        btc: btc?.data?.BTC?.USD.toLocaleString(),
        ltc: ltc?.data?.LTC?.USD.toLocaleString(),
        doge: doge?.data?.DOGE?.USD.toLocaleString()
      }
        // Set the state of yesterdayprice to the content of the object f
        setYesterdayPrice(f)
      }));
  }

  // This function gets the prices for the two days ago.
  const getTwoDaysPrice = () => {
    // Get the date for two days ago in timestamp
    let t = moment().subtract(2, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([getETHPrices(t), getBTCPrices(t), getLTCPrices(t), getDOGEPrices(t)])
    .then(axios.spread((eth, btc, ltc, doge) => {
      let f = {
        date: moment.unix(t).format("MMMM Do YYYY"),
        eth: eth?.data?.ETH?.USD.toLocaleString(),
        btc: btc?.data?.BTC?.USD.toLocaleString(),
        ltc: ltc?.data?.LTC?.USD.toLocaleString(),
        doge: doge?.data?.DOGE?.USD.toLocaleString()
      }
        // Set the state of twodaysprice to the content of the object f
        setTwoDaysPrice(f);
      }));
  }

  // This function gets the prices for the three days ago.
  const getThreeDaysPrice = () => {
      // Get the date for three days ago in timestamp
      let t = moment().subtract(3, 'days').unix();
      // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
      axios.all([getETHPrices(t), getBTCPrices(t), getLTCPrices(t), getDOGEPrices(t)])
        .then(axios.spread((eth, btc, ltc, doge) => {
          let f = {
            date: moment.unix(t).format("MMMM Do YYYY"),
            eth: eth?.data?.ETH?.USD.toLocaleString(),
            btc: btc?.data?.BTC?.USD.toLocaleString(),
            ltc: ltc?.data?.LTC?.USD.toLocaleString(),
            doge: doge?.data?.DOGE?.USD.toLocaleString()
          }
            // Set the state of threedaysprice to the content of the object f
            setThreeDaysPrice(f);
          }));
  }
  // This function gets the prices for the four days ago.
  const getFourDaysPrice = () => {
    // Get the date for four days ago in timestamp
    let t = moment().subtract(4, 'days').unix();
    // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
    axios.all([getETHPrices(t), getBTCPrices(t), getLTCPrices(t), getDOGEPrices(t)])
    .then(axios.spread((eth, btc, ltc, doge) => {
      let f = {
        date: moment.unix(t).format("MMMM Do YYYY"),
        eth: eth?.data?.ETH?.USD.toLocaleString(),
        btc: btc?.data?.BTC?.USD.toLocaleString(),
        ltc: ltc?.data?.LTC?.USD.toLocaleString(),
        doge: doge?.data?.DOGE?.USD.toLocaleString()
      }
          // Set the state of fourdaysprice to the content of the object f
          setFourDaysPrice(f);
      }));
  }

    useEffect(() => {
      getTodayPrice();
      getYesterdayPrice();
      getTwoDaysPrice();
      getThreeDaysPrice();
      getFourDaysPrice();
    }, [])

    return (
      <div className="history--section container">
      <h1>Coin History (Past 5 days)</h1>
      <div className="history-section-main-box">
        <div className="history-section-inner-box">
          <h4>{todayPrice?.date}</h4>
          <div className="columns">
            <div className="column">
              <p>1 BTC = ${todayPrice?.btc}</p>
            </div>
            <div className="column">
              <p>1 ETH = ${todayPrice?.eth}</p>
            </div>
            <div className="column">
              <p>1 LTC = ${todayPrice?.ltc}</p>
            </div>
            <div className="column">
              <p>1 DOGE = ${todayPrice?.doge}</p>
            </div>
          </div>
        </div>

        <div className="history-section-inner-box">
          <h4>{yesterdayPrice?.date}</h4>
          <div className="columns">
            <div className="column">
              <p>1 BTC = ${yesterdayPrice?.btc}</p>
            </div>
            <div className="column">
              <p>1 ETH = ${yesterdayPrice?.eth}</p>
            </div>
            <div className="column">
              <p>1 LTC = ${yesterdayPrice?.ltc}</p>
            </div>
            <div className="column">
              <p>1 DOGE = ${yesterdayPrice?.doge}</p>
            </div>
          </div>
        </div>

        <div className="history-section-inner-box">
          <h4>{twoDaysPrice?.date}</h4>
          <div className="columns">
            <div className="column">
              <p>1 BTC = ${twoDaysPrice?.btc}</p>
            </div>
            <div className="column">
              <p>1 ETH = ${twoDaysPrice?.eth}</p>
            </div>
            <div className="column">
              <p>1 LTC = ${twoDaysPrice?.ltc}</p>
            </div>
            <div className="column">
              <p>1 DOGE = ${twoDaysPrice?.doge}</p>
            </div>
          </div>
        </div>

        <div className="history-section-inner-box">
          <h4>{threeDaysPrice?.date}</h4>
          <div className="columns">
            <div className="column">
              <p>1 BTC = ${threeDaysPrice?.btc}</p>
            </div>
            <div className="column">
              <p>1 ETH = ${threeDaysPrice?.eth}</p>
            </div>
            <div className="column">
              <p>1 LTC = ${threeDaysPrice?.ltc}</p>
            </div>
            <div className="column">
              <p>1 DOGE = ${threeDaysPrice?.doge}</p>
            </div>
          </div>
        </div>
          
        <div className="history-section-inner-box">
          <h4>{fourDaysPrice?.date}</h4>
          <div className="columns">
            <div className="column">
                <p>1 BTC = ${fourDaysPrice?.btc}</p>
            </div>
            <div className="column">
                <p>1 ETH = ${fourDaysPrice?.eth}</p>
            </div>
            <div className="column">
                <p>1 LTC = ${fourDaysPrice?.ltc}</p>
            </div>
            <div className="column">
              <p>1 DOGE = ${fourDaysPrice?.doge}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

export default History;
