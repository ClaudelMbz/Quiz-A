// Données des quiz Agile for Project Management
const quizData = {
    // Test 1: 30 Questions Essentielles - Applied Scrum for Agile Project Management
    set1: [
        {
            id: 1,
            title: "Fondamentaux de Scrum (Questions 1-8)",
            questions: [
                {
                    question: "Quels sont les trois piliers de Scrum?",
                    options: [
                        "Planification, Exécution, Contrôle",
                        "Transparence, Inspection, Adaptation",
                        "Collaboration, Itération, Amélioration",
                        "Vision, Engagement, Focus"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle est la durée maximale recommandée pour un Sprint?",
                    options: [
                        "2 semaines",
                        "1 mois",
                        "6 semaines",
                        "3 mois"
                    ],
                    correct: 1
                },
                {
                    question: "Combien de rôles officiels existe-t-il dans Scrum?",
                    options: [
                        "2 (Product Owner et Scrum Master)",
                        "3 (Product Owner, Scrum Master, Development Team)",
                        "4 (Product Owner, Scrum Master, Development Team, Stakeholders)",
                        "5 (Product Owner, Scrum Master, Developers, Testers, Designers)"
                    ],
                    correct: 1
                },
                {
                    question: "Qui est responsable de maximiser la valeur du produit?",
                    options: [
                        "Scrum Master",
                        "Development Team",
                        "Product Owner",
                        "Stakeholders"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle est la taille idéale d'une Development Team?",
                    options: [
                        "3-5 personnes",
                        "5-9 personnes",
                        "3-9 personnes",
                        "10-15 personnes"
                    ],
                    correct: 2
                },
                {
                    question: "Les valeurs de Scrum sont:",
                    options: [
                        "Courage, Focus, Engagement, Respect, Ouverture",
                        "Collaboration, Communication, Simplicité, Feedback",
                        "Qualité, Rapidité, Efficacité, Innovation",
                        "Transparence, Discipline, Excellence, Livraison"
                    ],
                    correct: 0
                },
                {
                    question: "Qu'est-ce qu'un incrément de produit?",
                    options: [
                        "Une augmentation de la vélocité de l'équipe",
                        "La somme de tous les éléments du Product Backlog complétés pendant un Sprint",
                        "Un rapport d'avancement du projet",
                        "Une estimation des story points"
                    ],
                    correct: 1
                },
                {
                    question: "La Definition of Done (DoD) est:",
                    options: [
                        "Définie uniquement par le Product Owner",
                        "Un accord partagé sur les critères de complétion d'un élément",
                        "Changeable pendant le Sprint",
                        "Optionnelle pour l'équipe"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "Product Backlog & User Stories (Questions 9-13)",
            questions: [
                {
                    question: "Qui est responsable de la priorisation du Product Backlog?",
                    options: [
                        "Scrum Master",
                        "Development Team",
                        "Product Owner",
                        "L'équipe entière vote"
                    ],
                    correct: 2
                },
                {
                    question: "Une User Story bien formée suit le format:",
                    options: [
                        "Quoi, Pourquoi, Comment",
                        "En tant que [rôle], je veux [fonctionnalité], afin de [bénéfice]",
                        "Objectif, Action, Résultat",
                        "Problème, Solution, Validation"
                    ],
                    correct: 1
                },
                {
                    question: "Qu'est-ce que le Product Backlog Refinement (Grooming)?",
                    options: [
                        "Un événement formel de Scrum d'une durée fixe",
                        "Une activité continue pour clarifier et estimer les éléments du backlog",
                        "Une réunion mensuelle avec les stakeholders",
                        "La responsabilité exclusive du Product Owner"
                    ],
                    correct: 1
                },
                {
                    question: "Les critères d'acceptation servent à:",
                    options: [
                        "Évaluer la performance de l'équipe",
                        "Définir quand une User Story est considérée comme terminée",
                        "Prioriser les fonctionnalités",
                        "Calculer la vélocité"
                    ],
                    correct: 1
                },
                {
                    question: "Que signifie INVEST pour les User Stories?",
                    options: [
                        "Investigation, Negotiation, Validation, Estimation, Success, Testing",
                        "Independent, Negotiable, Valuable, Estimable, Small, Testable",
                        "Innovation, Needs, Vision, Execution, Strategy, Transformation",
                        "Iteration, Navigation, Velocity, Engineering, Scrum, Team"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "Événements Scrum (Questions 14-21)",
            questions: [
                {
                    question: "Quelle est la durée maximale du Sprint Planning pour un Sprint de 2 semaines?",
                    options: [
                        "2 heures",
                        "4 heures",
                        "6 heures",
                        "8 heures"
                    ],
                    correct: 1
                },
                {
                    question: "L'objectif principal du Daily Scrum est:",
                    options: [
                        "Faire un rapport au Scrum Master",
                        "Synchroniser les activités et créer un plan pour les 24h suivantes",
                        "Résoudre tous les problèmes techniques",
                        "Mettre à jour le burndown chart"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle est la durée du Daily Scrum?",
                    options: [
                        "10 minutes",
                        "15 minutes",
                        "30 minutes",
                        "Variable selon les besoins"
                    ],
                    correct: 1
                },
                {
                    question: "Qui doit assister au Sprint Review?",
                    options: [
                        "Uniquement l'équipe Scrum",
                        "L'équipe Scrum et les stakeholders clés",
                        "Uniquement le Product Owner et les stakeholders",
                        "Toute l'organisation"
                    ],
                    correct: 1
                },
                {
                    question: "La durée maximale du Sprint Review pour un Sprint d'un mois est:",
                    options: [
                        "2 heures",
                        "3 heures",
                        "4 heures",
                        "8 heures"
                    ],
                    correct: 2
                },
                {
                    question: "Le Sprint Retrospective se concentre sur:",
                    options: [
                        "Le produit et ses fonctionnalités",
                        "Le processus, les personnes et les outils",
                        "Les objectifs de l'organisation",
                        "La vélocité et les estimations"
                    ],
                    correct: 1
                },
                {
                    question: "Peut-on annuler un Sprint?",
                    options: [
                        "Non, jamais",
                        "Oui, si l'équipe le décide",
                        "Oui, uniquement le Product Owner peut l'annuler",
                        "Oui, si le Scrum Master l'approuve"
                    ],
                    correct: 2
                },
                {
                    question: "Que se passe-t-il avec le travail non terminé à la fin d'un Sprint?",
                    options: [
                        "Il est automatiquement reporté au Sprint suivant",
                        "Il est considéré comme terminé à 90%",
                        "Il retourne au Product Backlog et doit être re-estimé",
                        "Il est supprimé définitivement"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 4,
            title: "Rôles et Responsabilités (Questions 22-26)",
            questions: [
                {
                    question: "Le rôle principal du Scrum Master est:",
                    options: [
                        "Manager l'équipe et assigner les tâches",
                        "Faciliter Scrum et supprimer les impediments",
                        "Prendre les décisions techniques",
                        "Gérer le budget du projet"
                    ],
                    correct: 1
                },
                {
                    question: "La Development Team est:",
                    options: [
                        "Hiérarchisée avec des rôles spécialisés",
                        "Auto-organisée et cross-fonctionnelle",
                        "Managée par le Scrum Master",
                        "Composée uniquement de développeurs"
                    ],
                    correct: 1
                },
                {
                    question: "Le Product Owner peut-il déléguer ses responsabilités?",
                    options: [
                        "Non, jamais",
                        "Oui, mais il reste responsable (accountable)",
                        "Oui, au Scrum Master uniquement",
                        "Oui, complètement à l'équipe"
                    ],
                    correct: 1
                },
                {
                    question: "Qui est responsable de la qualité du produit?",
                    options: [
                        "Uniquement les testeurs",
                        "Le Scrum Master",
                        "La Development Team entière",
                        "Le Product Owner"
                    ],
                    correct: 2
                },
                {
                    question: "Le Scrum Master peut-il faire partie de la Development Team?",
                    options: [
                        "Non, absolument interdit",
                        "Oui, mais cela peut créer des conflits d'intérêts",
                        "Oui, c'est obligatoire",
                        "Seulement dans les petites équipes"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 5,
            title: "Métriques et Amélioration Continue (Questions 27-30)",
            questions: [
                {
                    question: "Qu'est-ce que la vélocité en Scrum?",
                    options: [
                        "La vitesse à laquelle l'équipe code",
                        "La quantité de travail complétée par Sprint (en story points ou heures)",
                        "Le nombre de bugs corrigés",
                        "Le temps moyen de livraison"
                    ],
                    correct: 1
                },
                {
                    question: "Un burndown chart montre:",
                    options: [
                        "Les coûts du projet au fil du temps",
                        "Le travail restant vs le temps",
                        "La satisfaction des clients",
                        "Les compétences de l'équipe"
                    ],
                    correct: 1
                },
                {
                    question: "Qu'est-ce qu'un impediment?",
                    options: [
                        "Une fonctionnalité complexe",
                        "Un obstacle qui ralentit ou bloque l'équipe",
                        "Une dette technique",
                        "Un bug dans le code"
                    ],
                    correct: 1
                },
                {
                    question: "Le concept de \"Time-boxing\" dans Scrum signifie:",
                    options: [
                        "Travailler uniquement pendant les heures de bureau",
                        "Fixer une durée maximale pour les événements et Sprints",
                        "Mesurer le temps passé sur chaque tâche",
                        "Planifier les vacances de l'équipe"
                    ],
                    correct: 1
                }
            ]
        }
    ],
    
    // Test 2: 30 Questions Avancées Scrum for Agile Project Management
    set2: [
        {
            id: 1,
            title: "Artefacts Scrum Approfondis (Questions 1-6)",
            questions: [
                {
                    question: "Quels sont les trois artefacts officiels de Scrum?",
                    options: [
                        "Product Backlog, Sprint Backlog, Burndown Chart",
                        "Product Backlog, Sprint Backlog, Increment",
                        "User Stories, Tasks, Definition of Done",
                        "Vision, Roadmap, Release Plan"
                    ],
                    correct: 1
                },
                {
                    question: "Le Sprint Backlog appartient à:",
                    options: [
                        "Product Owner",
                        "Scrum Master",
                        "Development Team",
                        "Toute l'équipe Scrum"
                    ],
                    correct: 2
                },
                {
                    question: "Qu'est-ce qui peut être modifié pendant un Sprint?",
                    options: [
                        "Le Sprint Goal",
                        "Le Sprint Backlog (comment atteindre l'objectif)",
                        "La composition de l'équipe",
                        "La durée du Sprint"
                    ],
                    correct: 1
                },
                {
                    question: "Un Increment doit être:",
                    options: [
                        "Terminé selon la Definition of Done",
                        "Approuvé par le Product Owner avant la fin du Sprint",
                        "Déployé en production immédiatement",
                        "Documenté complètement"
                    ],
                    correct: 0
                },
                {
                    question: "Le Product Backlog est ordonné par:",
                    options: [
                        "Priorité technique",
                        "Complexité des items",
                        "Valeur, risque, dépendances et autres facteurs déterminés par le PO",
                        "Ordre chronologique d'ajout"
                    ],
                    correct: 2
                },
                {
                    question: "Combien de Product Backlogs peut avoir un produit?",
                    options: [
                        "Un seul",
                        "Un par équipe Scrum",
                        "Un par Sprint",
                        "Autant que nécessaire"
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 2,
            title: "Sprint et Planification (Questions 7-12)",
            questions: [
                {
                    question: "Qui crée le Sprint Goal?",
                    options: [
                        "Le Product Owner seul",
                        "L'équipe Scrum collaborative pendant le Sprint Planning",
                        "Le Scrum Master",
                        "Les stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Le Sprint Planning répond à quelles questions?",
                    options: [
                        "Pourquoi ce Sprint est-il précieux? (Quoi) Comment le travail sera-t-il fait?",
                        "Uniquement: Que peut-on livrer?",
                        "Uniquement: Comment allons-nous travailler?",
                        "Combien coûtera le Sprint?"
                    ],
                    correct: 0
                },
                {
                    question: "Pendant le Sprint Planning, qui décide combien de travail peut être accompli?",
                    options: [
                        "Product Owner",
                        "Scrum Master",
                        "Development Team (basé sur leur capacité)",
                        "Management"
                    ],
                    correct: 2
                },
                {
                    question: "Un Sprint commence:",
                    options: [
                        "Après l'approbation du management",
                        "Immédiatement après la fin du Sprint précédent",
                        "Lundi matin uniquement",
                        "Après que le Product Backlog soit complètement affiné"
                    ],
                    correct: 1
                },
                {
                    question: "Que signifie qu'un élément du Product Backlog est \"Ready\"?",
                    options: [
                        "Il est codé et testé",
                        "Il est suffisamment clair pour être inclus dans un Sprint",
                        "Il est approuvé par les stakeholders",
                        "Il a été estimé à exactement 8 story points"
                    ],
                    correct: 1
                },
                {
                    question: "Si la Development Team ne peut pas terminer tout le travail prévu, que se passe-t-il?",
                    options: [
                        "Le Sprint est prolongé",
                        "L'équipe travaille en heures supplémentaires",
                        "Le travail incomplet retourne au Product Backlog",
                        "Le Sprint est considéré comme un échec"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 3,
            title: "Collaboration et Communication (Questions 13-18)",
            questions: [
                {
                    question: "Qui peut participer au Daily Scrum?",
                    options: [
                        "Uniquement la Development Team (les autres peuvent observer)",
                        "Toute l'organisation",
                        "L'équipe Scrum complète obligatoirement",
                        "Les stakeholders invités"
                    ],
                    correct: 0
                },
                {
                    question: "Le Scrum Master peut-il dire à la Development Team comment faire le travail?",
                    options: [
                        "Oui, c'est son rôle principal",
                        "Non, l'équipe s'auto-organise",
                        "Oui, mais seulement pour les juniors",
                        "Oui, si le Product Owner le demande"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle est la meilleure façon pour un Product Owner de communiquer avec la Development Team?",
                    options: [
                        "Uniquement par email formel",
                        "À travers le Scrum Master exclusivement",
                        "Communication directe, fréquente et collaborative",
                        "Uniquement lors des événements Scrum"
                    ],
                    correct: 2
                },
                {
                    question: "Que fait le Scrum Master si le Product Owner ne remplit pas bien son rôle?",
                    options: [
                        "Le remplace temporairement",
                        "Le reporte au management",
                        "Le coach et l'aide à comprendre son rôle",
                        "Ignore le problème"
                    ],
                    correct: 2
                },
                {
                    question: "Les stakeholders peuvent-ils changer les priorités pendant le Sprint?",
                    options: [
                        "Oui, à tout moment",
                        "Non, uniquement lors du Sprint Review/Planning suivant",
                        "Oui, mais seulement avec l'accord du Scrum Master",
                        "Oui, s'ils paient un supplément"
                    ],
                    correct: 1
                },
                {
                    question: "Comment l'équipe Scrum devrait-elle gérer un membre sous-performant?",
                    options: [
                        "Le Scrum Master doit le sanctionner",
                        "L'équipe s'auto-organise pour résoudre le problème (coaching, support)",
                        "Le Product Owner décide de son sort",
                        "Attendre l'évaluation annuelle"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 4,
            title: "Estimation et Vélocité (Questions 19-24)",
            questions: [
                {
                    question: "Quelle unité est utilisée pour estimer en Scrum?",
                    options: [
                        "Obligatoirement les heures",
                        "Story points, heures idéales, ou autre unité relative",
                        "Uniquement les jours-homme",
                        "Euros ou dollars"
                    ],
                    correct: 1
                },
                {
                    question: "Qu'est-ce que la vélocité mesure?",
                    options: [
                        "La rapidité des développeurs à coder",
                        "Le travail complété selon la DoD par Sprint",
                        "Le nombre de commits Git",
                        "Les heures travaillées"
                    ],
                    correct: 1
                },
                {
                    question: "La vélocité devrait être utilisée pour:",
                    options: [
                        "Comparer les équipes entre elles",
                        "Évaluer individuellement les membres de l'équipe",
                        "Planifier et prévoir la capacité de la même équipe",
                        "Calculer les bonus de performance"
                    ],
                    correct: 2
                },
                {
                    question: "Qui estime les éléments du Product Backlog?",
                    options: [
                        "Product Owner seul",
                        "Scrum Master",
                        "Development Team (ceux qui feront le travail)",
                        "Un expert externe"
                    ],
                    correct: 2
                },
                {
                    question: "Qu'est-ce que le Planning Poker?",
                    options: [
                        "Un jeu pour divertir l'équipe",
                        "Une technique d'estimation collaborative utilisant des cartes",
                        "Une méthode de priorisation",
                        "Un outil de gestion de projet"
                    ],
                    correct: 1
                },
                {
                    question: "Si la vélocité varie significativement d'un Sprint à l'autre, que devrait faire l'équipe?",
                    options: [
                        "Ignorer ces variations",
                        "Sanctionner l'équipe",
                        "Inspecter et identifier les causes lors de la Retrospective",
                        "Changer toute l'équipe"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 5,
            title: "Mise à l'Échelle et Situations Complexes (Questions 25-30)",
            questions: [
                {
                    question: "Plusieurs équipes Scrum travaillant sur le même produit devraient:",
                    options: [
                        "Avoir chacune leur propre Definition of Done",
                        "Partager une Definition of Done commune",
                        "Ne pas coordonner leurs efforts",
                        "Avoir chacune leur Product Owner"
                    ],
                    correct: 1
                },
                {
                    question: "Qu'est-ce qu'un \"Scrum of Scrums\"?",
                    options: [
                        "Un événement Scrum officiel",
                        "Une technique de coordination entre plusieurs équipes Scrum",
                        "Une réunion mensuelle du management",
                        "Un framework différent de Scrum"
                    ],
                    correct: 1
                },
                {
                    question: "Si un membre de l'équipe est malade pendant le Sprint:",
                    options: [
                        "Le Sprint doit être annulé",
                        "L'équipe s'adapte et fait de son mieux avec la capacité restante",
                        "On reporte le Sprint d'une semaine",
                        "On embauche immédiatement un remplaçant"
                    ],
                    correct: 1
                },
                {
                    question: "Une dette technique devrait être:",
                    options: [
                        "Ignorée pour livrer plus vite",
                        "Gérée et incluse dans le Product Backlog",
                        "Résolue uniquement après la release",
                        "Cachée au Product Owner"
                    ],
                    correct: 1
                },
                {
                    question: "Que signifie \"Potentially Shippable\" (potentiellement livrable)?",
                    options: [
                        "Le code est écrit mais non testé",
                        "L'incrément respecte la DoD et POURRAIT être livré (décision du PO)",
                        "L'incrément DOIT être déployé en production",
                        "Le produit est à 50% terminé"
                    ],
                    correct: 1
                },
                {
                    question: "En cas de conflit entre le Product Owner et la Development Team, le Scrum Master devrait:",
                    options: [
                        "Prendre parti pour le Product Owner",
                        "Prendre parti pour la Development Team",
                        "Faciliter la discussion pour trouver une solution collaborative",
                        "Escalader au management immédiatement"
                    ],
                    correct: 2
                }
            ]
        }
    ],
    
    // Test 3: 40 Questions Situations Pratiques - Applied Scrum for Agile Project Management
    set3: [
        {
            id: 1,
            title: "Gestion des Conflits et Situations Difficiles (Questions 1-10)",
            questions: [
                {
                    question: "Dans un contexte Agile, quel est le principal risque des sprints de 3 mois ?",
                    options: [
                        "Augmentation de la visibilité pour les stakeholders",
                        "Réduction de la capacité d'adaptation aux changements",
                        "Amélioration de la qualité du code",
                        "Diminution du temps de planification"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle affirmation sur le Product Backlog est VRAIE ?",
                    options: [
                        "Il ne contient que les besoins techniques",
                        "Il est ordonné uniquement par date d'arrivée",
                        "Il contient TOUS les besoins connus du produit",
                        "Il est figé après le Sprint Planning"
                    ],
                    correct: 2
                },
                {
                    question: "Pendant un Sprint, que peut-on modifier sans affecter le Sprint Goal ?",
                    options: [
                        "La composition de l'équipe de développement",
                        "Les objectifs de qualité",
                        "Le scope des User Stories sélectionnées",
                        "La méthode de travail pour atteindre l'objectif"
                    ],
                    correct: 3
                },
                {
                    question: "Quelle est la différence fondamentale entre Product Backlog et Sprint Backlog ?",
                    options: [
                        "Le Product Backlog est technique, le Sprint Backlog est fonctionnel",
                        "Le Product Backlog contient tous les besoins, le Sprint Backlog seulement ceux du sprint",
                        "Le Product Backlog est géré par les Developers, le Sprint Backlog par le PO",
                        "Le Product Backlog change quotidiennement, le Sprint Backlog est fixe"
                    ],
                    correct: 1
                },
                {
                    question: "Qui est responsable de la résolution des impediments bloquants ?",
                    options: [
                        "Uniquement le Product Owner",
                        "Uniquement le Scrum Master",
                        "L'équipe Scrum collectivement",
                        "Les stakeholders externes"
                    ],
                    correct: 2
                },
                {
                    question: "Dans la Sprint Review, quel élément n'est PAS typiquement présenté ?",
                    options: [
                        "Le travail terminé et conforme à la Definition of Done",
                        "Les problèmes techniques non résolus",
                        "Les métriques de qualité du code",
                        "Le plan détaillé du prochain sprint"
                    ],
                    correct: 3
                },
                {
                    question: "Quelle pratique permet de réduire l'effet tunnel en Agile ?",
                    options: [
                        "Livraison fréquente d'incréments fonctionnels",
                        "Documentation exhaustive des spécifications",
                        "Planification détaillée sur 6 mois",
                        "Réduction des réunions avec le client"
                    ],
                    correct: 0
                },
                {
                    question: "Quel indicateur mesure le mieux la performance d'une équipe Scrum ?",
                    options: [
                        "Le nombre d'heures travaillées",
                        "La valeur business délivrée chaque sprint",
                        "Le pourcentage de tâches terminées",
                        "La vitesse de défilement des burndown charts"
                    ],
                    correct: 1
                },
                {
                    question: "Quand peut-on annuler un Sprint ?",
                    options: [
                        "Quand le Product Owner change d'avis",
                        "Quand le Sprint Goal devient obsolète",
                        "Quand les Developers rencontrent des difficultés techniques",
                        "Quand le Scrum Master le décide unilatéralement"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle est la principale responsabilité des Developers lors du Sprint Planning ?",
                    options: [
                        "Définir la vision produit",
                        "Estimer et s'engager sur le travail réalisable",
                        "Assigner les tâches aux membres",
                        "Présenter le travail aux stakeholders"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "Adaptation et Amélioration Continue (Questions 11-20)",
            questions: [
                {
                    question: "Quel élément n'est PAS inclus dans le Sprint Backlog ?",
                    options: [
                        "Le Sprint Goal",
                        "Les User Stories sélectionnées",
                        "Le plan pour atteindre l'objectif",
                        "La roadmap produit sur 6 mois"
                    ],
                    correct: 3
                },
                {
                    question: "Dans le Daily Scrum, que doivent partager les Developers ?",
                    options: [
                        "Le détail technique de chaque ligne de code",
                        "Leur progression vers le Sprint Goal",
                        "Leurs préférences personnelles de travail",
                        "Les problèmes organisationnels de l'entreprise"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle méthode de rétrospective utilise des métaphores nautiques ?",
                    options: [
                        "Speed Boat",
                        "Start/Stop/Continue",
                        "Mad/Sad/Glad",
                        "4L (Liked, Learned, Lacked, Longed For)"
                    ],
                    correct: 0
                },
                {
                    question: "Quel artefact est mis à jour pendant le Backlog Refinement ?",
                    options: [
                        "Le Sprint Backlog",
                        "L'incrément",
                        "Le Product Backlog",
                        "La Definition of Done"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle métrique aide à prédire la capacité de livraison future ?",
                    options: [
                        "La vélocité moyenne sur 3 sprints",
                        "Le nombre de réunions tenues",
                        "Le taux d'occupation des ressources",
                        "Le budget dépensé"
                    ],
                    correct: 0
                },
                {
                    question: "Quand une User Story est-elle considérée \"Ready\" ?",
                    options: [
                        "Quand le Product Owner l'a écrite",
                        "Quand elle est suffisamment détaillée pour être estimée",
                        "Quand les Developers l'ont approuvée",
                        "Quand elle a été présentée aux stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Quel rôle est responsable de maximiser la valeur du produit ?",
                    options: [
                        "Scrum Master",
                        "Product Owner",
                        "Developers",
                        "Project Manager"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle pratique permet de gérer la complexité en Agile ?",
                    options: [
                        "Décomposer les éléments complexes en plus petits",
                        "Éviter les éléments complexes",
                        "Externaliser les parties complexes",
                        "Documenter abondamment la complexité"
                    ],
                    correct: 0
                },
                {
                    question: "Dans la Sprint Retrospective, quel thème est INAPPROPRIÉ ?",
                    options: [
                        "Les outils utilisés",
                        "Les processus de communication",
                        "Les salaires des membres",
                        "L'efficacité des cérémonies"
                    ],
                    correct: 2
                },
                {
                    question: "Quel pourcentage de projets Agile échouent selon le Standish Group ?",
                    options: [
                        "9%",
                        "11%",
                        "29%",
                        "39%"
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 3,
            title: "Scaling Agile et Équipes Multiples (Questions 21-30)",
            questions: [
                {
                    question: "Quelle affirmation sur le Timeboxing est FAUSSE ?",
                    options: [
                        "Il crée de la pression temporelle",
                        "Il garantit que les événements respectent leur durée",
                        "Il peut être ajusté selon les besoins du moment",
                        "Il favorise la focalisation sur l'essentiel"
                    ],
                    correct: 2
                },
                {
                    question: "Quel élément n'est PAS une cérémonie Scrum ?",
                    options: [
                        "Backlog Refinement",
                        "Sprint Planning",
                        "Daily Standup",
                        "Project Review"
                    ],
                    correct: 3
                },
                {
                    question: "Quand le Product Backlog est-il mis à jour ?",
                    options: [
                        "Uniquement en début de projet",
                        "À la fin de chaque sprint",
                        "En continu tout au long du projet",
                        "Uniquement pendant le Sprint Planning"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle compétence est la PLUS importante pour un Scrum Master ?",
                    options: [
                        "Expertise technique approfondie",
                        "Capacité de facilitation et coaching",
                        "Connaissance métier pointue",
                        "Compétences en gestion de budget"
                    ],
                    correct: 1
                },
                {
                    question: "Quel risque est réduit par les sprints courts ?",
                    options: [
                        "Le risque de changement des besoins",
                        "Le risque de sous-utilisation des ressources",
                        "Le risque de sur-documentation",
                        "Le risque de communication excessive"
                    ],
                    correct: 0
                },
                {
                    question: "Quelle méthode utilise des colonnes \"To Do\", \"In Progress\", \"Done\" ?",
                    options: [
                        "Scrum",
                        "Kanban",
                        "Waterfall",
                        "Lean"
                    ],
                    correct: 1
                },
                {
                    question: "Quel est l'objectif principal du Backlog Refinement ?",
                    options: [
                        "Présenter le travail aux stakeholders",
                        "Préparer les User Stories pour les futurs sprints",
                        "Assigner les tâches aux Developers",
                        "Réviser les salaires de l'équipe"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle affirmation sur la Definition of Done est VRAIE ?",
                    options: [
                        "Elle est unique pour toute l'organisation",
                        "Elle est définie par le Product Owner seul",
                        "Elle peut évoluer au cours du projet",
                        "Elle n'inclut pas les tests automatisés"
                    ],
                    correct: 2
                },
                {
                    question: "Quel indicateur montre l'avancement vers le Sprint Goal ?",
                    options: [
                        "Le Burndown Chart du sprint",
                        "La vélocité historique",
                        "Le nombre de commits GitHub",
                        "Le temps passé en réunion"
                    ],
                    correct: 0
                },
                {
                    question: "Quelle pratique est caractéristique des équipes Agile matures ?",
                    options: [
                        "Amélioration continue des processus",
                        "Respect strict du plan initial",
                        "Documentation exhaustive",
                        "Hiérarchie décisionnelle claire"
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 4,
            title: "Métriques Avancées et Performance (Questions 31-40)",
            questions: [
                {
                    question: "Quel rôle représente les stakeholders auprès de l'équipe ?",
                    options: [
                        "Product Owner",
                        "Scrum Master",
                        "Developers",
                        "Project Manager"
                    ],
                    correct: 0
                },
                {
                    question: "Quand la vélocité est-elle mesurée ?",
                    options: [
                        "À la fin de chaque sprint",
                        "Au milieu de chaque sprint",
                        "Au début de chaque projet",
                        "Une fois par mois"
                    ],
                    correct: 0
                },
                {
                    question: "Quel facteur influence le PLUS la capacité d'une équipe ?",
                    options: [
                        "Le nombre de membres",
                        "L'expérience collective et la collaboration",
                        "Le budget alloué",
                        "Les outils utilisés"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle technique d'estimation utilise des tailles de T-shirt ?",
                    options: [
                        "Planning Poker",
                        "Bucket System",
                        "Affinity Estimation",
                        "T-Shirt Sizing"
                    ],
                    correct: 3
                },
                {
                    question: "Quel élément n'est PAS un principe Agile ?",
                    options: [
                        "Livraison fréquente de logiciel fonctionnel",
                        "Collaboration étroite avec le client",
                        "Documentation exhaustive avant développement",
                        "Adaptation au changement"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle métaphore décrit le mieux l'approche Agile ?",
                    options: [
                        "Un tunnel linéaire",
                        "Une spirale évolutive",
                        "Une cascade descendante",
                        "Une pyramide rigide"
                    ],
                    correct: 1
                },
                {
                    question: "Quel avantage les projets Agile ont-ils sur les projets Waterfall ?",
                    options: [
                        "Moins de communication nécessaire",
                        "Meilleure adaptabilité aux changements",
                        "Documentation plus complète",
                        "Planification plus précise"
                    ],
                    correct: 1
                },
                {
                    question: "Quel outil visualise le flux de valeur ?",
                    options: [
                        "Burndown Chart",
                        "Cumulative Flow Diagram",
                        "Velocity Chart",
                        "Burnup Chart"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle pratique réduit le \"batch size\" en développement ?",
                    options: [
                        "Livraison en petits incréments",
                        "Développement en grandes fonctionnalités",
                        "Tests en fin de projet",
                        "Documentation préalable"
                    ],
                    correct: 0
                },
                {
                    question: "Quel pourcentage d'entreprises utilisent Scrum exclusivement ?",
                    options: [
                        "16%",
                        "58%",
                        "78%",
                        "94%"
                    ],
                    correct: 1
                }
            ]
        }
    ],
    
    // Test 4: 40 Questions Modules Complets - Applied Scrum for Agile Project Management
    set4: [
        {
            id: 1,
            title: "Module Product Owner (Questions 1-10)",
            questions: [
                {
                    question: "Quelle est la principale limitation du modèle Waterfall ?",
                    options: [
                        "Il permet une grande flexibilité face aux changements",
                        "Il manque de réactivité aux évolutions des besoins clients",
                        "Il produit trop de documentation",
                        "Il est trop adapté aux petits projets"
                    ],
                    correct: 1
                },
                {
                    question: "Selon le Manifeste Agile, quelle valeur prime sur \"suivre un plan\" ?",
                    options: [
                        "Les processus et outils",
                        "La documentation complète",
                        "Répondre au changement",
                        "La négociation contractuelle"
                    ],
                    correct: 2
                },
                {
                    question: "Quel pourcentage de projets Agile réussissent mieux selon le Standish Group ?",
                    options: [
                        "11%",
                        "29%",
                        "39%",
                        "60%"
                    ],
                    correct: 2
                },
                {
                    question: "Quel est l'objectif principal du développement itératif ?",
                    options: [
                        "Livrer moins fréquemment",
                        "Réduire l'effet tunnel et livrer de la valeur régulièrement",
                        "Éviter les tests automatisés",
                        "Augmenter la documentation"
                    ],
                    correct: 1
                },
                {
                    question: "Quel événement Scrum dure maximum 15 minutes ?",
                    options: [
                        "Sprint Planning",
                        "Sprint Review",
                        "Daily Scrum",
                        "Sprint Retrospective"
                    ],
                    correct: 2
                },
                {
                    question: "Qui est responsable de la vision du produit ?",
                    options: [
                        "Scrum Master",
                        "Product Owner",
                        "Developers",
                        "Stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Qu'est-ce qu'un Sprint ?",
                    options: [
                        "Une réunion de planification",
                        "Une période de 1-4 semaines où un incrément est produit",
                        "Un document de spécification",
                        "Un outil de reporting"
                    ],
                    correct: 1
                },
                {
                    question: "Quel artefact contient tous les besoins connus du produit ?",
                    options: [
                        "Sprint Backlog",
                        "Product Backlog",
                        "Definition of Done",
                        "Increment"
                    ],
                    correct: 1
                },
                {
                    question: "Quel critère prime pour ordonner le Product Backlog ?",
                    options: [
                        "La difficulté technique",
                        "La valeur utilisateur",
                        "L'ordre d'arrivée",
                        "Les préférences des developers"
                    ],
                    correct: 1
                },
                {
                    question: "Que signifie l'acronyme \"INVEST\" pour les User Stories ?",
                    options: [
                        "Independent, Negotiable, Valuable, Estimable, Small, Testable",
                        "Integrated, Negotiated, Verified, Estimated, Structured, Timed",
                        "Iterative, Negotiable, Validated, Efficient, Simple, Technical",
                        "International, Negotiated, Valuable, Estimated, Strategic, Tested"
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 2,
            title: "Module Scrum Master (Questions 11-20)",
            questions: [
                {
                    question: "Quelle est la principale limitation du modèle Waterfall ?",
                    options: [
                        "Il permet une grande flexibilité face aux changements",
                        "Il manque de réactivité aux évolutions des besoins clients",
                        "Il produit trop de documentation",
                        "Il est trop adapté aux petits projets"
                    ],
                    correct: 1
                },
                {
                    question: "Selon le Manifeste Agile, quelle valeur prime sur \"suivre un plan\" ?",
                    options: [
                        "Les processus et outils",
                        "La documentation complète",
                        "Répondre au changement",
                        "La négociation contractuelle"
                    ],
                    correct: 2
                },
                {
                    question: "Quel événement Scrum dure maximum 15 minutes ?",
                    options: [
                        "Sprint Planning",
                        "Sprint Review",
                        "Daily Scrum",
                        "Sprint Retrospective"
                    ],
                    correct: 2
                },
                {
                    question: "Qui est responsable de la vision du produit ?",
                    options: [
                        "Scrum Master",
                        "Product Owner",
                        "Developers",
                        "Stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Quel artefact contient tous les besoins connus du produit ?",
                    options: [
                        "Sprint Backlog",
                        "Product Backlog",
                        "Definition of Done",
                        "Increment"
                    ],
                    correct: 1
                },
                {
                    question: "Quel critère prime pour ordonner le Product Backlog ?",
                    options: [
                        "La difficulté technique",
                        "La valeur utilisateur",
                        "L'ordre d'arrivée",
                        "Les préférences des developers"
                    ],
                    correct: 1
                },
                {
                    question: "Quel est le rôle principal du Scrum Master ?",
                    options: [
                        "Définir les besoins clients",
                        "Établir les valeurs Scrum et faciliter la collaboration",
                        "Développer les fonctionnalités",
                        "Tester le produit"
                    ],
                    correct: 1
                },
                {
                    question: "Qui est responsable de l'estimation des User Stories ?",
                    options: [
                        "Product Owner seul",
                        "Scrum Master seul",
                        "Les Developers",
                        "Les Stakeholders"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle affirmation sur l'équipe de développement est VRAIE ?",
                    options: [
                        "Ils sont dirigés par le Scrum Master",
                        "Ils sont auto-organisés et pluridisciplinaires",
                        "Ils suivent les instructions du Product Owner",
                        "Ils se concentrent uniquement sur le développement"
                    ],
                    correct: 1
                },
                {
                    question: "Qui peut annuler un Sprint ?",
                    options: [
                        "Seulement le Scrum Master",
                        "Seulement le Product Owner",
                        "L'équipe Scrum collective",
                        "Les Stakeholders"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "Module Development Team (Questions 21-30)",
            questions: [
                {
                    question: "Quelle est la principale limitation du modèle Waterfall ?",
                    options: [
                        "Il permet une grande flexibilité face aux changements",
                        "Il manque de réactivité aux évolutions des besoins clients",
                        "Il produit trop de documentation",
                        "Il est trop adapté aux petits projets"
                    ],
                    correct: 1
                },
                {
                    question: "Selon le Manifeste Agile, quelle valeur prime sur \"suivre un plan\" ?",
                    options: [
                        "Les processus et outils",
                        "La documentation complète",
                        "Répondre au changement",
                        "La négociation contractuelle"
                    ],
                    correct: 2
                },
                {
                    question: "Quel événement Scrum dure maximum 15 minutes ?",
                    options: [
                        "Sprint Planning",
                        "Sprint Review",
                        "Daily Scrum",
                        "Sprint Retrospective"
                    ],
                    correct: 2
                },
                {
                    question: "Qui est responsable de la vision du produit ?",
                    options: [
                        "Scrum Master",
                        "Product Owner",
                        "Developers",
                        "Stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Quel artefact contient tous les besoins connus du produit ?",
                    options: [
                        "Sprint Backlog",
                        "Product Backlog",
                        "Definition of Done",
                        "Increment"
                    ],
                    correct: 1
                },
                {
                    question: "Quel critère prime pour ordonner le Product Backlog ?",
                    options: [
                        "La difficulté technique",
                        "La valeur utilisateur",
                        "L'ordre d'arrivée",
                        "Les préférences des developers"
                    ],
                    correct: 1
                },
                {
                    question: "Quel est l'objectif principal du Sprint Planning ?",
                    options: [
                        "Présenter le travail aux stakeholders",
                        "Définir le Sprint Goal et sélectionner les User Stories",
                        "Inspecter le fonctionnement de l'équipe",
                        "Résoudre les problèmes techniques"
                    ],
                    correct: 1
                },
                {
                    question: "Combien de temps dure la Sprint Review pour un sprint de 2 semaines ?",
                    options: [
                        "15 minutes",
                        "1 heure",
                        "2 heures",
                        "4 heures"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle question n'est PAS typique du Daily Scrum ?",
                    options: [
                        "Qu'as-tu fait hier ?",
                        "Que vas-tu faire aujourd'hui ?",
                        "Quels obstacles rencontres-tu ?",
                        "Quelle est ta tâche préférée ?"
                    ],
                    correct: 3
                },
                {
                    question: "Quel événement permet d'identifier des améliorations de processus ?",
                    options: [
                        "Sprint Planning",
                        "Daily Scrum",
                        "Sprint Review",
                        "Sprint Retrospective"
                    ],
                    correct: 3
                }
            ]
        },
        {
            id: 4,
            title: "Module Transformation Agile (Questions 31-40)",
            questions: [
                {
                    question: "Quelle est la principale limitation du modèle Waterfall ?",
                    options: [
                        "Il permet une grande flexibilité face aux changements",
                        "Il manque de réactivité aux évolutions des besoins clients",
                        "Il produit trop de documentation",
                        "Il est trop adapté aux petits projets"
                    ],
                    correct: 1
                },
                {
                    question: "Selon le Manifeste Agile, quelle valeur prime sur \"suivre un plan\" ?",
                    options: [
                        "Les processus et outils",
                        "La documentation complète",
                        "Répondre au changement",
                        "La négociation contractuelle"
                    ],
                    correct: 2
                },
                {
                    question: "Quel événement Scrum dure maximum 15 minutes ?",
                    options: [
                        "Sprint Planning",
                        "Sprint Review",
                        "Daily Scrum",
                        "Sprint Retrospective"
                    ],
                    correct: 2
                },
                {
                    question: "Qui est responsable de la vision du produit ?",
                    options: [
                        "Scrum Master",
                        "Product Owner",
                        "Developers",
                        "Stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Quel artefact contient tous les besoins connus du produit ?",
                    options: [
                        "Sprint Backlog",
                        "Product Backlog",
                        "Definition of Done",
                        "Increment"
                    ],
                    correct: 1
                },
                {
                    question: "Quel critère prime pour ordonner le Product Backlog ?",
                    options: [
                        "La difficulté technique",
                        "La valeur utilisateur",
                        "L'ordre d'arrivée",
                        "Les préférences des developers"
                    ],
                    correct: 1
                },
                {
                    question: "Qu'est-ce qu'un \"incrément\" ?",
                    options: [
                        "Un document de spécification",
                        "Une partie du produit potentiellement livrable",
                        "Une réunion de planification",
                        "Un outil de gestion de projet"
                    ],
                    correct: 1
                },
                {
                    question: "Quel outil visualise le workflow en colonnes ?",
                    options: [
                        "Burn-down chart",
                        "Tableau Kanban",
                        "User Story Map",
                        "Cumulative Flow Diagram"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle technique de rétrospective utilise \"Keep/Drop/Start\" ?",
                    options: [
                        "Speed Boat",
                        "Glad/Sad/Mad",
                        "Starfish",
                        "4L (Liked/Learned/Lacked/Longed)"
                    ],
                    correct: 2
                },
                {
                    question: "Quel pourcentage d'entreprises utilisent Scrum selon Scrum Alliance ?",
                    options: [
                        "16%",
                        "58%",
                        "78%",
                        "94%"
                    ],
                    correct: 1
                }
            ]
        }
    ]
};