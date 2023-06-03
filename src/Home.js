import React from 'react';
import './Home.css'; // Create a CSS file for Home component

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome To Pick3Data</h1>
      <div className="about-container">
        <h2>You're probably visiting this website now because you're genuinely interested in obtaining information about the pick3 lottery to increase your chances of winning and to that, I'd like to say welcome.</h2>
        <p>What we do:</p>
        <ul>
          <li>First off, we do all the data crunching per state per drawing...daily and nightly draws and put that data in a combination format based on the highest statistical value.</li>
          <li>99% of players simply don't have the time and know-how to interpret data...it's just too troubling. Let's face it; pick3 is hard to master even for the most elite players.</li>
        </ul>
        <p>Common misconceptions about the lottery:</p>
        <ul>
          <li>Combinations do not follow each other. When someone tells you that combinations tend to follow previous combinations, they know absolutely nothing about statistics, and this kind of ignorant thinking is laughable.</li>
          <li>The idea that just because something is missing, it's going to hit the next draw...this too is ignorance.</li>
        </ul>
        <p>Fact is most strategies on the net are worthless because they're not based on actual statistics. Even with the best statistics, it's difficult. Binomial/hypergeometric distribution has limited success because of set replace.</p>
        <p>What we know: Combinations, pairs, single digits tend to level out over time, so interpreting when the leveling occurs is difficult.</p>
        <p>We will not share our algorithms/formulas with the public, but we will offer the data that our formulas provide.</p>
        <p>Whatever state you live in, we will provide data for that state. Easy basic stuff that doesn't take hardly any time to make a decision about playing.</p>
      </div>
    </div>
  );
}

export default Home;
