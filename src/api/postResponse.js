import axios from 'axios';


class BaseService {
  
  async postResponse(path, payload) {
    return axios.post(`${path}`,payload);
  }
}

export default (new BaseService()); 