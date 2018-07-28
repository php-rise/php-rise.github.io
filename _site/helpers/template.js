function heading(level, id, text) {
	return `<a id="${id}" class="anchor"></a><h${level}><a href="#${id}">${text}</a></h${level}>`
}

exports.heading = heading
