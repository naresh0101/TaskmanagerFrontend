class BaseService {
    async deleteResponse(path,token) {
        const payload = {
            method: "GET",
            headers: new Headers({
                "X-Api-Key": token,
                'Content-Type': 'application/json'
            }),
        }
        let response = await fetch(path, payload);
        let data = await response.json();
        return data
    }
}

export default new BaseService();
