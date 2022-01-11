import React from "react";
import "./ProfileDropDown.css";
import {useContext} from "react"; 
import { UserContext } from "../../../shared/provider/UserProvider";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const  ProfileDropDown = () => {
	const history = useHistory();
	const [authUser,setAuthUser] = useContext(UserContext);
	
	const logout = () => {
		setAuthUser(false);
		localStorage.removeItem("user");
		history.push(RoutingPath.homeView);
	};

	return (
		<div className="profileDropDown">
			<span>alternative 1 </span>
			<span>alternative 2 </span>
			<span>alternative 3 </span>
			<span>alternative 4 </span>
			<span onClick = {() =>  logout () }>Sign out</span>
            
		</div>
	);
};
