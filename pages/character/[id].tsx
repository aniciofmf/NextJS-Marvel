import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { marvelApi } from "../../api";
import { Layout } from "../../components/layouts";
import { MarvelCharacterResponse, Character } from "../../interfaces/marvelCharacterResponse.interface";

const CharacterPage: NextPage<{ character: Character }> = ({ character }) => {
	const router = useRouter();

	return (
		<Layout title={character.name}>
			<></>
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
