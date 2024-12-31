import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [exchangeData,setExchangeData] = useState({})
  const [bankData,setBankData] = useState({})

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({income:100});
    },3000)
  },[])

  useEffect(()=>{
    setTimeout(() => {
      setExchangeData({
        return:100
      })
    },1000);
  },[])
  const incomeTax = (bankData.income + exchangeData.returns) *0.3;

  return (
    <div>
       hii there , your income tax are {incomeTax}
    </div>
  )
}

export default App
