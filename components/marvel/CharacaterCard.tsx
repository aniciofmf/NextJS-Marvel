import { FC } from "react";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { Character } from "../../interfaces/marvelResponse.interface";

export const CharacaterCard: FC<{ character: Character }> = ({ character }) => {
	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={character.id}>
			<Card isHoverable isPressable variant="bordered">
				<Card.Body css={{ p: 1, marginTop: "5px" }}>
					<Card.Image src={character.thumbnail.path + "." + character.thumbnail.extension} width="100%" height={140} />
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
