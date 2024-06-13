import { type ExtensionConfig } from "./types";

async function writeManifestJSON(file: any, config: any) {
	await Bun.write(`${process.cwd()}/extension.json`, JSON.stringify(config, null, 2))
	return await Bun.file(`${process.cwd()}/extension.json`).json()
}

export async function createConfigManifest(extensionConfig: ExtensionConfig, options: {
	sync: boolean
}) {
	const manifestFile = Bun.file(`${process.cwd()}/extension.json`)

	if (!(await manifestFile.exists())) {
		return await writeManifestJSON(manifestFile, extensionConfig)
	}

	const manifestJson = JSON.parse(await manifestFile.text())

	const deepEquals = Bun.deepEquals(manifestJson, JSON.stringify(extensionConfig, null, 2))

	if (options.sync) {
		return await writeManifestJSON(manifestFile, extensionConfig)
	}

	const updateConfig = !deepEquals && prompt('Should sync config? (y/n)', 'n')

	if (updateConfig && updateConfig === "y") {
		return await writeManifestJSON(manifestFile, extensionConfig)
	}
}

export async function defineConfig<T extends ExtensionConfig>(
	userConfig: T,
	options: {
		sync: boolean
	} = {
			sync: false
		}
): Promise<T> {
	return await createConfigManifest(userConfig, options)
}
