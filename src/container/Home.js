import React from "react";
import Button from "../components/button";
import img1 from "../assets/hereditary-final.jpg";
import img2 from "../assets/huracan.jpg";
import NN from "../components/NN";
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="aa">
        <div className="C">
        <Button  img={img2} />
        </div>
        <Button variant="black" text="kINO" img={img1} />
        <Button variant="black" text="kINO" img={img1} />
        <Button variant="black" text="kINO" img={img1} />
        <Button variant="black" text="kINO" img={img1} />
        <Button variant="black" text="tkINO" img={img1} />
      </div>
      <div className="gg">
        <div className="dd">
          <Button variant="blue" text="FDDH" img={img1} />
          <Button variant="blue" text="FDFFG" img={img1} />
          <Button variant="blue" text="tGGGG" img={img1} />
          <Button variant="blue" text="GGGGG" img={img1} />
        </div>
        <div>
          <NN/>
        </div>
      </div>
      
    </>
  );
};
export default Home;
