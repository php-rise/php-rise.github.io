(function () {
	'use strict';

	function calcMinHeight() {
		var wrapper = document.getElementById('sidebarize-wrapper');
		var sidebar = document.getElementById('sidebar');
		wrapper.style.minHeight = sidebar.offsetHeight + 'px';
	}

	var sidebarOpened = false;

	function openSidebar() {
		sidebarOpened = true;
		document.body.classList.add('noscroll');
		document.getElementById('sidebar').classList.add('active');
	}

	function closeSidebar() {
		sidebarOpened = false;
		document.body.classList.remove('noscroll');
		document.getElementById('sidebar').classList.remove('active');
	}

	function registerSidebar() {
		var menuBtn = document.getElementById('toggle-sidebar');
		menuBtn.addEventListener('click', function () {
			if (sidebarOpened) {
				closeSidebar();
			} else {
				openSidebar();
			}
		});

		var sidebar = document.getElementById('sidebar');
		sidebar.addEventListener('click', function () {
			closeSidebar();
		});
	}

	calcMinHeight();
	window.addEventListener('resize', calcMinHeight);

	registerSidebar();

}());
