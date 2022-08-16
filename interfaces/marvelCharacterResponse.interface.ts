export interface MarvelCharacterResponse {
	code: number;
	status: string;
	data: Data;
}

export interface Data {
	results: Character[];
}

export interface Character {
	id: number;
	name: string;
	description: string;
	thumbnail: Thumbnail;
	resourceURI: string;
	comics: Comics;
	series: Comics;
	urls: URL[];
}

export interface Comics {
	available: number;
	collectionURI: string;
	items: ComicsItem[];
	returned: number;
}

export interface ComicsItem {
	name: string;
	resourceURI: string;
}

export interface StoriesItem {
	name: string;
	resourceURI: string;
}

export interface Thumbnail {
	path: string;
	extension: string;
}

export interface URL {
	type: string;
	url: string;
}
