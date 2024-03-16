import React from "react";
export default function Services() {
  return (
    <section
      id="services"
      className="flex lg:flex-row items-center h-screen sm:flex-col "
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          <div className=" container mx-auto lg:flex-grow sm:flex-shrink md:w-1/2 sm:w-1/8 flex-col sm:text-left md:text-left items-center text-center">
            <div className="flex flex-col w-full mb-20">
              <h1 className="text-5xl font-bold text-orange">SERVICES</h1>
            </div>
            <div>
              <div className="flex flex-col w-full mb-20">
                <h1 className="text-3xl font-bold text-left">
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
              <div className="flex flex-col w-full mb-20">
                <h1 className="text-3xl font-bold text-left">Coaching</h1>
                {/* List of services under Coaching */}
                <ul className="list-disc text-lg text-left">
                  <li>Social Media Marketing Course</li>
                  <li>Customized Social Media Workshops</li>
                </ul>
              </div>
              <div className="flex flex-col w-full mb-20">
                <h1 className="text-3xl font-bold text-left">
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
          <div className="md:flex">
            <div className="md:shrink-0 md:mr-16">
              <img
                className="h-full w-full object-cover md:h-full md:w-48"
                alt="Olivia"
                style={{ width: "100%", maxWidth: "300px" }}
                src="./sideimage.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
