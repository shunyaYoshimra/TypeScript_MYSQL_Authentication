import {poolFuncs} from './pool';

const MYSQLClient = {
  executeQuery: async function (query: string) {
    const results = await poolFuncs.executeQuery(query);
    return results;
  }
}

export default MYSQLClient;