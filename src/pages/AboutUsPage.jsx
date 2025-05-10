import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800">About Me - Soham Dave</h1>

      <div className="mt-6 text-gray-600">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-200">
          <img 
              src="profile-photo.jpg" 
              alt="Soham Dave" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div className="mt-4 md:ml-6">
            <h2 className="text-2xl font-semibold">Soham Dave</h2>
            <p className="text-sm">Email: <a href="mailto:davesohamm@gmail.com" className="text-blue-500">davesohamm@gmail.com</a></p>
            <p className="text-sm">Phone: +91 9714028127</p>
            <p className="text-sm">GitHub: <a href="https://github.com/davesohamm" className="text-blue-500">davesohamm</a></p>
            <p className="text-sm">LinkedIn: <a href="https://in.linkedin.com/in/davesohamm" className="text-blue-500">davesohamm</a></p>
            <p className="text-sm">Medium: <a href="https://medium.com/@davesohamm" className="text-blue-500">davesohamm</a></p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Education</h3>
          <div className="mt-3 space-y-2">
            <div>
              <h4 className="font-semibold">Vishwakarma Government Engineering College Chandkheda, GTU</h4>
              <p>Bachelors of Engineering in Computer Engineering (CPI: 8.42/10.0)</p>
              <p className="text-sm">Jul 2021 - Jun 2025</p>
            </div>
            <div>
              <h4 className="font-semibold">Sahajanand School Of Achiever Gandhinagar</h4>
              <p>High School with PCM subjects (HSC: 94.46%)</p>
              <p className="text-sm">ACPC Rank: 1453</p>
            </div>
            <div>
              <h4 className="font-semibold">Little Angels’ School Dahegam</h4>
              <p>Secondary School (SSC: 93.5%)</p>
              <p className="text-sm">First rank in the Center</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Projects</h3>
          <div className="mt-3 space-y-4">
            <div>
              <h4 className="font-semibold">JobFitFinder | Summer Project 6th Semester (July 2024)</h4>
              <p className="text-sm">Technologies: Python, Flask, Machine Learning, Jupyter Notebook, Pandas, Scikit-learn, NumPy, PDFMiner, NLTK, TF-IDF, HTML</p>
              <ul className="list-disc ml-5">
                <li>Developed a web application to extract and classify resume information using machine learning.</li>
                <li>Implemented feature extraction for skills, education, and contact details from PDF and TXT resumes.</li>
                <li>Designed an interactive front-end for users to upload resumes and view classified data.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">TOONS – An IoT Robot (Jun 2023 - Jun 2024)</h4>
              <p className="text-sm">Technologies: Arduino, Bluetooth and WiFi Modules, sensors, Google Maps API</p>
              <ul className="list-disc ml-5">
                <li>Spearheaded the TOONS project, integrating servo motors and communication modules.</li>
                <li>Orchestrated hardware-software fusion, refining motor control and communication.</li>
                <li>Showcased adept project management, delivering a pioneering navigation solution.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">GTU Platformer – 2D Game (Nov 2023 - Mar 2024)</h4>
              <p className="text-sm">Technologies: Python, Pygame, Photoshop</p>
              <ul className="list-disc ml-5">
                <li>Launched "Escape GTU," a platformer game with precise collisions and immersive gameplay.</li>
                <li>Designed challenging levels with seamless controls, offering endless entertainment.</li>
                <li>Enjoy hours of gameplay with randomized block generation and an engaging storyline.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">AR Navigation | HackVGEC Hackathon – Special Appreciation Award (April 2023)</h4>
              <p className="text-sm">Technologies: Leaflet, MongoDB, React.js, NodeJS, Spatial-Indexes, HTML, CSS, JavaScript, Figma</p>
              <ul className="list-disc ml-5">
                <li>Developed AR Indoor Navigation system using MongoDB with Spatial Indexing for campus navigation.</li>
                <li>Explored BLE beacons, WiFi, and GPS alternatives before settling on MongoDB.</li>
                <li>Architectural setup includes an admin panel for map management and integrated backend.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Awards & Achievements</h3>
          <ul className="mt-3 list-disc ml-5">
            <li>3rd Position Winner at Ingenium Hackathon by Ahmedabad University (2024)</li>
            <li>Special Appreciation HackVGEC Hackathon 2023 at VGEC, Chandkheda</li>
            <li>I’Papyrus 2021 – Presented a paper at DAIICT, Gandhinagar I’Fest 2021</li>
            <li>World IP Day Quiz Winner 1st Prize in the National level Quiz event held at GTU</li>
            <li>Unity 101 – Completed a course on Zenva Academy, Basics of Unity Game Engine</li>
            <li>Trekking Camp – Participated in a Trekking Camp at Polo by Invincible NGO</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
          <ul className="mt-3 list-disc ml-5">
            <li>Languages: Python, C++, C, JavaScript, JAVA</li>
            <li>Web Technologies: HTML, CSS, Node, React, JSON</li>
            <li>Dev Tools: Git, GitHub, Vercel, VS Code, Figma</li>
            <li>Databases: Postgres, MySQL, MongoDB</li>
            <li>Engines: Unreal Engine 5, Unity, Godot</li>
            <li>Art: Blender, Photoshop, Adobe Premiere Pro</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Publications</h3>
          <p className="mt-3">
            ShriShivSohamStotram – Published a book in Sanskrit, consisting of 30 self-written Shlokas for God Shiva. 
            Gujarati and English translations and explanations are included in the book itself. It expresses reverence and devotion towards Shiva,
            acknowledging his significance as the supreme deity and seeking his blessings. The verses celebrate Shiva's role as the creator,
            sustainer, and destroyer of the universe, embodying qualities of mercy, wisdom, and transcendence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
