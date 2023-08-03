



// pages/Admin/ModerateComments.js
import { useState, useEffect } from 'react';
import styles from '../../styles/Admin/ModerateComments.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const ModerateComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  const handleApproval = (id, decision) => {
    fetch('/api/messages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, approved: decision })
    }).then(() => {
      const updatedComments = comments.map(comment => {
        if (comment.id === id) {
          return {...comment, approved: decision};
        }
        return comment;
      });

      setComments(updatedComments);
    });
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Modération des Commentaires</h1>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentContainer}>
            <p>{comment.content}</p>
            <button onClick={() => handleApproval(comment.id, true)}>Accepter</button>
            <button onClick={() => handleApproval(comment.id, false)}>Refuser</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ModerateComments;




















