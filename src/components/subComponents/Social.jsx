import React from "react";

function Social() {
  return (
    <div className="flex flex-col gap-4 min-w-48 sm:text-left text-center">
      <h1 className="font-extrabold text-2xl text-textColor1">Follow Us On</h1>
      <div className="flex flex-col gap-1 items-center sm:items-start">
        <div className="flex flex-col text-textColor2 dark:text-black text-lg gap-2">
          <div className="flex gap-2 justify-start items-center">
            <img src="../Images/instagram (2).png" alt="" width={22} />
            <a
              target="_blank"
              href="https://www.instagram.com/elabs.kiit"
              className="hover:text-textColor1 text-textColor2 dark:text-black duration-200 focus:text-textColor1"
            >
              Instagram
            </a>
          </div>
          <div className="flex text-textColor2 dark:text-black text-lg gap-2 justify-start items-center m-0 p-0">
            <img src="../Images/linkedin (1).png" alt="" width={22} />
            <a
              target="_blank"
              href="https://www.linkedin.com/company/kiit-elabs"
              className="hover:text-textColor1 text-textColor2 dark:text-black duration-200 focus:text-textColor1 "
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Social;
