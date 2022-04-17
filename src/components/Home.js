import './Home.css';
import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <h2 className="headline">Welcome Math Magicians!</h2>
      <div className="page-content">
        <p className="paragraph">Mathematics (from Ancient Greek μάθημα (máthēma) &apos;knowledge, study, learning&apos;) is an area of knowledge, which includes the study of such topics as numbers, formulas and related structures, shapes and spaces in which they are contained, and quantities and their changes. There is no general consensus about its exact scope or epistemological status.</p>
        <p className="paragraph">Most of mathematical activity consists of discovering and proving (by pure reasoning) properties of abstract objects. These objects are either abstractions from nature (such as natural numbers or lines), or (in modern mathematics) abstract entities of which certain properties, called axioms, are stipulated. A proof consists of a succession of applications of some deductive rules to already known results, including previously proved theorems, axioms and (in case of abstraction from nature) some basic properties that are considered as true starting points of the theory under consideration. The result of a proof is called a theorem.</p>
        <p className="paragraph">Mathematics is essential in many fields, including natural sciences, engineering, medicine, finance, computer science and social sciences. Some areas of mathematics, such as statistics and game theory, are developed in direct correlation with their applications, and are often grouped under the name of applied mathematics. Other mathematical areas are developed independently from any application (and are therefore called pure mathematics), but practical applications are often discovered later.[8][9] A fitting example is the problem of integer factorization, which goes back to Euclid, but which had no practical application before its use in the RSA cryptosystem (for the security of computer networks).</p>
      </div>
    </div>
  );
}

export default HomePage;
