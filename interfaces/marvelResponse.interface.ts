export interface MarvelResponse {
	data: Data;
}

export interface Data {
	results: Character[];
}

export interface Character {
	id: number;
	name: string;
	thumbnail: Thumbnail;
}

export interface Thumbnail {
	path: string;
	extension: Extension;
}

export enum Extension {
	GIF = "gif",
	JPG = "jpg",
}
