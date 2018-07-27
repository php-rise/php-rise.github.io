const {basename} = require('path')
const readdir = require('recursive-readdir')
const {root} = require('./helpers/path')

exports.getRoutes = async function getRoutes() {
	const templatesDir = root('_site/templates')
	const filePaths = await readdir(templatesDir)
	const routes = {}

	for (const filePath of filePaths) {
		if (basename(filePath).startsWith('_')) {
			continue
		}

		const routePath = filePath.replace(templatesDir, '').replace('.ejs', '.html')
		const templatePath = filePath.replace(templatesDir, '').slice(1).replace('.ejs', '')

		routes[routePath] = templatePath
	}

	return routes
}
