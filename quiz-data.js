const quizData = {
    // Test 1: Construction Materials Final Quiz - 30 Questions
    set1: [
        {
            id: 1,
            title: "Wood, Steel & Concrete (Questions 1-10)",
            questions: [
                {
                    question: "What is the typical cellulose content range in wood?",
                    options: [
                        "10-20%",
                        "25-35%",
                        "40-60%",
                        "70-80%"
                    ],
                    correct: [2],
                    explanation: "40-60%"
                },
                {
                    question: "Which type of wood is generally denser and less flammable?",
                    options: [
                        "Softwood",
                        "Hardwood",
                        "Composite",
                        "Laminated"
                    ],
                    correct: [1],
                    explanation: "Hardwood"
                },
                {
                    question: "Which engineered wood product is made from layers of wood glued at right angles?",
                    options: [
                        "Glulam",
                        "Plywood",
                        "CLT",
                        "OSB"
                    ],
                    correct: [2],
                    explanation: "CLT (Cross Laminated Timber)"
                },
                {
                    question: "What is the behavior of wood under tension?",
                    options: [
                        "Ductile",
                        "Brittle",
                        "Elastic",
                        "Plastic"
                    ],
                    correct: [1],
                    explanation: "Brittle"
                },
                {
                    question: "What is the Eurocode for timber structure design?",
                    options: [
                        "EN 1993",
                        "EN 1995",
                        "EN 1997",
                        "EN 1999"
                    ],
                    correct: [1],
                    explanation: "EN 1995"
                },
                {
                    question: "What is an advantage of steel construction?",
                    options: [
                        "Low initial cost",
                        "Speed of assembly",
                        "Low maintenance",
                        "No foundation required"
                    ],
                    correct: [1],
                    explanation: "Speed of assembly"
                },
                {
                    question: "Which Eurocode applies to steel structures?",
                    options: [
                        "EN 1992",
                        "EN 1993",
                        "EN 1995",
                        "EN 1999"
                    ],
                    correct: [1],
                    explanation: "EN 1993"
                },
                {
                    question: "Which type of profile is commonly used for beams?",
                    options: [
                        "U profile",
                        "T profile",
                        "H profile",
                        "Square tube"
                    ],
                    correct: [2],
                    explanation: "H profile"
                },
                {
                    question: "What is the main component of concrete by volume?",
                    options: [
                        "Cement",
                        "Water",
                        "Aggregates",
                        "Admixtures"
                    ],
                    correct: [2],
                    explanation: "Aggregates"
                },
                {
                    question: "Which test measures the consistency of fresh concrete?",
                    options: [
                        "Compression test",
                        "Slump test",
                        "Tensile test",
                        "Bending test"
                    ],
                    correct: [1],
                    explanation: "Slump test"
                }
            ]
        },
        {
            id: 2,
            title: "Earth Structures & Environmental Impacts (Questions 11-20)",
            questions: [
                {
                    question: "Which civilization used earth as a building material around 10,000 BC?",
                    options: [
                        "Egyptian",
                        "Mesopotamian",
                        "Roman",
                        "Greek"
                    ],
                    correct: [1],
                    explanation: "Mesopotamian"
                },
                {
                    question: "Which earth construction technique uses a bamboo or wood frame covered with earth?",
                    options: [
                        "Rammed earth",
                        "Cob",
                        "Mud (wattle and daub)",
                        "Adobe"
                    ],
                    correct: [2],
                    explanation: "Mud (wattle and daub / torchis)"
                },
                {
                    question: "Which type of earth structure is made by manually or mechanically compacting earth?",
                    options: [
                        "Adobe",
                        "Cob",
                        "Rammed earth (Pisé)",
                        "Compressed earth block"
                    ],
                    correct: [2],
                    explanation: "Rammed earth (Pisé)"
                },
                {
                    question: "What is a main advantage of earth construction?",
                    options: [
                        "High compressive strength",
                        "Low thermal inertia",
                        "Hygrothermal regulation",
                        "Resistance to heavy rain"
                    ],
                    correct: [2],
                    explanation: "Hygrothermal regulation"
                },
                {
                    question: "What percentage of air pollution is attributable to the construction sector?",
                    options: [
                        "23%",
                        "40%",
                        "50%",
                        "60%"
                    ],
                    correct: [0],
                    explanation: "23%"
                },
                {
                    question: "How many tons of sand are consumed annually worldwide?",
                    options: [
                        "4-5 billion tons",
                        "40-50 billion tons",
                        "400-500 billion tons",
                        "4-5 million tons"
                    ],
                    correct: [1],
                    explanation: "40-50 billion tons"
                },
                {
                    question: "Which material has the highest carbon footprint per kg?",
                    options: [
                        "Concrete",
                        "Steel",
                        "Aluminium",
                        "Wood"
                    ],
                    correct: [2],
                    explanation: "Aluminium"
                },
                {
                    question: "Which sustainable building label is the most used worldwide?",
                    options: [
                        "HQE",
                        "BREEAM",
                        "LEED",
                        "Passivhaus"
                    ],
                    correct: [2],
                    explanation: "LEED"
                },
                {
                    question: "Which architectural principle aims to use local climate for thermal comfort?",
                    options: [
                        "Bioclimatic architecture",
                        "High-tech architecture",
                        "Vernacular architecture",
                        "Sustainable architecture"
                    ],
                    correct: [0],
                    explanation: "Bioclimatic architecture"
                },
                {
                    question: "What is an objective of the Passivhaus standard?",
                    options: [
                        "Airtightness < 0.6 vol/h",
                        "Consumption < 200 kWh/m²/year",
                        "Use of noble materials",
                        "Thin insulation"
                    ],
                    correct: [0],
                    explanation: "Airtightness < 0.6 vol/h"
                }
            ]
        },
        {
            id: 3,
            title: "Cement (Questions 21-30)",
            questions: [
                {
                    question: "Who patented Portland cement in 1824?",
                    options: [
                        "Louis Vicat",
                        "John Smeaton",
                        "Joseph Aspdin",
                        "Dupont and Demarle"
                    ],
                    correct: [2],
                    explanation: "Joseph Aspdin"
                },
                {
                    question: "What is the firing temperature of clinker?",
                    options: [
                        "800°C",
                        "1100°C",
                        "1450°C",
                        "1600°C"
                    ],
                    correct: [2],
                    explanation: "1450°C"
                },
                {
                    question: "What is the main component of clinker?",
                    options: [
                        "C₂S",
                        "C₃A",
                        "C₃S",
                        "C₄AF"
                    ],
                    correct: [2],
                    explanation: "C₃S (Tricalcium silicate)"
                },
                {
                    question: "What is the role of gypsum in cement?",
                    options: [
                        "Accelerate setting",
                        "Increase strength",
                        "Delay setting",
                        "Color the cement"
                    ],
                    correct: [2],
                    explanation: "Delay setting"
                },
                {
                    question: "Which type of cement contains the most clinker?",
                    options: [
                        "CEM II",
                        "CEM III",
                        "CEM IV",
                        "CEM I"
                    ],
                    correct: [3],
                    explanation: "CEM I"
                },
                {
                    question: "Which mineral is formed during the hydration of C₃S and C₂S?",
                    options: [
                        "Ettringite",
                        "Portlandite",
                        "CSH",
                        "Monosulfoaluminate"
                    ],
                    correct: [2],
                    explanation: "CSH (Calcium Silicate Hydrate)"
                },
                {
                    question: "Which type of cement is recommended for aggressive sulfate environments?",
                    options: [
                        "CEM I",
                        "CEM II",
                        "CEM III",
                        "CEM with ES designation"
                    ],
                    correct: [3],
                    explanation: "CEM with ES designation"
                },
                {
                    question: "Which property is measured with the Vicat apparatus?",
                    options: [
                        "Compressive strength",
                        "Normal consistency",
                        "Modulus of elasticity",
                        "Blaine fineness"
                    ],
                    correct: [1],
                    explanation: "Normal consistency"
                },
                {
                    question: "What is the advantage of composite cements with mineral additions?",
                    options: [
                        "Faster setting",
                        "Higher cost",
                        "Reduction of heat of hydration",
                        "Higher initial strength"
                    ],
                    correct: [2],
                    explanation: "Reduction of heat of hydration"
                },
                {
                    question: "Which pathological phenomenon is related to delayed ettringite formation?",
                    options: [
                        "Alkali-silica reaction",
                        "Carbonation",
                        "Reinforcement corrosion",
                        "Expansion and cracking"
                    ],
                    correct: [3],
                    explanation: "Expansion and cracking"
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

