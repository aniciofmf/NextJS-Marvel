import Image from "next/image";
import { Container, Text } from "@nextui-org/react";

import nofavimg from "../../images/nofav.jpg";

export const NoFavs = () => {
	return (
		<Container
			css={{
				display: "flex",
				flexDirection: "column",
				height: "calc(100vh - 100px)",
				alignItems: "center",
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<Text h1>You have no Favorites</Text>
		</Container>
	);
};
