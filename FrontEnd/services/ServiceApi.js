class ServiceApi {
    static instance = null;
  
    constructor() {
      if (!ServiceApi.instance) {
        this.baseURL = 'https://back-end-upscale-mh8a.vercel.app/';
        ServiceApi.instance = this;
      }
  
      return ServiceApi.instance;
    }
  
    async fetchData(endpoint) {
      const response = await fetch(`${this.baseURL}/${endpoint}`);
      return await response.json();
    }
  }
  
  export default new ServiceApi();