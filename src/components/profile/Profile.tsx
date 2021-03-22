import React from "react";
import {useContext} from "react"; 
import { UserContext} from "../../shared/provider/UserProvider";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Profile = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ authUser, setAuthUser ] = useContext(UserContext);
	return (
		<div>
			<img src ={"https://thispersondoesnotexist.com/image"} alt ={""} style ={{width: 50 }}/>
			{authUser.username}
		</div>
	);
};
