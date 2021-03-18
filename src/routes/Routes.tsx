import { BrowserRouter, Switch, Route } from "react-router-dom";
import React  from "react";
import { HomeView } from "../views/HomeView";
import { AboutView } from "../views/AboutView";
import RoutingPath from "./RoutingPath";
import { SignInView } from "../views/SignInView";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Routes = (props: {children: React.ReactChild}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children } = props ;  
	return(
		<BrowserRouter> 
			<Switch>
				< Route exact path={RoutingPath.homeView} component={HomeView} />
				< Route exact path={RoutingPath.aboutView} component={AboutView} />
				< Route exact path={RoutingPath.signInView} component={SignInView} />
				< Route component ={HomeView} /> 
			</Switch>

		</BrowserRouter>
	);

}; 

// <BrowserRouter> tar hand om våran routes 
// < Route component ={HomeView} />  kan använda error view  ex: erorr 404 ( i vanligt liv  )
// </Switch> set till att endast en navigation kan laddas in åt gången , Routes : URL ( i vanligt liv  )