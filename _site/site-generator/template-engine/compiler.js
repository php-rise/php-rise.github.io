const ejs = require('ejs')

const META_PREFIX = '//'
const REGEXP_META_LINE = new RegExp('^' + META_PREFIX + '\\s*(@?\\w[\\w\\.@]*)\\s*:(.*)$')

function splitContentAndMeta(fileContent) {
	const lines = fileContent.split('\n')
	let metaLines = []
	let contentLines = []
	const meta = {}

	for (let i = 0, len = lines.length; i < len; ++i) {
		if (!lines[i].startsWith(META_PREFIX)) {
			metaLines = lines.slice(0, i)
			contentLines = lines.slice(i)
			break
		}
	}

	for (let i = 0, iLen = metaLines.length; i < iLen; ++i) {
		const matches = REGEXP_META_LINE.exec(metaLines[i])
		if (matches) {
			const key = matches[1].trim()
			const value = matches[2].trim()
			const splittedKeys = key.split('.')

			if (splittedKeys.length === 1) {
				if (key.charAt(0) === '@') {
					const keyName = key.substr(1)
					if (!meta[keyName]) {
						meta[keyName] = []
					}
					meta[keyName].push(value)
				} else {
					meta[key] = value
				}
			} else if (splittedKeys.length > 1) {
				let metaRef = meta
				for (let j = 0, jMax = splittedKeys.length - 1; j < jMax; ++j) {
					const key = splittedKeys[j]
					if (!metaRef[key]) {
						metaRef[key] = {}
					}
					metaRef = metaRef[key]
				}
				let lastKey = splittedKeys[splittedKeys.length - 1]
				if (lastKey.charAt(0) === '@') {
					lastKey = lastKey.substr(1)
					if (!metaRef[lastKey]) {
						metaRef[lastKey] = []
					}
					metaRef[lastKey].push(value)
				} else {
					metaRef[lastKey] = value
				}
			}
		}
	}

	return [contentLines.join('\n'), meta]
}

exports.createTemplate = function createTemplate(fileContent, options) {
	const [content, meta] = splitContentAndMeta(fileContent)
	const template =  ejs.compile(content, options)
	template.meta = meta
	return template
}
