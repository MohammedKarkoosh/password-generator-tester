import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [charCount, setCharCount] = useState(10);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const arrayFromLowToHigh = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  };

  const handlePasswordChange = () => {
    const lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
    const upperCaseCharCodes = arrayFromLowToHigh(65, 90);
    const numberCharCodes = arrayFromLowToHigh(48, 57);
    const symbolsCharCodes = arrayFromLowToHigh(33, 47)
      .concat(arrayFromLowToHigh(58, 64))
      .concat(arrayFromLowToHigh(91, 96))
      .concat(arrayFromLowToHigh(123, 126));

    let charCode = lowerCaseCharCodes;
    if (includeUpperCase) {
      charCode = charCode.concat(upperCaseCharCodes);
    }
    if (includeNumbers) {
      charCode = charCode.concat(numberCharCodes);
    }
    if (includeSymbols) {
      charCode = charCode.concat(symbolsCharCodes);
    }

    const passwordElementsCharacters = [];
    for (let i = 0; i <= charCount; i++) {
      passwordElementsCharacters.push(
        String.fromCharCode(
          charCode[Math.floor(Math.random() * charCode.length)]
        )
      );
    }

    setPassword(passwordElementsCharacters.join(""));
    console.log(includeUpperCase);
    console.log(includeNumbers);
    console.log(includeSymbols);
  };

  return (
    <div className="flex justify-center w-screen min-h-screen flex-wrap">
      <section className="mt-[2em] bg-white bg-opacity-10 border-slate-400 border-2 shadow-2xl rounded-2xl w-[75%] h-[70%] min-h-[70%] max-h-none text-center flex flex-col overflow-auto">
        <h1 className="mt-[6%] p-5 text-3xl text-slate-800 leading-5" />

        {password && (
          <div className="border-4 border-white focus:border-white bg-transparent rounded-lg  w-auto h-auto focus:outline-sky-500 focus:outline-offset-8 focus:outline-[5px] focus:outline mx-auto m-10 border-opacity-10 text-pretty p-2">
            {password}
          </div>
        )}

        <div className="items-center m-4">
          <div className="flex flex-col mx-auto p-2 text-pretty text-lg text-slate-700 bg-slate-800 bg-opacity-10 rounded-3xl">
            <form className="grid grid-cols-2 gap-6 justify-center items-center w-full m-6">
              <label className="text-left" htmlFor="number-of-inputs-number">
                Number Of Characters
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="number-of-inputs-number"
                  value={charCount}
                  onChange={(e) => setCharCount(e.target.value)}
                  className="w-10 border-2 text-sky-900 font-bold border-none text-center  bg-transparent"
                />

                <input
                  type="range"
                  min="1"
                  max="50"
                  id="number-of-inputs-range"
                  value={charCount}
                  onChange={(e) => setCharCount(e.target.value)}
                  className="w-30 "
                />
              </div>

              <label className="text-left" htmlFor="upper-case">
                Include Uppercase
              </label>
              <input
                type="checkbox"
                onClick={() => setIncludeUpperCase(!includeUpperCase)}
                className="w-5 h-5 border-[3px] border-sky-800
                 "
              />

              <label className="text-left" htmlFor="numbers">
                Include Numbers
              </label>
              <input
                type="checkbox"
                onClick={() => setIncludeNumbers(!includeNumbers)}
                className="w-5 h-5 border-[3px] border-sky-800
                 "
              />

              <label className="text-left" htmlFor="symbols">
                Include Symbols
              </label>
              <input
                className="w-5 h-5 border-[3px] border-sky-800
                 "
                type="checkbox"
                onClick={() => setIncludeSymbols(!includeSymbols)}
              />
            </form>

            <button
              onClick={handlePasswordChange}
              type="button"
              className="mt-10 py-3 px-6 bg-sky-700 text-white font-semibold text-lg rounded-xl hover:bg-sky-300 focus:ring-4 focus:ring-sky-400 transition-all duration-200 mx-auto cursor-pointer"
            >
              Generate The Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
