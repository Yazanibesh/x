import React from "react";
import "./DesktopNavigation.css";
import Logotype from "../../../shared/images/logotype.svg"; 
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const  DesktopNavigation = () => {
	const history = useHistory();
	return (
		<div className = "desktopnavigationWrapper">
			<img className = "navigationLogotype"
				src = { Logotype}
				alt = {" "} />

			<span onClick = {() => history.push(RoutingPath.homeView)}>Products</span>
			<span onClick = {() => history.push(RoutingPath.homeView)}>Brands</span>
			<span onClick = {() => history.push(RoutingPath.homeView)}>News</span>
			<span onClick = {() => history.push(RoutingPath.homeView)}>Guidline</span>
			<span onClick = {() => history.push(RoutingPath.signInView)}>Sign in</span>
		</div>
	);
};
 