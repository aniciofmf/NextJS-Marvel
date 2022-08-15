import { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts";
import { marvelApi } from "../api/marvelApi";
import { MarvelResponse } from "../interfaces/marvelResponse.interface";

const Home: NextPage = (props) => {
	console.log({ props });
	return (
		<Layout title="Home">
			<ul></ul>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { data } = await marvelApi.get<MarvelResponse>(
		`/characters?ts=${process.env.MARVEL_API_TS}&apikey=${process.env.MARVEL_API_KEY}&hash=${process.env.MARVEL_API_HASH}&limit=60`
	);

	return {
		props: {
			characters: data.data.results,
		},
	};
};

export default Home;
