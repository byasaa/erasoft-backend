const connection = require("../helpers/mysql");
const { comment } = require("../helpers/query");
module.exports = {
  getCommentModel: (topic_id) => {
    return new Promise((resolve, reject) => {
      connection.query(comment.listComment, topic_id, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  /* getDetailCommentModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(comment.detailComment, id, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }, */
  postAddCommentModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(comment.addComment, setData, (error, result) => {
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
  updateCommentModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(comment.editComment, [setData, id], (error, result) => {
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
  deleteCommentModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(comment.deleteComment, id, (error, result) => {
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
