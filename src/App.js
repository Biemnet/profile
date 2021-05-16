import { useState } from "react";
import user from "./images/user.jpeg";
import "./App.css";
import Social from "./component/Social";
import Display from "./component/Display";
import Button from "./component/Button";
import Like from "./component/Like";


function App() {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1);
  };

  const [skills, setSkills] = useState();

  const handleGivenName = () => {
    setSkills("My Name is Biemnet");
  };

  const handleYourCourseTrack = () => {
    setSkills("I'm a Frontend Developer");
  };

  return (
    <>
      <body>
        <main class="container">
          <header class="card">
            <img src={user} alt="user" />
          </header>
          <h3>Hi!</h3>
          <p>I'm a Frontend Developer</p>
          <br></br>
          <div className="styling">
            <Display tech={skills} />
            <div className="btns">
            <Button  clickHandler = {handleGivenName} btntext = {"Name"}/>
            <Button  clickHandler = {handleYourCourseTrack} btntext = {"Skills"}/>
            </div>
          </div>
          <Display tech={count} />
          <div className="like">
            <Button clickHandler = {handleCount} btntext= {"Like"} /> 
          </div>
          <br></br>
          <Social />
        </main>
      </body>
    </>
  );
}

export default App;
