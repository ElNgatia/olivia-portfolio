import React from "react";

export default function Services() {
  return (
    <div
      id="services"
      className="flex lg:flex-row items-center sm:flex-col min-h-screen pt-24 bottom-0"
    >
      <div className="container mx-auto lg:w-full justify-center items-center md:px-4 md:py-8 font-droidserif">
        <div>
          <div className="m-4">
            <div className=" grid grid-cols-1 gap-8 md:grid-cols-4 auto-rows-fr ">
              <div className="content-center">
                <h1 className="text-3xl md:text-sm mb-4 font-safiramarch text-orange text-center ">
                  MY SERVICES
                </h1>
              </div>

              <div>
                <div className="items-center justify-end  hover:brightness-105 transition duration-300">
                  <a href="/services/social-media-management">
                    <img
                      className=" h-1/2 w-1/2 object-cover rounded-lg cursor-pointer md:w-full mb-2"
                      alt="Social Media Management"
                      src="./image_3.png"
                    />
                    <h2 className="text-black text-lg font-bold mb-2 text-center">
                      Social Media Management
                    </h2>
                  </a>
                </div>
              </div>
              <div>
                <div className="items-center justify-end hover:brightness-105 transition duration-300">
                  <a href="/coaching">
                    <img
                      className=" h-1/2 w-1/2 object-cover rounded-lg cursor-pointer md:w-full mb-2"
                      alt="Coaching"
                      src="./image_1.png"
                    />
                    <h2 className="text-black text-lg font-bold mb-2 text-center">
                      Consultation
                    </h2>
                  </a>
                </div>
              </div>
              <div>
                <div className="items-center justify-end hover:brightness-105 transition duration-300">
                  <a href="/copy-writing-editing">
                    <img
                      className=" h-1/2 w-1/2 object-cover rounded-lg cursor-pointer md:w-full mb-2 "
                      alt="Coaching & Training"
                      src="./image_2.png"
                    />
                    <h2 className="text-black text-lg font-bold mb-2 text-center">
                      Copy Writing & Editing
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
