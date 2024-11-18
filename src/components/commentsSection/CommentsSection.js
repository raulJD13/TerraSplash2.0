import { useState } from "react";
import "./CommentsSection.css";

function CommentsSection() {
  const [comments, setComments] = useState([
    { id: 1, name: "John Doe", text: "Amazing experience!", time: "5 min ago" },
    {
      id: 2,
      name: "Jane Doe",
      text: "I loved it! Would do it again.",
      time: "10 min ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    const newEntry = {
      id: comments.length + 1,
      name: "Anonymous",
      text: newComment,
      time: "Just now",
    };
    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
        className="comment-input"
      />
      <button onClick={handleCommentSubmit} className="comment-button">
        Comment
      </button>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
            <small>{comment.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;
