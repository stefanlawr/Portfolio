export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/components/copyright.svelte"),
	() => import("../../src/routes/components/nav.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/work.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"about": [[0, 2], [1]],
	"work": [[0, 6], [1]],
	"components/copyright": [[0, 3], [1]],
	"components/nav": [[0, 4], [1]]
};