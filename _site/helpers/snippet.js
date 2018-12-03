const {existsSync, readFileSync} = require('fs')
const {extname} = require('path')
const {escapeXML} = require('ejs/lib/utils')
const {root} = require('./path')

function read(filePath) {
	let result = ''
	filePath = root('_site/snippets', filePath)

	if (existsSync(filePath)) {
		result = readFileSync(filePath, {encoding: 'utf8'})

		const ext = extname(filePath)

		if (ext === '.php') {
			const lines = result.split('\n')
			if (lines[0] === '<?php') {
				lines.splice(0, 1)
			}
			result = lines.join('\n')
		}
	} else {
		throw new Error(filePath + ' not found')
	}

	return result
}

function block(filePath, lang = null) {
	let result = ''
	const content = read(filePath)

	if (content !== '') {
		if (!lang) {
			lang = extname(filePath).slice(1)
		}
		if (lang === 'phtml') {
			lang = 'php'
		}
		result = '<pre><code class="language-' + lang + '">' + escapeXML(content) + '</code></pre>'
	}

	return result
}

exports.read = read
exports.block = block
