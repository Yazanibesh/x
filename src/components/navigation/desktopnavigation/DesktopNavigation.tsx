import React from "react";
import "./DesktopNavigation.css";
import Logotype from "../../../shared/images/logotype.svg"; 

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const  DesktopNavigation = () => {
	return (
		<div className = "desktopnavigationWrapper">
			<img className = "navigationLogotype"
				src = { Logotype}
				alt = {" "} />
		</div>
	);
};
