type QueryParams = Record<string, string>;

const backend = {
    config: {
        url: 'http://localhost:8080/api/v1/',
		logoLight: 'https://conferia.net/img/conferia-logo.svg',
		logoDark: 'https://conferia.net/img/conferia-logo-dark.svg',
		homePagePicture: 'https://icpmconference.org/2024/wp-content/uploads/sites/9/2023/09/cph.jpg'
    },

    construct: function(endpoint: string, queryParams: QueryParams = {}): string {
        const url = new URL(this.config.url + endpoint);
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        return url.toString();
    }
}

export default backend;