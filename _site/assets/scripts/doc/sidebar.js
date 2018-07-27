let sidebarOpened = false

export function openSidebar() {
	sidebarOpened = true
	document.body.classList.add('noscroll')
	document.getElementById('sidebar').classList.add('active')
}

export function closeSidebar() {
	sidebarOpened = false
	document.body.classList.remove('noscroll')
	document.getElementById('sidebar').classList.remove('active')
}

export function registerSidebarBtn() {
	const btn = document.getElementById('toggle-sidebar')
	btn.addEventListener('click', () => {
		if (sidebarOpened) {
			closeSidebar()
		} else {
			openSidebar()
		}
	})
}
