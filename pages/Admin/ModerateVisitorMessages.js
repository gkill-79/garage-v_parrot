import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/ModerateVisitorMessages.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';
import { MessageData } from '../../Componente/MessageData';

const ModerateVisitorMessages = () => {
  const [comments, setComments] = useState(MessageData);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('/api/Messages');
      const data = await response.json();
      setComments(data);
    }

    fetchComments();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch('/api/Messages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (response.ok) {
        const newComments = comments.filter(comment => comment.id !== id);
        setComments(newComments);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleAdd = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/Messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment })
      });

      if (response.ok) {
        const addedComment = await response.json();
        setComments(prevComments => [...prevComments, addedComment]);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <Header />
      <Link href="/Admin/SpaceUsed" className={styles.employeeButton}>Espace Employé</Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Modération des Messages des Visiteurs</h1>

        <form onSubmit={handleAdd}>
          <input 
            type="text" 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            placeholder="Type your comment here" 
          />
          <button type="submit">Add comment</button>
        </form>

        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentContainer}>
            <p>{comment.content}</p>
            <button onClick={() => handleDelete(comment.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ModerateVisitorMessages;








