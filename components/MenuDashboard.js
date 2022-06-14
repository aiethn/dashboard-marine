import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSubPage } from "../features/Pages";
import styles from "../styles/Nav.module.css";

export function MenuDashboard() {
  const dispatch = useDispatch();
  const [selectedSub, setSelectedSub] = useState("");
  useEffect(() => {
    dispatch(changeSubPage("ship"));
    setSelectedSub("ship");
  }, []);

  const handleOnSelect = (value) => {
    dispatch(changeSubPage(value));
    setSelectedSub(value);
  };
  return (
    <div className="flex flex-col h-full justify-between ">
      <div className="flex flex-col  font-bold text-xl">
        <p
          onClick={(e) => selectedSub !== "ship" && handleOnSelect("ship")}
          className={`cursor-pointer hover:bg-gray-200 pl-2 py-4 border-l-8 ${
            selectedSub == "ship" ? "border-[#3498db]" : "border-white"
          } ${styles.linkUnderline}`}
        >
          Ship
        </p>
        <p
          onClick={(e) =>
            selectedSub !== "shipments" && handleOnSelect("shipments")
          }
          className={`cursor-pointer hover:bg-gray-200 pl-2 py-4 border-l-8 ${
            selectedSub == "shipments" ? "border-[#3498db]" : "border-white"
          } ${styles.linkUnderline}`}
        >
          Shipments
        </p>
      </div>
      <div className="cursor-pointer flex align-center justify-center items-center space-x-2 mb-10 ">
        <svg
          version={1.0}
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 50 50"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0,50) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M5 488 c-3 -8 -4 -119 -3 -248 l3 -235 195 0 195 0 3 53 c2 36 0 52
-7 47 -6 -3 -11 -24 -11 -46 l0 -39 -180 0 -180 0 0 230 0 230 180 0 180 0 0
-32 c0 -18 5 -40 10 -48 8 -11 10 1 8 40 l-3 55 -193 3 c-150 2 -194 0 -197
-10z"
            />
            <path
              d="M370 363 c0 -4 21 -29 47 -55 l47 -48 -152 0 c-95 0 -152 -4 -152
-10 0 -6 57 -10 152 -10 l152 0 -49 -50 c-27 -27 -46 -53 -42 -57 4 -4 36 21
70 55 l62 62 -60 60 c-56 56 -75 70 -75 53z"
            />
          </g>
        </svg>
        <p className="align-center">Logout</p>
      </div>
    </div>
  );
}
