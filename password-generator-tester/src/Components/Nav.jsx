import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="flex justify-center w-screen h-[10%] flex-wrap absolute">
      <div className="mt-[2em] bg-opacity-10 shadow-inner-2xl rounded-2xl w-[75%]  text-center flex overflow-hidden">
        <div className="flex w-full justify-around">
          <NavLink to="/" exact>
            <h1
              className={`mt-[5%] p-5 text-3xl text-slate-800 leading-5 cursor-pointer ${
                location.pathname === "/" ? "bg-slate-800 bg-opacity-10 rounded-xl" : "opacity-25"
              }`}
            >
              Password Generator
            </h1>
          </NavLink>

          <NavLink to="/password-tester">
            <h1
              className={`mt-[5%] p-5 text-3xl text-slate-800 leading-5 cursor-pointer ${
                location.pathname === "/password-tester" ? "bg-slate-800 bg-opacity-10 rounded-xl" : "opacity-25"
              }`}
            >
              Password Tester
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
