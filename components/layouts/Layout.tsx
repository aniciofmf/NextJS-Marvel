import React, { FC } from "react";
import Head from "next/head";

import { Navbar } from "../ui/Navbar";

interface Props {
	children: React.ReactNode;
	title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || ""}</title>
				<meta name="author" content="" />
				<meta name="description" content="Marvel Character Info" />
				<meta property="og:title" content="Marvel" />
				<meta property="og:description" content="Marvel" />
				<meta property="og:image" content={`${origin}/imgs/marvel.jpg`} />
			</Head>
			<Navbar />

			<main style={{ padding: "0px 20px" }}>{children}</main>
		</>
	);
};
