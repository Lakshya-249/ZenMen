import React from "react";

const Section3 = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Learn More About Men's Health
          <br />
          <span className="text-blue-600">And Symptoms</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto">
          Explore a range of health topics and symptoms that affect men. Our
          comprehensive resources are here to help you understand and manage
          these issues effectively.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
        {[
          "Penis Lumps",
          "Scrotal Lumps",
          "Premature Ejaculation",
          "Fordyce Spots",
          "Steroids Misuse",
          "Substance Use Disorder",
          "Depression",
          "Migraine",
          "Painful Ejaculation",
          "Hormones",
          "Insomnia",
          "Sleep",
          "Prostate Issues",
          "Erectile Dysfunction",
          "Low Testosterone",
          "Testicular Pain",
          "Urinary Tract Infections",
          "Chronic Fatigue",
          "Sexual Dysfunction",
          "Weight Management",
          "Anxiety",
          "High Blood Pressure",
        ].map((topic, index) => (
          <button
            key={index}
            className="bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 sm:px-6 sm:py-3 shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          <a href="#" className="text-blue-600 hover:underline">
            Browse All Topics
          </a>
        </h3>
      </div>
    </section>
  );
};

export default Section3;
