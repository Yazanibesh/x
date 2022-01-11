import React from "react";
import "./Navigation.css";
import { MobileNavigation } from "./mobilenavigation/MobileNavigation";
import { DesktopNavigation } from "./desktopnavigation/DesktopNavigation";
import  {useWindowDimensions } from "../../hooks/useWindowDimensions";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Navigation = () => {
	const {height , width } = useWindowDimensions();	


	const dispalyNavigationDependingOnDvice = () => {
		return ( width<= 1000)
			? <MobileNavigation/>
			: <DesktopNavigation/>;


	}; 
	
	return (
		<div>
			{dispalyNavigationDependingOnDvice ()}
		</div>
	);
};
