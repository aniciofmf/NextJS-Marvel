import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, Link } from "@nextui-org/react";

import marveldp from "../../images/marveldp.png";

export const Navbar = () => {
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
				caretColor: "transparent",
			}}
		>
			<Image alt="Marvel" src={marveldp} width={70} height={60} style={{ marginLeft: "0px", borderRadius: "40px" }} />

			<NextLink href="/" passHref>
				<Link>
					<Text color="white" h2 style={{ marginLeft: "10px", marginTop: "10px" }}>
						MARVEL
					</Text>
				</Link>
			</NextLink>

			<Spacer css={{ flex: 1 }} />

			<NextLink href="/favs" passHref>
				<Link>
					<Text color="white" h2 style={{ marginRight: "10px", marginTop: "10px" }}>
						FAVORITES
					</Text>
				</Link>
			</NextLink>
		</div>
	);
};
