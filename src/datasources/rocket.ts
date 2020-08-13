import { RESTDataSource } from 'apollo-datasource-rest';

export declare interface IRocketAPI {
  getAllRockets(): Promise<{ id: string; name: string }[]>;
}

export default class RocketAPI extends RESTDataSource implements IRocketAPI {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v4/';
  }

  private rocketReducer(rocket: { id: string; name: string }) {
    return {
      id: rocket.id,
      name: rocket.name,
    };
  }

  async getAllRockets(): Promise<{ id: string; name: string }[]> {
    const response = await this.get('rockets');
    return Array.isArray(response)
      ? response.map((rocket) => this.rocketReducer(rocket))
      : [];
  }
}
