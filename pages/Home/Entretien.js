// pages\Entretien.js:

import styles from './Entretien.module.css'

const Entretien = () => {
    return (
        <section id="entretien">
             <h2 className={styles.title}>Entretien</h2>
            <div className={styles['card-container']}>
                <article>
                    <h3>Vidange et Révision</h3>
                    <div className={styles.card}>
                        <img src="/images/entretien.jpg" alt="Vidange et Révision" 
                        width={398}
                        height={380}
                        />
                        <div className={styles['card-content']}>
                            <h4>Vidange et Révision</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Carosserie</h3>
                    <div className={styles.card}>
                        <img src="/images/carosserie.jpg" alt="Carosserie" 
                        width={398}
                        height={380}
                        />
                        <div className={styles['card-content']}>
                            <h4>Carosserie</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Forfait Freinage</h3>
                    <div className={styles.card}>
                        <img src="/images/freinage.jpg" alt="Forfait Freinage" 
                        width={398}
                        height={380}
                        />
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
                        <img src="/images/front.jpg" alt="Contrôle Technique" 
                        width={398}
                        height={380}
                        />
                        <div className={styles['card-content']}>
                            <h4>Contrôle Technique</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.</p>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Autres Prestations</h3>
                    <div className={styles.card}>
                        <img src="/images/services.jpg" alt="Autres Prestations" 
                        width={398}
                        height={380}
                        />
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
