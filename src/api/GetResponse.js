import axios from "axios";

class BaseService {
  async getResponse(path, payload) {
    return axios.post(`${path}`, payload);
  }
}

export default new BaseService();
