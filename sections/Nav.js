import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { WindowSize } from "../middleware/WindowSize";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const size = WindowSize();
  const getSubPages = useSelector((state) => state.pages.sub);
  const getUsername = useSelector((state) => state.user.name);
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
      <div className="flex justify-center w-full">
        <div className="mx-auto w-full relative">
          <nav className="flex md:justify-between align-center text-center items-center text-xl px-6 py-4">
            {/* <Link href="/">
              <a
                className={`${styles.linkUnderline} px-4 pb-2 font-display max-w-sm font-bold font-poppins leading-tight cursor-pointer`}
              >
                MARINE TECH COMPANY
              </a>
            </Link> */}
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={48}
                height={48}
                viewBox="0 0 48 48"
                style={{ fill: "#undefined" }}
                className="cursor-pointer"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </Link>
            <p className="font-bold text-3xl">{getSubPages.toUpperCase()}</p>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="30px"
                height="30px"
                viewBox="0 0 30 30"
                version="1.1"
              >
                <g id="surface1">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: 1,
                    }}
                    d="M 14.148438 0.0390625 C 11.023438 0.234375 8.101562 1.347656 5.6875 3.269531 C 0.304688 7.546875 -1.476562 14.917969 1.359375 21.195312 C 2.148438 22.9375 3.484375 24.78125 4.882812 26.03125 L 5.335938 26.445312 L 5.496094 26.320312 C 5.71875 26.144531 6.460938 25.71875 8.703125 24.503906 C 9.765625 23.921875 10.746094 23.355469 10.882812 23.238281 C 11.015625 23.121094 11.195312 22.875 11.289062 22.6875 C 11.449219 22.367188 11.453125 22.324219 11.472656 21.234375 L 11.496094 20.117188 L 11.226562 19.746094 C 10.65625 18.976562 10.070312 17.789062 9.808594 16.882812 C 9.691406 16.484375 9.617188 16.328125 9.4375 16.140625 C 9 15.6875 8.992188 15.667969 8.992188 14.0625 C 8.992188 12.53125 9.007812 12.445312 9.316406 12.101562 C 9.414062 11.992188 9.429688 11.804688 9.453125 10.019531 C 9.476562 7.816406 9.492188 7.71875 9.90625 6.859375 C 10.617188 5.421875 12.199219 4.628906 14.589844 4.53125 C 17.320312 4.417969 19.304688 5.261719 20.097656 6.875 C 20.515625 7.722656 20.523438 7.8125 20.515625 9.992188 C 20.5 11.914062 20.5 11.929688 20.625 12.039062 C 20.695312 12.105469 20.8125 12.265625 20.882812 12.390625 C 21 12.617188 21.007812 12.710938 21.007812 14.0625 C 21.007812 15.429688 21 15.507812 20.875 15.738281 C 20.730469 16.015625 20.398438 16.328125 20.125 16.441406 C 19.976562 16.5 19.929688 16.578125 19.839844 16.859375 C 19.671875 17.425781 18.890625 18.921875 18.457031 19.523438 L 18.046875 20.09375 L 18.046875 21.199219 C 18.046875 22.492188 18.09375 22.695312 18.503906 23.148438 C 18.75 23.425781 18.96875 23.542969 21.351562 24.738281 C 22.773438 25.445312 24.085938 26.132812 24.273438 26.257812 L 24.617188 26.492188 L 25 26.148438 C 26.015625 25.257812 27.148438 23.875 27.898438 22.605469 C 29.824219 19.359375 30.4375 15.4375 29.613281 11.71875 C 28.492188 6.6875 24.808594 2.546875 19.929688 0.855469 C 18.105469 0.222656 15.996094 -0.078125 14.148438 0.0390625 Z M 14.148438 0.0390625 "
                  />
                </g>
              </svg>
              <p>Admin {getUsername.toUpperCase()}</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
