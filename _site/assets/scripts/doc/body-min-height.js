export function calcMinHeight() {
	const wrapper = document.getElementById('sidebarize-wrapper')
	const sidebar = document.getElementById('sidebar')
	wrapper.style.minHeight = sidebar.offsetHeight + 'px'
}
