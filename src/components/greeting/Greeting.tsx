import React from "react";
import "./Greeting.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Greeting = (props: {name: string}) => {
	return(
		<div>
			{props.name}
			
			<h1 className="title"> Hello! awsome Webesite ok</h1>
			
		</div>
       
	);
};