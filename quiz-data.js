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
                    question: "What is the opposite principle of \"micromanagement\" in Scrum?",
                    options: [
                        "Total delegation",
                        "Team self-organization",
                        "Close supervision",
                        "Hierarchical control"
                    ],
                    correct: 1
                },
                {
                    question: "\"Servant leadership\" implies that the leader:",
                    options: [
                        "Commands and controls",
                        "Serves and facilitates the team",
                        "Delegates all responsibilities",
                        "Makes all decisions"
                    ],
                    correct: 1
                },
                {
                    question: "Why is Scrum effective with small teams?",
                    options: [
                        "Reduced costs only",
                        "Better communication and collaboration",
                        "Less documentation",
                        "Longer cycles"
                    ],
                    correct: 1
                },
                {
                    question: "The Agile approach favors:",
                    options: [
                        "Rigid processes",
                        "Exhaustive documentation",
                        "Adaptation to change",
                        "Initial detailed planning"
                    ],
                    correct: 2
                },
                {
                    question: "What is the main difference between Agile and traditional methods?",
                    options: [
                        "Cost",
                        "Flexibility vs predictability",
                        "Team size only",
                        "Programming language"
                    ],
                    correct: 1
                },
                {
                    question: "In Scrum, who decides how the work will be done?",
                    options: [
                        "The Scrum Master",
                        "The Product Owner",
                        "The development team",
                        "The stakeholders"
                    ],
                    correct: 2
                },
                {
                    question: "The concept of \"facilitation\" in Scrum means:",
                    options: [
                        "Making work easier by eliminating challenges",
                        "Helping the team overcome obstacles and progress",
                        "Doing the work instead of the team",
                        "Simplifying all tasks"
                    ],
                    correct: 1
                },
                {
                    question: "What is the main goal of organizational agility?",
                    options: [
                        "Reducing short-term costs",
                        "Maintaining competitiveness in a changing market",
                        "Eliminating all processes",
                        "Increasing bureaucracy"
                    ],
                    correct: 1
                },
                {
                    question: "The Scrum Master must master:",
                    options: [
                        "All technical aspects of the product",
                        "New and different ways of leading teams",
                        "Project accounting",
                        "Product marketing"
                    ],
                    correct: 1
                },
                {
                    question: "The primary responsibility of the Product Owner is to:",
                    options: [
                        "Facilitate Scrum ceremonies",
                        "Code features",
                        "Maximize product value",
                        "Manage human resources"
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
                    question: "Which combination of methodologies represents 75% of Agile projects?",
                    options: [
                        "Scrum, Waterfall, PRINCE2, PMI",
                        "Scrum, Scrumban, Scrum/XP, Kanban",
                        "SAFe, LeSS, DAD, Nexus",
                        "XP, Crystal, DSDM, FDD"
                    ],
                    correct: 1
                },
                {
                    question: "The PMI \"Pulse of the Profession\" report comes from an organization historically:",
                    options: [
                        "Focused on Agile",
                        "Rooted in traditional methods",
                        "Exclusively technological",
                        "Anti-Agile"
                    ],
                    correct: 1
                },
                {
                    question: "What percentage of projects were purely Agile according to PMI (2018)?",
                    options: [
                        "13%",
                        "23%",
                        "33%",
                        "43%"
                    ],
                    correct: 1
                },
                {
                    question: "The sum of Hybrid and Agile projects represents:",
                    options: [
                        "36% of projects",
                        "46% of projects",
                        "53% of projects",
                        "63% of projects"
                    ],
                    correct: 2
                },
                {
                    question: "Which edition of the \"State of Agile\" report from Verizon One is mentioned?",
                    options: [
                        "8th edition",
                        "10th edition",
                        "12th edition",
                        "15th edition"
                    ],
                    correct: 2
                },
                {
                    question: "The Verizon One report is slightly biased toward which sectors?",
                    options: [
                        "Agriculture and manufacturing",
                        "Technology and finance",
                        "Healthcare and education",
                        "Tourism and hospitality"
                    ],
                    correct: 1
                },
                {
                    question: "Scrum is not just one option among others, it is:",
                    options: [
                        "The least popular choice",
                        "By far the most popular choice",
                        "Equal to other frameworks",
                        "In decline"
                    ],
                    correct: 1
                },
                {
                    question: "Agile adoption concerns what type of companies?",
                    options: [
                        "Only tech startups",
                        "Only SMEs",
                        "Companies of all sizes, including large corporations",
                        "Only struggling companies"
                    ],
                    correct: 2
                },
                {
                    question: "The shift toward Agile is described as:",
                    options: [
                        "Tactical and temporary",
                        "Strategic and sustainable",
                        "Experimental and uncertain",
                        "Mandatory and regulated"
                    ],
                    correct: 1
                },
                {
                    question: "Agile surveys are representative of:",
                    options: [
                        "Only developers",
                        "Only managers",
                        "Companies of all sizes",
                        "Only consultants"
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
                    question: "When companies coordinate multiple Agile teams, they:",
                    options: [
                        "Replace Scrum with another framework",
                        "Build coordination layers on top of Scrum",
                        "Abandon Agile",
                        "Merge all teams into one"
                    ],
                    correct: 1
                },
                {
                    question: "The operation of a single Scrum team remains:",
                    options: [
                        "Secondary in scaling",
                        "The main engine of value delivery",
                        "Completely transformed",
                        "Obsolete"
                    ],
                    correct: 1
                },
                {
                    question: "How many major scaling frameworks are mentioned?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 2
                },
                {
                    question: "SAFe is the acronym for:",
                    options: [
                        "Safe Agile Framework for Enterprises",
                        "Scaled Agile Framework",
                        "Simple Agile Framework Extension",
                        "Strategic Agile Foundation Enterprise"
                    ],
                    correct: 1
                },
                {
                    question: "LeSS stands for:",
                    options: [
                        "Less Effort Scrum System",
                        "Large Enterprise Scrum Strategy",
                        "Large Scale Scrum",
                        "Lean Efficient Scrum Structure"
                    ],
                    correct: 2
                },
                {
                    question: "The role of Scrum in scaling frameworks is described as:",
                    options: [
                        "Optional",
                        "Fundamental/essential",
                        "Complementary",
                        "Obsolete"
                    ],
                    correct: 1
                },
                {
                    question: "\"Scrum of Scrums\" allows to:",
                    options: [
                        "Train multiple Scrum Masters simultaneously",
                        "Coordinate the work of multiple Scrum teams",
                        "Certify entire organizations",
                        "Automate Scrum processes"
                    ],
                    correct: 1
                },
                {
                    question: "DAD (Disciplined Agile Delivery) is built on:",
                    options: [
                        "Waterfall only",
                        "Scrum as a base",
                        "PRINCE2",
                        "Six Sigma"
                    ],
                    correct: 1
                },
                {
                    question: "All scaling frameworks use Scrum at the:",
                    options: [
                        "Organizational level only",
                        "Strategic level only",
                        "Team level",
                        "Portfolio level only"
                    ],
                    correct: 2
                },
                {
                    question: "The simplicity and effectiveness of Scrum make it:",
                    options: [
                        "A framework limited to small projects",
                        "The ideal starting point for scaling",
                        "A framework incompatible with scaling",
                        "One option among others"
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
                    question: "Understanding Scrum is described as:",
                    options: [
                        "Useful but not necessary",
                        "Fundamental to understanding modern project management",
                        "Relevant only for developers",
                        "An optional skill"
                    ],
                    correct: 1
                },
                {
                    question: "The shift to Agile in large established organizations indicates that:",
                    options: [
                        "Agile is only for startups",
                        "Agile is mature and proven",
                        "Traditional methods are dead",
                        "All companies must be Agile"
                    ],
                    correct: 1
                },
                {
                    question: "A Project Manager in an Agile context must:",
                    options: [
                        "Maintain their traditional control role",
                        "Learn to work as a facilitator",
                        "Completely abandon management",
                        "Become a developer"
                    ],
                    correct: 1
                },
                {
                    question: "The term \"master facilitator\" refers to:",
                    options: [
                        "The Product Owner",
                        "The Scrum Master",
                        "The development team",
                        "The stakeholders"
                    ],
                    correct: 1
                },
                {
                    question: "Scrum's influence is dominant even in:",
                    options: [
                        "Non-Agile projects",
                        "Scrum/Kanban and Scrum/XP hybrids",
                        "Traditional projects only",
                        "Waterfall projects"
                    ],
                    correct: 1
                },
                {
                    question: "The transition to Agile is motivated by:",
                    options: [
                        "Fashion and trends",
                        "Regulatory requirements",
                        "Competitive necessity",
                        "Staff reduction"
                    ],
                    correct: 2
                },
                {
                    question: "The concept of a self-organizing team means that the team:",
                    options: [
                        "Has no structure",
                        "Decides how to accomplish their work",
                        "Works without objectives",
                        "Doesn't need a Scrum Master"
                    ],
                    correct: 1
                },
                {
                    question: "The Scrum Master is responsible for:",
                    options: [
                        "Defining product features",
                        "Keeping the team on track and facilitating",
                        "Approving the budget",
                        "Hiring team members"
                    ],
                    correct: 1
                },
                {
                    question: "A Business Analyst can act as a facilitator, which shows that:",
                    options: [
                        "Scrum roles are rigid",
                        "There are variations in Scrum implementation",
                        "Business Analysts replace Scrum Masters",
                        "Scrum has no structure"
                    ],
                    correct: 1
                },
                {
                    question: "The document concludes that \"the era of Agile has officially arrived\", which means:",
                    options: [
                        "Agile is a passing trend",
                        "Agile is now mainstream and established",
                        "Agile will replace everything",
                        "Agile is in decline"
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
                    question: "Which statement best describes the current status of Agile?",
                    options: [
                        "Agile remains a niche approach for startups",
                        "Agile is an interesting alternative to traditional methods",
                        "Agile has become a mainstream force with approximately 50% of projects",
                        "Agile is in decline"
                    ],
                    correct: 2
                },
                {
                    question: "What is the significance of \"53% of projects have left the purely traditional model\"?",
                    options: [
                        "53% have become 100% Agile",
                        "53% use either pure Agile or a Hybrid model",
                        "53% have failed",
                        "53% use modified Waterfall"
                    ],
                    correct: 1
                },
                {
                    question: "Why is the fact that PMI reports Agile data significant?",
                    options: [
                        "PMI has always been pro-Agile",
                        "PMI was historically rooted in traditional methods",
                        "PMI opposes Agile",
                        "PMI has no opinion on Agile"
                    ],
                    correct: 1
                },
                {
                    question: "What proportion of PMI respondents comes from organizations with more than $500M in annual revenue?",
                    options: [
                        "Less than one third",
                        "About one third",
                        "More than half",
                        "Almost all"
                    ],
                    correct: 2
                },
                {
                    question: "This statistic about large organizations proves that:",
                    options: [
                        "Agile is reserved for large companies",
                        "Large established companies also adopt Agile",
                        "Only small companies use Agile",
                        "Company size doesn't matter"
                    ],
                    correct: 1
                },
                {
                    question: "Which edition of the \"State of Agile\" report from Verizon One is mentioned?",
                    options: [
                        "5th edition",
                        "8th edition",
                        "12th edition",
                        "20th edition"
                    ],
                    correct: 2
                },
                {
                    question: "The repetition of editions of the Verizon One report demonstrates:",
                    options: [
                        "That it's a new trend",
                        "The maturity and sustainability of Agile in the industry",
                        "That the data is obsolete",
                        "A lack of innovation"
                    ],
                    correct: 1
                },
                {
                    question: "The course states that \"the era of Agile has officially ____\":",
                    options: [
                        "Begun",
                        "Been announced",
                        "Arrived",
                        "Failed"
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
                    question: "What exact percentage of Agile projects does Scrum represent according to Verizon One?",
                    options: [
                        "46%",
                        "51%",
                        "56%",
                        "61%"
                    ],
                    correct: 2
                },
                {
                    question: "Scrum, Scrumban, Scrum/XP and Kanban methodologies together represent:",
                    options: [
                        "65% of projects",
                        "70% of projects",
                        "75% of projects",
                        "80% of projects"
                    ],
                    correct: 2
                },
                {
                    question: "This 75% statistic demonstrates that:",
                    options: [
                        "Kanban is more popular than Scrum",
                        "Scrum's influence is dominant even in hybrids",
                        "Teams avoid Scrum",
                        "Scrum is in decline"
                    ],
                    correct: 1
                },
                {
                    question: "Scrum is not \"just one option among many\", it is:",
                    options: [
                        "The minority choice",
                        "Equal to others",
                        "By far the most popular choice",
                        "In close competition"
                    ],
                    correct: 2
                },
                {
                    question: "Why is Scrum so popular at the team level?",
                    options: [
                        "It's the cheapest",
                        "Its effectiveness with small teams",
                        "It's mandatory",
                        "It's the oldest"
                    ],
                    correct: 1
                },
                {
                    question: "Scrumban is:",
                    options: [
                        "A replacement for Scrum",
                        "A completely different framework",
                        "A hybrid of Scrum and Kanban",
                        "A certification"
                    ],
                    correct: 2
                },
                {
                    question: "Scrum/XP combines Scrum with:",
                    options: [
                        "Extreme Programming",
                        "Extra Projects",
                        "Executive Planning",
                        "External Partnerships"
                    ],
                    correct: 0
                },
                {
                    question: "The fact that Scrum is often combined with other methods shows:",
                    options: [
                        "That Scrum is incomplete",
                        "The flexibility and adaptability of Scrum",
                        "That Scrum should be abandoned",
                        "That Scrum is outdated"
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
                    question: "Scrum serves as a \"building block\" for:",
                    options: [
                        "Small projects only",
                        "All major scaling frameworks",
                        "Traditional projects",
                        "Nothing in particular"
                    ],
                    correct: 1
                },
                {
                    question: "When organizations scale Agile, they:",
                    options: [
                        "Replace Scrum with something else",
                        "Abandon Scrum",
                        "Build coordination layers on top of Scrum",
                        "Eliminate Scrum teams"
                    ],
                    correct: 2
                },
                {
                    question: "In scaling frameworks, the operation of a Scrum team remains:",
                    options: [
                        "Completely transformed",
                        "The core engine of value delivery",
                        "Secondary",
                        "Obsolete"
                    ],
                    correct: 1
                },
                {
                    question: "How many major scaling frameworks are explicitly named in the course?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 2
                },
                {
                    question: "SAFe stands for:",
                    options: [
                        "Safe Agile Framework",
                        "Scaled Agile Framework",
                        "Strategic Agile Foundation",
                        "Software Agile Framework"
                    ],
                    correct: 1
                },
                {
                    question: "DAD stands for:",
                    options: [
                        "Daily Agile Delivery",
                        "Distributed Agile Development",
                        "Disciplined Agile Delivery",
                        "Dynamic Agile Design"
                    ],
                    correct: 2
                },
                {
                    question: "LeSS stands for:",
                    options: [
                        "Lean Enterprise Scrum System",
                        "Large Scale Scrum",
                        "Less Effort Scrum Structure",
                        "Leading Edge Scrum Strategy"
                    ],
                    correct: 1
                },
                {
                    question: "\"Scrum of Scrums\" is used to:",
                    options: [
                        "Certify multiple Scrum Masters",
                        "Coordinate multiple Scrum teams",
                        "Train teams",
                        "Evaluate performance"
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
                    question: "How many primary roles are there in Scrum?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 1
                },
                {
                    question: "The role of a leader in an Agile project should be that of a:",
                    options: [
                        "Supervisor",
                        "Micromanager",
                        "Facilitator",
                        "Dictator"
                    ],
                    correct: 2
                },
                {
                    question: "The Scrum Master is described as a:",
                    options: [
                        "Traditional project manager",
                        "\"Master facilitator\"",
                        "Hierarchical manager",
                        "Quality controller"
                    ],
                    correct: 1
                },
                {
                    question: "The Scrum Master should be \"steeped in\":",
                    options: [
                        "Traditional management",
                        "Very new and different means of leading teams",
                        "Development technologies",
                        "Financial management"
                    ],
                    correct: 1
                },
                {
                    question: "The leadership style central to Scrum is:",
                    options: [
                        "Authoritarian",
                        "Transactional",
                        "Servant leadership",
                        "Laissez-faire"
                    ],
                    correct: 2
                },
                {
                    question: "The Scrum Master is responsible for:",
                    options: [
                        "Defining all product requirements",
                        "Facilitating and keeping the team on track",
                        "Coding features",
                        "Approving the budget"
                    ],
                    correct: 1
                },
                {
                    question: "The Product Owner is responsible for:",
                    options: [
                        "Facilitating meetings",
                        "Maximizing product value",
                        "Managing human resources",
                        "Supervising the team"
                    ],
                    correct: 1
                },
                {
                    question: "In variations of Scrum, who can \"act as a facilitator\"?",
                    options: [
                        "The CFO",
                        "A Business Analyst",
                        "The CEO",
                        "The HR department"
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
                    question: "Project Managers in an Agile context \"try to work as\":",
                    options: [
                        "Traditional supervisors",
                        "Facilitators",
                        "Controllers",
                        "Auditors"
                    ],
                    correct: 1
                },
                {
                    question: "The concept of \"self-organizing\" teams is:",
                    options: [
                        "Contrary to Scrum principles",
                        "Central to Scrum and Agile",
                        "Optional",
                        "Outdated"
                    ],
                    correct: 1
                },
                {
                    question: "According to PMI, what percentage of organizations considers \"agility\" essential to remain competitive?",
                    options: [
                        "51%",
                        "61%",
                        "71%",
                        "81%"
                    ],
                    correct: 2
                },
                {
                    question: "This statistic (71%) indicates that the shift to Agile is:",
                    options: [
                        "A passing trend",
                        "A strategic movement",
                        "Optional",
                        "Only technological"
                    ],
                    correct: 1
                },
                {
                    question: "Understanding Scrum is described as:",
                    options: [
                        "Useful for certain roles",
                        "Optional",
                        "Fundamental to understanding modern project management",
                        "Reserved for developers"
                    ],
                    correct: 2
                },
                {
                    question: "The Verizon One report is slightly biased toward which sectors?",
                    options: [
                        "Healthcare and education",
                        "Technology and finance",
                        "Manufacturing and agriculture",
                        "Retail"
                    ],
                    correct: 1
                },
                {
                    question: "Despite this bias, the data remains:",
                    options: [
                        "Unusable",
                        "Representative and significant",
                        "Completely distorted",
                        "Worthless"
                    ],
                    correct: 1
                },
                {
                    question: "The combination of PMI and Verizon One data provides:",
                    options: [
                        "Contradictory information",
                        "A clear picture of Scrum's dominance in Agile",
                        "Evidence that Scrum is in decline",
                        "No useful conclusion"
                    ],
                    correct: 1
                }
            ]
        }
    ]
}