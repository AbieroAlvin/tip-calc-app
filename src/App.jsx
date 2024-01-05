import { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import Display from "./components/Display";
import Logo from "./assets/images/logo.svg";

function App() {
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");

  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

  const handleReset = () => {
    setTipAmount("0.00");
    setTotalPerPerson("0.00");
    setBillAmount("");
    setTipPercentage(0);
    setCustomTip("");
    setNumOfPeople("");
  };
  return (
    <div className="w-full md:h-screen  mx-auto bg-strongCyan">
      <div className="py-14 flex flex-col items-center gap-6 px-8">
        <div>
          <img src={Logo} alt="/" />
        </div>
        <div className="max-w-[960px] flex md:flex-row flex-col gap-4 px-6 py-6 bg-white rounded-xl">
          <Inputs
            billAmount={billAmount}
            tipPercentage={tipPercentage}
            customTip={customTip}
            numOfPeople={numOfPeople}
            setBillAmount={setBillAmount}
            setTipPercentage={setTipPercentage}
            setCustomTip={setCustomTip}
            setNumOfPeople={setNumOfPeople}
            setTipAmount={setTipAmount}
            setTotalPerPerson={setTotalPerPerson}
          />
          <Display
            tipAmount={tipAmount}
            totalPerPerson={totalPerPerson}
            reset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
