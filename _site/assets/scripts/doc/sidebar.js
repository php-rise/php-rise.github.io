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

export function registerSidebar() {
	const menuBtn = document.getElementById('toggle-sidebar')
	menuBtn.addEventListener('click', () => {
		if (sidebarOpened) {
			closeSidebar()
		} else {
			openSidebar()
		}
	})

	const sidebar = document.getElementById('sidebar')
	sidebar.addEventListener('click', () => {
		closeSidebar()
	})
}
