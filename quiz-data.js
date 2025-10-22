// Données des quiz Agile for Project Management
const quizData = {
    // Test 1: 30 Essential Questions - Applied Scrum for Agile Project Management
    set1: [
        {
            id: 1,
            title: "Scrum Fundamentals (Questions 1-8)",
            questions: [
                {
                    question: "What are the three pillars of Scrum?",
                    options: [
                        "Planning, Execution, Control",
                        "Transparency, Inspection, Adaptation",
                        "Collaboration, Iteration, Improvement",
                        "Vision, Commitment, Focus"
                    ],
                    correct: 1
                },
                {
                    question: "What is the maximum recommended duration for a Sprint?",
                    options: [
                        "2 weeks",
                        "1 month",
                        "6 weeks",
                        "3 months"
                    ],
                    correct: 1
                },
                {
                    question: "How many official roles exist in Scrum?",
                    options: [
                        "2 (Product Owner and Scrum Master)",
                        "3 (Product Owner, Scrum Master, Development Team)",
                        "4 (Product Owner, Scrum Master, Development Team, Stakeholders)",
                        "5 (Product Owner, Scrum Master, Developers, Testers, Designers)"
                    ],
                    correct: 1
                },
                {
                    question: "Who is responsible for maximizing product value?",
                    options: [
                        "Scrum Master",
                        "Development Team",
                        "Product Owner",
                        "Stakeholders"
                    ],
                    correct: 2
                },
                {
                    question: "What is the ideal size of a Development Team?",
                    options: [
                        "3-5 people",
                        "5-9 people",
                        "3-9 people",
                        "10-15 people"
                    ],
                    correct: 2
                },
                {
                    question: "The Scrum values are:",
                    options: [
                        "Courage, Focus, Commitment, Respect, Openness",
                        "Collaboration, Communication, Simplicity, Feedback",
                        "Quality, Speed, Efficiency, Innovation",
                        "Transparency, Discipline, Excellence, Delivery"
                    ],
                    correct: 0
                },
                {
                    question: "What is a product increment?",
                    options: [
                        "An increase in team velocity",
                        "The sum of all Product Backlog items completed during a Sprint",
                        "A project progress report",
                        "A story points estimation"
                    ],
                    correct: 1
                },
                {
                    question: "The Definition of Done (DoD) is:",
                    options: [
                        "Defined only by the Product Owner",
                        "A shared agreement on the criteria for completion of an item",
                        "Changeable during the Sprint",
                        "Optional for the team"
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
                    question: "Who is responsible for Product Backlog prioritization?",
                    options: [
                        "Scrum Master",
                        "Development Team",
                        "Product Owner",
                        "The entire team votes"
                    ],
                    correct: 2
                },
                {
                    question: "A well-formed User Story follows the format:",
                    options: [
                        "What, Why, How",
                        "As a [role], I want [functionality], so that [benefit]",
                        "Objective, Action, Result",
                        "Problem, Solution, Validation"
                    ],
                    correct: 1
                },
                {
                    question: "What is Product Backlog Refinement (Grooming)?",
                    options: [
                        "A formal Scrum event with fixed duration",
                        "An ongoing activity to clarify and estimate backlog items",
                        "A monthly meeting with stakeholders",
                        "The exclusive responsibility of the Product Owner"
                    ],
                    correct: 1
                },
                {
                    question: "Acceptance criteria serve to:",
                    options: [
                        "Evaluate team performance",
                        "Define when a User Story is considered done",
                        "Prioritize features",
                        "Calculate velocity"
                    ],
                    correct: 1
                },
                {
                    question: "What does INVEST mean for User Stories?",
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
            title: "Scrum Events (Questions 14-21)",
            questions: [
                {
                    question: "What is the maximum duration of Sprint Planning for a 2-week Sprint?",
                    options: [
                        "2 hours",
                        "4 hours",
                        "6 hours",
                        "8 hours"
                    ],
                    correct: 1
                },
                {
                    question: "The main purpose of the Daily Scrum is:",
                    options: [
                        "To report to the Scrum Master",
                        "To synchronize activities and create a plan for the next 24 hours",
                        "To solve all technical problems",
                        "To update the burndown chart"
                    ],
                    correct: 1
                },
                {
                    question: "What is the duration of the Daily Scrum?",
                    options: [
                        "10 minutes",
                        "15 minutes",
                        "30 minutes",
                        "Variable according to needs"
                    ],
                    correct: 1
                },
                {
                    question: "Who should attend the Sprint Review?",
                    options: [
                        "Only the Scrum team",
                        "The Scrum team and key stakeholders",
                        "Only the Product Owner and stakeholders",
                        "The entire organization"
                    ],
                    correct: 1
                },
                {
                    question: "The maximum duration of the Sprint Review for a one-month Sprint is:",
                    options: [
                        "2 hours",
                        "3 hours",
                        "4 hours",
                        "8 hours"
                    ],
                    correct: 2
                },
                {
                    question: "The Sprint Retrospective focuses on:",
                    options: [
                        "The product and its features",
                        "The process, people, and tools",
                        "Organizational objectives",
                        "Velocity and estimates"
                    ],
                    correct: 1
                },
                {
                    question: "Can a Sprint be cancelled?",
                    options: [
                        "No, never",
                        "Yes, if the team decides",
                        "Yes, only the Product Owner can cancel it",
                        "Yes, if the Scrum Master approves it"
                    ],
                    correct: 2
                },
                {
                    question: "What happens with unfinished work at the end of a Sprint?",
                    options: [
                        "It is automatically carried over to the next Sprint",
                        "It is considered 90% complete",
                        "It returns to the Product Backlog and must be re-estimated",
                        "It is permanently deleted"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 4,
            title: "Roles and Responsibilities (Questions 22-26)",
            questions: [
                {
                    question: "The main role of the Scrum Master is:",
                    options: [
                        "Manage the team and assign tasks",
                        "Facilitate Scrum and remove impediments",
                        "Make technical decisions",
                        "Manage the project budget"
                    ],
                    correct: 1
                },
                {
                    question: "The Development Team is:",
                    options: [
                        "Hierarchical with specialized roles",
                        "Self-organized and cross-functional",
                        "Managed by the Scrum Master",
                        "Composed only of developers"
                    ],
                    correct: 1
                },
                {
                    question: "Can the Product Owner delegate their responsibilities?",
                    options: [
                        "No, never",
                        "Yes, but remains accountable",
                        "Yes, to the Scrum Master only",
                        "Yes, completely to the team"
                    ],
                    correct: 1
                },
                {
                    question: "Who is responsible for product quality?",
                    options: [
                        "Only testers",
                        "The Scrum Master",
                        "The entire Development Team",
                        "The Product Owner"
                    ],
                    correct: 2
                },
                {
                    question: "Can the Scrum Master be part of the Development Team?",
                    options: [
                        "No, absolutely forbidden",
                        "Yes, but this can create conflicts of interest",
                        "Yes, it's mandatory",
                        "Only in small teams"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 5,
            title: "Metrics and Continuous Improvement (Questions 27-30)",
            questions: [
                {
                    question: "What is velocity in Scrum?",
                    options: [
                        "The speed at which the team codes",
                        "The amount of work completed per Sprint (in story points or hours)",
                        "The number of bugs fixed",
                        "The average delivery time"
                    ],
                    correct: 1
                },
                {
                    question: "A burndown chart shows:",
                    options: [
                        "Project costs over time",
                        "Remaining work vs time",
                        "Customer satisfaction",
                        "Team skills"
                    ],
                    correct: 1
                },
                {
                    question: "What is an impediment?",
                    options: [
                        "A complex feature",
                        "An obstacle that slows down or blocks the team",
                        "Technical debt",
                        "A bug in the code"
                    ],
                    correct: 1
                },
                {
                    question: "The concept of \"Time-boxing\" in Scrum means:",
                    options: [
                        "Working only during office hours",
                        "Setting a maximum duration for events and Sprints",
                        "Measuring time spent on each task",
                        "Planning team vacations"
                    ],
                    correct: 1
                }
            ]
        }
    ],
    
    // Test 2: 30 Advanced Questions Scrum for Agile Project Management
    set2: [
        {
            id: 1,
            title: "Advanced Scrum Artifacts (Questions 1-6)",
            questions: [
                {
                    question: "What are the three official Scrum artifacts?",
                    options: [
                        "Product Backlog, Sprint Backlog, Burndown Chart",
                        "Product Backlog, Sprint Backlog, Increment",
                        "User Stories, Tasks, Definition of Done",
                        "Vision, Roadmap, Release Plan"
                    ],
                    correct: 1
                },
                {
                    question: "The Sprint Backlog belongs to:",
                    options: [
                        "Product Owner",
                        "Scrum Master",
                        "Development Team",
                        "The entire Scrum team"
                    ],
                    correct: 2
                },
                {
                    question: "What can be modified during a Sprint?",
                    options: [
                        "The Sprint Goal",
                        "The Sprint Backlog (how to achieve the goal)",
                        "The team composition",
                        "The Sprint duration"
                    ],
                    correct: 1
                },
                {
                    question: "An Increment must be:",
                    options: [
                        "Done according to the Definition of Done",
                        "Approved by the Product Owner before the end of the Sprint",
                        "Deployed to production immediately",
                        "Completely documented"
                    ],
                    correct: 0
                },
                {
                    question: "The Product Backlog is ordered by:",
                    options: [
                        "Technical priority",
                        "Item complexity",
                        "Value, risk, dependencies and other factors determined by the PO",
                        "Chronological order of addition"
                    ],
                    correct: 2
                },
                {
                    question: "How many Product Backlogs can a product have?",
                    options: [
                        "Only one",
                        "One per Scrum team",
                        "One per Sprint",
                        "As many as needed"
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 2,
            title: "Sprint and Planning (Questions 7-12)",
            questions: [
                {
                    question: "Who creates the Sprint Goal?",
                    options: [
                        "The Product Owner alone",
                        "The Scrum team collaboratively during Sprint Planning",
                        "The Scrum Master",
                        "The stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "What questions does Sprint Planning answer?",
                    options: [
                        "Why is this Sprint valuable? (What) How will the work be done?",
                        "Only: What can be delivered?",
                        "Only: How will we work?",
                        "How much will the Sprint cost?"
                    ],
                    correct: 0
                },
                {
                    question: "During Sprint Planning, who decides how much work can be accomplished?",
                    options: [
                        "Product Owner",
                        "Scrum Master",
                        "Development Team (based on their capacity)",
                        "Management"
                    ],
                    correct: 2
                },
                {
                    question: "A Sprint starts:",
                    options: [
                        "After management approval",
                        "Immediately after the end of the previous Sprint",
                        "Monday morning only",
                        "After the Product Backlog is completely refined"
                    ],
                    correct: 1
                },
                {
                    question: "What does it mean for a Product Backlog item to be \"Ready\"?",
                    options: [
                        "It is coded and tested",
                        "It is clear enough to be included in a Sprint",
                        "It is approved by stakeholders",
                        "It has been estimated at exactly 8 story points"
                    ],
                    correct: 1
                },
                {
                    question: "If the Development Team cannot complete all planned work, what happens?",
                    options: [
                        "The Sprint is extended",
                        "The team works overtime",
                        "The incomplete work returns to the Product Backlog",
                        "The Sprint is considered a failure"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 3,
            title: "Collaboration and Communication (Questions 13-18)",
            questions: [
                {
                    question: "Who can participate in the Daily Scrum?",
                    options: [
                        "Only the Development Team (others can observe)",
                        "The entire organization",
                        "The complete Scrum team is mandatory",
                        "Invited stakeholders"
                    ],
                    correct: 0
                },
                {
                    question: "Can the Scrum Master tell the Development Team how to do the work?",
                    options: [
                        "Yes, it's their main role",
                        "No, the team self-organizes",
                        "Yes, but only for juniors",
                        "Yes, if the Product Owner requests it"
                    ],
                    correct: 1
                },
                {
                    question: "What is the best way for a Product Owner to communicate with the Development Team?",
                    options: [
                        "Only through formal email",
                        "Exclusively through the Scrum Master",
                        "Direct, frequent and collaborative communication",
                        "Only during Scrum events"
                    ],
                    correct: 2
                },
                {
                    question: "What does the Scrum Master do if the Product Owner doesn't fulfill their role well?",
                    options: [
                        "Temporarily replaces them",
                        "Reports to management",
                        "Coaches and helps them understand their role",
                        "Ignores the problem"
                    ],
                    correct: 2
                },
                {
                    question: "Can stakeholders change priorities during the Sprint?",
                    options: [
                        "Yes, at any time",
                        "No, only during the next Sprint Review/Planning",
                        "Yes, but only with the Scrum Master's agreement",
                        "Yes, if they pay extra"
                    ],
                    correct: 1
                },
                {
                    question: "How should the Scrum team handle an underperforming member?",
                    options: [
                        "The Scrum Master must sanction them",
                        "The team self-organizes to solve the problem (coaching, support)",
                        "The Product Owner decides their fate",
                        "Wait for the annual evaluation"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 4,
            title: "Estimation and Velocity (Questions 19-24)",
            questions: [
                {
                    question: "What unit is used for estimation in Scrum?",
                    options: [
                        "Mandatory hours",
                        "Story points, ideal hours, or other relative unit",
                        "Only person-days",
                        "Euros or dollars"
                    ],
                    correct: 1
                },
                {
                    question: "What does velocity measure?",
                    options: [
                        "The speed of developers coding",
                        "Work completed according to DoD per Sprint",
                        "The number of Git commits",
                        "Hours worked"
                    ],
                    correct: 1
                },
                {
                    question: "Velocity should be used for:",
                    options: [
                        "Comparing teams with each other",
                        "Individually evaluating team members",
                        "Planning and forecasting the same team's capacity",
                        "Calculating performance bonuses"
                    ],
                    correct: 2
                },
                {
                    question: "Who estimates Product Backlog items?",
                    options: [
                        "Product Owner alone",
                        "Scrum Master",
                        "Development Team (those who will do the work)",
                        "An external expert"
                    ],
                    correct: 2
                },
                {
                    question: "What is Planning Poker?",
                    options: [
                        "A game to entertain the team",
                        "A collaborative estimation technique using cards",
                        "A prioritization method",
                        "A project management tool"
                    ],
                    correct: 1
                },
                {
                    question: "If velocity varies significantly from Sprint to Sprint, what should the team do?",
                    options: [
                        "Ignore these variations",
                        "Sanction the team",
                        "Inspect and identify causes during the Retrospective",
                        "Change the entire team"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 5,
            title: "Scaling and Complex Situations (Questions 25-30)",
            questions: [
                {
                    question: "Multiple Scrum teams working on the same product should:",
                    options: [
                        "Have their own Definition of Done",
                        "Share a common Definition of Done",
                        "Not coordinate their efforts",
                        "Have their own Product Owner"
                    ],
                    correct: 1
                },
                {
                    question: "What is a \"Scrum of Scrums\"?",
                    options: [
                        "An official Scrum event",
                        "A coordination technique between multiple Scrum teams",
                        "A monthly management meeting",
                        "A different framework from Scrum"
                    ],
                    correct: 1
                },
                {
                    question: "If a team member is sick during the Sprint:",
                    options: [
                        "The Sprint must be cancelled",
                        "The team adapts and does their best with the remaining capacity",
                        "The Sprint is postponed for a week",
                        "A replacement is hired immediately"
                    ],
                    correct: 1
                },
                {
                    question: "Technical debt should be:",
                    options: [
                        "Ignored to deliver faster",
                        "Managed and included in the Product Backlog",
                        "Resolved only after release",
                        "Hidden from the Product Owner"
                    ],
                    correct: 1
                },
                {
                    question: "What does \"Potentially Shippable\" mean?",
                    options: [
                        "Code is written but not tested",
                        "The increment meets the DoD and COULD be delivered (PO decision)",
                        "The increment MUST be deployed to production",
                        "The product is 50% complete"
                    ],
                    correct: 1
                },
                {
                    question: "In case of conflict between the Product Owner and the Development Team, the Scrum Master should:",
                    options: [
                        "Take the Product Owner's side",
                        "Take the Development Team's side",
                        "Facilitate discussion to find a collaborative solution",
                        "Escalate to management immediately"
                    ],
                    correct: 2
                }
            ]
        }
    ],
    
    // Test 3: 40 Practical Situations Questions - Applied Scrum for Agile Project Management
    set3: [
        {
            id: 1,
            title: "Conflict Management and Difficult Situations (Questions 1-10)",
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
            title: "Adaptation and Continuous Improvement (Questions 11-20)",
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
            title: "Scaling Agile and Multiple Teams (Questions 21-30)",
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
            title: "Advanced Metrics and Performance (Questions 31-40)",
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
    
    // Test 4: 40 Complete Modules Questions - Applied Scrum for Agile Project Management
    set4: [
        {
            id: 1,
            title: "Product Owner Module (Questions 1-10)",
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
            title: "Scrum Master Module (Questions 11-20)",
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
            title: "Development Team Module (Questions 21-30)",
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
            title: "Agile Transformation Module (Questions 31-40)",
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
    ],
    
    // Test 5: 40 Advanced Scrum Agile Questions
    set5: [
        {
            id: 1,
            title: "Agile Principles and Philosophy (Questions 1-10)",
            questions: [
                {
                    question: "Quel est le principe opposé au \"micromanagement\" dans Scrum ?",
                    options: [
                        "Délégation totale",
                        "Auto-organisation des équipes",
                        "Supervision étroite",
                        "Contrôle hiérarchique"
                    ],
                    correct: 1
                },
                {
                    question: "Le \"servant leadership\" implique que le leader :",
                    options: [
                        "Commande et contrôle",
                        "Sert et facilite l'équipe",
                        "Délègue toutes les responsabilités",
                        "Prend toutes les décisions"
                    ],
                    correct: 1
                },
                {
                    question: "Pourquoi Scrum est-il efficace avec les petites équipes ?",
                    options: [
                        "Coûts réduits uniquement",
                        "Meilleure communication et collaboration",
                        "Moins de documentation",
                        "Cycles plus longs"
                    ],
                    correct: 1
                },
                {
                    question: "L'approche Agile privilégie :",
                    options: [
                        "Les processus rigides",
                        "La documentation exhaustive",
                        "L'adaptation au changement",
                        "La planification détaillée initiale"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle est la différence principale entre Agile et les méthodes traditionnelles ?",
                    options: [
                        "Le coût",
                        "La flexibilité vs la prédictibilité",
                        "La taille de l'équipe uniquement",
                        "Le langage de programmation"
                    ],
                    correct: 1
                },
                {
                    question: "Dans Scrum, qui décide comment le travail sera effectué ?",
                    options: [
                        "Le Scrum Master",
                        "Le Product Owner",
                        "L'équipe de développement",
                        "Les stakeholders"
                    ],
                    correct: 2
                },
                {
                    question: "Le concept de \"facilitation\" dans Scrum signifie :",
                    options: [
                        "Rendre le travail plus facile en éliminant les défis",
                        "Aider l'équipe à surmonter les obstacles et à progresser",
                        "Faire le travail à la place de l'équipe",
                        "Simplifier toutes les tâches"
                    ],
                    correct: 1
                },
                {
                    question: "Quel est l'objectif principal de l'agilité organisationnelle ?",
                    options: [
                        "Réduire les coûts à court terme",
                        "Maintenir la compétitivité dans un marché changeant",
                        "Éliminer tous les processus",
                        "Augmenter la bureaucratie"
                    ],
                    correct: 1
                },
                {
                    question: "Le Scrum Master doit maîtriser :",
                    options: [
                        "Tous les aspects techniques du produit",
                        "Des moyens nouveaux et différents de diriger des équipes",
                        "La comptabilité de projet",
                        "Le marketing produit"
                    ],
                    correct: 1
                },
                {
                    question: "La responsabilité principale du Product Owner est de :",
                    options: [
                        "Faciliter les cérémonies Scrum",
                        "Coder les fonctionnalités",
                        "Maximiser la valeur du produit",
                        "Gérer les ressources humaines"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 2,
            title: "Statistics and Trends (Questions 11-20)",
            questions: [
                {
                    question: "Quelle combinaison de méthodologies représente 75% des projets Agile ?",
                    options: [
                        "Scrum, Waterfall, PRINCE2, PMI",
                        "Scrum, Scrumban, Scrum/XP, Kanban",
                        "SAFe, LeSS, DAD, Nexus",
                        "XP, Crystal, DSDM, FDD"
                    ],
                    correct: 1
                },
                {
                    question: "Le rapport PMI \"Pulse of the Profession\" provient d'une organisation historiquement :",
                    options: [
                        "Focalisée sur Agile",
                        "Enracinée dans les méthodes traditionnelles",
                        "Exclusivement technologique",
                        "Anti-Agile"
                    ],
                    correct: 1
                },
                {
                    question: "Quel pourcentage de projets était purement Agile selon le PMI (2018) ?",
                    options: [
                        "13%",
                        "23%",
                        "33%",
                        "43%"
                    ],
                    correct: 1
                },
                {
                    question: "La somme des projets Hybrides et Agiles représente :",
                    options: [
                        "36% des projets",
                        "46% des projets",
                        "53% des projets",
                        "63% des projets"
                    ],
                    correct: 2
                },
                {
                    question: "Le rapport \"State of Agile\" de Verizon One est quelle édition mentionnée ?",
                    options: [
                        "8ème édition",
                        "10ème édition",
                        "12ème édition",
                        "15ème édition"
                    ],
                    correct: 2
                },
                {
                    question: "Le rapport Verizon One est légèrement biaisé vers quels secteurs ?",
                    options: [
                        "Agriculture et manufacture",
                        "Technologie et finance",
                        "Santé et éducation",
                        "Tourisme et hôtellerie"
                    ],
                    correct: 1
                },
                {
                    question: "Scrum n'est pas juste une option parmi d'autres, c'est :",
                    options: [
                        "Le choix le moins populaire",
                        "Le choix le plus populaire de loin",
                        "Égal aux autres frameworks",
                        "En déclin"
                    ],
                    correct: 1
                },
                {
                    question: "L'adoption d'Agile concerne quel type d'entreprises ?",
                    options: [
                        "Uniquement les startups tech",
                        "Uniquement les PME",
                        "Entreprises de toutes tailles, y compris les grandes corporations",
                        "Uniquement les entreprises en difficulté"
                    ],
                    correct: 2
                },
                {
                    question: "Le changement vers Agile est décrit comme :",
                    options: [
                        "Tactique et temporaire",
                        "Stratégique et durable",
                        "Expérimental et incertain",
                        "Obligatoire et réglementé"
                    ],
                    correct: 1
                },
                {
                    question: "Les enquêtes sur Agile sont représentatives de :",
                    options: [
                        "Uniquement les développeurs",
                        "Uniquement les managers",
                        "Entreprises de toutes tailles",
                        "Uniquement les consultants"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 3,
            title: "Scaling Frameworks (Questions 21-30)",
            questions: [
                {
                    question: "Quand les entreprises coordonnent plusieurs équipes Agile, elles :",
                    options: [
                        "Remplacent Scrum par un autre framework",
                        "Construisent des couches de coordination au-dessus de Scrum",
                        "Abandonnent Agile",
                        "Fusionnent toutes les équipes en une seule"
                    ],
                    correct: 1
                },
                {
                    question: "Le fonctionnement d'une équipe Scrum unique reste :",
                    options: [
                        "Secondaire dans la mise à l'échelle",
                        "Le moteur principal de la livraison de valeur",
                        "Complètement transformé",
                        "Obsolète"
                    ],
                    correct: 1
                },
                {
                    question: "Combien de frameworks majeurs de mise à l'échelle sont mentionnés ?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 2
                },
                {
                    question: "SAFe est l'acronyme de :",
                    options: [
                        "Safe Agile Framework for Enterprises",
                        "Scaled Agile Framework",
                        "Simple Agile Framework Extension",
                        "Strategic Agile Foundation Enterprise"
                    ],
                    correct: 1
                },
                {
                    question: "LeSS signifie :",
                    options: [
                        "Less Effort Scrum System",
                        "Large Enterprise Scrum Strategy",
                        "Large Scale Scrum",
                        "Lean Efficient Scrum Structure"
                    ],
                    correct: 2
                },
                {
                    question: "Le rôle de Scrum dans les frameworks de mise à l'échelle est décrit comme :",
                    options: [
                        "Optionnel",
                        "Fondamental/essentiel",
                        "Complémentaire",
                        "Obsolète"
                    ],
                    correct: 1
                },
                {
                    question: "\"Scrum of Scrums\" permet de :",
                    options: [
                        "Former plusieurs Scrum Masters simultanément",
                        "Coordonner le travail de plusieurs équipes Scrum",
                        "Certifier des organisations entières",
                        "Automatiser les processus Scrum"
                    ],
                    correct: 1
                },
                {
                    question: "DAD (Disciplined Agile Delivery) est construit sur :",
                    options: [
                        "Waterfall uniquement",
                        "Scrum comme base",
                        "PRINCE2",
                        "Six Sigma"
                    ],
                    correct: 1
                },
                {
                    question: "Tous les frameworks de mise à l'échelle utilisent Scrum au niveau :",
                    options: [
                        "Organisationnel uniquement",
                        "Stratégique uniquement",
                        "De l'équipe",
                        "Du portefeuille uniquement"
                    ],
                    correct: 2
                },
                {
                    question: "La simplicité et l'efficacité de Scrum en font :",
                    options: [
                        "Un framework limité aux petits projets",
                        "Le point de départ idéal pour la mise à l'échelle",
                        "Un framework incompatible avec la mise à l'échelle",
                        "Une option parmi d'autres"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 4,
            title: "Application and Understanding (Questions 31-40)",
            questions: [
                {
                    question: "Comprendre Scrum est décrit comme :",
                    options: [
                        "Utile mais pas nécessaire",
                        "Fondamental pour comprendre la gestion de projet moderne",
                        "Pertinent uniquement pour les développeurs",
                        "Une compétence optionnelle"
                    ],
                    correct: 1
                },
                {
                    question: "Le passage à Agile dans les grandes organisations établies indique que :",
                    options: [
                        "Agile est uniquement pour les startups",
                        "Agile est mature et éprouvé",
                        "Les méthodes traditionnelles sont mortes",
                        "Toutes les entreprises doivent être Agile"
                    ],
                    correct: 1
                },
                {
                    question: "Un Project Manager dans un contexte Agile doit :",
                    options: [
                        "Maintenir son rôle traditionnel de contrôle",
                        "Apprendre à travailler comme facilitateur",
                        "Abandonner complètement la gestion",
                        "Devenir développeur"
                    ],
                    correct: 1
                },
                {
                    question: "Le terme \"master facilitator\" se réfère à :",
                    options: [
                        "Le Product Owner",
                        "Le Scrum Master",
                        "L'équipe de développement",
                        "Les stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "L'influence de Scrum est dominante même dans :",
                    options: [
                        "Les projets non-Agile",
                        "Les hybrides Scrum/Kanban et Scrum/XP",
                        "Les projets traditionnels uniquement",
                        "Les projets Waterfall"
                    ],
                    correct: 1
                },
                {
                    question: "La transition vers Agile est motivée par :",
                    options: [
                        "La mode et les tendances",
                        "Les exigences réglementaires",
                        "La nécessité compétitive",
                        "La réduction de personnel"
                    ],
                    correct: 2
                },
                {
                    question: "Le concept d'équipe auto-organisée signifie que l'équipe :",
                    options: [
                        "N'a pas de structure",
                        "Décide de la façon d'accomplir son travail",
                        "Travaille sans objectifs",
                        "N'a pas besoin de Scrum Master"
                    ],
                    correct: 1
                },
                {
                    question: "Le Scrum Master est responsable de :",
                    options: [
                        "Définir les fonctionnalités du produit",
                        "Garder l'équipe sur la bonne voie et faciliter",
                        "Approuver le budget",
                        "Embaucher les membres de l'équipe"
                    ],
                    correct: 1
                },
                {
                    question: "Un Business Analyst peut agir comme facilitateur, ce qui montre que :",
                    options: [
                        "Les rôles Scrum sont rigides",
                        "Il existe des variations dans l'implémentation de Scrum",
                        "Les Business Analysts remplacent les Scrum Masters",
                        "Scrum n'a pas de structure"
                    ],
                    correct: 1
                },
                {
                    question: "Le document conclut que \"l'ère d'Agile est officiellement arrivée\", ce qui signifie :",
                    options: [
                        "Agile est une tendance passagère",
                        "Agile est maintenant mainstream et établi",
                        "Agile remplacera tout",
                        "Agile est en déclin"
                    ],
                    correct: 1
                }
            ]
        }
    ],
    
    // Test 6: 40 Complete Mastery Scrum Agile Questions
    set6: [
        {
            id: 1,
            title: "Agile Evolution and Context (Questions 1-8)",
            questions: [
                {
                    question: "Quelle affirmation décrit le mieux le statut actuel d'Agile ?",
                    options: [
                        "Agile reste une approche de niche pour startups",
                        "Agile est une alternative intéressante aux méthodes traditionnelles",
                        "Agile est devenu une force mainstream avec environ 50% des projets",
                        "Agile est en phase de déclin"
                    ],
                    correct: 2
                },
                {
                    question: "Quelle est la signification de \"53% des projets ont quitté le modèle purement traditionnel\" ?",
                    options: [
                        "53% sont devenus 100% Agile",
                        "53% utilisent soit Agile pur, soit un modèle Hybride",
                        "53% ont échoué",
                        "53% utilisent Waterfall modifié"
                    ],
                    correct: 1
                },
                {
                    question: "Pourquoi le fait que le PMI rapporte des données Agile est-il significatif ?",
                    options: [
                        "Le PMI est pro-Agile depuis toujours",
                        "Le PMI était historiquement enraciné dans les méthodes traditionnelles",
                        "Le PMI s'oppose à Agile",
                        "Le PMI n'a pas d'opinion sur Agile"
                    ],
                    correct: 1
                },
                {
                    question: "Quelle proportion des répondants PMI provient d'organisations avec plus de $500M de revenus annuels ?",
                    options: [
                        "Moins d'un tiers",
                        "Environ un tiers",
                        "Plus de la moitié",
                        "Presque tous"
                    ],
                    correct: 2
                },
                {
                    question: "Cette statistique sur les grandes organisations prouve que :",
                    options: [
                        "Agile est réservé aux grandes entreprises",
                        "Les grandes entreprises établies adoptent également Agile",
                        "Seules les petites entreprises utilisent Agile",
                        "La taille de l'entreprise n'a pas d'importance"
                    ],
                    correct: 1
                },
                {
                    question: "Le rapport \"State of Agile\" de Verizon One en est à quelle édition ?",
                    options: [
                        "5ème édition",
                        "8ème édition",
                        "12ème édition",
                        "20ème édition"
                    ],
                    correct: 2
                },
                {
                    question: "La répétition des éditions du rapport Verizon One démontre :",
                    options: [
                        "Que c'est une tendance nouvelle",
                        "La maturité et la durabilité d'Agile dans l'industrie",
                        "Que les données sont obsolètes",
                        "Un manque d'innovation"
                    ],
                    correct: 1
                },
                {
                    question: "Le cours affirme que \"l'ère d'Agile a officiellement ____\" :",
                    options: [
                        "Commencé",
                        "Été annoncée",
                        "Arrivé",
                        "Échoué"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 2,
            title: "Scrum Domination (Questions 9-16)",
            questions: [
                {
                    question: "Scrum représente quel pourcentage exact des projets Agile selon Verizon One ?",
                    options: [
                        "46%",
                        "51%",
                        "56%",
                        "61%"
                    ],
                    correct: 2
                },
                {
                    question: "Les méthodologies Scrum, Scrumban, Scrum/XP et Kanban représentent ensemble :",
                    options: [
                        "65% des projets",
                        "70% des projets",
                        "75% des projets",
                        "80% des projets"
                    ],
                    correct: 2
                },
                {
                    question: "Cette statistique de 75% démontre que :",
                    options: [
                        "Kanban est plus populaire que Scrum",
                        "L'influence de Scrum est dominante même dans les hybrides",
                        "Les équipes évitent Scrum",
                        "Scrum est en déclin"
                    ],
                    correct: 1
                },
                {
                    question: "Scrum n'est pas \"juste une option parmi plusieurs\", il est :",
                    options: [
                        "Le choix minoritaire",
                        "Égal aux autres",
                        "Le choix le plus populaire de loin (by far)",
                        "En compétition serrée"
                    ],
                    correct: 2
                },
                {
                    question: "Pourquoi Scrum est-il si populaire au niveau de l'équipe ?",
                    options: [
                        "C'est le moins cher",
                        "Son efficacité avec les petites équipes",
                        "C'est obligatoire",
                        "C'est le plus ancien"
                    ],
                    correct: 1
                },
                {
                    question: "Scrumban est :",
                    options: [
                        "Un remplacement de Scrum",
                        "Un framework complètement différent",
                        "Un hybride de Scrum et Kanban",
                        "Une certification"
                    ],
                    correct: 2
                },
                {
                    question: "Scrum/XP combine Scrum avec :",
                    options: [
                        "Extreme Programming",
                        "Extra Projects",
                        "Executive Planning",
                        "External Partnerships"
                    ],
                    correct: 0
                },
                {
                    question: "Le fait que Scrum soit souvent combiné avec d'autres méthodes montre :",
                    options: [
                        "Que Scrum est incomplet",
                        "La flexibilité et l'adaptabilité de Scrum",
                        "Que Scrum doit être abandonné",
                        "Que Scrum est dépassé"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "Scrum as Building Block (Questions 17-24)",
            questions: [
                {
                    question: "Scrum sert de \"building block\" (bloc de construction) pour :",
                    options: [
                        "Les petits projets uniquement",
                        "Tous les frameworks majeurs de mise à l'échelle",
                        "Les projets traditionnels",
                        "Rien en particulier"
                    ],
                    correct: 1
                },
                {
                    question: "Quand les organisations mettent à l'échelle Agile, elles :",
                    options: [
                        "Remplacent Scrum par autre chose",
                        "Abandonnent Scrum",
                        "Construisent des couches de coordination sur Scrum",
                        "Éliminent les équipes Scrum"
                    ],
                    correct: 2
                },
                {
                    question: "Dans les frameworks de mise à l'échelle, le fonctionnement d'une équipe Scrum reste :",
                    options: [
                        "Complètement transformé",
                        "Le moteur principal (core engine) de livraison de valeur",
                        "Secondaire",
                        "Obsolète"
                    ],
                    correct: 1
                },
                {
                    question: "Combien de frameworks majeurs de mise à l'échelle sont explicitement nommés dans le cours ?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 2
                },
                {
                    question: "SAFe signifie :",
                    options: [
                        "Safe Agile Framework",
                        "Scaled Agile Framework",
                        "Strategic Agile Foundation",
                        "Software Agile Framework"
                    ],
                    correct: 1
                },
                {
                    question: "DAD signifie :",
                    options: [
                        "Daily Agile Delivery",
                        "Distributed Agile Development",
                        "Disciplined Agile Delivery",
                        "Dynamic Agile Design"
                    ],
                    correct: 2
                },
                {
                    question: "LeSS signifie :",
                    options: [
                        "Lean Enterprise Scrum System",
                        "Large Scale Scrum",
                        "Less Effort Scrum Structure",
                        "Leading Edge Scrum Strategy"
                    ],
                    correct: 1
                },
                {
                    question: "\"Scrum of Scrums\" est utilisé pour :",
                    options: [
                        "Certifier plusieurs Scrum Masters",
                        "Coordonner plusieurs équipes Scrum",
                        "Former des équipes",
                        "Évaluer la performance"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 4,
            title: "Roles and Leadership (Questions 25-32)",
            questions: [
                {
                    question: "Combien de rôles principaux y a-t-il dans Scrum ?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 1
                },
                {
                    question: "Le rôle d'un leader dans un projet Agile devrait être celui d'un :",
                    options: [
                        "Superviseur",
                        "Micromanager",
                        "Facilitateur",
                        "Dictateur"
                    ],
                    correct: 2
                },
                {
                    question: "Le Scrum Master est décrit comme un :",
                    options: [
                        "Chef de projet traditionnel",
                        "\"Master facilitator\"",
                        "Manager hiérarchique",
                        "Contrôleur de qualité"
                    ],
                    correct: 1
                },
                {
                    question: "Le Scrum Master doit être \"steeped in\" (imprégné de) :",
                    options: [
                        "La gestion traditionnelle",
                        "Des moyens très nouveaux et différents de diriger des équipes",
                        "Les technologies de développement",
                        "La gestion financière"
                    ],
                    correct: 1
                },
                {
                    question: "Le style de leadership central à Scrum est :",
                    options: [
                        "Autoritaire",
                        "Transactionnel",
                        "Servant leadership (leadership serviteur)",
                        "Laissez-faire"
                    ],
                    correct: 2
                },
                {
                    question: "Le Scrum Master est responsable de :",
                    options: [
                        "Définir toutes les exigences produit",
                        "Faciliter et garder l'équipe sur la bonne voie",
                        "Coder les fonctionnalités",
                        "Approuver le budget"
                    ],
                    correct: 1
                },
                {
                    question: "Le Product Owner est responsable de :",
                    options: [
                        "Faciliter les réunions",
                        "Maximiser la valeur du produit",
                        "Gérer les ressources humaines",
                        "Superviser l'équipe"
                    ],
                    correct: 1
                },
                {
                    question: "Dans des variations de Scrum, qui peut \"agir comme facilitateur\" ?",
                    options: [
                        "Le CFO",
                        "Un Business Analyst",
                        "Le CEO",
                        "Le département RH"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 5,
            title: "Principles and Understanding (Questions 33-40)",
            questions: [
                {
                    question: "Les Project Managers dans un contexte Agile \"tentent de travailler comme\" :",
                    options: [
                        "Superviseurs traditionnels",
                        "Facilitateurs",
                        "Contrôleurs",
                        "Auditeurs"
                    ],
                    correct: 1
                },
                {
                    question: "Le concept d'équipes \"auto-organisées\" (self-organizing) est :",
                    options: [
                        "Contraire aux principes Scrum",
                        "Central à Scrum et Agile",
                        "Optionnel",
                        "Dépassé"
                    ],
                    correct: 1
                },
                {
                    question: "Selon le PMI, quel pourcentage d'organisations considère \"l'agilité\" comme essentielle pour rester compétitif ?",
                    options: [
                        "51%",
                        "61%",
                        "71%",
                        "81%"
                    ],
                    correct: 2
                },
                {
                    question: "Cette statistique (71%) indique que le passage à Agile est :",
                    options: [
                        "Une tendance passagère",
                        "Un mouvement stratégique",
                        "Optionnel",
                        "Uniquement technologique"
                    ],
                    correct: 1
                },
                {
                    question: "La compréhension de Scrum est décrite comme :",
                    options: [
                        "Utile pour certains rôles",
                        "Optionnelle",
                        "Fondamentale pour comprendre la gestion de projet moderne",
                        "Réservée aux développeurs"
                    ],
                    correct: 2
                },
                {
                    question: "Le rapport Verizon One est légèrement biaisé vers quels secteurs ?",
                    options: [
                        "Santé et éducation",
                        "Technologie et finance",
                        "Manufacture et agriculture",
                        "Commerce de détail"
                    ],
                    correct: 1
                },
                {
                    question: "Malgré ce biais, les données restent :",
                    options: [
                        "Inutilisables",
                        "Représentatives et significatives",
                        "Complètement faussées",
                        "Sans valeur"
                    ],
                    correct: 1
                },
                {
                    question: "La combinaison des données PMI et Verizon One fournit :",
                    options: [
                        "Des informations contradictoires",
                        "Une image claire de la domination de Scrum dans Agile",
                        "Des preuves que Scrum est en déclin",
                        "Aucune conclusion utile"
                    ],
                    correct: 1
                }
            ]
        }
    ]
};