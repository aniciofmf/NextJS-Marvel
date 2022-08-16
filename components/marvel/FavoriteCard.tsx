import { FC } from "react";
import { useRouter } from "next/router";

import { Grid, Card } from "@nextui-org/react";

export const FavoriteCard: FC<{ characterId: number }> = ({ characterId }) => {
	const router = useRouter();

	const onClick = () => {};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={characterId} onClick={onClick}>
			{characterId}
			{/*<Card isHoverable isPressable css={{ padding: 10 }}></Card>*/}
		</Grid>
	);
};
