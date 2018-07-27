export function calcMinHeight() {
	let maxHeight = 0
	for (const child of document.body.children) {
		maxHeight = Math.max(maxHeight, child.offsetHeight)
	}
	document.body.style.minHeight = maxHeight + 'px'
}
