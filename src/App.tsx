import React from "react";
//import {Greeting} from "./components/greeting/Greeting";
import { Routes } from "./routes/Routes";
import {DesktopNavigation} from "./components/navigation/desktopnavigation/DesktopNavigation";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	return (
		<Routes>
			<DesktopNavigation/>
    
		</Routes>
	);
}

export default App;



//<Greeting name = "Yazan" />