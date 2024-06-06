(() => {
	const gallery = document.querySelector('.gallery');
	const controls = document.querySelector('.controls');
	const btnGrid = document.querySelector('.controls__grid');
	const btnRow = document.querySelector('.controls__row');

	const setGridLayout = () => {
		let row = document.querySelector('.gallery.row');
		if (row) {
			gallery.classList.remove('row');
			gallery.classList.add('grid');
			controls.classList.remove('row');
			controls.classList.add('grid');
		}
	};

	const setGridRow = () => {
		let grid = document.querySelector('.gallery.grid');
		if (grid) {
			gallery.classList.remove('grid');
			gallery.classList.add('row');
			controls.classList.remove('grid');
			controls.classList.add('row');
		}
	};

	btnGrid.addEventListener('click', setGridLayout);
	btnRow.addEventListener('click', setGridRow);
})();
