const connection = require("../helpers/mysql");
const { topic } = require("../helpers/query");
module.exports = {
  getTopicModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(topic.listTopic, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  getDetailTopicModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(topic.detailTopic, id, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  postAddTopicModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(topic.addTopic, setData, (error, result) => {
        if (error) {
          reject(error);
        }
        const newData = {
          id: result.insertId,
          ...setData,
        };
        resolve(newData);
      });
    });
  },
  updateTopicModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(topic.editTopic, [setData, id], (error, result) => {
        if (error) {
          reject(error);
        }
        const newData = {
          id,
          ...setData,
        };
        resolve(newData);
      });
    });
  },
  deleteTopicModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(topic.deleteTopic, id, (error, result) => {
        if (error) {
          reject(error);
        }
        const newData = {
          id,
        };
        resolve(newData);
      });
    });
  },
};
