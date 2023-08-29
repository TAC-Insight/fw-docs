import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

import Logo from "./assets/logo.png";

// get current year
const year = new Date().getFullYear();

const config: DocsThemeConfig = {
	faviconGlyph: "?",
	logo: (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "0.5rem",
				fontWeight: 600,
			}}
		>
			<Image src={Logo} alt="Fast-Weigh Logo" width={30} height={30} />{" "}
			Fast-Weigh Documentation
		</div>
	),
	docsRepositoryBase: "https://github.com/tac-insight/fw-docs",
	footer: {
		text: "Fast-Weigh, Powered by TAC Insight © " + year,
	},
	toc: {
		component: () => null,
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s : Fast-Weigh Knowledge Base",
			description: "Fast-Weigh Knowledge Base / Documentation",
			openGraph: {
				type: "website",
				locale: "en_US",
				url: "https://docs.tacinsight.com",
				siteName: "Fast-Weigh Knowledge Base",
			},
		};
	},
};

export default config;
