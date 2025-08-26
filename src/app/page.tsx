"use client";
import React from "react"; 

export default function Home() {
  
  let [resultValue, setResultValue] = React.useState<number>(0);
  let [currentOperation, setCurrentOperation] = React.useState("");

  let [secondNumber, setSecondNumber] = React.useState<number>(0);
  let [firstNumber, setFirstNumber] = React.useState<number>(0);

  const clearDisplay = () => {
    console.log("Clear display");
    setCurrentOperation("");

    setFirstNumber(0);
    setSecondNumber(0);
    setResultValue(0);
  }

  const appendNumber = (value: string) => {
    
    if (currentOperation) {
      setSecondNumber(+`${secondNumber||''}${value}`)
    }

    if (secondNumber === 0 && !currentOperation) {
      setFirstNumber(+`${firstNumber||''}${value}`)
    }

    // setDisplayValue(`${firstNumber||value}${currentOperation}${secondNumber||''}`)

  }

  const appendOperation = (value: string) => {
    setCurrentOperation(value)
  }

  const calculateResult = () => {
    console.log(">>", currentOperation);
    console.log("Calculate result");
    let calculatedValue = 0;
    switch (currentOperation) {
      case "+":
        calculatedValue = firstNumber + secondNumber;
        break;
      case "-":
        calculatedValue = firstNumber - secondNumber;
        break;
      case "÷":
        calculatedValue = firstNumber / secondNumber;
        break;
      case "*":
        calculatedValue = firstNumber * secondNumber;
        break;
      default:
        break;
      }
    setResultValue(calculatedValue)

  }

  const firstLayerButtons = [
    { label: "C", action: () => clearDisplay() },
    { label: "÷", action: () => appendOperation("÷") },
    { label: "*", action: () => appendOperation("*") },
    { label: "-", action: () => appendOperation("-") },
  ];

  const secondLayerButtons = [
    { label: "7", action: () => appendNumber("7") },
    { label: "8", action: () => appendNumber("8") },
    { label: "9", action: () => appendNumber("9") },
    { label: "+", action: () => appendOperation("+") },
  ];

  const thirdLayerButtons = [
    { label: "4", action: () => appendNumber("4") },
    { label: "5", action: () => appendNumber("5") },
    { label: "6", action: () => appendNumber("6") },
    { label: "=", action: () => calculateResult() },
  ];

  const fourthLayerButtons = [
    { label: "1", action: () => appendNumber("1") },
    { label: "2", action: () => appendNumber("2") },
    { label: "3", action: () => appendNumber("3") },
    { label: "0", action: () => appendNumber("0") },
  ];

  const calculatorButtons = {
    firstLayer: firstLayerButtons,
    secondLayer: secondLayerButtons,
    thirdLayer: thirdLayerButtons,
    fourthLayer: fourthLayerButtons,
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div>
          <a href="/colorflipper" className="text-blue-500 hover:underline">
            Color Flipper
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center sm:text-left">
          Calculator
        </h1>
        <div className="w-full max-w-md">
          <input
            type="string"
            placeholder="0"
            value={resultValue || `${firstNumber||''}${currentOperation}${secondNumber||''}`}
            readOnly
            className="w-full h-[60px] bg-gray-100 rounded-lg shadow-md px-4 text-right text-2xl text-black"
          />
        </div>
        {
          Object.values(calculatorButtons).map((layer, index) => (
            <div key={index} className="flex flex-wrap gap-[16px] justify-center sm:justify-start">
              {
                layer.map((button, buttonIndex) => (
                  <button
                    key={buttonIndex}
                    className="w-[60px] h-[60px] bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-colors text-black text-2xl"
                    onClick={() => button.action()}
                  >
                    {button.label}
                  </button>
                ))
              }
            </div>
          ))
        }
        {/* <div className=" flex flex-wrap gap-[16px] justify-center sm:justify-start">
          {
            firstLayerButtons.map((button, index) => (
              <button
                key={index}
                className="w-[60px] h-[60px] bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-colors text-black"
              >
                {button.label}
              </button>
            ))
          }
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" />
    </div>
  );
}
