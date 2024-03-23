import React from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col md:flex-row items-center"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-orange">CLIENT REVIEWS</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="polly.png"
                alt="Polly"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold">Elan Spa by Polly</p>
            <p className="text-gray-600">Polly</p>
            <p className="mt-2">
              Thank you for all the good work you've done. I truly appreciate
              it.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="nellie.png"
                alt="Nellie"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold">Impact Point 360</p>
            <p className="text-gray-600">Nellie</p>
            <p className="mt-2">
              Our calls and meetings are always so helpful and refreshing, thank
              you.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="dorothy.png"
                alt="Dorothy"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <p className="text-lg font-semibold">Marketing Expert</p>
            <p className="text-gray-600">Dorothy Kirori</p>
            <p className="mt-2">
              Thank you for the professionalism, timeliness, unique &
              outstanding way in which you carry out the work whenever I reach
              out to you with a project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
