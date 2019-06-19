const axios = require('axios');

import config from '../config/api.config';

class BaseAPI {
	constructor(endpoint, parameters = {}) {
		this.endpoint = `${config.API}` + endpoint;
		this.parameters = parameters;
	}

	submit(requestType, url, data = null) {
		return new Promise(async (resolve, reject) => {
			// If user is offline, try to get response from APIStorage
			if (!window.navigator.onLine) {
				console.log('No internet connection');
			}
			axios.defaults.headers.common['Authorization'] = 'Bearer ';
			axios[requestType](url + this.getParameterString(), data)
				.then(res => {
					resolve(res.data);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	/**
	 * Method used to fetch all items from the API.
	 *
	 * @returns {Promise} The result in a promise.
	 */
	all() {
		return this.submit('get', `/${this.endpoint}`);
	}

	/**
	 * Method used to fetch a single item from the API.
	 *
	 * @param {string} id The given identifier.
	 *
	 * @returns {Promise} The result in a promise.
	 */
	find(id) {
		return this.submit('get', `/${this.endpoint}/${id}`);
	}

	/**
	 * Method used to create an item.
	 *
	 * @param {Object} item The given item.
	 *
	 * @returns {Promise} The result in a promise.
	 */
	create(item) {
		return this.submit('post', `/${this.endpoint}`, item);
	}

	/**
	 * Method used to update an item.
	 *
	 * @param {string}    id   The given identifier.
	 * @param {Object} item The given item.
	 *
	 * @returns {Promise} The result in a promise.
	 */
	update(id, item) {
		return this.submit('put', `/${this.endpoint}/${id}`, item);
	}

	/**
	 * Method used to destroy an item.
	 *
	 * @param {string} id The given identifier.
	 *
	 * @returns {Promise} The result in a promise.
	 */
	destroy(id) {
		return this.submit('delete', `/${this.endpoint}/${id}`);
	}

	/**
	 * Method used to set the query parameters.
	 *
	 * @param {Object} parameters The given parameters.
	 *
	 * @returns {BaseAPI} The instance of the proxy.
	 */
	setParameters(parameters) {
		Object.keys(parameters).forEach(key => {
			this.parameters[key] = parameters[key];
		});
		return this;
	}

	/**
	 * Method used to set a single parameter.
	 *
	 * @param {string} parameter The given parameter.
	 * @param {*} value The value to be set.
	 *
	 * @returns {BaseAPI} The instance of the proxy.
	 */
	setParameter(parameter, value) {
		this.parameters[parameter] = value;
		return this;
	}

	/**
	 * Method used to remove all the parameters.
	 *
	 * @param {Array} parameters The given parameters.
	 *
	 * @returns {BaseAPI} The instance of the proxy.
	 */
	removeParameters(parameters) {
		parameters.forEach(parameter => {
			delete this.parameters[parameter];
		});
		return this;
	}

	/**
	 * Method used to remove a single parameter.
	 *
	 * @param {string} parameter The given parameter.
	 *
	 * @returns {BaseAPI} The instance of the proxy.
	 */
	removeParameter(parameter) {
		delete this.parameters[parameter];
		return this;
	}

	/**
	 * Method used to transform a parameters object to a parameters string.
	 *
	 * @returns {string} The parameter string.
	 */
	getParameterString() {
		const keys = Object.keys(this.parameters);
		const parameterStrings = keys
			.filter(
				key =>
					!(this.parameters[key] === null || this.parameters[key] === undefined)
			)
			.map(key => `${key}=${this.parameters[key]}`);

		return parameterStrings.length === 0
			? ''
			: `?${parameterStrings.join('&')}`;
	}
}

export default BaseAPI;
