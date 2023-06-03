import React from 'react';
import './Home.css'; // Create a CSS file for Home component

function Home() {
    return (
        <div className="home-container">
            <div className="about-container">
                <h1>Welcome To Pick3Data</h1>
                <h2>You're probably visiting this website now because you're genuinely interested in obtaining information about the pick3 lottery to increase your chances of winning and to that I'd like to say welcome.</h2>
                <p>What we do: first off we do all the data crunching per state per drawing...daily and nitely draws and put that data in a combination format based on highest statistical value.</p>
                <p>99% of players simply don't have the time and know how to interpret data...it's just too troubling. Let's face it pick3 is hard to master even the most elite players find it troubling.</p>
                <p>First off most novice players get the odds completely wrong. Here is an example: chances of winning are 1/1000. Your chances are NOT 1/1000 as some mistakenly conclude. They are 1/1000 IF you play 1000 combinations. The trouble with this is you're not winning anything you're actually losing $500 if played straight.</p>
                <p>A combination like 467 can go thousands of times before they hit because of mathematical rules regarding degrees of certainty</p>
                <p>Common misconceptions about the lottery:</p>
                <ul>
                    <li>1. Combinations follow each other. When someone tells you that combinations tend to follow previous combinations they know absolutely nothing about statistics and this kind of ignorant thinking is laughable.</li>
                    <li>2. The idea that just because something is missing that it's going to hit the next draw...this too is ignorance.</li>
                </ul>
                <p>Fact is most strategies on the net are worthless given they're not written by actual statistics. Even with the best statistics it's difficult. Binomial/hypergeometric distribution have limited success because of set replace.</p>
                <p>What we know: Combinations, pairs, single digits are like water they tend to level out over time, so interpreting when the leveling occurs is difficult.</p>
                <p>We will not share our algorithms/formulas with the public but we will offer the data that our formulas provide.</p>
                <p>Whatever state you live in we will provide data for that state. Real easy basic stuff that doesn't take hardly any time to make a decision about playing.</p>
            </div>
        </div>
    );
}

export default Home;
