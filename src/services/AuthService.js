
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_APIUrl // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
    }

    fetch(url, options) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => {
                console.log(response);
                return response.json()
            })
            .catch((res) => {
                console.log(res);
            });
    }


    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}

