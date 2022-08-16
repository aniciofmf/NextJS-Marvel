const LOCALSTORAGE_LABEL = "favs";

const toogleFavs = (id: number) => {
	let favs: number[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_LABEL) || "[]");

	if (favs.includes(id)) {
		favs = favs.filter((cid) => cid !== id);
	} else {
		favs.push(id);
	}

	localStorage.setItem(LOCALSTORAGE_LABEL, JSON.stringify(favs));
};

const exists = (id: number): boolean => {
	if (typeof window === "undefined") return false;

	const favs: number[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_LABEL) || "[]");

	return favs.includes(id);
};

const characters = (): number[] => {
	return JSON.parse(localStorage.getItem(LOCALSTORAGE_LABEL) || "[]");
};

export default { toogleFavs, exists, characters };
