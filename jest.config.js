module.exports = {
	name: "ReactNodeExpress",
	bail: 1,
	verbose: true,
	collectCoverageFrom: [
		"src/**/*.{js,jsx,ts,tsx}",
		"!<rootDir>/node_modules/",
		"!<rootDir>/webpack/",
	],
	testMatch: ["<rootDir>/test/**/?(*.)(spec|test).js"],
	testPathIgnorePatterns: ["<rootDir>/(node_modules|bin|build)"],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	moduleDirectories: ["node_modules", "src"],
	transformIgnorePatterns: [`/node_modules/`],
	transform: {
		"^.+\\.(js|jsx)?$": "babel-jest",
		"^.+\\.(css)$": "identity-obj-proxy",
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|svg|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/src/__mocks__/fileMock.js",
		"\\.(css|less)$": "identity-obj-proxy",
	},
};
