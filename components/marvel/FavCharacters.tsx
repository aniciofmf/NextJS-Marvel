import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { FavoriteCard } from "./FavoriteCard";

export const FavCharacters: FC<{ characters: number[] }> = ({ characters }) => (
	<Grid.Container gap={2} direction="row" justify="flex-start">
		{characters.map((id) => (
			<FavoriteCard key={id} characterId={id} />
		))}
	</Grid.Container>
);
