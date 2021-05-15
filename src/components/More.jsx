import React, { useEffect, useState } from "react";
import "./More.css";
import axios from "axios";

const MoreCoins = () => {
  const [coins, setCoins] = useState([])

   // This is called when an instance of a component is being created and inserted into the DOM
  const getCoins = async () => {
    try{
      const returnedData = await axios.get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DOGE,XRP,BCH,XLM,EOS,ADA,XMR,UDST,TRX,ADA,DOT,EOS,BNB,LINK,TRX,BTT,ALGO,USDC,&tsyms=USD"
      )
      const currencyArray = Object.entries(returnedData.data)
      setCoins(currencyArray)
      setTimeout(() => {console.log(currencyArray)}, 0)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getCoins()
  }, [])

  const searchFunc = () => {
    let value = document.getElementById("search").value.toUpperCase();

    let items = document.getElementsByClassName("filter");
    console.log(items)
    for (let i = 0; i < items.length; i++) {
      let a = items[i].getElementsByClassName("my-card")[0]
      if (a.innerHTML.indexOf(value) > -1) {
        items[i].style.display = ""
      }else{
        items[i].style.display = "none"
      }  
    }
  }

  return (
    <div className="container">
    <input type="text" name="coin_search" onKeyUp={searchFunc} id="search" placeholder="Search by coin abreviation..."/>
      {
        coins?.map(coin => (
          <div className="filter">
            <div className="card my-card">
              <div className="row">
                <div className="col s4 filt-item"><p className="more-currency-name">{coin[0]}</p></div>
                <div className="col s8"><p id="price-col">${coin[1]?.USD.toLocaleString()}</p></div>
              </div>
            </div>
          </div>
        )) 
      }
    </div>
  );
}

export default MoreCoins;
