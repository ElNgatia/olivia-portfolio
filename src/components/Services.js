import React from "react";

export default function Services() {
  return (
    <div id="services" className="flex lg:flex-row items-center md:flex-row sm:flex-col min-h-screen pt-24 bottom-0">
  <div className="container mx-auto lg:w-full justify-center items-center md:px-4 md:py-8 font-droidserif">
    <div>
      <div className="m-4">
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-4 auto-rows-fr sm:justify-center place-content-center">
          <div className="content-center">
            <h1 className="text-3xl md:text-sm mb-4 font-safiramarch text-dirt text-center ">
              MY SERVICES
            </h1>
          </div>
          <div className="content-center sm:justify-center sm:flex-col sm:items-center">
            <div className="items-center justify-end hover:brightness-105 transition duration-300 flex-col">
              <a href="/services/social-media-management" className="sm:justify-center">
                <img
                  className=" h-1/2 w-1/2 object-cover rounded-lg cursor-pointer md:w-full mb-2 sm:w-6/12"
                  alt="Social Media Management"
                  src="./image_3.webp"
                  style={{ width: "100%" }}
                />
                <h2 className="text-black text-lg font-bold mb-2 text-center">
                  Social Media Management
                </h2>
              </a>
            </div>
          </div>
          <div>
            <div className="items-center justify-end hover:brightness-105 transition duration-300 flex-col">
              <a href="/services/consultations" className="items-center">
                <img
                  className=" h-1/2 w-1/2 object-cover rounded-lg cursor-pointer md:w-full mb-2"
                  alt="Coaching"
                  src="./image_1.webp"
                  style={{ width: "100%" }}
                />
                <h2 className="text-black text-lg font-bold mb-2 text-center">
                  Consultation
                </h2>
              </a>
            </div>
          </div>
          <div>
            <div className="items-center justify-end hover:brightness-105 transition duration-300 flex-col">
              <a href="/services/coaching">
                <img
                  className=" h-1/2 w-1/2 object-cover rounded-lg cursor-pointer md:w-full mb-2 "
                  alt="Coaching & Training"
                  src="./image_2.webp"
                  style={{ width: "100%" }}
                />
                <h2 className="text-black text-lg font-bold mb-2 text-center">
                  Coaching & Training
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
