// pages/Home/Messages/NosEngagements.js
import { useState } from 'react';
import styles from '../../../styles/Home/Messages/LeaveComment.module.css';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import Messages from '../../../Componente/Messages';

const NosEngagements = () => {
  const [newComment, setNewComment] = useState('');

  const handleAdd = async () => {
    // Code pour ajouter le nouveau commentaire
    // Vous aurez probablement besoin de faire une demande à l'API ici
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment })
      });
      
      const data = await response.json();

      // Utilisez les données reçues ici si nécessaire
      console.log('New comment added:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    
    setNewComment('');
  }

  return (
    <div>
        <Header />
        <div className={styles.container}>
        <h1 className={styles.title}>NOS ENGAGEMENTS</h1>
            <div className={styles['content-box']}>
            <h2>LA TRANSPARENCE DES PRIX</h2>
            <p>
                Chez V-Parrot Garage, notre priorité c’est d’entretenir et de prendre soin de votre véhicule.
                Nous nous engageons au quotidien pour vous donner la possibilité de rouler en toute sécurité. 
                Transparence des prix, garantie constructeur préservée, mobilité responsable...
            </p>
            <h2>GARANTIE CONSTRUCTEUR PRÉSERVÉE</h2>
            <p>
                V-Parrot, PEUT INTERVENIR SUR VOTRE VÉHICULE, MÊME S'IL EST « SOUS GARANTIE CONSTRUCTEUR » GRÂCE À SES EXPERTS MÉCANIQUES ET CARROSSIERS.
                Les réparateurs AD interviennent sur votre véhicule en conformité avec le cahier des charges constructeur. Dès le 1er jour de la garantie, 
                vous êtes libre de faire entretenir votre véhicule chez AD, pour les opérations courantes (par exemple une vidange, un remplacement de filtres, 
                de plaquettes de freins, de pneus) ou pour toutes interventions plus techniques sans aucun risque de perdre votre garantie constructeur. AD, c'est sûr !
            </p>
            <h2>NOS CLIENTS NOUS RECOMMANDENT</h2>
            </div>
        <Messages />
          <div>
              <textarea
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Laissez un commentaire"
              />
            <button onClick={handleAdd}>Soumettre</button>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default NosEngagements;

















