import React, { FC } from "react";
import Head from "next/head";

import { Navbar } from "../ui/Navbar";

interface Props {
	children: React.ReactNode;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || ""}</title>
				<meta name="author" content="" />
				<meta name="description" content="Marvel Character Info" />
			</Head>
			<Navbar />

			<main style={{ padding: "0px 20px" }}>{children}</main>
		</>
	);
};
