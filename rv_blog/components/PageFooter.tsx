import Link from "next/link";
import React from "react";

function PageFooter() {
  return (
    <footer className="border-t-4 border-solid border-white relative bottom-0 left-0 w-full bg-primary">
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <span className="text-white hover:text-third text-center">
          © Copyright 2022 by RV Blog. Built with 
          <b className="text-pink-500 text-2xl m-1">♥</b> by Ravi Sharma.
        </span>
        <div className="text-white flex flex-row gap-1">
          <Link href="/" className="hover:text-third">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                stroke="currentColor"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/" className="hover:text-third">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3.06167 7.24464C3.10844 6.22264 3.26846 5.56351 3.48487 5.00402L3.48778 4.99629C3.70223 4.42695 4.03818 3.91119 4.47224 3.48489L4.47833 3.47891L4.48431 3.47282C4.91096 3.0382 5.42691 2.70258 5.99575 2.4887L6.00556 2.48495C6.56378 2.26786 7.22162 2.10843 8.24447 2.06167M3.06167 7.24464C3.0125 8.33659 2.99997 8.67508 2.99997 11.5063C2.99997 14.3381 3.01181 14.6758 3.06164 15.768M3.06167 7.24464L3.06167 7.52008M3.48867 18.0168C3.70255 18.5856 4.03817 19.1015 4.47279 19.5282L4.47887 19.5342L4.48484 19.5402C4.91116 19.9743 5.42694 20.3103 5.99628 20.5247L6.00478 20.5279C6.56351 20.7446 7.22167 20.9041 8.24447 20.9509M3.48867 18.0168L3.48492 18.0069C3.26783 17.4487 3.1084 16.7909 3.06164 15.768M3.48867 18.0168L3.47585 17.9492M3.06164 15.768L3.07839 15.8562M3.06164 15.768L3.06164 15.4919M3.47585 17.9492L3.07839 15.8562M3.47585 17.9492C3.30704 17.5033 3.13322 16.881 3.07839 15.8562M3.47585 17.9492C3.48177 17.9649 3.48768 17.9803 3.49359 17.9955C3.70766 18.5726 4.04685 19.0952 4.48679 19.5256C4.91708 19.9655 5.43944 20.3046 6.01636 20.5187C6.47934 20.699 7.13172 20.8875 8.24431 20.9385C9.3671 20.9896 9.71399 21 12.5062 21C15.2985 21 15.6457 20.9896 16.7685 20.9385C17.8824 20.8874 18.534 20.6979 18.9954 20.519C19.5726 20.305 20.0953 19.9657 20.5257 19.5256C20.9655 19.0953 21.3046 18.573 21.5187 17.9961C21.699 17.5331 21.8875 16.8808 21.9384 15.7682C21.9895 14.6454 22 14.2978 22 11.5063C22 8.71472 21.9895 8.36684 21.9384 7.24405C21.8871 6.12427 21.6959 5.47168 21.5161 5.00992C21.2811 4.40322 20.9831 3.94437 20.525 3.48627C20.0678 3.02999 19.6102 2.73179 19.003 2.49654C18.5396 2.31537 17.8866 2.12531 16.7685 2.07406C16.6712 2.06964 16.5798 2.06552 16.4921 2.06168M3.07839 15.8562C3.07684 15.8273 3.07539 15.7981 3.07403 15.7685C3.06961 15.6712 3.06548 15.5797 3.06164 15.4919M8.24447 2.06167C9.33668 2.01184 9.67505 2 12.5062 2C15.3374 2 15.6756 2.01252 16.7675 2.06168M8.24447 2.06167L8.52062 2.06167M16.7675 2.06168L16.4921 2.06168M16.7675 2.06168C17.7897 2.10844 18.4489 2.26844 19.0085 2.48487L19.0162 2.48781C19.5855 2.70226 20.1013 3.03821 20.5276 3.47227L20.5335 3.4783L20.5396 3.48422C20.9737 3.91055 21.3096 4.42646 21.5239 4.99596L21.5275 5.00559C21.7446 5.56381 21.9041 6.22165 21.9508 7.2445M8.52062 2.06167L16.4921 2.06168M8.52062 2.06167C9.44548 2.02123 9.95666 2.01253 12.5062 2.01253C15.056 2.01253 15.5671 2.02124 16.4921 2.06168M8.52062 2.06167C8.43284 2.06551 8.34134 2.06964 8.24402 2.07406C7.13004 2.12512 6.47843 2.31464 6.01708 2.49358C5.43767 2.70837 4.91328 3.04936 4.48192 3.49186C4.0281 3.94756 3.73105 4.40422 3.49655 5.0094C3.31536 5.4728 3.12527 6.12614 3.07402 7.24434C3.06961 7.34135 3.06549 7.43257 3.06167 7.52008M21.9508 15.768C21.9041 16.7908 21.7446 17.449 21.5279 18.0077L21.5247 18.0162C21.3102 18.5856 20.9743 19.1013 20.5402 19.5276L20.5341 19.5336L20.5282 19.5397C20.1015 19.9743 19.5856 20.3099 19.0167 20.5238L19.0069 20.5276C18.4487 20.7447 17.7908 20.9041 16.768 20.9509M3.06164 15.4919C3.0212 14.567 3.0125 14.0558 3.0125 11.5063C3.0125 8.95591 3.0212 8.44544 3.06167 7.52008M3.06164 15.4919L3.06167 7.52008M10.8155 15.5881C11.3515 15.8101 11.926 15.9244 12.5062 15.9244C13.678 15.9244 14.8018 15.4589 15.6304 14.6304C16.4589 13.8018 16.9244 12.678 16.9244 11.5063C16.9244 10.3345 16.4589 9.21072 15.6304 8.38215C14.8018 7.55359 13.678 7.0881 12.5062 7.0881C11.926 7.0881 11.3515 7.20238 10.8155 7.42442C10.2794 7.64645 9.79239 7.97189 9.38213 8.38215C8.97187 8.79242 8.64643 9.27947 8.42439 9.81551C8.20236 10.3515 8.08808 10.9261 8.08808 11.5063C8.08808 12.0865 8.20236 12.661 8.42439 13.197C8.64643 13.7331 8.97187 14.2201 9.38213 14.6304C9.79239 15.0406 10.2794 15.3661 10.8155 15.5881ZM9.37229 8.37231C10.2035 7.54113 11.3308 7.07418 12.5062 7.07418C13.6817 7.07418 14.809 7.54113 15.6402 8.37231C16.4714 9.20349 16.9383 10.3308 16.9383 11.5063C16.9383 12.6817 16.4714 13.809 15.6402 14.6402C14.809 15.4714 13.6817 15.9383 12.5062 15.9383C11.3308 15.9383 10.2035 15.4714 9.37229 14.6402C8.54111 13.809 8.07416 12.6817 8.07416 11.5063C8.07416 10.3308 8.54111 9.20349 9.37229 8.37231ZM19.434 6.04229C19.434 6.37873 19.3003 6.70139 19.0625 6.93929C18.8246 7.17719 18.5019 7.31084 18.1655 7.31084C17.829 7.31084 17.5064 7.17719 17.2685 6.93929C17.0306 6.70139 16.8969 6.37873 16.8969 6.04229C16.8969 5.70585 17.0306 5.38319 17.2685 5.1453C17.5064 4.9074 17.829 4.77375 18.1655 4.77375C18.5019 4.77375 18.8246 4.9074 19.0625 5.1453C19.3003 5.38319 19.434 5.70585 19.434 6.04229Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                ></path> 
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:text-third">
            <svg
              fill="currentColor"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_iconCarrier">
                 
                <g id="LinkedIn">
                   
                  <g>
                     
                    <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z"></path> 
                    <g>
                      <path d="M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"></path>
                      <circle cx="7.376" cy="6.744" r="1"></circle>
                      <path d="M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
