import { useEffect, useState } from "react";

const Inputs = ({
  billAmount,
  setBillAmount,
  tipPercentage,
  setTipPercentage,
  customTip,
  setCustomTip,
  numOfPeople,
  setNumOfPeople,
  setTipAmount,
  setTotalPerPerson,
}) => {
  const [billInputError, setBillInputError] = useState(false);
  const [peopleInputError, setPeopleInputError] = useState(false);

  // useEffect(() => {
  //   const calculateTip = () => {
  //     let tipAmount = customTip
  //       ? (billAmount * customTip) / 100
  //       : (billAmount * tipPercentage) / 100;
  //     let totalPerPerson = billAmount / numOfPeople + tipAmount / numOfPeople;

  //     setTipAmount(tipAmount.toFixed(2));
  //     setTotalPerPerson(totalPerPerson.toFixed(2));
  //   };

  //   calculateTip();
  // }, [
  //   billAmount,
  //   tipPercentage,
  //   customTip,
  //   numOfPeople,
  //   setTipAmount,
  //   setTotalPerPerson,
  // ]);

  useEffect(() => {
    const calculateTip = () => {
      if (
        !billAmount ||
        !numOfPeople ||
        parseFloat(billAmount) <= 0 ||
        parseInt(numOfPeople) <= 0
      ) {
        setBillInputError(!billAmount || parseFloat(billAmount) <= 0);
        setPeopleInputError(!numOfPeople || parseInt(numOfPeople) <= 0);
        return;
      } else {
        setBillInputError(false);
        setPeopleInputError(false);
      }

      let tipAmount = customTip
        ? (billAmount * customTip) / 100
        : (billAmount * tipPercentage) / 100;
      let totalPerPerson = billAmount / numOfPeople + tipAmount / numOfPeople;

      setTipAmount(tipAmount.toFixed(2));
      setTotalPerPerson(totalPerPerson.toFixed(2));
    };

    calculateTip();
  }, [
    billAmount,
    tipPercentage,
    customTip,
    numOfPeople,
    setTipAmount,
    setTotalPerPerson,
  ]);

  return (
    <div className="md:w-1/2 w-full p-4 font-body">
      <div className="mb-4">
        <label htmlFor="Bill" className="block mb-2">
          Bill
        </label>
        <input
          type="text"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          className={`w-full p-2 mb-4 border ${
            billInputError ? "border-red-500" : "border-green-600"
          } rounded-md bg-gray-200`}
        />
        {billInputError && (
          <p className="text-[11px] text-red-500">Can't be zero</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="Tip" className="block mb-2">
          Select Tip %
        </label>
        <div className="grid grid-cols-3 gap-4">
          {[5, 10, 15, 25, 50].map((percentage) => (
            <button
              key={percentage}
              className="px-4 py-2 rounded-md  text-veryLightGrayishCyan bg-veryDarkCyan hover:bg-lightGrayishCyan  hover:text-veryDarkCyan"
              onClick={() => setTipPercentage(percentage)}
            >
              {percentage}%
            </button>
          ))}
          <input
            type="text"
            placeholder="Custom"
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
            className="rounded-md px-4 py-2 text-veryDarkCyan focus:border-[1px] focus:border-strongCyan bg-green-100"
          />
        </div>
      </div>
      <div>
        <label htmlFor="Number of People" className="block mb-2">
          Number of People
        </label>
        <input
          type="text"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          className={`w-full p-2 mb-4 border ${
            peopleInputError ? "border-red-500" : "border-green-600"
          } rounded-md bg-gray-200`}
        />
        {peopleInputError && (
          <p className="text-[11px] text-red-500">Can't be Zero</p>
        )}
      </div>
    </div>
  );
};

export default Inputs;
