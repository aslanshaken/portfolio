import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ReviewItem.css'

const ReviewItem = ({ match, currentUser }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [newReply, setNewReply] = useState('')
  const [replyCommentId, setReplyCommentId] = useState(null)

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/api/items/${match.params.itemId}/comments`)
      const data = await response.json()
      setComments(data)
    }

    fetchComments()
  }, [match.params.itemId])

  const handleCommentSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`/api/items/${match.params.itemId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newComment, user: currentUser.name })
    })

    const createdComment = await response.json()
    setComments([...comments, createdComment])
    setNewComment('')
  }

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault()
    const response = await fetch(`/api/items/${match.params.itemId}/comments/${commentId}/replies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newReply, user: currentUser.name })
    })

    const createdReply = await response.json()
    // console.log(createdReply)
    // console.log(comments)
    // console.log(commentId)
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        console.log({ ...comment, replies: [...comment.replies, createdReply] })
        return { ...comment, replies: [...comment.replies, createdReply] }
      }
      return comment
    }))
    setReplyCommentId('')
    setNewReply('')
  }



  return (
    <div className="review-item">
      <div className="item-content">
        <Link to="/">Back to dashboard</Link>
        <h3>Item {match.params.itemId}</h3>
      </div>

      <div className="comments-section">
        <h4>Comments</h4>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>
                <strong>
                  {comment.user === currentUser.name ? `${comment.user} (current)` : comment.user}
                </strong> {new Date(comment.timestamp).toLocaleTimeString()}: {comment.text}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="comments-list">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="comment">
                        <p>
                          <strong>
                            {reply.user === currentUser.name ? `${reply.user} (current)` : reply.user}
                          </strong> {new Date(comment.timestamp).toLocaleTimeString()}: {reply.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </p>
              <button onClick={() => setReplyCommentId(replyCommentId === comment.id ? null : comment.id)}>Reply</button>
              {replyCommentId === comment.id && (
                <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                  <input
                    type="text"
                    placeholder="Add a reply..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>

              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ReviewItem
