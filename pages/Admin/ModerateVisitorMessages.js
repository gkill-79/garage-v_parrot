
// pages/Admin/ModerateVisitorMessages.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/ModerateVisitorMessages.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const ModerateVisitorMessages = () => {
  const [comments, setComments] = useState([]);
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    const starredContent = `${newContent} <span>⭐⭐⭐⭐</span>`;
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: starredContent, approved: null })
    }).then(res => res.json())
      .then(newComment => {
        setComments([...comments, newComment]);
        setNewContent("");
      });
  };

  const handleDelete = (id) => {
    fetch('/api/messages', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    }).then(() => {
      const updatedComments = comments.filter(comment => comment.id !== id);
      setComments(updatedComments);
    });
  };

  return (
    <div>
      <Header />
      <Link href="/Admin/SpaceUsed" className={styles.employeeButton}>Espace Employé</Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Modération des Messages des Visiteurs</h1>
        <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
        <button onClick={handleAdd}>Ajouter</button>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentContainer}>
            <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
            <button onClick={() => handleDelete(comment.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ModerateVisitorMessages;























