import React from "react";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import marveldp from "../../images/marveldp.png";
import Image from "next/image";

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
			<Image src={marveldp} width={70} height={60} style={{ marginLeft: "0px", borderRadius: "40px" }} />

			<Text color="white" h2 style={{ marginLeft: "10px", marginTop: "10px" }}>
				MARVEL
			</Text>

			<Spacer css={{ flex: 1 }} />

			<Text color="white" h2>
				FAV
			</Text>
		</div>
	);
};
