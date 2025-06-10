🚨 RescueEcho

AI-powered radar-based survivor detection system for disaster response

RescueEcho is a micro-Doppler-based target classification system that leverages AI and radar signals to distinguish between humans and inanimate objects in disaster scenarios. Designed for low-visibility conditions like collapsed buildings or debris-covered zones, it aids first responders by identifying survivors quickly and accurately.

⸻

🚀 Key Features
	•	Micro-Doppler Signature Analysis
Detects distinct human motion patterns using radar signal reflections.
	•	Machine Learning Classification
Trained on spectrogram images to classify movements such as walking, crawling, or limping.
	•	Real-Time Survivor Detection
Performs live analysis with radar sensors to alert rescue teams.
	•	Embedded Hardware Integration
Works with Infineon BGT24LTR11 radar module and Arduino Uno for on-site deployment.

⸻

🧩 System Architecture
	1.	Data Acquisition
Radar captures micro-Doppler motion signatures.
	2.	Signal Preprocessing
Converts raw signals into spectrograms suitable for ML analysis.
	3.	Model Training & Classification
Machine learning models analyze motion types for human identification.
	4.	Detection & Alert
Real-time decision-making to notify rescue personnel.

⸻

🛠️ Tech Stack
	•	Hardware
Infineon BGT24LTR11 Radar • Arduino Uno
	•	Languages
Python • C++
	•	Libraries & Frameworks
	•	OpenCV (image processing)
	•	NumPy, Pandas (data manipulation)
	•	TensorFlow / PyTorch (ML model training)
	•	Arduino (sensor control)

⸻

📊 Data Processing Workflow
	1.	Radar Signal Acquisition
	2.	Spectrogram Generation
	3.	Feature Extraction
	4.	Motion Classification (ML)
	5.	Alert Triggering & Decision Logic
