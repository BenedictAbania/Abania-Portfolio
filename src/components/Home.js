import React from 'react';

function Home() {
  return (
    <header className="section" id="home">
      <img 
        src="/images/profile-pic.jpg" 
        alt="A description of you" 
        className="profile-picture"
      />
      <h1>BENEDICT ABANIA</h1>
      <p>Frontend Developer | React Enthusiast | Lifelong Learner</p>
    </header>
  );
}

export default Home;