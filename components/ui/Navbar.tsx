import { Text, useTheme } from "@nextui-org/react";
import React from "react";

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0px 10px",
				backgroundColor: "#ed1d24",
				fontFamily: "Marvel",
				letterSpacing: 0,
			}}
		>
			<Text color="white" h1>
				MARVEL
			</Text>
		</div>
	);
};
