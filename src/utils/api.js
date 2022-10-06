class api {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    };
  
    _getResponseData(res) {
      if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`)
      }
      return res.json();
  };
  
    getAnswer() {
      return fetch(`${this._baseUrl}`, {
        method: "GET",
        Headers: {
          "Content-type": "application/json"
        }})
        .then((res) => this._getResponseData(res));
    };
  }
  
  export const questionsApi = new api({
    baseUrl: 'https://yesno.wtf/api'
  })