const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {root} = require('../helpers/path')

module.exports = [{
	input: root('_site/assets/scripts/root/index.js'),

	output: {
		file: root('dist/root.bundle.js'),
		format: 'iife',
		name: 'root'
	},

	plugins: [
		nodeResolve({
			jsnext: true,
			main: true
		}),

		commonjs({
			include: [
				root('node_modules') + '/**',
				root('_site/') + '/**',
			],
		}),

		babel({
			exclude: root('node_modules') + '/**',
			presets: [
				['env', {
					modules: false,
					targets: {
						browsers: ['defaults']
					}
				}]
			],
			plugins: [
				'transform-runtime',
			],
			runtimeHelpers: true,
		}),
	],
}, {
	input: root('_site/assets/scripts/doc/index.js'),

	output: {
		file: root('dist/doc.bundle.js'),
		format: 'iife',
		name: 'doc'
	},

	plugins: [
		nodeResolve({
			jsnext: true,
			main: true
		}),

		commonjs({
			include: [
				root('node_modules') + '/**',
				root('_site/') + '/**',
			],
		}),

		babel({
			exclude: root('node_modules') + '/**',
			presets: [
				['env', {
					modules: false,
					targets: {
						browsers: ['defaults']
					}
				}]
			],
			plugins: [
				'transform-runtime',
			],
			runtimeHelpers: true,
		}),
	],
}]
