import { Route, Routes } from "react-router-dom";
import UAParser from "ua-parser-js"
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  let { browser, cpu, engine, os, ua } = UAParser()


  let [getIP, SetgetIP] = useState([])

  let getData = async () => {
    try {
      let sendPost = await axios.get('https://api.ipify.org?format=json')

      setTimeout(async () => {
        let sendget = await axios.get(`https://ipapi.co/${sendPost.data.ip}/json/`)
        SetgetIP(sendget.data)
      }, 200);


    } catch (error) {
      console.log(error);
    }
  }
  console.log(getIP);
  useEffect(() => {
    getData()
  }, [])



  return (
    <div className="max-w-[1700px] m-[auto] bg h-[auto] p-[100px]">
      <h1 className="text-[58px] font-bold  text-center pt-11 text-[#fff]">
        Browser-Info
      </h1>

      <div className="flex items-center justify-center pt-[30px]">
        <div className="border border-white p-[23px] w-full">

          <p className="opacity-[0.7] mt-3">Browser-name:</p>
          <h1 className="font-semibold text-[22px] border-b">{browser.name}</h1>

          <p className="opacity-[0.7] mt-3">Browser-version:</p>
          <h1 className="font-semibold text-[22px] border-b">{browser.version}</h1>

          <p className="opacity-[0.7] mt-3">Browser-major:</p>
          <h1 className="font-semibold text-[22px] border-b">{browser.major}</h1>

          <p className="opacity-[0.7] mt-3">cpu:</p>
          <h1 className="font-semibold text-[22px] border-b">{cpu.architecture}</h1>

          <p className="opacity-[0.7] mt-3">engine:</p>
          <h1 className="font-semibold text-[22px] border-b">{engine.name + " " + engine.version}</h1>

          <p className="opacity-[0.7] mt-3">cpu:</p>
          <h1 className="font-semibold text-[22px] border-b">{os.name + " " + os.version}</h1>

          <p className="opacity-[0.7] mt-3">ua:</p>
          <h1 className="font-semibold text-[22px] border-b">{ua}</h1>

        </div>





      </div>
      <h1 className="text-[58px] font-bold  text-center pt-11 text-[#fff]">
        IP-Info
      </h1>




      <div className="flex items-center justify-center pt-[30px]">
        <div className="border border-white p-[23px] w-full">
        <p className="opacity-[0.7] mt-3">IP</p>
        <h1 className="font-semibold text-[22px] border-b">{getIP.ip}</h1>

          <p className="opacity-[0.7] mt-3">ASN</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.asn}</h1>

          <p className="opacity-[0.7] mt-3">CITY</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.city}</h1>


          <p className="opacity-[0.7] mt-3">CONTINET-CODE</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.continent_code
          }</h1>


          <p className="opacity-[0.7] mt-3">COUNTRY</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.country_name}</h1>

          <p className="opacity-[0.7] mt-3">COUNTRY-AREA</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.country_area}</h1>

          <p className="opacity-[0.7] mt-3">COUNTRY-CALLING-CODE</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.country_calling_code}</h1>

          <p className="opacity-[0.7] mt-3">COUNTRY-POPULATION</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.country_population}</h1>

          <p className="opacity-[0.7] mt-3">CURRENCY</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.currency}</h1>

          <p className="opacity-[0.7] mt-3">CURRENCY-NAME</p>
          <h1 className="font-semibold text-[22px] border-b">{getIP.currency_name
          }</h1>

<p className="opacity-[0.7] mt-3">LANGUAGES</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.languages}</h1>

<p className="opacity-[0.7] mt-3">LATITUDE</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.latitude}</h1>

<p className="opacity-[0.7] mt-3">LONGTITUDE</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.longitude}</h1>

<p className="opacity-[0.7] mt-3">NETWORK</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.network}</h1>

<p className="opacity-[0.7] mt-3">ORG</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.org}</h1>

<p className="opacity-[0.7] mt-3">UTC</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.utc_offset}</h1>

<p className="opacity-[0.7] mt-3">IP-VERSION</p>
<h1 className="font-semibold text-[22px] border-b">{getIP.version}</h1>

        </div>





      </div>














    </div>
  )
}

export default App
