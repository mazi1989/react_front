class AppConfig {
    static get baseApiUrl() {
        return 'http://localhost:3002';
    };
    static get productsUrl() {
        return AppConfig.baseApiUrl + '/products';
    };
}

export default AppConfig;
