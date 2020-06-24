class BaseService {
  async postResponse(path, token,raw) {
    const payload = {
      method: "post",
      body: raw,
      headers: new Headers({
        "X-Api-Key": token,
      }),
    };
    // return axios.get(path,headers);
    let response = await fetch(path, payload);
    let data = await response.json();
    return data;
  }
}

export default new BaseService();
