// Données des quiz télécommunications RF & ADC
const quizData = {
    // Set 1: 5 Quiz fondamentaux
    set1: [
        {
            id: 1,
            title: "dB, dBm et Concepts de Base",
            questions: [
                {
                    question: "What is the correct definition of dB?",
                    options: [
                        "The ratio between two voltages",
                        "10 times the decimal logarithm of the ratio between 2 powers",
                        "The logarithm of the ratio between two currents",
                        "Power measured in milliwatts"
                    ],
                    correct: 1
                },
                {
                    question: "An amplifier has an input power of 1 mW and an output power of 100 mW. What is its gain in dB?",
                    options: ["10 dB", "20 dB", "30 dB", "100 dB"],
                    correct: 1
                },
                {
                    question: "A power of 1 W corresponds to how much in dBm?",
                    options: ["0 dBm", "10 dBm", "20 dBm", "30 dBm"],
                    correct: 3
                },
                {
                    question: "What is the main difference between dB and dBm?",
                    options: [
                        "dB has a dimension, dBm does not",
                        "dBm has a dimension (reference to 1mW), dB is dimensionless",
                        "They are identical",
                        "dB is used only for voltages"
                    ],
                    correct: 1
                },
                {
                    question: "A -3 dB signal corresponds to what power ratio?",
                    options: ["0.25", "0.501", "0.708", "2"],
                    correct: 1
                },
                {
                    question: "In dB, a product of powers becomes:",
                    options: ["A multiplication", "A division", "An addition", "A subtraction"],
                    correct: 2
                },
                {
                    question: "A 2G transmitter power is 2W. What is this power in dBm?",
                    options: ["30 dBm", "33 dBm", "36 dBm", "40 dBm"],
                    correct: 1
                },
                {
                    question: "A 6 dB gain corresponds approximately to what power factor?",
                    options: ["2", "4", "6", "8"],
                    correct: 1
                },
                {
                    question: "What is the main advantage of using dB?",
                    options: [
                        "Calculation simplification (products become additions)",
                        "More precision",
                        "Better visualization",
                        "International universality"
                    ],
                    correct: 0
                },
                {
                    question: "-100 dB corresponds to what power ratio?",
                    options: ["10⁻⁸", "10⁻¹⁰", "10⁻¹²", "10⁻²⁰"],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: "Bruit Thermique, SNR et Facteur de Bruit",
            questions: [
                {
                    question: "Thermal noise is due to:",
                    options: [
                        "Interference between signals",
                        "Electron movement due to temperature",
                        "Component defects",
                        "Wave reflection"
                    ],
                    correct: 1
                },
                {
                    question: "The thermal noise power at ambient temperature is:",
                    options: ["-174 dBm/Hz", "-144 dBm/Hz", "-114 dBm/Hz", "-84 dBm/Hz"],
                    correct: 0
                },
                {
                    question: "Calculate the thermal noise power at ambient temperature in a 100 kHz bandwidth (in dBm):",
                    options: ["-124 dBm", "-134 dBm", "-144 dBm", "-154 dBm"],
                    correct: 1
                },
                {
                    question: "The signal-to-noise ratio (SNR) is defined as:",
                    options: [
                        "The ratio between signal power and noise power",
                        "The ratio between signal voltage and noise voltage",
                        "The difference between signal and noise",
                        "The product of signal and noise"
                    ],
                    correct: 0
                },
                {
                    question: "If at the input of a receiver, the signal power is -80 dBm and the noise power is -100 dBm, what is the SNR in dB?",
                    options: ["10 dB", "20 dB", "30 dB", "-20 dB"],
                    correct: 1
                },
                {
                    question: "The noise figure of a device quantifies:",
                    options: [
                        "Signal amplification",
                        "SNR degradation between input and output",
                        "Power consumption",
                        "Bandwidth used"
                    ],
                    correct: 1
                },
                {
                    question: "What does LNA stand for?",
                    options: [
                        "Large Noise Amplifier",
                        "Low Noise Amplifier",
                        "Linear Network Amplifier",
                        "Long Network Antenna"
                    ],
                    correct: 1
                },
                {
                    question: "Where should the LNA be placed in a receiver?",
                    options: [
                        "After the demodulator",
                        "Right after the antenna",
                        "Before the antenna",
                        "At the end of the chain"
                    ],
                    correct: 1
                },
                {
                    question: "For a passive device (cable, filter), the noise figure equals:",
                    options: ["Its gain", "Its attenuation (loss)", "Zero", "One"],
                    correct: 1
                },
                {
                    question: "An LNA has an input signal power of -80 dBm and output of -50 dBm. Noise goes from -100 dBm to -69 dBm. What is the LNA gain in dB?",
                    options: ["20 dB", "30 dB", "31 dB", "40 dB"],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: "Sensibilité du Récepteur et Bilan de Liaison",
            questions: [
                {
                    question: "Receiver sensitivity represents:",
                    options: [
                        "Its ability to amplify signals",
                        "Its ability to demodulate weak signals in a noisy environment",
                        "Its power consumption",
                        "Its maximum bandwidth"
                    ],
                    correct: 1
                },
                {
                    question: "How to interpret a lower sensitivity in dBm?",
                    options: [
                        "The receiver is less efficient",
                        "The receiver is more efficient",
                        "It has no impact",
                        "The receiver consumes more"
                    ],
                    correct: 1
                },
                {
                    question: "The sensitivity calculation formula is: Pmin = -174 + 10×log(B) + NF + (S/N)dB. What does B represent?",
                    options: [
                        "Signal power",
                        "Channel bandwidth in Hz",
                        "Noise figure",
                        "Battery"
                    ],
                    correct: 1
                },
                {
                    question: "A military receiver at 2 GHz uses QAM modulation with B=20 MHz, SNR=10dB, NF=4dB. Calculate the sensitivity:",
                    options: ["-87 dBm", "-97 dBm", "-107 dBm", "-117 dBm"],
                    correct: 2
                },
                {
                    question: "What is the disadvantage of wideband systems?",
                    options: [
                        "They consume less",
                        "They have better sensitivity (lower value)",
                        "They have worse sensitivity (higher value)",
                        "They are simpler"
                    ],
                    correct: 2
                },
                {
                    question: "An IoT receiver at 868 MHz has B=100Hz, SNR=6dB, NF=4dB. Calculate the sensitivity:",
                    options: ["-144 dBm", "-154 dBm", "-164 dBm", "-174 dBm"],
                    correct: 1
                },
                {
                    question: "What is the advantage of narrowband systems?",
                    options: [
                        "Higher data rate",
                        "Better sensitivity (lower in dBm)",
                        "Higher cost",
                        "Reduced complexity"
                    ],
                    correct: 1
                },
                {
                    question: "In a link budget, if Lt + Lfs + Lm + Lr - Gr - Gt = 150 dB and sensitivity = -120 dBm, what is the transmitted power?",
                    options: ["10 dBm", "20 dBm", "30 dBm", "40 dBm"],
                    correct: 2
                },
                {
                    question: "FSPL in a link budget stands for:",
                    options: [
                        "Fast Signal Power Loss",
                        "Free Space Path Loss",
                        "Frequency Spectrum Power Level",
                        "Filter Signal Processing Link"
                    ],
                    correct: 1
                },
                {
                    question: "For a given configuration, if we increase sensitivity (higher value), what should we do with transmitted power?",
                    options: [
                        "Decrease it",
                        "Increase it",
                        "Keep it constant",
                        "Remove it"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 4,
            title: "Architecture Radio et Modulation",
            questions: [
                {
                    question: "What is the main role of the radio front-end?",
                    options: [
                        "Only amplify the signal",
                        "Change signal frequency (up/down conversion)",
                        "Demodulate the digital signal",
                        "Power the antenna"
                    ],
                    correct: 1
                },
                {
                    question: "Who invented the superheterodyne receiver?",
                    options: ["Claude Shannon", "Edwin Armstrong", "Henry Nyquist", "Alexander Graham Bell"],
                    correct: 1
                },
                {
                    question: "In a superheterodyne receiver, the IF (Intermediate Frequency) is:",
                    options: [
                        "A variable frequency",
                        "A fixed frequency inside the receiver",
                        "The antenna frequency",
                        "The local oscillator frequency"
                    ],
                    correct: 1
                },
                {
                    question: "In a European GSM receiver (935-960 MHz with 200 kHz spaced channels), which component allows channel switching?",
                    options: [
                        "The IF filter",
                        "The RF amplifier",
                        "The local oscillator (LO)",
                        "The antenna"
                    ],
                    correct: 2
                },
                {
                    question: "What is the difference between the tunable RF filter and the IF filter?",
                    options: [
                        "RF filter is wideband, IF filter is very narrow (1 channel)",
                        "IF filter is wideband, RF filter is very narrow",
                        "They have the same bandwidth",
                        "RF filter doesn't exist"
                    ],
                    correct: 0
                },
                {
                    question: "If LO is at 800 MHz and IF at 20 MHz, and useful signal is at 780 MHz, what is the image frequency?",
                    options: ["800 MHz", "820 MHz", "840 MHz", "760 MHz"],
                    correct: 1
                },
                {
                    question: "In a transmitter, the PA (Power Amplifier):",
                    options: [
                        "Is a low noise amplifier",
                        "Delivers a very powerful signal",
                        "Filters harmonics",
                        "Converts frequency"
                    ],
                    correct: 1
                },
                {
                    question: "Why are signals transmitted at high frequency in air?",
                    options: [
                        "To reduce consumption",
                        "To reduce antenna size and improve propagation",
                        "To simplify circuits",
                        "To avoid interference"
                    ],
                    correct: 1
                },
                {
                    question: "For a quarter-wave antenna and a 5G frequency of 3.6 GHz, what is approximately the antenna size?",
                    options: ["2.1 cm", "4.2 cm", "8.3 cm", "16.6 cm"],
                    correct: 0
                },
                {
                    question: "The mixer in a radio front-end allows to:",
                    options: [
                        "Amplify the signal",
                        "Filter the signal",
                        "Convert frequency (up or down conversion)",
                        "Modulate amplitude"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 5,
            title: "Débit, Bande Passante et Convertisseurs ADC",
            questions: [
                {
                    question: "The Nyquist formula for a noiseless channel is: Max data rate = 2 × B × log₂V. What does V represent?",
                    options: [
                        "Transmission speed",
                        "Number of discrete signal levels",
                        "Signal voltage",
                        "Data volume"
                    ],
                    correct: 1
                },
                {
                    question: "For a noiseless channel with 4 kHz bandwidth transmitting 4 discrete levels, what is the maximum data rate according to Nyquist?",
                    options: ["8 kbps", "16 kbps", "32 kbps", "64 kbps"],
                    correct: 1
                },
                {
                    question: "Shannon capacity for a noisy channel is: C = B × log₂(1+SNR). For B=4 kHz and SNR=100, calculate the capacity:",
                    options: ["16.6 kbps", "26.6 kbps", "36.6 kbps", "46.6 kbps"],
                    correct: 1
                },
                {
                    question: "For a 20 MHz channel with 8 discrete levels (noiseless), what is the Nyquist data rate?",
                    options: ["40 Mbps", "60 Mbps", "80 Mbps", "120 Mbps"],
                    correct: 3
                },
                {
                    question: "For a noisy 20 MHz channel with SNR=100, what is the Shannon capacity?",
                    options: ["133 Mbps", "143 Mbps", "153 Mbps", "163 Mbps"],
                    correct: 0
                },
                {
                    question: "An ADC (Analog to Digital Converter) performs:",
                    options: [
                        "Conversion of a digital signal to analog",
                        "Conversion of an analog signal to digital",
                        "Signal amplification",
                        "Signal filtering"
                    ],
                    correct: 1
                },
                {
                    question: "The resolution of a 12-bit ADC allows distinguishing how many different levels?",
                    options: ["12", "144", "2048", "4096"],
                    correct: 3
                },
                {
                    question: "According to the Nyquist-Shannon theorem, to correctly sample a signal with maximum frequency 10 kHz, the minimum sampling frequency must be:",
                    options: ["5 kHz", "10 kHz", "20 kHz", "40 kHz"],
                    correct: 2
                },
                {
                    question: "The higher the data rate:",
                    options: [
                        "The lower the modulation bandwidth",
                        "The higher the modulation bandwidth",
                        "The bandwidth remains constant",
                        "The signal is more stable"
                    ],
                    correct: 1
                },
                {
                    question: "In a SIGFOX system, if we increase the number of messages sent per day, battery life:",
                    options: ["Increases", "Decreases", "Remains constant", "Doubles"],
                    correct: 1
                }
            ]
        }
    ],
    
    // Set 2: 7 Quiz complets (5 + 2 bonus)
    set2: [
        // Les 5 quiz précédents + 2 quiz bonus
        {
            id: 6,
            title: "Calculs Pratiques - dB et Puissances (Entraînement Intensif)",
            questions: [
                {
                    question: "A 50 mW signal corresponds to how much in dBm?",
                    options: ["14 dBm", "17 dBm", "20 dBm", "23 dBm"],
                    correct: 1
                },
                {
                    question: "An amplifier has a 13 dB gain. If the input is -90 dBm, what is the output?",
                    options: ["-77 dBm", "-80 dBm", "-83 dBm", "-103 dBm"],
                    correct: 0
                },
                {
                    question: "Two cascaded amplifiers have gains of 10 dB and 20 dB. What is the total gain?",
                    options: ["30 dB", "200 dB", "15 dB", "10 × 20 = 200"],
                    correct: 0
                },
                {
                    question: "A cable has a 3 dB loss. If the input is 30 dBm, what is the output?",
                    options: ["27 dBm", "33 dBm", "15 dBm (30/2)", "90 dBm (30×3)"],
                    correct: 0
                },
                {
                    question: "Convert 0.001 W to dBm:",
                    options: ["-30 dBm", "0 dBm", "10 dBm", "30 dBm"],
                    correct: 1
                },
                {
                    question: "A signal goes through: +20 dB (amp) then -5 dB (cable) then +30 dB (amp). What is the total gain?",
                    options: ["35 dB", "45 dB", "55 dB", "5 dB"],
                    correct: 1
                },
                {
                    question: "A transmitter emits 40 dBm. After a 130 dB loss, what is the received power?",
                    options: ["-90 dBm", "-100 dBm", "-110 dBm", "-170 dBm"],
                    correct: 0
                },
                {
                    question: "A -80 dBm signal goes through a 25 dB amplifier then a filter with 2 dB loss. Final power?",
                    options: ["-57 dBm", "-55 dBm", "-53 dBm", "-107 dBm"],
                    correct: 0
                },
                {
                    question: "What power in Watts corresponds to 20 dBm?",
                    options: ["0.01 W", "0.1 W", "1 W", "10 W"],
                    correct: 1
                },
                {
                    question: "A 10 dB attenuator reduces a 1 W power to:",
                    options: ["0.1 W", "0.5 W", "0.9 W", "0.01 W"],
                    correct: 0
                }
            ]
        },
        {
            id: 7,
            title: "Sensibilité, Bruit et SNR - Calculs Approfondis",
            questions: [
                {
                    question: "Calculate thermal noise at ambient temperature for B = 1 MHz (in dBm):",
                    options: ["-104 dBm", "-114 dBm", "-124 dBm", "-134 dBm"],
                    correct: 1
                },
                {
                    question: "A receiver has: B = 200 kHz, NF = 5 dB, required SNR = 12 dB. Calculate the sensitivity:",
                    options: ["-104 dBm", "-107 dBm", "-110 dBm", "-113 dBm"],
                    correct: 1
                },
                {
                    question: "Signal = -70 dBm, Noise = -95 dBm. What is the SNR in dB?",
                    options: ["15 dB", "20 dB", "25 dB", "30 dB"],
                    correct: 2
                },
                {
                    question: "A system has B = 10 kHz, NF = 3 dB, SNR = 8 dB. What is the sensitivity?",
                    options: ["-123 dBm", "-133 dBm", "-143 dBm", "-153 dBm"],
                    correct: 3
                },
                {
                    question: "If we double the bandwidth (×2), by how much does the noise level increase (in dB)?",
                    options: ["+2 dB", "+3 dB", "+6 dB", "+10 dB"],
                    correct: 1
                },
                {
                    question: "An LNA has 20 dB gain and 2 dB NF. Input signal = -100 dBm, Input noise = -120 dBm. What is the output signal?",
                    options: ["-80 dBm", "-90 dBm", "-100 dBm", "-110 dBm"],
                    correct: 0
                },
                {
                    question: "With the data from Q6, what is the output noise approximately?",
                    options: ["-98 dBm", "-100 dBm", "-102 dBm", "-118 dBm"],
                    correct: 0
                },
                {
                    question: "For B = 25 kHz, NF = 6 dB, SNR = 10 dB, calculate the sensitivity:",
                    options: ["-114 dBm", "-118 dBm", "-124 dBm", "-130 dBm"],
                    correct: 1
                },
                {
                    question: "A WiFi receiver (B = 20 MHz) and a LoRa receiver (B = 125 kHz) have the same NF and SNR. What is the sensitivity difference?",
                    options: [
                        "LoRa is better by ~22 dB",
                        "WiFi is better by 22 dB",
                        "They are identical",
                        "LoRa is better by 10 dB"
                    ],
                    correct: 0
                },
                {
                    question: "Calculate the noise for B = 500 kHz at ambient temperature:",
                    options: ["-117 dBm", "-127 dBm", "-137 dBm", "-147 dBm"],
                    correct: 1
                }
            ]
        }
    ]
};

// Copier les quiz 1-5 dans le set 2 aussi
quizData.set2 = [...quizData.set1, ...quizData.set2];

// Réponses correctes pour vérification
const correctAnswers = {
    set1: {
        1: [1,1,3,1,1,2,1,1,0,1], // Quiz 1
        2: [1,0,1,0,1,1,1,1,1,1], // Quiz 2
        3: [1,1,1,2,2,1,1,2,1,1], // Quiz 3
        4: [1,1,1,2,0,1,1,1,0,2], // Quiz 4
        5: [1,1,1,3,0,1,3,2,1,1]  // Quiz 5
    },
    set2: {
        1: [1,1,3,1,1,2,1,1,0,1], // Quiz 1 (répété)
        2: [1,0,1,0,1,1,1,1,1,1], // Quiz 2 (répété)
        3: [1,1,1,2,2,1,1,2,1,1], // Quiz 3 (répété)
        4: [1,1,1,2,0,1,1,1,0,2], // Quiz 4 (répété)
        5: [1,1,1,3,0,1,3,2,1,1], // Quiz 5 (répété)
        6: [1,0,0,0,1,1,0,0,1,0], // Quiz 6 (nouveau)
        7: [1,1,2,3,1,0,0,1,0,1]  // Quiz 7 (nouveau)
    }
};