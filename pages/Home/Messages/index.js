// pages/Home/Messages/index.js
import styles from '../../../styles/Home/Messages/LeaveComment.module.css';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import Messages from '../../../Componente/Messages';

const NosEngagements = () => {
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
      </div>
      <Footer />
    </div>
  );
};

export default NosEngagements;

















