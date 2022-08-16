import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card, Row, Text } from "@nextui-org/react";

import { Character } from "../../interfaces/marvelResponse.interface";

export const CharacaterCard: FC<{ character: Character }> = ({ character }) => {
	const router = useRouter();
	const goToCharacter = () => {
		router.push(`/character/${character.id}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={character.id}>
			<Card isHoverable isPressable variant="bordered" onPress={goToCharacter}>
				<Card.Body css={{ p: 1, marginTop: "5px" }}>
					<Card.Image src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} width="100%" height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text>{character.name.toUpperCase()}</Text>
						<Text>#{character.id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
