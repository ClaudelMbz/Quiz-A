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
    set4: [
        {
            id: 1,
            title: "LCA of Buildings - Comprehensive Quiz",
            questions: [
                // PART 1: Context and Definitions
                {
                    question: "What is the building sector's contribution to global CO2 emissions?",
                    options: ["25%", "39%", "50%", "15%"],
                    correct: [1],
                    explanation: "The building sector (construction and operation) is responsible for about 39% of global energy-related CO2 emissions."
                },
                {
                    question: "What does eco-design mean?",
                    options: [
                        "Building only green buildings",
                        "Integrating environmental protection criteria throughout a product's life cycle",
                        "Using only recycled materials",
                        "Reducing construction costs"
                    ],
                    correct: [1],
                    explanation: "Eco-design is a preventive approach that considers environmental impacts from the design phase throughout the entire life cycle."
                },
                {
                    question: "What is the main difference between linear economy and circular economy?",
                    options: [
                        "Linear economy costs more",
                        "Circular economy targets sustainability, linear economy focuses on profitability",
                        "Circular economy doesn't use natural resources",
                        "There is no significant difference"
                    ],
                    correct: [1],
                    explanation: "The linear economy follows a 'take, make, dispose' model, while the circular economy aims to keep products and materials in use for as long as possible."
                },
                {
                    question: "How many tons of construction and demolition waste are produced per year in France?",
                    options: ["More than 25 million tons", "More than 30 million tons", "More than 42 million tons", "More than 60 million tons"],
                    correct: [2],
                    explanation: "The building sector is the largest producer of waste in France, with over 42 million tons per year."
                },
                {
                    question: "What is the main objective of the RE2020 in France?",
                    options: [
                        "Increase energy production",
                        "Reduce energy consumption and carbon emissions of new buildings",
                        "Ban the use of concrete",
                        "Make all buildings free"
                    ],
                    correct: [1],
                    explanation: "RE2020 aims to improve energy performance and reduce the carbon impact of new buildings over their entire life cycle."
                },
                {
                    question: "According to RE2020, what is the maximum heating consumption allowed?",
                    options: ["50 kWh/m² per year", "25 kWh/m² per year", "12 kWh/m² per year", "5 kWh/m² per year"],
                    correct: [2],
                    explanation: "RE2020 lowered the heating consumption threshold to 12 kWh/m² per year to encourage bioclimatic design and high-performance insulation."
                },
                // PART 2: LCA Methodology
                {
                    question: "Which ISO standards define the LCA methodology?",
                    options: ["ISO 9001 and ISO 9002", "ISO 14040 and ISO 14044", "ISO 50001 and ISO 50002", "ISO 26000 and ISO 27000"],
                    correct: [1],
                    explanation: "ISO 14040 sets out the principles and framework, while ISO 14044 details the requirements and guidelines."
                },
                {
                    question: "How many main steps compose an LCA according to ISO 14040/44?",
                    options: ["3 steps", "4 steps", "5 steps", "6 steps"],
                    correct: [1],
                    explanation: "The 4 steps are: 1. Goal and Scope Definition, 2. Life Cycle Inventory (LCI), 3. Life Cycle Impact Assessment (LCIA), 4. Interpretation."
                },
                {
                    question: "What is a functional unit in LCA?",
                    options: [
                        "The unit of measurement for impacts",
                        "A reference quantifying the service delivered by the system",
                        "The number of products manufactured",
                        "The total project cost"
                    ],
                    correct: [1],
                    explanation: "The functional unit is crucial as it provides a fair basis for comparison between different systems or products. E.g., 'to insulate 1m² of wall for 50 years'."
                },
                {
                    question: "What is the difference between 'elementary flow' and 'intermediate flow'?",
                    options: [
                        "Elementary flow = between processes, Intermediate flow = with environment",
                        "Elementary flow = with environment, Intermediate flow = between processes",
                        "There is no difference",
                        "Elementary flow concerns only water"
                    ],
                    correct: [1],
                    explanation: "An elementary flow crosses the system boundary (e.g., CO2 emitted into the air), while an intermediate flow is between two processes within the system (e.g., cement delivered to a concrete plant)."
                },
                {
                    question: "What does the 'technosphere' represent?",
                    options: [
                        "The part of Earth where organisms live",
                        "The physical part of the environment affected by human-induced changes",
                        "Earth's atmosphere",
                        "Digital technologies"
                    ],
                    correct: [1],
                    explanation: "The technosphere represents all human-made systems and processes, as opposed to the biosphere (the natural environment)."
                },
                {
                    question: "What is the difference between 'midpoint' and 'endpoint' methods?",
                    options: [
                        "Midpoint = potential impacts, Endpoint = potential damages",
                        "Midpoint = damages, Endpoint = impacts",
                        "There is no difference",
                        "Midpoint is more accurate than Endpoint"
                    ],
                    correct: [0],
                    explanation: "Midpoint measures impacts at an intermediate point in the cause-effect chain (e.g., kg CO2 eq.), while Endpoint goes to the final damage (e.g., DALYs, biodiversity loss)."
                },
                {
                    question: "What does DALY stand for in endpoint methods?",
                    options: ["Daily Atmospheric Layer Year", "Disability Adjusted Life Years", "Damage Assessment Life Yield", "Data Analysis Life Year"],
                    correct: [1],
                    explanation: "DALY (Disability-Adjusted Life Years) is a measure of overall disease burden, expressed as the number of years lost due to ill-health, disability or early death."
                },
                {
                    question: "Is normalization in LCIA mandatory?",
                    options: ["Yes, always", "No, it's an optional step", "Only for buildings", "Only in Europe"],
                    correct: [1],
                    explanation: "Normalization, which involves comparing impact results to a reference (e.g., a country's total impact), is an optional step according to ISO standards."
                },
                {
                    question: "What is the main objective of interpretation (step 4) in LCA?",
                    options: [
                        "Calculate emissions",
                        "Identify, quantify, and evaluate information from results",
                        "Collect data",
                        "Define the functional unit"
                    ],
                    correct: [1],
                    explanation: "Interpretation is the phase where the results of the inventory and impact assessment are analyzed to draw conclusions and recommendations."
                },
                // PART 3: Environmental Impacts
                {
                    question: "What is the unit of measurement for Global Warming Potential (GWP)?",
                    options: ["kg eq. SO2", "kg eq. CO2", "kg eq. CFC", "MJ"],
                    correct: [1],
                    explanation: "GWP is measured in kilograms of CO2 equivalent, which is the reference greenhouse gas."
                },
                {
                    question: "1 kg of methane (CH4) equals how many kg eq. CO2?",
                    options: ["10-15 kg eq. CO2", "21-25 kg eq. CO2", "50-60 kg eq. CO2", "100-110 kg eq. CO2"],
                    correct: [1],
                    explanation: "Methane has a global warming potential about 21 to 25 times greater than CO2 over a 100-year period."
                },
                {
                    question: "What are the main contributors to atmospheric acidification?",
                    options: ["CO2 and CH4", "SO2, NOx, NH3", "CFC and HCFC", "Volatile organic compounds"],
                    correct: [1],
                    explanation: "Sulfur dioxide (SO2), nitrogen oxides (NOx), and ammonia (NH3) are the main precursors to acid rain."
                },
                {
                    question: "What is the unit of measurement for ozone layer depletion?",
                    options: ["kg eq. CO2", "kg eq. SO2", "kg eq. CFC 11", "kg eq. C2H4"],
                    correct: [2],
                    explanation: "The impact on the ozone layer is measured in CFC-11 equivalent, one of the main gases responsible for its depletion."
                },
                {
                    question: "Eutrophication is caused by an excess of what in aquatic environments?",
                    options: ["Oxygen", "Nutrients (nitrogen, phosphorus)", "Heavy metals", "CO2"],
                    correct: [1],
                    explanation: "Excess nutrients, often from fertilizers and wastewater, cause algal blooms that deplete oxygen in the water."
                },
                {
                    question: "What is the unit of measurement for eutrophication?",
                    options: ["kg eq. CO2", "kg eq. PO4³⁻", "kg eq. SO2", "m³"],
                    correct: [1],
                    explanation: "Eutrophication is typically measured in phosphate (PO4³⁻) equivalent, one of the main responsible nutrients."
                },
                {
                    question: "For abiotic resource depletion, which substance is used as reference (value of 1)?",
                    options: ["Copper", "Silver", "Antimony (Sb)", "Platinum"],
                    correct: [2],
                    explanation: "Antimony (Sb) is used as the reference substance to calculate the abiotic depletion potential (elements) indicator."
                },
                {
                    question: "Environmental impacts can be grouped into how many main categories?",
                    options: ["2 categories", "3 categories", "4 categories", "5 categories"],
                    correct: [2],
                    explanation: "Impacts are often grouped into 4 main families: impacts on air, on humans, on water and soil, and on natural resources."
                },
                // PART 4: Building LCA
                {
                    question: "Which European standard details the principles of building LCA?",
                    options: ["EN 14040", "EN 15978", "EN 16000", "EN 18000"],
                    correct: [1],
                    explanation: "The EN 15978 standard provides the calculation framework for assessing the environmental performance of buildings."
                },
                {
                    question: "What does EPD stand for?",
                    options: ["Environmental Process Data", "Environmental Product Declaration", "Energy Performance Declaration", "European Product Database"],
                    correct: [1],
                    explanation: "An EPD is a standardized document that provides LCA data for a construction product."
                },
                {
                    question: "What is the reference service life of a building for RE2020?",
                    options: ["25 years", "30 years", "50 years", "100 years"],
                    correct: [2],
                    explanation: "RE2020, like most regulations, uses a reference service life of 50 years for the analysis."
                },
                {
                    question: "How many modules (phases) are there in the life cycle of a building according to EN 15978?",
                    options: ["3 modules (A, B, C)", "4 modules (A, B, C, D)", "5 modules", "7 modules"],
                    correct: [1],
                    explanation: "The 4 modules are: A (Product), B (Construction & Use), C (End of life), and D (Benefits and loads beyond the system boundary)."
                },
                {
                    question: "What is the French database for EPDs of construction products?",
                    options: ["Ecoinvent", "GaBi", "Inies", "ELCD"],
                    correct: [2],
                    explanation: "The INIES database is the French national reference for environmental and health data of construction products."
                },
                {
                    question: "In the case study, what is the CO2 emission factor of the French electricity mix used?",
                    options: ["50 gCO2 eq./kWh", "30 gCO2 eq./kWh", "100 gCO2 eq./kWh", "200 gCO2 eq./kWh"],
                    correct: [1],
                    explanation: "The French electricity mix has one of the lowest carbon intensities in Europe due to nuclear power, resulting in a very low emission factor."
                },
                {
                    question: "Among the three main impacts to consider in the case study, which ones are mentioned?",
                    options: [
                        "Global warming, Acidification, Eutrophication",
                        "Global warming, Non-renewable primary energy, Fresh water",
                        "Ozone depletion, Toxicity, Resources",
                        "Energy, Water, Air pollution"
                    ],
                    correct: [1],
                    explanation: "These three indicators (Global Warming, Primary Energy, Water) are often central to analyses for assessing a building's overall performance."
                }
            ]
        }
    ],
    set5: [{
        id: 1,
        title: "Construction Materials - Hydration and Properties (Q1–Q22)",
        questions: [
            {
                question: "1. What is the primary function of CH (Portlandite) in cement paste?",
                options: [
                    "A) Protecting reinforced concrete against corrosion",
                    "B) Filling the gaps between grains",
                    "C) Slowing the rapid setting of cement",
                    "D) Maintaining a basic pH (pH > 12)"
                ],
                correct: [3],
                explanation: "Portlandite maintains a high pH (~12-13), protecting steel reinforcement from corrosion."
            },
            {
                question: "2. What is the primary product of the hydration reaction of tricalcium silicate (C₃S)?",
                options: [
                    "A) Calcium Hydroxide (CH) and Calcium Silicate Hydrate (C–S–H)",
                    "B) Ettringite",
                    "C) Gypsum",
                    "D) Calcium Carbonate"
                ],
                correct: [0],
                explanation: "C₃S + H₂O → C–S–H + CH; these provide early strength to cement."
            },
            {
                question: "3. Which compound in cement is responsible for long-term strength gain?",
                options: [
                    "A) C₃A (Tricalcium aluminate)",
                    "B) C₃S (Tricalcium silicate)",
                    "C) C₂S (Dicalcium silicate)",
                    "D) C₄AF (Tetracalcium aluminoferrite)"
                ],
                correct: [2],
                explanation: "C₂S hydrates more slowly, contributing to strength at later ages."
            },
            {
                question: "4. Which mechanical property differentiates steel from concrete by describing the material's ability to undergo significant plastic deformation before fracture?",
                options: [
                    "A) Ductility",
                    "B) Hardness",
                    "C) Compressive Strength",
                    "D) Stiffness (Modulus of Elasticity)"
                ],
                correct: [0],
                explanation: "Steel is ductile; concrete is brittle and fails with little deformation."
            },
            {
                question: "5. What is the typical range of compressive strength for structural concrete?",
                options: [
                    "A) 10–20 MPa",
                    "B) 20–40 MPa",
                    "C) 40–80 MPa",
                    "D) 100–150 MPa"
                ],
                correct: [1],
                explanation: "Ordinary structural concrete usually has a compressive strength between 20–40 MPa."
            },
            {
                question: "6. Which property of aggregates affects the workability of concrete the most?",
                options: [
                    "A) Color",
                    "B) Shape and surface texture",
                    "C) Mineral composition",
                    "D) Density"
                ],
                correct: [1],
                explanation: "Rounded aggregates improve workability, while angular aggregates reduce it."
            },
            {
                question: "7. What is the role of water in concrete mix?",
                options: [
                    "A) Acts only as a filler",
                    "B) Initiates the chemical hydration reaction with cement",
                    "C) Increases strength proportionally",
                    "D) Increases density"
                ],
                correct: [1],
                explanation: "Water enables cement hydration, forming C–S–H and CH."
            },
            {
                question: "8. What is the water-to-cement ratio (w/c) that gives optimal strength and workability for normal concrete?",
                options: [
                    "A) 0.2–0.3",
                    "B) 0.4–0.6",
                    "C) 0.7–0.9",
                    "D) 1.0–1.2"
                ],
                correct: [1],
                explanation: "A w/c ratio between 0.4 and 0.6 is optimal for strength and workability."
            },
            {
                question: "9. What happens if the water-to-cement ratio is too high?",
                options: [
                    "A) Increases strength",
                    "B) Decreases porosity",
                    "C) Increases porosity and reduces strength",
                    "D) Improves durability"
                ],
                correct: [2],
                explanation: "Excess water leaves voids after evaporation, weakening the concrete."
            },
            {
                question: "10. Which test is used to measure the workability of fresh concrete?",
                options: [
                    "A) Compressive test",
                    "B) Slump test",
                    "C) Vicat test",
                    "D) Flow table test"
                ],
                correct: [1],
                explanation: "The slump test measures consistency and workability of fresh concrete."
            },
            {
                question: "11. What causes segregation in concrete?",
                options: [
                    "A) Proper mixing",
                    "B) Excessive vibration or water content",
                    "C) Low temperature",
                    "D) Use of fine aggregates"
                ],
                correct: [1],
                explanation: "Segregation occurs when coarse aggregates separate due to excess water or over-vibration."
            },
            {
                question: "12. What is the function of air-entraining agents in concrete?",
                options: [
                    "A) Reduce air bubbles",
                    "B) Improve freeze-thaw resistance",
                    "C) Increase density",
                    "D) Reduce cement hydration"
                ],
                correct: [1],
                explanation: "Air-entrained concrete has better durability in freezing conditions."
            },
            {
                question: "13. Which mineral admixture improves workability and reduces heat of hydration?",
                options: [
                    "A) Silica fume",
                    "B) Fly ash",
                    "C) Limestone dust",
                    "D) Gypsum"
                ],
                correct: [1],
                explanation: "Fly ash improves workability and reduces heat of hydration in concrete."
            },
            {
                question: "14. What is the effect of curing on concrete?",
                options: [
                    "A) Reduces strength",
                    "B) Improves hydration and strength development",
                    "C) Increases porosity",
                    "D) Has no effect"
                ],
                correct: [1],
                explanation: "Proper curing maintains moisture, allowing full hydration and strength gain."
            },
            {
                question: "15. Which compound forms ettringite during hydration?",
                options: [
                    "A) C₃S",
                    "B) C₄AF",
                    "C) C₃A + gypsum",
                    "D) C₂S"
                ],
                correct: [2],
                explanation: "C₃A reacts with gypsum to form ettringite in the early hydration phase."
            },
            {
                question: "16. What is the main reason for delayed ettringite formation (DEF)?",
                options: [
                    "A) Insufficient curing",
                    "B) High curing temperature",
                    "C) Low cement content",
                    "D) Use of coarse aggregates"
                ],
                correct: [1],
                explanation: "High curing temperatures can destroy initial ettringite, which reforms later and causes expansion (DEF)."
            },
            {
                question: "17. What is the main cause of Alkali-Aggregate Reaction (AAR)?",
                options: [
                    "A) Presence of calcium carbonate",
                    "B) Reactive silica in aggregates with alkalis in cement",
                    "C) Sulfate attack",
                    "D) Freezing-thawing cycles"
                ],
                correct: [1],
                explanation: "Reactive silica reacts with alkalis forming an expansive gel causing cracks."
            },
            {
                question: "18. Which test is used to determine the compressive strength of hardened concrete?",
                options: [
                    "A) Slump test",
                    "B) Compressive test on cube or cylinder",
                    "C) Vicat test",
                    "D) Flow table test"
                ],
                correct: [1],
                explanation: "Compressive strength is measured by crushing cubes or cylinders under load."
            },
            {
                question: "19. What property of steel allows it to bond well with concrete?",
                options: [
                    "A) High density",
                    "B) Thermal expansion similar to concrete",
                    "C) High stiffness",
                    "D) Smooth surface texture"
                ],
                correct: [1],
                explanation: "Steel and concrete have similar coefficients of thermal expansion, preventing stress during temperature changes."
            },
            {
                question: "20. What is the main advantage of reinforced concrete?",
                options: [
                    "A) Combines compressive strength of concrete and tensile strength of steel",
                    "B) Reduces construction cost",
                    "C) Improves aesthetic appearance",
                    "D) Makes concrete waterproof"
                ],
                correct: [0],
                explanation: "Reinforced concrete combines the compressive strength of concrete and tensile strength of steel."
            },
            {
                question: "21. Which material provides the highest modulus of elasticity among the following?",
                options: [
                    "A) Wood",
                    "B) Concrete",
                    "C) Steel",
                    "D) Aluminium"
                ],
                correct: [2],
                explanation: "Steel has a modulus of elasticity of ~210 GPa, higher than concrete (~30 GPa) or wood (~10 GPa)."
            },
            {
                question: "22. What is creep in concrete?",
                options: [
                    "A) Increase in strength with time",
                    "B) Time-dependent deformation under constant load",
                    "C) Shrinkage during drying",
                    "D) Sudden failure under high stress"
                ],
                correct: [1],
                explanation: "Creep is the gradual deformation of concrete under sustained load over time."
            }
        ]
    }],
    set6: []
};
