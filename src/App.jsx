import Header from "./components/Header"
import Result from "./components/Result";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 0,
    annualInvestment : 0,
    expectedReturn : 0,
    duration : 1,
})

function handleChange(inputIdentifier, newValue){
  setUserInput( prevUserInput=>{
      return {
          ... prevUserInput, [inputIdentifier]: +newValue
      }
  })
}
  return (<>
    <Header/>
    <UserInput PuserInput = {userInput} PonChange = {handleChange} />
    <Result Pinput = {userInput} />
  </>
    
  )
}

export default App
