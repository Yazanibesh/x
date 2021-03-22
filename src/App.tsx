import React from "react";
import { Routes } from "./routes/Routes";
import { UserProvider} from "./shared/provider/UserProvider";
import {DesktopNavigation} from "./components/navigation/desktopnavigation/DesktopNavigation";
import "./shared/css/Global.css";





// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App()  {  
	return (
		<UserProvider>
			<Routes>
				<DesktopNavigation/>
			</Routes>
		</UserProvider>
	);
}

export default App;



//<Greeting name = "Yazan" />