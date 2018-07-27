const defaultEnv = {
	NODE_ENV: process.env.NODE_ENV || 'development',
}

exports.env = function env(name = 'NODE_ENV') {
	return defaultEnv[name] || process.env[name]
}
