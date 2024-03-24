import React from "react";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-row items-center justify-center sm:flex-col py-8 my-8 font-merriweather"
    >
      <div className="container lg:w-full my-8 px-4  py-8 items-center">
        <div className="flex flex-col w-full ">
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-merriweatherbold text-orange">
            services
          </h1>
        </div>
        <div className="md:flex">
          <div className="flex container mx-auto lg:flex-grow sm:flex-shrink sm:w-1/8 flex-col items-center mr-24">
            <div className="mr:12">
              <div className="mb-12">
                <h1 className="text-xl md:text-2xl  text-left">
                  Social Media Management
                </h1>
                {/* List of services under Social Media Management */}
                <ul className="list-disc text-lg text-left">
                  <li>Social Media Audits</li>
                  <li>Content Creation & Ideation</li>
                  <li>Content Design & Copy</li>
                  <li>Social Media Strategy</li>
                  <li>Post Analysis & Reporting</li>
                  <li>Content Shoot Coordination</li>
                </ul>
              </div>
              <div className="mb-20">
                <h1 className="text-xl md:text-2xl  text-left ">Coaching</h1>
                {/* List of services under Coaching */}
                <ul className="list-disc text-lg  text-left">
                  <li>Social Media Marketing Course</li>
                  <li>Customized Social Media Workshops</li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl  text-left">
                  Copy Writing & Editing
                </h1>
                {/* List of services under Copy Writing & Editing */}
                <ul className="list-disc text-lg text-left">
                  <li>Website Copy Writing and Editing</li>
                  <li>Biographies</li>
                  <li>Company profiles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:shrink-0 md:mr-24">
            <img
              className="h-48 w-50 object-cover md:h-full md:w-full"
              alt="Olivia"
              style={{ width: "100%" }}
              src="./sideimage.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
