import "./index.css";
import "./fonts/WorkSans-Regular.ttf";
import "./fonts/WorkSans-SemiBold.ttf";
import "./fonts/WorkSans-Bold.ttf";

import Accordion from "./components/Accordion"



function App() {
  return (
    <div className="box">
      <div className="logo-wrapper">
        <img className="logo" src="/images/icon-star.svg" alt="star icon" />
        <h2 className="logo-text">FAQs</h2>
      </div>
      <Accordion />
    </div>
  );
}

export default App;
