import { BrowserRouter, Switch, Route } from "react-router-dom";
import React  from "react";
import { HomeView } from "../views/HomeView";
import { AboutView } from "../views/AboutView";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Routes = (props: {children: React.ReactChild}) => {
	const { children } = props ;  
	return(
		<BrowserRouter>
			{children}
			<Switch>
				< Route exact path={"/home"} component={HomeView} />
				< Route exact path={"/about"} component={AboutView} />
			</Switch>

		</BrowserRouter>
	);

}; 