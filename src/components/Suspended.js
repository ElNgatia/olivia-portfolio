import React from "react";

export default function Suspended() {
  return (
    <div
      id="suspended"
      className="flex lg:flex-row items-center md:flex-row sm:flex-col min-h-screen pt-24 bottom-0 bg-hero-pattern"
    >
      <div className="container mx-auto lg:w-full justify-center items-center md:px-4 md:py-8 font-droidserif ">
        <div className="m-4">
          <div className="sm:justify-center place-content-center">
            <div className="content-center text-center font-safiramarch text-black ">
              <h1 className="text-xl  md:text-base sm:text-sm mb-4  ">
                SITE SUSPENDED DUE TO NON-PAYMENT
              </h1>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
