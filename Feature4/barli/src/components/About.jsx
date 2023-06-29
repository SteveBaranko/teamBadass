import React from 'react';
/* 
This is our about page
*/
export default function About() {
  return (
    <section className="bg-gray-100 p-8 rounded">
      <h1 className="text-3xl font-bold mb-4">Welcome to Barli</h1>
      <p className="text-lg text-gray-800">
        We believe that culture has become too generative.
         We hope to improve the information space by spreading verified 
         expert knowledge and reducing the spread of misinformation.
         Everyone else can ask questions, submit media for review, 
        and help improve the quality of our information space.
      </p>
      <p className="text-lg text-gray-800 mt-4">
        If you would like to donate, our PayPal is: "not yet"
      </p>
    </section>
  );
}
