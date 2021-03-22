import React from "react";
import { useState, useContext } from "react";
import {loginCredentials} from "../shared/interface/Interface";
import { useHistory } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SignInView = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const history = useHistory();
	const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({username: "", password: "" });
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authUser, setAuthUser  ] = useContext(UserContext);

	const signIn = () =>{
		
		localStorage.setItem("user",loginCredentials.username);
		setAuthUser(loginCredentials);
		history.push(RoutingPath.homeView); 
	};
	return (
		
		<div>
            
			<h1>{loginCredentials.username} </h1>
			<form>
				<input 
					placeholder = "enter username" 
					onChange ={ event => setLoginCredentials ({...loginCredentials, username: event.target.value}) } /> <br />
				<input
					placeholder = "enter password" 
					onChange ={ event => setLoginCredentials ({...loginCredentials, password: event.target.value}) } />
				<button onClick = {() => signIn()}>Sign in </button>
			</form>
		</div>
	);
};



// usefel codes down side 
//export const SignInView = () => {
//const[value, setValue] = useState("Yazan");

//return (
//	<div>
//		<h1> {value}</h1>
//		<button onClick ={() => setValue (" Not Yazan ")}> Update State Value </button> 
//        username: <input onChange = { event => setValue (event.target.value)} />           
//	</div>
//);
//};