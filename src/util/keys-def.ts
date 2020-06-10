export const keys = {
	B: 'b',
	CONTROL_C: 'C-c',
	DOWN: 'down',
	ENTER: 'enter',
	ESCAPE: 'escape',
	F: 'f',
	FORWARD_SLASH: '/',
	J: 'j',
	K: 'k',
	LEFT: 'left',
	LESS_THAN: '<',
	M: 'm',
	N: 'n',
	O: 'o',
	PAGEDOWN: 'pagedown',
	PAGEUP: 'pageup',
	Q: 'q',
	QUESTION_MARK: '?',
	R: 'r',
	RIGHT: 'right',
	SHIFT_DOWN: 'S-down',
	SHIFT_J: 'S-j',
	SHIFT_K: 'S-k',
	SHIFT_N: 'S-n',
	SHIFT_UP: 'S-up',
	SPACE: 'space',
	UP: 'up',
	X: 'x',
	Y: 'y',
};

export const NUMBER_KEYS = '1234567890'.split('');

export const ALL_KEYS = [...Object.values(keys), ...NUMBER_KEYS];
