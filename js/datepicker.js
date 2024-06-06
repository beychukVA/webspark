import localeEn from '../air-datepicker/locale/en.js';

let dpMin, dpMax;

dpMin = new AirDatepicker('#date__from', {
	autoClose: true,
	locale: localeEn,
	onSelect({ date }) {
		dpMax.update({
			minDate: date,
		});
	},
});

dpMax = new AirDatepicker('#date__to', {
	classes: 'datepicker-to',
	autoClose: true,
	locale: localeEn,
	onSelect({ date }) {
		dpMin.update({
			maxDate: date,
		});
	},
});
