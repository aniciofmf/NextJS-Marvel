import { Spacer, Text, useTheme } from "@nextui-org/react";
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
			}}
		>
			<Text color="white" h2>
				MARVEL
			</Text>

			<Spacer />
			<Text color="white" h2>
				FAV
			</Text>
		</div>
	);
};
