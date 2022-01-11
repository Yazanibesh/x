import React from "react";
import "./MobileNavigation.css";
import { HamburgerButtom } from "./hamburgerbuttom/HamburgerButtom";
import { SideBar} from "./sidebar/SideBar";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const MobileNavigation =() => {
	return (
		<div>
			<HamburgerButtom />
			<SideBar />
		</div>
	);
};
