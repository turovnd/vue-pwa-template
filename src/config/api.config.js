const location = window.location.hostname;
let API = '';

switch (location) {
	case 'localhost':
		API = 'http://localhost:3000';
		break;
	default:
		console.log('Base URL not set up.');
		break;
}

export default {
	API: API
};
