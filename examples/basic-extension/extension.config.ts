import { defineConfig } from "@gyoza/replkit-start-config"

export default await defineConfig({
	name: "My extension",
	description: "A new Replit Extension",
	icon: "/replit.svg",
	tools: [
		{
			name: "Example tool",
			handler: "/tool",
			icon: "/replit.svg",
		},
	],
	scopes: [{
		name: "experimental-api",
		reason: "This is an experimental API",
	}],
}, {
	sync: true
});
