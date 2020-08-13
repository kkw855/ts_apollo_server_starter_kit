import { IRocketAPI } from './datasources/rocket';

export default {
  Query: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    rockets: (
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      a: null,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      b: null,
      { dataSources }: { dataSources: { rocketAPI: IRocketAPI } },
    ) => {
      const api = dataSources.rocketAPI as IRocketAPI;
      api.getAllRockets();
    },
  },
};
