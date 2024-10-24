import { useState, useEffect } from "react";

export default function PasswordStrengthTest() {
  const [barPercentage, setBarPercentage] = useState(100);
  const [reasons, setReasons] = useState([]);
  const [password, setPassword] = useState("");

  const calcPasswordStrength = (password) => {
    let strength = 100;
    const newReasons = [];

    const addWeakness = (message, deduction) => {
      newReasons.push(message);
      strength -= deduction;
    };

    if (!password) {
      return "";
    } else if (password.length < 5) {
      addWeakness("Your password is too short", 40);
    } else if (password.length < 10) {
      addWeakness("Your password could be longer", 10);
    }

    if (!/[A-Z]/.test(password)) {
      addWeakness("Your password needs at least one uppercase letter", 20);
    }

    if (!/[^0-9a-zA-Z\s]/.test(password)) {
      addWeakness("Your password needs at least one special character", 20);
    }

    if (!/[0-9]/.test(password)) {
      addWeakness("Your password needs at least one number", 20);
    }

    if (!/[a-z]/.test(password)) {
      addWeakness("Your password needs at least one lowercase letter", 20);
    }

    setReasons(newReasons);
    setBarPercentage(Math.max(strength, 0));
  };

  useEffect(() => {
    calcPasswordStrength(password);
  }, [password]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center w-screen min-h-screen flex-wrap">
      <section className="mt-[2em] bg-white bg-opacity-10 border-slate-400 border-2 shadow-2xl rounded-2xl w-[75%] h-[70%] min-h-[70%] max-h-none text-center flex flex-col overflow-auto">
        <h1 className="mt-[5%] p-5 text-3xl text-slate-800 leading-5">
        </h1>

        <div className="w-full flex justify-center mt-7">
          <div className="h-[2rem] w-[80%] border-2 border-sky-900 rounded-3xl border-opacity-40 overflow-hidden">
            <div
              className={`h-full left-0 relative z-10 transition-all duration-500 ease-in-out ${
                barPercentage <= 30
                  ? "bg-gradient-to-r from-red-700 to-red-500"
                  : barPercentage <= 50
                  ? "bg-gradient-to-r from-red-900 to-red-700"
                  : barPercentage <= 70
                  ? "bg-gradient-to-r from-green-800 to-green-600"
                  : barPercentage >= 80 && barPercentage < 100
                  ? "bg-gradient-to-r from-green-600 to-green-500"
                  : "bg-gradient-to-r from-green-500 to-green-400"
              }`}
              style={{
                width: `${barPercentage}%`,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                borderRadius: ".4rem",
              }}
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="ENTER PASSWORD"
          value={password}
          onChange={handlePasswordChange}
          className="border-4 border-white focus:border-white bg-transparent rounded-lg w-[55%] h-auto focus:outline-sky-500 focus:outline-offset-8 focus:outline-[5px] focus:outline mx-auto m-10 border-opacity-10 text-pretty p-2"
        />

        <div className="items-center m-4">
          <div className="flex flex-col mx-auto p-2 text-pretty text-lg text-slate-700 bg-slate-800 bg-opacity-10 rounded-3xl gap-4">
            {reasons.map((reason, index) => (
              <p
                key={index}
                className="text-start p-3 bg-inherit rounded-2xl text-[#f14f4f] text-pretty font-semibold"
              >
                Reason {index + 1}: {reason}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
