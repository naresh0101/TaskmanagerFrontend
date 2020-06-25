class BaseService {
 
  async getResponse(path,token) {   
    const payload = {
      method: "GET",
      headers: new Headers({
        "X-Api-Key": token,
      }),
    } 
    // return axios.get(path,headers);
     let response = await fetch(path,payload);
     let data = await response.json();
     return data
  }
}

export default new BaseService();
