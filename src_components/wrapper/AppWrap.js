import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames, copyright) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container min-h-screen flex flex-row ${classNames}`}
      >
        <SocialMedia />
        <div className="app__wrapper pt-16 px-4 pb-8 flex-1 w-full flex-col">
          <Component />

          {copyright && (
            <div className="copyright w-full pt-8 flex flex-col justify-end items-end">
              <p className="text-xs text-left text-[#6b7688] leading-normal">
                @2022 Saurabh
              </p>
              <p className="text-xs text-left text-[#6b7688] leading-normal">
                All rights reserved
              </p>
              <p className="text-xs text-left text-[#6b7688] leading-normal">
                Made with ❤️ by Saurabh
              </p>
            </div>
          )}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
