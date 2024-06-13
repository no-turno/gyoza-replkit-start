#!/usr/bin/env bun
const isBun = "Bun" in globalThis && process.isBun;

if (!isBun) {
	console.log("replkit-start must be run in Bun");
	process.exit(1);
}

const [command, ...options] = process.argv.slice(2);

const cwd = process.cwd();

//@ts-ignore
if (process.env.LOG === 1)
console.table({
	cwd,
	context: {
		argv: {
			command,
			options,
		},
	},
});
