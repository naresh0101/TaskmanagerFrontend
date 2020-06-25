class BaseService {
  async postResponse(path, token,raw) {  
    let response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(raw),
      headers: new Headers({
        "X-Api-Key": token,
        'Content-Type': 'application/json'
      }),
    });
    let data = await response.json();
    
    return data;
  }
  async acountResponse(path, raw) {
    let response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(raw),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
    let data = await response.json();
    return data;
  }
}

export default new BaseService();
