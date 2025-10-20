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
        },
        {
            id: 8,
            title: "Superheterodyne and Frequencies (Total Mastery)",
            questions: [
                {
                    question: "A GSM receiver must receive 935 MHz. LO = 955 MHz, IF = 20 MHz. Do we use High Side or Low Side Injection?",
                    options: [
                        "High Side (LO > RF)",
                        "Low Side (LO < RF)", 
                        "Both work",
                        "Neither works"
                    ],
                    correct: 0
                },
                {
                    question: "With the data from Q1, what is the image frequency?",
                    options: ["915 MHz", "935 MHz", "955 MHz", "975 MHz"],
                    correct: 3
                },
                {
                    question: "To receive channels between 1800-1850 MHz with IF = 100 MHz in High Side, what is the LO range?",
                    options: [
                        "1700-1750 MHz",
                        "1800-1850 MHz", 
                        "1900-1950 MHz",
                        "2000-2050 MHz"
                    ],
                    correct: 2
                },
                {
                    question: "A useful signal at 2.4 GHz, IF = 70 MHz, LO = 2.33 GHz. What is the image frequency?",
                    options: ["2.19 GHz", "2.26 GHz", "2.4 GHz", "2.54 GHz"],
                    correct: 1
                },
                {
                    question: "For an FM receiver (88-108 MHz) with IF = 10.7 MHz in High Side, what is the LO range?",
                    options: [
                        "77.3-97.3 MHz",
                        "88-108 MHz",
                        "98.7-118.7 MHz", 
                        "120-140 MHz"
                    ],
                    correct: 2
                },
                {
                    question: "Why choose an IF neither too low nor too high?",
                    options: [
                        "IF too low → image problem / IF too high → difficult filtering",
                        "IF too high → image problem / IF too low → difficult filtering",
                        "No impact on performance",
                        "Only for simplicity"
                    ],
                    correct: 0
                },
                {
                    question: "In a 2.4 GHz WiFi receiver, RF filter has 100 MHz band and IF filter 20 MHz. Why?",
                    options: [
                        "RF filter selects entire WiFi band, IF selects 1 channel",
                        "IF filter selects entire band, RF selects 1 channel",
                        "They have the same function",
                        "It's a design error"
                    ],
                    correct: 0
                },
                {
                    question: "An LO is set to 1.2 GHz, IF = 50 MHz, useful signal at 1.15 GHz. Which image signal must be rejected?",
                    options: ["1.1 GHz", "1.25 GHz", "1.3 GHz", "1.35 GHz"],
                    correct: 2
                },
                {
                    question: "To avoid image problems in a 450-470 MHz receiver, is it better to use IF of 5 MHz or 50 MHz?",
                    options: [
                        "5 MHz (close image, easy to filter)",
                        "50 MHz (distant image, easy to filter)",
                        "Both equivalent",
                        "Neither"
                    ],
                    correct: 1
                },
                {
                    question: "A system receives at 5.8 GHz with IF = 200 MHz. In Low Side Injection, what is the LO?",
                    options: ["5.6 GHz", "5.8 GHz", "6.0 GHz", "6.2 GHz"],
                    correct: 0
                }
            ]
        },
        {
            id: 9,
            title: "Nyquist, Shannon and Data Rates (Intensive Training)",
            questions: [
                {
                    question: "Noiseless channel: B = 10 MHz, 4 levels. Nyquist data rate?",
                    options: ["20 Mbps", "40 Mbps", "80 Mbps", "160 Mbps"],
                    correct: 1
                },
                {
                    question: "Noisy channel: B = 10 MHz, SNR = 31 (~15 dB). Shannon capacity?",
                    options: ["50 Mbps", "100 Mbps", "150 Mbps", "200 Mbps"],
                    correct: 0
                },
                {
                    question: "To transmit 100 Mbps with 16 levels (noiseless), what minimum bandwidth according to Nyquist?",
                    options: ["12.5 MHz", "25 MHz", "50 MHz", "100 MHz"],
                    correct: 1
                },
                {
                    question: "A 5 MHz channel with SNR = 63 (~18 dB). Shannon capacity?",
                    options: ["20 Mbps", "25 Mbps", "30 Mbps", "35 Mbps"],
                    correct: 2
                },
                {
                    question: "If we go from 2 levels to 8 levels (same bandwidth), the Nyquist data rate is multiplied by:",
                    options: ["1.5", "2", "3", "4"],
                    correct: 0
                },
                {
                    question: "20 MHz channel, 256 levels (QAM-256). Maximum Nyquist data rate?",
                    options: ["40 Mbps", "80 Mbps", "160 Mbps", "320 Mbps"],
                    correct: 3
                },
                {
                    question: "For SNR of 1023 (~30 dB) and B = 1 MHz, what is the Shannon capacity?",
                    options: ["5 Mbps", "10 Mbps", "15 Mbps", "20 Mbps"],
                    correct: 1
                },
                {
                    question: "Which modulation allows the highest data rate in a given bandwidth (noiseless)?",
                    options: [
                        "2 levels (BPSK)",
                        "4 levels (QPSK)", 
                        "16 levels (16-QAM)",
                        "256 levels (256-QAM)"
                    ],
                    correct: 3
                },
                {
                    question: "A real system with B = 8 MHz, SNR = 15 (~12 dB). Shannon capacity?",
                    options: ["~24 Mbps", "~29 Mbps", "~32 Mbps", "~36 Mbps"],
                    correct: 1
                },
                {
                    question: "Doubling bandwidth with same SNR and modulation:",
                    options: [
                        "Doubles data rate",
                        "Triples data rate",
                        "Quadruples data rate",
                        "Does not affect data rate"
                    ],
                    correct: 0
                }
            ]
        },
        {
            id: 10,
            title: "Link Budget and Link Analysis (Complete Mastery)",
            questions: [
                {
                    question: "Ptx = 20 dBm, Total losses = 140 dB, Sensitivity = -115 dBm. What is the link margin?",
                    options: ["5 dB", "10 dB", "15 dB", "20 dB"],
                    correct: 0
                },
                {
                    question: "To double the range in free space, Ptx must be increased by how much (in dB)?",
                    options: ["+3 dB", "+6 dB", "+10 dB", "+20 dB"],
                    correct: 1
                },
                {
                    question: "Ptx = 30 dBm, Gtx = 10 dBi, Grx = 5 dBi, Losses = 130 dB. Received power?",
                    options: ["-75 dBm", "-85 dBm", "-95 dBm", "-105 dBm"],
                    correct: 1
                },
                {
                    question: "A system has 10 dB margin. If we reduce Ptx by 10 dB, what happens?",
                    options: [
                        "System still works but without margin",
                        "System no longer works",
                        "Margin increases",
                        "No change"
                    ],
                    correct: 0
                },
                {
                    question: "Free space losses at 2.4 GHz over 100m ≈ 80 dB. At 1 km, losses are about:",
                    options: ["90 dB", "100 dB", "110 dB", "800 dB"],
                    correct: 1
                },
                {
                    question: "Ptx = 10 dBm, sensitivity = -100 dBm, losses = 120 dB. Does the link work?",
                    options: [
                        "Yes, with 10 dB margin",
                        "No, missing 10 dB",
                        "Just at limit (0 dB margin)", 
                        "Impossible to determine"
                    ],
                    correct: 1
                },
                {
                    question: "To improve a link by 6 dB, which solution is LEAST effective?",
                    options: [
                        "Increase Ptx by 6 dB",
                        "Improve sensitivity by 6 dB",
                        "Add 3 dB Tx gain and 3 dB Rx gain",
                        "Reduce cable losses by 6 dB"
                    ],
                    correct: 3
                },
                {
                    question: "A link has: Ptx = 27 dBm, Gtx = 8 dBi, Grx = 3 dBi, FSPL = 120 dB, other losses = 5 dB. Prx?",
                    options: ["-87 dBm", "-92 dBm", "-97 dBm", "-102 dBm"],
                    correct: 0
                },
                {
                    question: "Sensitivity = -120 dBm, Prx = -110 dBm. Link margin?",
                    options: ["5 dB", "10 dB", "15 dB", "30 dB"],
                    correct: 1
                },
                {
                    question: "To compensate for 20 dB increase in losses, we can:",
                    options: [
                        "Increase Ptx by 10 dB AND antenna gains by 10 dB",
                        "Increase Ptx by 20 dB",
                        "Improve sensitivity by 20 dB",
                        "All of these answers"
                    ],
                    correct: 3
                }
            ]
        },
        {
            id: 11,
            title: "Battery Life and IoT Optimization",
            questions: [
                {
                    question: "A SIGFOX device sends 1 message/hour (24 msg/day). Battery 2800 mAh, TX consumption = 60 mA, frame duration = 2s. Lifetime?",
                    options: ["~1.6 years", "~3.2 years", "~6.5 years", "~13 years"],
                    correct: 2
                },
                {
                    question: "Same system but 1 message every 10 minutes (144 msg/day). Lifetime?",
                    options: ["~0.5 years", "~1.1 years", "~2.2 years", "~4.4 years"],
                    correct: 1
                },
                {
                    question: "To maximize IoT sensor battery life, which strategy is BEST?",
                    options: [
                        "Increase Ptx to ensure link",
                        "Reduce bandwidth and improve sensitivity",
                        "Send more redundant messages",
                        "Use complex modulation"
                    ],
                    correct: 1
                },
                {
                    question: "A system has Ptx = 20 dBm (100 mW), Itx = 80 mA, duration = 3s, 10 msg/day, battery 3000 mAh. Lifetime?",
                    options: ["~15 years", "~25 years", "~37 years", "~50 years"],
                    correct: 2
                },
                {
                    question: "If we reduce Ptx from 14 dBm to 10 dBm, we reduce consumption from 60 mA to about:",
                    options: [
                        "56 mA (linear change)",
                        "48 mA",
                        "24 mA (÷2.5)",
                        "15 mA (÷4)"
                    ],
                    correct: 2
                },
                {
                    question: "LoRa enables long ranges with low power thanks to:",
                    options: [
                        "Very wide bandwidth",
                        "Very narrow bandwidth and good sensitivity",
                        "High transmission power",
                        "Very high frequency"
                    ],
                    correct: 1
                },
                {
                    question: "Battery 2000 mAh, total daily consumption = 5 mAh. Lifetime?",
                    options: [
                        "40 days",
                        "100 days",
                        "400 days (~1.1 years)",
                        "4000 days (~11 years)"
                    ],
                    correct: 2
                },
                {
                    question: "For a solar-powered system (50 mAh/day available), what max daily consumption for indefinite operation?",
                    options: ["10 mAh/day", "30 mAh/day", "50 mAh/day", "70 mAh/day"],
                    correct: 2
                },
                {
                    question: "A sensor sends 1 frame of 5s every hour. TX consumption = 50 mA. Daily consumption?",
                    options: ["0.17 mAh", "1.7 mAh", "17 mAh", "170 mAh"],
                    correct: 1
                },
                {
                    question: "Compare 2 systems: A) B=200kHz, Ptx=20dBm / B) B=100Hz, Ptx=14dBm. Which has better autonomy?",
                    options: [
                        "System A (less sensitive but same power)",
                        "System B (better sensitivity, less power)",
                        "Identical",
                        "Impossible to compare"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 12,
            title: "Synthesis and Complex Practical Cases",
            questions: [
                {
                    question: "A 4G smartphone: B=20MHz, NF=6dB, SNR=15dB. A LoRa sensor: B=125Hz, NF=5dB, SNR=8dB. Sensitivity difference?",
                    options: [
                        "LoRa better by ~38 dB",
                        "4G better by 38 dB",
                        "LoRa better by ~52 dB",
                        "Identical"
                    ],
                    correct: 2
                },
                {
                    question: "This LoRa sensor can therefore transmit with how many times less power?",
                    options: ["~38 times", "~630 times", "~6300 times", "~158000 times"],
                    correct: 3
                },
                {
                    question: "A WiFi system (Ptx=20dBm) must be replaced by LoRa (Ptx=14dBm) over same distance. LoRa sensitivity must be better by:",
                    options: ["6 dB", "12 dB", "At least 6 dB", "No improvement needed"],
                    correct: 2
                },
                {
                    question: "GSM receiver: 124 channels from 935-960 MHz spaced 200 kHz apart. IF = 20 MHz. RF filter bandwidth?",
                    options: ["200 kHz", "20 MHz", "25 MHz", "50 MHz"],
                    correct: 2
                },
                {
                    question: "Same system, IF filter (channel) bandwidth?",
                    options: ["200 kHz", "20 MHz", "25 MHz", "Variable by channel"],
                    correct: 0
                },
                {
                    question: "A 10-bit ADC samples at 1 MHz a signal whose max component is 400 kHz. Problem?",
                    options: [
                        "Yes, under-sampling (need ≥800 kHz)",
                        "Yes, over-sampling unnecessary",
                        "No, respects Nyquist (≥2×400=800 kHz)",
                        "Impossible without knowing amplitude"
                    ],
                    correct: 2
                },
                {
                    question: "To transmit 50 Mbps on a 10 MHz channel without noise, how many levels minimum according to Nyquist?",
                    options: ["4 levels", "8 levels", "16 levels", "32 levels"],
                    correct: 3
                },
                {
                    question: "A PA has 40% efficiency and delivers 2W RF. What DC power does it consume?",
                    options: ["0.8 W", "2 W", "5 W", "8 W"],
                    correct: 2
                },
                {
                    question: "Complete chain: Signal -100 dBm → LNA(G=20dB, NF=2dB) → Mixer(L=7dB, NF=7dB) → IF Amp(G=30dB, NF=5dB). Final signal?",
                    options: ["-27 dBm", "-37 dBm", "-47 dBm", "-57 dBm"],
                    correct: 3
                },
                {
                    question: "With the chain from Q9, what is approximately the total system noise figure?",
                    options: [
                        "~2 dB (dominated by LNA)",
                        "~7 dB (dominated by mixer)",
                        "~14 dB (sum of NFs)",
                        "~5 dB (average of NFs)"
                    ],
                    correct: 0
                }
            ]
        }
    ]
};

// Créer les différents sets de quiz
// Set 2: Quiz 1-4 (Fondamentaux étendus)
quizData.set2 = [
    quizData.set1[0], // Quiz 1
    quizData.set1[1], // Quiz 2
    quizData.set1[2], // Quiz 3
    quizData.set1[3]  // Quiz 4
];

// Set 3: Quiz 5-8 (Avancés)
quizData.set3 = [
    quizData.set1[4], // Quiz 5
    quizData.set2[0], // Quiz 6
    quizData.set2[1], // Quiz 7
    quizData.set2[2]  // Quiz 8
];

// Set 4: Quiz 9-12 (Experts)
quizData.set4 = [
    quizData.set2[3], // Quiz 9
    quizData.set2[4], // Quiz 10
    quizData.set2[5], // Quiz 11
    quizData.set2[6]  // Quiz 12
];

// Correction: Les quiz 6-12 sont dans set2[0] à set2[6], pas set1
// Refaire la structure correctement
const tempSet2 = [...quizData.set2]; // Sauvegarder les quiz 6-12

// Set 2: Quiz 1-4 
quizData.set2 = [
    quizData.set1[0], // Quiz 1: dB, dBm
    quizData.set1[1], // Quiz 2: Bruit Thermique
    quizData.set1[2], // Quiz 3: Sensibilité
    quizData.set1[3]  // Quiz 4: Architecture Radio
];

// Set 3: Quiz 5-8
quizData.set3 = [
    quizData.set1[4], // Quiz 5: Débit, ADC
    tempSet2[0],      // Quiz 6: Calculs Pratiques
    tempSet2[1],      // Quiz 7: Sensibilité Avancée
    tempSet2[2]       // Quiz 8: Superheterodyne
];

// Set 4: Quiz 9-12
quizData.set4 = [
    tempSet2[3],      // Quiz 9: Nyquist/Shannon
    tempSet2[4],      // Quiz 10: Link Budget
    tempSet2[5],      // Quiz 11: Battery Life
    tempSet2[6]       // Quiz 12: Synthesis
];

// Réponses correctes pour vérification
const correctAnswers = {
    set1: {
        1: [1,1,3,1,1,2,1,1,0,1], // Quiz 1: dB, dBm
        2: [1,0,1,0,1,1,1,1,1,1], // Quiz 2: Bruit Thermique
        3: [1,1,1,2,2,1,1,2,1,1], // Quiz 3: Sensibilité
        4: [1,1,1,2,0,1,1,1,0,2], // Quiz 4: Architecture Radio
        5: [1,1,1,3,0,1,3,2,1,1]  // Quiz 5: Débit, ADC
    },
    set2: {
        1: [1,1,3,1,1,2,1,1,0,1], // Quiz 1: dB, dBm
        2: [1,0,1,0,1,1,1,1,1,1], // Quiz 2: Bruit Thermique
        3: [1,1,1,2,2,1,1,2,1,1], // Quiz 3: Sensibilité
        4: [1,1,1,2,0,1,1,1,0,2]  // Quiz 4: Architecture Radio
    },
    set3: {
        5: [1,1,1,3,0,1,3,2,1,1], // Quiz 5: Débit, ADC
        6: [1,0,0,0,1,1,0,0,1,0], // Quiz 6: Calculs Pratiques
        7: [1,1,2,3,1,0,0,1,0,1], // Quiz 7: Sensibilité Avancée
        8: [0,3,2,1,2,0,0,2,1,0]  // Quiz 8: Superheterodyne
    },
    set4: {
        9: [1,0,1,2,0,3,1,3,1,0],  // Quiz 9: Nyquist/Shannon
        10: [0,1,1,0,1,1,3,0,1,3], // Quiz 10: Link Budget
        11: [2,1,1,2,2,1,2,2,1,1], // Quiz 11: Battery Life
        12: [2,3,2,2,0,2,3,2,3,0]  // Quiz 12: Synthesis
    }
};
