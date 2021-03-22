import React from "react";
import {useState, createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContext = createContext <any> (null);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const UserProvider = (props:{children: React.ReactChild }) => {
	const [authUser, setAuthUser] = useState();
	const {children} = props;
	return (
		<UserContext.Provider value = {[authUser, setAuthUser ]}>
			{children}
		</UserContext.Provider> 
	);

}; 