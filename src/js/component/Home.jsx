import React from "react";
import { useState } from "react";
import '../../styles/Home.css'

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red")
	return (
		<>
		<div className="stick">
			</div>
		<div className="traffic-light">
			<div  onClick={()=>{setSelectedColor("red")}} className={"light red " + (selectedColor === "red" ? " glow" : "")  }></div>
			<div  onClick={()=>{setSelectedColor("yellow")}} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div  onClick={()=>{setSelectedColor("green")}} className={"light green" +(selectedColor === "green" ? " glow" : "") }></div>
		</div>
		</>
	)
}

export default Home;