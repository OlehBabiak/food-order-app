import { ApiPath, HttpMethod, ContentType } from "../../common/enums/enums";

class FoodAppService {
  _apiBase = "http://localhost:8000";

  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getRestMenu = async (end) => {
    const res = await this.getResource(`${this._apiBase}${end}`);
    return res.menu.map((el) => this._transformCharacter(el));
  };

  getSummary = async (end) => {
    const res = await this.getResource(`${this._apiBase}${end}`);
    return res.summary;
  };

  _transformCharacter = (res) => {
    //отрримуєм обєкт тільки з потрібними полями якщо у вхідному масиві їх більше ніж потрібно
    return {
      name: res.name,
      description: res.description,
      price: res.price,
      id: res.id,
    };
  };

  postResource = async (url, data) => {
    const res = await fetch(url, {
      method: HttpMethod.POST,
      headers: {
        "Content-type": ContentType.JSON,
      },
      body: data,
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  postRestOrder = async (data) => {
    return await this.postResource(`${this._apiBase}${ApiPath.REQUESTS}`, data);
  };
}

export default FoodAppService;
