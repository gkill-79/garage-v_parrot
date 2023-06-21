

import styles from './Entretien.module.css'

const Entretien = () => {
    return (
        <section id="entretien">
             <h2 className={styles.title}>Entretien</h2>
            <div className={styles['card-container']}>
                <article>
                    <h3>Vidange et Révision</h3>
                    <div className={styles.card}>
                        <img src="../../public/img/entretien.jpg" alt="Vidange et Révision" />
                        <div className={styles['card-content']}>
                            <h4>Vidange et Révision</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Carosserie</h3>
                    <div className={styles.card}>
                        <img src="../../public/img/carosserie.jpg" alt="Carosserie" />
                        <div className={styles['card-content']}>
                            <h4>Carosserie</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Forfait Freinage</h3>
                    <div className={styles.card}>
                        <img src="../../public/img/freinage.jpg" alt="Forfait Freinage" />
                        <div className={styles['card-content']}>
                            <h4>Forfait Freinage</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>
            </div>

            <div className={styles['card-container']}>
                <article>
                    <h3>Contrôle Technique</h3>
                    <div className={styles.card}>
                        <img src="../../public/img/front.jpg" alt="Contrôle Technique" />
                        <div className={styles['card-content']}>
                            <h4>Contrôle Technique</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Autres Prestations</h3>
                    <div className={styles.card}>
                        <img src="../../public/img/services.jpg" alt="Autres Prestations" />
                        <div className={styles['card-content']}>
                            <h4>Autres Prestations</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Entretien