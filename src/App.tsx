import React from "react";
import { Routes } from "./routes/Routes";
import { UserProvider} from "./shared/provider/UserProvider";
import { Navigation } from "./components/navigation/Navigation";
import "./shared/css/Global.css";





// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App()  {  
	return (
		<UserProvider>
			<Routes>
				<Navigation />
			</Routes>
		</UserProvider>
	);
}

export default App;



//<Greeting name = "Yazan" />