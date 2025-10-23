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
    set4: [],
    set5: [],
    set6: []
};
