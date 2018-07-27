const {SiteGenerator} = require('./site-generator')
const {root} = require('./helpers/path')
const {getRoutes} = require('./routes')

async function main() {
	const site = new SiteGenerator({
		importsRoot: root('_site'),
		templatesDirName: 'templates',
		ejsOptions: {
			rmWhitespace: true,
		},
		beautifyHtmlOptions: {
			indent_with_tabs: true,
			end_with_newline: true,
		},
	})

	const routes = await getRoutes()

	site.setRoutes(routes)

	await site.writeToDir(root())
}

main()
