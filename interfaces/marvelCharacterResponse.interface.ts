export interface MarvelCharacterResponse {
	data: Data;
}

export interface Data {
	results: Character[];
}

export interface Character {
	id: number;
	name: string;
	thumbnail: Thumbnail;
	comics: Comics;
	series: Comics;
}

export interface Comics {
	items: ComicsItem[];
}

export interface ComicsItem {
	name: string;
}

export interface Thumbnail {
	path: string;
	extension: string;
}
