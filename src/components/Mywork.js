import React from "react";
export default function MyWork() {
  return (
    <section
      id="mywork"
      className="flex  items-center h-screen2 sm:flex-row"
    >
      <div className="container lg:w-full mx-auto px-4 py-8 items-center">
        <div>
          <div className="flex flex-col w-full ">
            <h1 className="text-5xl font-bold text-orange">MY WORK</h1>
            <h2 className="text-2xl font-bold mb-4 text-orange">
              SOCIAL MEDIA MANAGEMENT
            </h2>
          </div>
          {/* <div className="flex flex-row space-x-2 lg:max-w-lg lg:w-full md:w-1/8 md:mr-16 lg:mr-24 sm:w-1/16">
            <img
              src="image_1.png"
              alt="Image 1"
              className="object-cover w-full h-32 mb-2"
              style={{ width: "100%", maxWidth: "200px" }}
            />
            <img
              src="image_2.png"
              alt="Image 2"
              className="object-cover w-full h-32 mb-2"
              style={{ width: "100%", maxWidth: "200px" }}
            />
            <img
              src="image_3.png"
              alt="Image 3"
              className="object-cover w-full h-32 mb-2" 
              style={{ width: "100%", maxWidth: "200px" }}
            />
            <img
              src="image_4.png"
              alt="Image 4"
              className="object-cover w-full h-32 mb-2" 
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </div> */}

          <div className="p-8 m-4">
            <div className="grid grid-row-4 auto-rows-fr sm:grid-cols-3 gap-4 mb-40">
              <div>
                <img
                  src="stpaul.jpg"
                  alt="St. Paul Youth Services"
                  className="object-cover w-full h-full  mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a
                  href="https://www.stpaulyouthservices.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="text-sm md:text-xl font-bold mb-2 underline">
                    St. Paul Youth Services
                  </h2>
                </a>
                <p className="text-sm md:text-xl">
                  Minnesota Based Non-Profit that has contracted me for all
                  round Social Media Solutions; Strategy, solutions and
                  Management.
                </p>
              </div>
              <div>
                <img
                  src="artistic_psychologist.jpg"
                  alt="The Artistic Psychologist"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a href="https://www.instagram.com/theartisticpsychologist/">
                  <h2 className="text-sm md:text-xl font-bold mb-2 underline">
                    The Artistic Psychologist
                  </h2>
                </a>
                <p className="text-sm md:text-xl">
                  Nairobi based Psychologist who needed help with Blog, Podcast
                  and Social Media Content Management.
                </p>
              </div>
              <div>
                <img
                  src="wanjiku_socials.jpg"
                  alt="Wanjiku Socials"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a href="https://www.instagram.com/wanjikusocials/">
                  <h2 className="text-sm md:text-xl font-bold mb-2 underline">
                    Wanjiku Socials
                  </h2>
                </a>
                <p className="text-sm md:text-xl mb-2 ">
                  A Content Strategist who has subcontracted me for work with
                  <a
                    className="underline"
                    href="https://www.instagram.com/khalayidesign/"
                  >
                    {" "}
                    Khalayi
                  </a>
                  ,{" "}
                  <a
                    className="underline"
                    href="https://www.instagram.com/redcarpeteventskenya/"
                  >
                    {" "}
                    Red Carpet Entertainment
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.instagram.com/exquisite_interiorske/"
                    className="underline"
                  >
                    Exquisite Spaces Inspirations
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="grid grid-row-4 auto-rows-fr sm:grid-cols-3 gap-4 mb-20 ">
              <div className="work_item">
                <img
                  src="muthoni_music.jpg"
                  alt="Muthoni Music"
                  className="object-cover w-full h-full  mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a href="https://www.instagram.com/muthonimusic/">
                  <h2 className="text-sm md:text-xl font-bold mb-2 underline ">
                    Muthoni music
                  </h2>
                </a>
                <p className="text-sm md:text-xl">
                  Creative entrepreneur and musician that needed Social Media
                  Management and Strategy for herself, the{" "}
                  <a
                    href="https://www.instagram.com/performmusicincubator/"
                    className="underline"
                  >
                    Perform Music Incubator
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.instagram.com/blanketsandwine/"
                    className="underline"
                  >
                    Blankets and Wine
                  </a>
                  .
                </p>
              </div>
              <div className="work_item">
                <img
                  src="beauty_square.png"
                  alt="Beauty Square"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a
                  href="https://www.instagram.com/beautysquare.ke/"
                  className="underline"
                >
                  <h2 className="text-lg font-bold mb-2">Beauty Square</h2>
                </a>

                <p className="text-sm md:text-xl">
                  Beauty and Skincare enterprise that needed help with Content
                  Management, Strategy and scheduling.
                </p>
              </div>
              <div className="work_item">
                <img
                  src="kidum.jpg"
                  alt="Kidum"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <h2 className="text-lg font-bold mb-2">Kidum</h2>
                <p className="text-sm md:text-xl">
                  Kenyan based Burundian Musician who needed Social Media
                  Management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {/* First Column */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange">COPYWRITING</h2>
            <ul className="list-none pl-0 mb-4">
              <li className="flex items-center">
                <img
                  src="pweza.png"
                  alt="Logo 1"
                  className="inline-block mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px"
                  }}
                />
                <span>Press Releases, Artist Biographies (2020 -2021)</span>
              </li>
              <li className="flex items-center">
                <img
                  src="africaspocket.png"
                  alt="Logo 1"
                  className="inline-block mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px"
                  }}
                />
                <span>
                  Website copy, sales copy, Social media ad copy (2021-2022)
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="mynanny.png"
                  alt="Logo 1"
                  className="inline-block  mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px"
                  }}
                />
                <span>
                  Website Copy, Copyright Application & Company Profile (2022)
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="afyarekod.png"
                  alt="Logo 1"
                  className="inline-block  mr-2"
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                  }}
                />
                <span>Website Copy (2022)</span>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange">
              COACHING & STRATEGY
            </h2>
            <ul className="list-disc pl-4 mb-4">
              <li className="flex items-center">
                <img
                  src="nanli.png"
                  alt="Logo 1"
                  className="inline-block   mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px"
                  }}
                />
                <span>Content Ideation, AD Strategy & ROI (2022)</span>
              </li>
              <li className="flex items-center">
                <img
                  src="nyansapo.png"
                  alt="Logo 1"
                  className="inline-block   mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px"
                  }}
                />
                <span>
                  Communications & Social Media Basics, Newsletter & Report
                  Writing (2022)
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="google.png"
                  alt="Logo 1"
                  className="inline-block mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px"
                  }}
                />
                <span>
                  Social Media Management, Analytics & Scheduling Training
                  (2022)
                </span>
              </li>
            </ul>

            {/* More Client Info */}
            <div>
              <a href="https://drive.google.com/file/d/1rlO_Kw_FjVn3pUXlOMhNR_3s1LHvND-n/view">
                <h3 className="text-lg-orange font-bold mb-2 underline text-orange">
                  MORE CLIENT INFO
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
