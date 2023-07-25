import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/ModerateVisitorMessages.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';
import { MessageData } from '../../Componente/MessageData';


const ModerateVisitorMessages = () => {
  const [comments, setComments] = useState(MessageData);

  const handleDelete = (id) => {
    const newComments = comments.filter(comment => comment.id !== id);
    setComments(newComments);
  }

  return (
    <div>
      <Header />
      <Link href="/Admin/SpaceUsed" className={styles.employeeButton}>Espace Employé</Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Modération des Messages des Visiteurs</h1>
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
























