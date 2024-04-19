import React from "react";

export default function Services() {
  return (
    <div
      id="services"
      className="flex lg:flex-row items-center sm:flex-col min-h-screen pt-24 bottom-0"
    >
      <div className="container h-full mx-auto items-center font-droidserif">
       <div className="md:flex">
       <div className="grid grid-cols-1 auto-grid gap-8 md:grid-cols-4 sm:p-16 sm:m-8">
          <div className="relative content-center">
            <h1 className="text-3xl mb-4 font-safiramarch text-orange text-center ">
              MY SERVICES
            </h1>
          </div>
          {/* Image 1 */}
          <div className="relative ">
            <div className="items-center justify-end bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
              <a href="/social-media-management">
                <img
                  className="h-full w-full object-cover md:h-full md:w-48 cursor-pointer"
                  alt="Social Media Management"
                  src="./image_3.png"
                />
              </a>
              <h2 className="text-black text-lg font-bold mb-2">
                Social Media Management
              </h2>
            </div>
          </div>
          {/* Image 2 */}
          <div className="relative">
            <div className="items-center justify-end bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
              <a href="/coaching">
                <img
                  className="h-full w-full object-cover rounded-lg cursor-pointer"
                  alt="Coaching"
                  src="./image_1.png"
                />
              </a>
              <h2 className="text-black text-lg font-bold mb-2">
                Consultation
              </h2>
            </div>
          </div>
          {/* Image 3 */}
          <div className="relative">
            <div className="items-center justify-end bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
              <a href="/copy-writing-editing">
                <img
                  className="h-full w-full object-cover rounded-lg cursor-pointer"
                  alt="Coaching & Training"
                  src="./image_2.png"
                />
              </a>
              <h2 className="text-black text-lg font-bold">
                Copy Writing & Editing
              </h2>
            </div>
          </div>
        </div>
       </div>
        
      </div>
    </div>
  );
}
