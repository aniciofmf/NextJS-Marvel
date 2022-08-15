import { GetStaticProps, NextPage } from "next";
import { Card, Grid, Text, Row } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { marvelApi } from "../api/marvelApi";
import { MarvelResponse, Character } from "../interfaces/marvelResponse.interface";
import { CharacaterCard } from "../components/marvel/CharacaterCard";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
	return (
		<Layout title="Home">
			<Grid.Container gap={2} justify="flex-start">
				{characters.map((character) => (
					<CharacaterCard character={character} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const {
		env: { MARVEL_API_TS = null, MARVEL_API_KEY = null, MARVEL_API_HASH = null },
	} = process;

	const { data } = await marvelApi.get<MarvelResponse>(
		`/characters?ts=${MARVEL_API_TS}&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}&limit=30`
	);

	return {
		props: {
			characters: data.data.results,
		},
	};
};

export default Home;
