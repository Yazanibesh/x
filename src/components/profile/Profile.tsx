import React from "react";
import {useContext} from "react"; 
import { UserContext} from "../../shared/provider/UserProvider";
import "./Profile.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Profile = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ authUser, setAuthUser ] = useContext(UserContext);
	return (
		<div className = "profileWrapper">
			<img className="profileImg" src ={"https://thispersondoesnotexist.com/image"} alt ={""} />
			{authUser.username}
			<div className="profileDropDown">
				<span>alternative 1 </span>
				<span>alternative 2 </span>
				<span>alternative 3 </span>
				<span>alternative 4 </span>
				<span>alternative 5 </span>
			</div>
		</div>
	);
};
