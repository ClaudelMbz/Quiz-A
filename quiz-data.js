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
    ]
};