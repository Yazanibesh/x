import { BrowserRouter, Switch, Route } from "react-router-dom";
import React  from "react";
import { HomeView } from "../views/HomeView";
import { SignInView } from "../views/SignInView";
import {AccessoriesView } from "../views/navigationtabviews/accessories/AccessoriesView"; 
import {BrandsView} from "../views/navigationtabviews/brands/BrandsView";
import {ExpertiesView}	from "../views/navigationtabviews/experties/ExpertiesView";
import {NewsView} from "../views/navigationtabviews/news/NewsView";
import {ShopView} from "../views/navigationtabviews/shop/ShopView";
import RoutingPath from "./RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import {useEffect, useContext} from "react";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Routes = (props: {children: React.ReactChild}) => {
	
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authUser, setAuthUser] = useContext(UserContext);
	const { children } = props ; 
	
	useEffect(() => {
		setAuthUser({username :localStorage.getItem("user")});
		
	} ,[]);
	return(	
		<BrowserRouter> 
			{children}
			<Switch>
				< Route exact path={RoutingPath.homeView} component={HomeView} />				
				< Route exact path={RoutingPath.signInView} component={SignInView} />
				< Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
				< Route exact path={RoutingPath.brandsView} component={BrandsView} />
				< Route exact path={RoutingPath.expertiesView} component={ExpertiesView} />
				< Route exact path={RoutingPath.newsView} component={NewsView} />
				< Route exact path={RoutingPath.shopView} component={ShopView} />
				< Route component ={HomeView} /> 
			</Switch>

		</BrowserRouter>
	);

}; 

// <BrowserRouter> tar hand om våran routes 
// < Route component ={HomeView} />  kan använda error view  ex: erorr 404 ( i vanligt liv  )
// </Switch> set till att endast en navigation kan laddas in åt gången , Routes : URL ( i vanligt liv  )