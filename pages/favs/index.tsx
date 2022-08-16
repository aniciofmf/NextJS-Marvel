import { useEffect, useState } from "react";
import { NextPage } from "next";

import { Layout } from "../../components/layouts";
import { NoFavs } from "../../components/ui";
import { storageFavs } from "../../utils";
import { FavCharacters } from "../../components/marvel/FavCharacters";

const FavsPage: NextPage = () => {
	const [favsCharacters, setFavCharacter] = useState<number[]>([]);

	useEffect(() => {
		setFavCharacter(storageFavs.characters());
	}, []);

	return (
		<Layout title="Marvel - Favorites">{favsCharacters.length === 0 ? <NoFavs /> : <FavCharacters characters={favsCharacters} />}</Layout>
	);
};

export default FavsPage;
