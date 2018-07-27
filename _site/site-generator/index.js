const {writeFileSync} = require('fs')
const {dirname} = require('path')
const mkdirp = require('mkdirp')
const {html: beautifyHtml} = require('js-beautify')
const {TemplateEngine} = require('./template-engine')

const VERSION_PATTERN = /^doc\/(\d+\.\d+)\//

class SiteGenerator {
	constructor(options) {
		this.routes = {}
		this.templateEngine = new TemplateEngine(
			options.importsRoot,
			options.templatesDirName,
			options.ejsOptions
		)
		this.beautifyHtmlOptions = options.beautifyHtmlOptions
	}

	setRoutes(routes) {
		this.routes = routes
	}

	async writeToDir(dir) {
		await this.templateEngine.compile()

		for (const path in this.routes) {
			const route = this.routes[path]
			let content = ''
			if (typeof route === 'string') {
				const props = {}
				const matches = VERSION_PATTERN.exec(route)
				if (matches) {
					props.version = matches[1]
				}
				content = this.templateEngine.render(route, props)
				content = beautifyHtml(content, this.beautifyHtmlOptions)
			} else if (typeof route === 'function') {
				content = route()
			}
			const filePath = dir + '/' + path
			const _dir = dirname(filePath)
			mkdirp.sync(_dir)
			writeFileSync(filePath, content)
		}
	}
}

exports.SiteGenerator = SiteGenerator
