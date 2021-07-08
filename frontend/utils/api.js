class Api {
	constructor(apiOptions) {
		this._baseUrl = apiOptions.baseUrl;
		this._header = apiOptions.headers;
	}

	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}

	postFormData(data) {
		return fetch(`${this._baseUrl}/send`, {
			method: 'POST',
			headers: this._header,
			body: JSON.stringify(data),
		}).then(this._getResponseData);
	}
}
