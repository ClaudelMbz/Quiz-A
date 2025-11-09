const quizData = {
    // Test 1: Construction Materials Quiz
    set1: [
        {
            id: 1,
            title: "Construction Materials Quiz - 30 Essential Questions",
            questions: [
                {
                    question: "1. Who has the final decision-making authority in a building project?",
                    options: [
                        "A) The Architect",
                        "B) The Client (contracting authority)",
                        "C) The Entrepreneur",
                        "D) The Control office"
                    ],
                    correct: [1],
                    explanation: "The Client (contracting authority)"
                },
                {
                    question: "2. What does BIM stand for?",
                    options: [
                        "A) Building Integration Management",
                        "B) Building Information Modelling",
                        "C) Basic Infrastructure Model",
                        "D) Built-in Material"
                    ],
                    correct: [1],
                    explanation: "Building Information Modelling"
                },
                {
                    question: "3. Which professional is responsible for analyzing floor plans, soil resistance, and calculating the necessary structure?",
                    options: [
                        "A) The Architect",
                        "B) The Business Analyst",
                        "C) The Civil Engineer",
                        "D) The Landscaper"
                    ],
                    correct: [2],
                    explanation: "The Civil Engineer"
                },
                {
                    question: "4. Which design phase involves estimating total costs and allocating financial resources?",
                    options: [
                        "A) Architectural Design",
                        "B) Planning and Budgeting",
                        "C) Legal Project",
                        "D) Land Survey"
                    ],
                    correct: [1],
                    explanation: "Planning and Budgeting"
                },
                {
                    question: "5. What are the three main types of foundations mentioned?",
                    options: [
                        "A) Concrete, steel, wood",
                        "B) Radier, footing, pile cap blocks",
                        "C) Slab, beam, column",
                        "D) Strip, circular, square"
                    ],
                    correct: [1],
                    explanation: "Radier, footing, pile cap blocks"
                },
                {
                    question: "6. What is the purpose of the Legal Project phase?",
                    options: [
                        "A) To design the building",
                        "B) To demonstrate to the municipality that norms and requirements are being met",
                        "C) To calculate structural loads",
                        "D) To choose materials"
                    ],
                    correct: [1],
                    explanation: "To demonstrate to the municipality that norms and requirements are being met"
                },
                {
                    question: "7. According to their origin, which material is classified as \"Natural - Vegetal\"?",
                    options: [
                        "A) Steel",
                        "B) Wood",
                        "C) Cement",
                        "D) Glass"
                    ],
                    correct: [1],
                    explanation: "Wood"
                },
                {
                    question: "8. What type of chemical bond characterizes metals and alloys?",
                    options: [
                        "A) Ionic bond",
                        "B) Covalent bond",
                        "C) Metallic bond",
                        "D) Hydrogen bond"
                    ],
                    correct: [2],
                    explanation: "Metallic bond"
                },
                {
                    question: "9. What is the typical tensile strength range for structural steel?",
                    options: [
                        "A) 70-100 MPa",
                        "B) 210-350 MPa",
                        "C) 350-510 MPa",
                        "D) 550-700 MPa"
                    ],
                    correct: [2],
                    explanation: "350-510 MPa"
                },
                {
                    question: "10. What is Young's modulus (E) for steel?",
                    options: [
                        "A) 70 GPa",
                        "B) 110 GPa",
                        "C) 210 GPa",
                        "D) 406 GPa"
                    ],
                    correct: [2],
                    explanation: "210 GPa"
                },
                {
                    question: "11. What is the typical bulk density of reinforced concrete?",
                    options: [
                        "A) 1500 kg/m³",
                        "B) 2000 kg/m³",
                        "C) 2500 kg/m³",
                        "D) 3000 kg/m³"
                    ],
                    correct: [2],
                    explanation: "2500 kg/m³"
                },
                {
                    question: "12. Which material has the highest thermal conductivity?",
                    options: [
                        "A) Wood (0.13 W.m⁻¹.K⁻¹)",
                        "B) Concrete (1.7 W.m⁻¹.K⁻¹)",
                        "C) Steel (45 W.m⁻¹.K⁻¹)",
                        "D) Aluminium (384 W.m⁻¹.K⁻¹)"
                    ],
                    correct: [3],
                    explanation: "Aluminium (384 W.m⁻¹.K⁻¹)"
                },
                {
                    question: "13. What are the three main types of inorganic binders in civil construction?",
                    options: [
                        "A) Resin, bitumen, tar",
                        "B) Lime, cement, gypsum",
                        "C) Sand, gravel, clay",
                        "D) Steel, wood, plastic"
                    ],
                    correct: [1],
                    explanation: "Lime, cement, gypsum"
                },
                {
                    question: "14. Who filed the patent for Portland cement in 1824?",
                    options: [
                        "A) Dupont and Demarle",
                        "B) Joseph Aspdin",
                        "C) Thomas Edison",
                        "D) James Watt"
                    ],
                    correct: [1],
                    explanation: "Joseph Aspdin"
                },
                {
                    question: "15. What are the approximate percentages of limestone and clay in cement raw materials?",
                    options: [
                        "A) 50% limestone, 50% clay",
                        "B) 60% limestone, 40% clay",
                        "C) 80% limestone, 20% clay",
                        "D) 90% limestone, 10% clay"
                    ],
                    correct: [2],
                    explanation: "80% limestone, 20% clay"
                },
                {
                    question: "16. At what temperature does calcination occur in the rotary kiln to produce clinker?",
                    options: [
                        "A) 800°C",
                        "B) 1000°C",
                        "C) 1200°C",
                        "D) 1450°C"
                    ],
                    correct: [3],
                    explanation: "1450°C"
                },
                {
                    question: "17. What is the main component of clinker by mass percentage?",
                    options: [
                        "A) C₂S (Dicalcium silicate) - 10-20%",
                        "B) C₃A (Tricalcium aluminate) - 8-12%",
                        "C) C₃S (Tricalcium silicate/Alite) - 60-65%",
                        "D) C₄AF (Tetracalcium aluminoferrite) - 8-10%"
                    ],
                    correct: [2],
                    explanation: "C₃S (Tricalcium silicate/Alite) - 60-65%"
                },
                {
                    question: "18. What is the role of gypsum in cement?",
                    options: [
                        "A) Increases strength",
                        "B) Slows the rapid setting due to fast hydration of C₃A",
                        "C) Reduces cost",
                        "D) Improves color"
                    ],
                    correct: [1],
                    explanation: "Slows the rapid setting due to fast hydration of C₃A"
                },
                {
                    question: "19. What is the minimum clinker content for Portland Cement Type I (CEM I)?",
                    options: [
                        "A) ≥ 80%",
                        "B) ≥ 85%",
                        "C) ≥ 90%",
                        "D) ≥ 95%"
                    ],
                    correct: [3],
                    explanation: "≥ 95%"
                },
                {
                    question: "20. Which cement type has the highest slag content range (81-95%)?",
                    options: [
                        "A) Type II/A",
                        "B) Type III/A",
                        "C) Type III/B",
                        "D) Type III/C"
                    ],
                    correct: [3],
                    explanation: "Type III/C (Blast furnace cement)"
                },
                {
                    question: "21. What does CSH stand for in cement hydration?",
                    options: [
                        "A) Calcium Sulfate Hydrate",
                        "B) Calcium Silicate Hydrated",
                        "C) Cement Substrate Hydroxide",
                        "D) Carbonate Silicon Hydrate"
                    ],
                    correct: [1],
                    explanation: "Calcium Silicate Hydrated"
                },
                {
                    question: "22. What is responsible for the mechanical resistance of hardened cement paste?",
                    options: [
                        "A) Portlandite (CH)",
                        "B) Gypsum",
                        "C) CSH (Calcium Silicate Hydrated)",
                        "D) Ettringite"
                    ],
                    correct: [2],
                    explanation: "CSH (Calcium Silicate Hydrated)"
                },
                {
                    question: "23. What pH level does Portlandite (CH) maintain in concrete to protect against corrosion?",
                    options: [
                        "A) pH > 7",
                        "B) pH > 9",
                        "C) pH > 12",
                        "D) pH > 14"
                    ],
                    correct: [2],
                    explanation: "pH > 12"
                },
                {
                    question: "24. What is the typical range for specific surface (Blaine fineness) of cement?",
                    options: [
                        "A) 500-1000 cm²/g",
                        "B) 1000-2000 cm²/g",
                        "C) 2800-5000 cm²/g",
                        "D) 5000-8000 cm²/g"
                    ],
                    correct: [2],
                    explanation: "2800-5000 cm²/g"
                },
                {
                    question: "25. What defines coarse aggregate?",
                    options: [
                        "A) Particles smaller than 2.0 mm",
                        "B) Particles between 2.0-4.0 mm",
                        "C) Particles larger than 4.75 mm",
                        "D) Particles larger than 10 mm"
                    ],
                    correct: [2],
                    explanation: "Particles larger than 4.75 mm (retained on sieve #4)"
                },
                {
                    question: "26. What are the three main classifications of concrete based on density?",
                    options: [
                        "A) Light, medium, heavy",
                        "B) Lightweight (<1800), Common (1800-2500), Heavyweight (>2500 kg/m³)",
                        "C) Weak, normal, strong",
                        "D) Porous, dense, compact"
                    ],
                    correct: [1],
                    explanation: "Lightweight (<1800), Common (1800-2500), Heavyweight (>2500 kg/m³)"
                },
                {
                    question: "27. What percentage of commonly used concrete volume do aggregates represent?",
                    options: [
                        "A) ≈ 30%",
                        "B) ≈ 50%",
                        "C) ≈ 70%",
                        "D) ≈ 90%"
                    ],
                    correct: [2],
                    explanation: "≈ 70%"
                },
                {
                    question: "28. What does the slump test measure?",
                    options: [
                        "A) Compressive strength",
                        "B) Workability/consistency",
                        "C) Density",
                        "D) Air content"
                    ],
                    correct: [1],
                    explanation: "Workability/consistency"
                },
                {
                    question: "29. What are the three main pathological manifestations in concrete mentioned?",
                    options: [
                        "A) Cracking, spalling, rust",
                        "B) Sulfate attack, DEF (Delayed Ettringite Formation), AAR (Alkali-Aggregate Reaction)",
                        "C) Freezing, melting, evaporation",
                        "D) Compression, tension, shear"
                    ],
                    correct: [1],
                    explanation: "Sulfate attack, DEF (Delayed Ettringite Formation), AAR (Alkali-Aggregate Reaction)"
                },
                {
                    question: "30. According to the US Green Building Council, what percentage of worldwide energy usage does the construction sector represent?",
                    options: [
                        "A) 20%",
                        "B) 30%",
                        "C) 40%",
                        "D) 50%"
                    ],
                    correct: [2],
                    explanation: "40%"
                }
            ]
        }
    ],
    set2: [],
    set3: [],
    set4: [],
    set5: [],
    set6: []
};