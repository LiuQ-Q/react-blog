import axios from 'axios';

const ipUrl = 'http://154.8.231.65:7001/default/';
// const ipUrl = 'http://127.0.0.1:7001/default/';
const serverPath = {
  getTypeInfo: async () => {
    return await axios.get( ipUrl + 'getTypeInfo/').then(
      (res) => res.data.data
    )
  }, 
  getArticleList: async () => {
    return await axios.get( ipUrl + 'getArticleList/').then(
      (res) => res.data
    )
  }, 
  getArticleListByTypeId: async (typeId) => {
    return await axios.get( ipUrl + 'getArticleListByTypeId/' + typeId).then(
      (res) => res.data
    )
  }, 
  getArticleById: async (articleId) => {
    return await axios.get( ipUrl + 'getArticleById/' + articleId).then(
      (res) => res.data.data[0]
    )
  }, 
};

export default serverPath;