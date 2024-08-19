import React from 'react';

function Institutions() {
  return (
    <div className="py-0 px-4 bg-bg text-fun-gray">
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fun-gray"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {/* First Institution */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-semibold text-fun-pink">Indian Institute of Technology, Delhi</h3>
              <time className="block text-sm text-fun-gray-light">2022 - Present</time>
              <p className="text-fun-gray">B.Tech in Textile and Fiber Sceinces</p>
              <p className="text-fun-gray">
                Pursuing a Bachelor of Technology degree in Textile and Fiber Sceinces, specializing in carbon fibre with a minor in Management from DMS IIT Delhi.
              </p>
            </div>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-fun-pink rounded-full z-10"></div>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

          {/* Second Institution */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8"></div>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-fun-pink rounded-full z-10"></div>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-2xl font-semibold text-fun-pink">Sanskriti School, Delhi</h3>
              <time className="block text-sm text-fun-gray-light">2020 - 2022</time>
              <p className="text-fun-gray">High School Diploma</p>
              <p className="text-fun-gray">
                Completed high school with a focus on science and mathematics, achieving top grades and developing a strong foundation in technical subjects with 91% score in Central Board Examinations.
              </p>
            </div>
          </div>

          {/* Third Institution */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-semibold text-fun-pink">Sanskriti School, Delhi</h3>
              <time className="block text-sm text-fun-gray-light">2008-2020</time>
              <p className="text-fun-gray">2+10 Schooling</p>
              <p className="text-fun-gray">
                Attended school and passsed with top grades in all subjects (except English 😜), scored 95% in Class X Central Board Examinations.
              </p>
            </div>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute w-10 h-10 bg-fun-pink rounded-full z-10"></div>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Institutions;
