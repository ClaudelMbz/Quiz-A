const quizData = {
    // Test 1: 10 Questions - LCA for Buildings (French)
    set1: [
        {
            id: 1,
            title: "LCA for Buildings (Questions 1-10)",
            questions: [
                {
                    question: "LCA is a ?",
                    options: [
                        "Technique that is used to assess the environmental aspects associated with a product over its life cycle",
                        "Technique that is used to assess the environmental aspects associated with an activities of a project",
                        "Technique that is used to assess the environmental aspects associated with a hazard of a product or technology during its life cycle",
                        "Technique that is used to assess the environmental impact and hazard of a product or technology during its life cycle."
                    ],
                    correct: [0],
                    explanation: "LCA assesses environmental aspects and potential impacts over a product’s entire life cycle."
                },
                {
                    question: "LCA is established in the",
                    options: [
                        "ISO 14040 and 14044 standards",
                        "ISO 14000 and 14001 standards",
                        "ISO 9000 and 9001 standards",
                        "ISO 14040 and 14050 standards"
                    ],
                    correct: [0],
                    explanation: "ISO 14040 & 14044 define the international framework for LCA."
                },
                {
                    question: "LCA method can help in the following (choose 3)",
                    options: [
                        "Searching the most available life cycles",
                        "Assuming the decisions",
                        "Identifying negative impact of a product or technology",
                        "Choose important indicators of environmental behaviour including measurement",
                        "Analysing potential impact of product or technology",
                        "Giving a value of product or technology which are environmentally friendly."
                    ],
                    correct: [2, 3, 4],
                    explanation: "LCA helps identify, analyze, and choose indicators for environmental impacts."
                },
                {
                    question: "LCA is carried out in ?",
                    options: [
                        "Four phases or steps",
                        "Fives phases or steps",
                        "Six phases or steps",
                        "Three phases or steps"
                    ],
                    correct: [0],
                    explanation: "The 4 stages are: Goal & scope, Inventory, Impact assessment, Interpretation."
                },
                {
                    question: "In this list, circle the phases of LCA (choose 4)",
                    options: [
                        "Inventory of resources use and emissions",
                        "Goal and scope definition",
                        "Impact identification and analysis",
                        "Impact assessment",
                        "Results discursion",
                        "Interpretation",
                        "Mitigation measure",
                        "Conclusion and recommendation"
                    ],
                    correct: [0, 1, 3, 5],
                    explanation: "The four official phases are Goal and scope definition, Inventory (LCI), Impact assessment (LCIA), and Interpretation."
                },
                {
                    question: "In this list, circle two impacts of LCA of building",
                    options: [
                        "Global Warming Potential (GWP)",
                        "CO2 emissions",
                        "Acidification of water and soil",
                        "Heavy consumption of abiotic resources",
                        "Risk of accident"
                    ],
                    correct: [0, 2],
                    explanation: "GWP and Acidification are standard impact categories in LCA. CO2 emissions are inventoried data used to calculate GWP."
                },
                {
                    question: "In LCA Inventory of resource is",
                    options: [
                        "One phase of LCA",
                        "Activities of production",
                        "Aspect of manufacturing process",
                        "List of activities having impact",
                        "All of this above"
                    ],
                    correct: [0],
                    explanation: "The Life Cycle Inventory (LCI) is the second official phase of an LCA."
                },
                {
                    question: "In case of Environmental impact, social aspect is",
                    options: [
                        "To be highly consider",
                        "Negligible",
                        "To be avoid",
                        "Not a part of data to collect and analyse"
                    ],
                    correct: [0],
                    explanation: "In a comprehensive sustainability assessment, social aspects should be highly considered, often through a separate Social LCA (S-LCA)."
                },
                {
                    question: "In LCA employment can be consider as a part of",
                    options: [
                        "Conclusion",
                        "Resources",
                        "Local population benefit",
                        "Environmental impact"
                    ],
                    correct: [2],
                    explanation: "Employment is a key indicator in Social LCA (S-LCA), representing a benefit to the local population."
                },
                {
                    question: "In LCA Installation of production equipment can be consider as a part of",
                    options: [
                        "Inventory of resource",
                        "Building phase",
                        "Maintenance and replacement activities",
                        "Main part of LCA"
                    ],
                    correct: [0],
                    explanation: "The resources used for production equipment are part of the inventory, typically allocated to the manufacturing/construction phase."
                }
            ]
        }
    ],
    // Test 2: 10 Questions - LCA for Buildings (English)
    set2: [
        {
            id: 1,
            title: "LCA (Building) — Practice Quiz",
            questions: [
                {
                    question: "Which of the following best describes Life Cycle Assessment (LCA)?",
                    options: [
                        "A technique used to assess the environmental aspects of a product throughout its life cycle.",
                        "A method to estimate only the emissions during a building’s operation.",
                        "A tool for evaluating accident risks related to a material.",
                        "A financial tool to calculate the residual value of a building."
                    ],
                    correct: [0],
                    explanation: "LCA assesses environmental aspects and potential impacts over a product’s entire life cycle."
                },
                {
                    question: "In which ISO standards is LCA formalized?",
                    options: [
                        "ISO 14040 and ISO 14044",
                        "ISO 9001 and ISO 9002",
                        "ISO 14000 and ISO 14001",
                        "ISO 50001 and ISO 26000"
                    ],
                    correct: [0],
                    explanation: "ISO 14040 & 14044 define the international framework for LCA."
                },
                {
                    question: "What are the 4 main stages of an LCA according to ISO standards?",
                    options: [
                        "Goal and scope definition — Life Cycle Inventory (LCI) — Life Cycle Impact Assessment (LCIA) — Interpretation",
                        "Design — Construction — Operation — Demolition",
                        "Inventory — Financial modeling — Audit — Certification",
                        "Data collection — Reporting — Auditing — Implementation"
                    ],
                    correct: [0],
                    explanation: "The 4 stages: Goal & scope, Inventory, Impact assessment, Interpretation."
                },
                {
                    question: "Which of the following elements is typically part of the Life Cycle Inventory (LCI) for a construction material?",
                    options: [
                        "Quantities of materials, energy used in production, transport, and related emissions",
                        "Purchase cost only",
                        "The building’s layout plan",
                        "The manufacturer’s technical datasheet"
                    ],
                    correct: [0],
                    explanation: "LCI covers quantities, energy, transport, and emissions — not only cost."
                },
                {
                    question: "What is the functional unit in an LCA?",
                    options: [
                        "The administrative boundary of the study",
                        "The list of materials analyzed",
                        "The quantitative reference expressing the function of the product (e.g., “1 m² of wall performing for 50 years”)",
                        "The product code of the manufacturer"
                    ],
                    correct: [2],
                    explanation: "The functional unit expresses what is being analyzed and for how long (e.g., 1 m² of wall for 50 years)."
                },
                {
                    question: "Which system boundary includes manufacturing, transport, use, and end-of-life of a building?",
                    options: [
                        "Cradle-to-gate",
                        "Cradle-to-grave (or cradle-to-cradle if recycling is included)",
                        "Gate-to-gate",
                        "Use phase only"
                    ],
                    correct: [1],
                    explanation: "Cradle-to-grave covers all phases from extraction to end-of-life (or cradle-to-cradle if recycling is closed-loop)."
                },
                {
                    question: "Which choice typically reduces the embodied environmental impact of a building?",
                    options: [
                        "Using only virgin, non-recycled materials",
                        "Using recycled or low-carbon materials and minimizing material quantities",
                        "Increasing material thickness without functional reason",
                        "Importing materials by air transport"
                    ],
                    correct: [1],
                    explanation: "Using recycled or low-carbon materials and optimizing material use reduces embodied impact."
                },
                {
                    question: "For a very energy-efficient building (low operational energy use), which type of emissions can become dominant?",
                    options: [
                        "Operational emissions (heating/electricity) always",
                        "Water consumption only",
                        "Embodied emissions (materials and construction-related impacts)",
                        "Lighting-related emissions only"
                    ],
                    correct: [2],
                    explanation: "For efficient buildings, embodied carbon often dominates total emissions."
                },
                {
                    question: "Rank the end-of-life options from best to worst in terms of environmental impact:",
                    options: [
                        "Landfill > Recycling > Reuse",
                        "Reuse > Recycling > Landfill",
                        "Recycling > Reuse > Landfill",
                        "Landfill > Reuse > Recycling"
                    ],
                    correct: [1],
                    explanation: "Best to worst: Reuse > Recycling > Landfill."
                },
                {
                    question: "When a process produces multiple co-products, what does ISO recommend if possible for handling impact allocation?",
                    options: [
                        "Avoid allocation by system expansion or substitution if possible; otherwise, justify and apply a transparent physical or economic allocation.",
                        "Always use economic allocation based on market price.",
                        "Ignore co-products and only assess the main product.",
                        "Multiply impacts by the number of products."
                    ],
                    correct: [0],
                    explanation: "ISO prefers avoiding allocation through system expansion; if unavoidable, justify and apply transparent criteria."
                }
            ]
        }
    ],
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
    set5: [],
    set6: []
};
