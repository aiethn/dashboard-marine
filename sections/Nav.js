import Link from "next/link";
import { useState, useEffect } from "react";
import { WindowSize } from "../middleware/WindowSize";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const size = WindowSize();
  const handleScroll = () => {
    if (scroll !== window.pageYOffset > 0) {
      setScroll(window.pageYOffset > 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`overflow-x-hidden ${
        scroll ? "border-b-[1px] border-gray-300/50 bg-white/50" : ""
      }  backdrop-blur supports-backdrop-blur:bg-white/95 fixed py-1 w-full top-0 z-40 `}
    >
      <div className="flex justify-center w-full mx-2">
        <div className="mx-auto md:w-[950px] w-96 relative ">
          <nav className="flex md:justify-center space-x-2 w-5xl my-4 text-xl ">
            <Link href="/">
              <a
                className={`${styles.linkUnderline} px-4 pb-2 font-display max-w-sm font-bold font-poppins leading-tight cursor-pointer`}
              >
                Home
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
