import React from "react";
import { useContext} from "react";
import { UserContext} from "../../../shared/provider/UserProvider";
import "./DesktopNavigation.css";
import haha from "../../../shared/images/logotype.svg";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import {Profile} from "../../profile/Profile";
import { DesktopNavigationTabs } from "./desktopnavigationtabs/DesktopNavigationTabs";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const  DesktopNavigation = () => {
	const history = useHistory();
	
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authUser, setAuthUser] = useContext(UserContext);
	const displaySignInButtomOrUsernameDepandingOnAuthentication = () =>{
		return authUser
			? <div className ="profile"><Profile/> </div>
			: <span className = "singInButton" onClick={ () => history.push(RoutingPath.signInView)}>Sign in</span>;

		
	};

	return (
		<div className = "desktopNavigationWrapper">
			<img className = "navigationLogotype"
				src = { haha }
				alt = {" "} />
			<div className ="desktopNavigationTabs" >
				<DesktopNavigationTabs />
			</div>	
			{displaySignInButtomOrUsernameDepandingOnAuthentication()}
			
		</div>
	);
};
 

// istället för : {if (!null || undefined) {} 
//					<span>{authUser.username} </span>	
//					}
// vi använda <span>{authUser?.username} </span>


// istället för : line 13 -> 16
// if (authUser) {
//				return authUser.username 	
//	}else {
//		return <span onClick={ () => history.push(RoutingPath.signInView)}>Signin</span>
//}
