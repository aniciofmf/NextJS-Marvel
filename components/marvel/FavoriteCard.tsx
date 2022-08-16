import { FC } from "react";
import { useRouter } from "next/router";

import { Grid, Card } from "@nextui-org/react";

export const FavoriteCard: FC<{ characterId: number; characterImg: string }> = ({ characterId, characterImg }) => {
	const router = useRouter();

	const onClick = () => {
		router.push(`/character/${characterId}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={characterId} onClick={onClick}>
			<Card isHoverable isPressable css={{ padding: 10 }}>
				<Card.Image src={characterImg} width={"100%"} height={140} />
			</Card>
		</Grid>
	);
};
