const authTokenConfig = (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
}

export default authTokenConfig;
