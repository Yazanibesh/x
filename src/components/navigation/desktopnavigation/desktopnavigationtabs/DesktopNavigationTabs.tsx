import React from "react";
import "./DesktopNavigationTabs.css";
import {useHistory} from "react-router-dom";
import RoutingPath from "../../../../routes/RoutingPath";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const DesktopNavigationTabs = () => {
	const history = useHistory();
	return (
		<ul className = "ulTabsWrapper">
			<li className = "liTabs" onClick = {() => history.push(RoutingPath.shopView)}>Butik</li>
			<li className = "liTabs" onClick = {() => history.push(RoutingPath.accessoriesView)}>Accessoarer</li>
			<li className = "liTabs" onClick = {() => history.push(RoutingPath.brandsView)}>Varumärken</li>
			<li className = "liTabs" onClick = {() => history.push(RoutingPath.newsView)}>Nyhter</li>
			<li className = "liTabs" onClick = {() => history.push(RoutingPath.expertiesView)}>Expertis</li>
		</ul>
	); 
};

