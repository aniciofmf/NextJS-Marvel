import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Grid, Card, Text, Button, Image, Container } from "@nextui-org/react";

import { marvelApi } from "../../api";
import { Layout } from "../../components/layouts";
import { MarvelCharacterResponse, Character } from "../../interfaces/marvelCharacterResponse.interface";

const CharacterPage: NextPage<{ character: Character }> = ({ character }) => {
	const router = useRouter();

	return (
		<Layout title={character.name}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image
								src={character.thumbnail.path + "." + character.thumbnail.extension}
								alt={character.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
							<Text h1 transform="capitalize">
								{character.name.toUpperCase()}
							</Text>

							<Button>ADD TO FAVS</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30}>COMICS:</Text>

							<Container direction="row" display="flex" gap={0}></Container>

							<Text size={30}>SERIES:</Text>

							<Container direction="row" display="flex" gap={0}></Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// Given the non-linear nature of the ids in the Marvel APIs there's no other way to hardcore them for SSG
	const characterIds = [
		"1011334",
		"1017100",
		"1009144",
		"1010699",
		"1009146",
		"1016823",
		"1009148",
		"1009149",
		"1010903",
		"1011266",
		"1010354",
		"1010846",
		"1017851",
		"1012717",
		"1011297",
		"1011031",
		"1009150",
		"1011198",
		"1011175",
		"1011136",
		"1011176",
		"1010870",
		"1011194",
		"1011170",
		"1009240",
		"1011120",
		"1010836",
		"1010755",
		"1011214",
		"1009497",
	];

	return {
		paths: characterIds.map((id) => ({
			params: { id },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };

	const {
		env: { MARVEL_API_TS = null, MARVEL_API_KEY = null, MARVEL_API_HASH = null },
	} = process;

	const { data } = await marvelApi.get<MarvelCharacterResponse>(
		`/characters/${id}?ts=${MARVEL_API_TS}&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}&limit=30`
	);

	return {
		props: {
			character: data.data.results[0],
		},
	};
};

export default CharacterPage;
