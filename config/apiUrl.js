import axios from 'axios';

const ipUrl = 'http://123.56.40.114:7001/default/';
// const ipUrl = 'http://127.0.0.1:7001/default/';

function sortByDate(articleList) {
  articleList.data.data.sort((a, b) => {
    return Date.parse(b.addTime) - Date.parse(a.addTime);
  })
}

const serverPath = {
  getTypeInfo: async () => {
    return await axios.get( ipUrl + 'getTypeInfo/').then(
      (res) => res.data.data
    )
  },

  getArticleList: async () => {
    return await axios.get( ipUrl + 'getArticleList/').then(
      (res) => {
        sortByDate(res);
        return res.data;
      }
    )
  },

  getArticleListByTypeId: async (typeId) => {
    return await axios.get( ipUrl + 'getArticleListByTypeId/' + typeId).then(
      (res) => {
        sortByDate(res);
        return res.data;
      }
    )
  },

  getArticleById: async (articleId) => {
    return await axios.get( ipUrl + 'getArticleById/' + articleId).then(
      (res) => res.data.data[0]
    )
  },

  updateArticle: async (article) => {
    return await axios({
      method: 'post',
      url: ipUrl + 'updateArticle/',
      data: article,
      withCredentials: true
    }).then((res) => res.data)
  },
};

export default serverPath;