/**
* getMongoDoc - Função que pega o retorno do mongo e retorna um json
*
* @function getMongoDoc
* @param {mongoResponse} parent it contains the result returned from the resolver on the parent type
*/
export const getMongoDoc = mongoResponse => JSON.parse(JSON.stringify(mongoResponse));

export const toDelete = '';