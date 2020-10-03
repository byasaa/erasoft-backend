module.exports = {
  topic: {
    listTopic:
      "SELECT topics.id, topics.user_id, users.username, topics.topic, topics.created_at, topics.updated_at, (SELECT COUNT(*) FROM comments WHERE comments.topic_id = topics.id) as comment_total FROM topics INNER JOIN users ON topics.user_id = users.id",
    detailTopic:
      "SELECT topics.id, topics.user_id, users.username, topics.topic, topics.created_at, topics.updated_at, (SELECT COUNT(*) FROM comments WHERE comments.topic_id = topics.id) as comment_total FROM topics INNER JOIN users ON topics.user_id = users.id WHERE topics.id = ?",
    addTopic: "INSERT INTO topics SET ?",
    editTopic: "UPDATE topics SET ? WHERE id = ?",
    deleteTopic: "DELETE FROM topics WHERE id = ?",
  },
  comment: {
    listComment:
      "SELECT comments.id, comments.user_id, users.username, comments.comment, comments.created_at, comments.updated_at FROM comments INNER JOIN users ON comments.user_id = users.id WHERE comments.topic_id = ?   ",
    detailComment:
      "SELECT comments.id, comments.user_id, users.username, comments.comment, comments.created_at, comments.updated_at FROM comments INNER JOIN users ON comments.user_id = users.id WHERE comments.id = ?",
    addComment: "INSERT INTO comments SET ?",
    editComment: "UPDATE comments SET ? WHERE id = ?",
    deleteComment: "DELETE FROM comments WHERE id = ?",
  },
};
