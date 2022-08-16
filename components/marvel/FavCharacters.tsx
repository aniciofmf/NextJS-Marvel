import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { FavoriteCard } from "./FavoriteCard";

import { storageFavs } from "../../utils";

export const FavCharacters: FC<{ characters: number[] }> = ({ characters }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{characters.map((id) => (
				<FavoriteCard key={id} characterId={id} characterImg={storageFavs.getItem(`image-${id}`)} />
			))}
		</Grid.Container>
	);
};
