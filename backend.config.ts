type QueryParams = Record<string, string>;

const backend = {
    config: {
        // url: 'http://localhost:8080/api/v1/',
		url: 'https://icpm2025.web.elasticloud.uy:4901/api/v1/',
		logoLight: '/icpm-logo-1.png',
		logoDark: '/icpm-logo-2.png',
		homePagePicture: 'https://icpmconference.org/2025/wp-content/uploads/sites/10/2024/11/montevideo.png'
    },

    construct: function(endpoint: string, queryParams: QueryParams = {}): string {
        const url = new URL(this.config.url + endpoint);
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        return url.toString();
    }
}

export default backend;