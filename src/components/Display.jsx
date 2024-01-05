const Display = ({ tipAmount, totalPerPerson, reset }) => {
  return (
    <div className="md:w-1/2 w-full py-12 px-6 rounded-lg bg-veryDarkCyan font-body flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-veryLightGrayishCyan">Tip Amount</p>
            <p className="text-darkGrayishCyan">/ person</p>
          </div>
          <div className="text-3xl font-bold text-strongCyan">${tipAmount}</div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-veryLightGrayishCyan">Total</p>
            <p className="text-darkGrayishCyan">/ person</p>
          </div>
          <div className="text-strongCyan text-3xl font-bold">
            ${totalPerPerson}
          </div>
        </div>
      </div>
      <button
        onClick={reset}
        className="mt-4 p-2 bg-strongCyan text-veryDarkCyan hover:bg-lightGrayishCyan rounded-md w-full uppercase font-bold"
      >
        Reset
      </button>
    </div>
  );
};

export default Display;
