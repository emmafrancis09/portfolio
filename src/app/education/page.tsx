import React from "react";

const EducationPage = () => {
  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-800 shadow-lg rounded-lg font-mono text-gray-200">
      <h1 className="text-3xl font-bold underline mb-4 text-white">
        Education
      </h1>

      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-blue-400">• University</h1>
        <div className="ml-6 mt-2 text-gray-300">
          <p>- Started June 2023</p>
          <p>- Finishing Dec 2027</p>
          <p>- At Kigali Independent University</p>
          <p>- Bachelors Comp Sci - Software Engineering</p>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-blue-400">• High School</h1>
        <div className="ml-6 mt-2 text-gray-300">
          <p>- Started Jan 2017</p>
          <p>- Finished Dec 2021</p>
          <p>- At Dora Bloc High School</p>
          <p>- Sciences: Maths, Physics, Chemistry & Biology</p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-blue-400">
          • Primary School
        </h1>
        <div className="ml-6 mt-2 text-gray-300">
          <p>- Started Feb 2013</p>
          <p>- Finished Nov 2016</p>
          <p>- At Kings Way Primary School</p>
          <p>- General Subjects: Eng, Lit 1 & 2, Maths & other basic stuff</p>
          <p className="mt-2">
            - Everyone went to school but for me I was the top of my class for
            over 6 years from P5 till S3.
          </p>
          <p className="mt-2">
            - Might not be too useful but I am thankful for what I have
            achieved!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
