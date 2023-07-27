




const services = [
    {
        id: 1,
        title: "Entretien et vidange",
        description: "Il est important de faire une révision complète et la vidange de sa voiture avant un long trajet. Si vous partez en vacances, prenez rendez-vous dans un garage AD afin...",
        price: "à partir de 79,90€",
        image: "/images/CarouselEntretien/entretien_vidange.avif"
    },
    {
        id: 2,
        title: "Courroie de distribution",
        description: "La courroie de distribution est essentielle pour le moteur. Sans elle, celui-ci se détruit sous le coup de sa propre action. Rendez-vous dans un garage AD pour la...",
        price: "à partir de 235,00€",
        image: "/images/CarouselEntretien/courroie_distribution.avif"
    },
    {
        id: 3,
        title: "Révision-recharge climatisation",
        description: "La climatisation peut faire une énorme différence lors d’un trajet en voiture. C’est pourquoi il est important de s’occuper de l’entretien de sa climatisation.",
        price: "à partir de 64,90€",
        image: "/images/CarouselEntretien/revision_recharge_clim.avif"
    },
    {
        id: 4,
        title: "Freinage-disques et/ou plaquettes",
        description: "Les freins sont le seul rempart entre la vitesse de la voiture et votre sécurité. C'est pourquoi s'ils ne répondent pas bien, vous devriez les faire vérifier dans...",
        price: "à partir de 40,00€",
        image: "/images/CarouselEntretien/freinage_disques.avif"
    },
    {
        id: 5,
        title: "Pneumatiques",
        description: "Les pneumatiques sont le lien direct entre votre voiture et le sol. Leur état influence en grande partie la tenue de route ainsi que les distances de freinage de votre véhicule. Réalisez votre devis en ligne et obtenez un devis immédiat.",
        price: "à partir de 59,90€",
        image: "/images/CarouselEntretien/pneumatiques.avif"
    },
    {
        id: 6,
        title: "Suspensions-Amortisseurs",
        description: "Évitez d’abîmer votre voiture à chaque secousse ! Grâce aux amortisseurs, vous bénéficiez d'un meilleur confort et vos essieux subissent moins les cahots...",
        price: "à partir de 140,00€",
        image: "/images/CarouselEntretien/suspensions_amortisseurs.avif"
    },
    {
        id: 7,
        title: "Embrayage-Kit complet",
        description: "L'embrayage est ce qui permet de changer le rapport de conversion de la puissance du moteur en vitesse. Il est donc essentiel qu'il soit en bon état. Chez AD, nous nous occupons de votre embrayage efficacement.",
        price: "à partir de 349,00€",
        image: "/images/CarouselEntretien/embrayage-kit-complet.avif"
    },
    {
        id: 8,
        title: "Boîtier bio éthanol",
        description: "Le boîtier bioéthanol, aussi appelé boîtier flexfuel ou boîtier E85, est un boîtier électronique injectant du bioéthanol E85 dans le carburant, réduisant ainsi les émissions de microparticules et de CO2 de votre véhicule...",
        price: "à partir de 806,00€",
        image: "/images/CarouselEntretien/boitier_bioethanol.avif"
    },
    {
        id: 9,
        title: "Purge liquide de refroidissement",
        description: "Votre moteur a un coup de chaud ? Profitez-en, prenez un rendez-vous...",
        price: "à partir de 15,00€",
        image: "/images/CarouselEntretien/liquide_refroidissement.avif"
    },
    {
        id: 10,
        title: "Diagnostic électronique",
        description: "Les systèmes électroniques de la voiture interviennent pour beaucoup dans votre sécurité. Chez AD, nous nous occupons du diagnostic électronique de votre voiture. Faites confiance à nos experts multimarques.",
        price: "à partir de 18,00€",
        image: "/images/CarouselEntretien/diagnostic_electronique.avif"
    },
    {
        id: 11,
        title: "Purge liquide de frein",
        description: "Votre voiture a besoin pour fonctionner de différents liquides : niveau d'huile, liquide de refroidissement, liquide de freinage… AD vérifie les niveaux de chacun...",
        price: "à partir de 16,00€",
        image: "/images/CarouselEntretien/liquide_frein.avif"
    },
    {
        id: 12,
        title: "Géométrie et parallélisme",
        description: "L'entretien de ses roues ne consiste pas simplement à s'assurer de leur bon état : il faut aussi vérifier leur parallélisme. Chez AD, nous faisons cette vérification...",
        price: "à partir de 30,00€",
        image: "/images/CarouselEntretien/geometrie_parallelisme.avif"
    },
    {
        id: 13,
        title: "Démarrage et charge-Batterie",
        description: "La batterie, l'alternateur et le démarreur de votre voiture fonctionnent de concert. Sans courant électrique, pas de système électronique et pas de démarrage de...",
        price: "à partir de 79,00€",
        image: "/images/CarouselEntretien/battterie.avif"
    },
    {
        id: 14,
        title: "Réparation plastique",
        description: "Vos coques de rétroviseurs de voiture sont abîmées ou rayées. Les garages AD vous proposent la rénovation d’une ou deux coques de rétroviseur. Votre voiture...",
        price: "à partir de 48,00€",
        image: "/images/CarouselEntretien/reparation_plastique.avif"
    },
    {
        id: 15,
        title: "Rénovation carrosserie",
        description: "Vous souhaitez donner un coup de jeune à votre véhicule ? Vous aimeriez effacer les traces de coups apparues au fil des mois et des années ? Passez chez un réparateur AD pour sa rénovation.",
        price: "à partir de 159,00€",
        image: "/images/CarouselEntretien/renovation_carosserie.avif"
    },
    {
        id: 16,
        title: "Phares-Rénovation optique",
        description: "Occupez-vous de vos phares afin de gagner en visibilité la nuit. AD s'occupe de la réparation et de l'entretien de vos phares. Réalisez votre devis en ligne...",
        price: "à partir de 30,00€",
        image: "/images/CarouselEntretien/phares.avif"
    },
    {
        id: 17,
        title: "Vanne EGR",
        description: "La vanne EGR est obligatoire sur tous les véhicules à moteur diesel afin de réduire les émissions de gaz toxique. Assurez-vous que cette dernière soit en bon état...",
        price: "à partir de 330,00€",
        image: "/images/CarouselEntretien/vanne_egr.avif"
    },
    {
        id: 18,
        title: "Pré-contrôle technique",
        description: "Avant de vous présenter au contrôle technique, prenez rendez-vous chez AD pour un pré-contrôle technique. De cette façon, vous saurez à l'avance ce qui pourrait ne pas passer...",
        price: "à partir de 15,00€",
        image: "/images/CarouselEntretien/Pre_controle_technique.avif"
    },
    {
        id: 19,
        title: "Echappement-Silencieux",
        description: "Pour le confort acoustique de votre voiture, pensez à l'entretien de votre échappement. Chez AD, nous nous occupons de l'entretien et de la réparation de votre échappement...",
        price: "à partir de 50,00€",
        image: "/images/CarouselEntretien/echappement_silencieux.avif"
    },
    {
        id: 20,
        title: "Pré controle technique",
        description: "Pour votre sécurité, assurez-vous que vos phares et feux sont en bon état. Chez AD, nous nous occupons de l'entretien et de la réparation de votre éclairage...",
        price: "à partir de 8,00€",
        image: "/images/CarouselEntretien/Pre_controle_technique.avif"
    },
    {
        id: 21,
        title: "Vitrage et Pare-brise",
        description: "Les essuie-glaces avant sont indispensables pour assurer votre visibilité lors des intempéries. Ils sont d'autant plus importants que vous vivez dans une région pluvieuse...",
        price: "à partir de 19,90€",
        image: "/images/CarouselEntretien/vitrage_et_pare_brise.avif"
    }
];

export default services;












