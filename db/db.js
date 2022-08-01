export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: mahimainul84@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks",
			skillName: "Tensorflow, Keras",
			color: "6",
			percentage: "60",
		},
		{
			title: "Libraries",
			skillName: "NumPy, Pandas, Matplotlib, Scikit-Learn",
			color: "6",
			percentage: "50",
		},
		{
			title: "Deep Learning",
			skillName: "CNN, DNN, RNN",
			color: "3",
			percentage: "50",
		},
		{
			title: "Design",
			skillName: "HTML, CSS, Bootstrap",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "80",
		},
		{
			title: "Tools",
			skillName: "WEKA, RStudio, Jupyter Notebook",
			color: "3",
			percentage: "80",
		},
		{
			title: "Editor",
			skillName: "VS Code, Google Colab",
			color: "6",
			percentage: "70",
		},
		{
			title: "OS Environment",
			skillName: "Windows, Linex",
			color: "5",
			percentage: "90",
		},
	],
	projects: {
		web: [
			{
				projectName: "Hospital Management System",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://programmingdiaries.herokuapp.com/",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Find Your Bank",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Resume Builder",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Pizza Ordering ChatBot",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "WhatsApp-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		// freelance: [
		// 	{
		// 		projectName: "SnylloAir.com",
		// 		image: "images/snylloair.png",
		// 		summary:
		// 			"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
		// 		preview: "https://www.snylloair.com/",
		// 		techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
		// 	},
		// 	{
		// 		projectName: "Delivery+",
		// 		image: "images/AM-Logo-.png",
		// 		summary:
		// 			"Android Application to display website in android devices.",
		// 		preview:
		// 			"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
		// 		techStack: ["Android", "JAVA", "Play Store"],
		// 	},
		// ],
	},
	experience: [
		{
			title: "Internship.",
			duration: "September 2021 - December 2021",
			subtitle: "Teaching Assistant",
			details: [
				"Internship offered by Department of Computer Science of American International University-Bangladesh, worked 12 hours in a week in a whole semester.",
				"Provide student counselling  Sessions.",
				"Provide  technical  support to students.",
				"Prepared  course  materials for undergrad students.",
			],
			tags: [
				"JavaScript",
				"PHP",
				"Xampp",
				"MySQL",
			],
			icon: "qrcode",
		},
		// {
		// 	title: "Novopay Solutions Pvt. Ltd.",
		// 	duration: "June 2020 - April 2022",
		// 	subtitle: "Software Engineer",
		// 	details: [
		// 		"Implemented Aadhaar Enabled Payment services such as Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money transfer; completed more than 20 story points in each sprint.",
		// 		"Integrated QR Code and reduced the effective time by 50 percent to load money into wallet, Clevertap events to track user actions, Freshdesk ticketing service and chat-bot services. Worked on user onboarding, approval, and finance interfaces.",
		// 		"Co-ordinated closely with the product team, backend team, android team, and QA team to deliver the product builds before deadlines.",
		// 	],
		// 	tags: [
		// 		"JavaScript",
		// 		"Angular",
		// 		"React",
		// 		"Bootstrap",
		// 		"Nodejs",
		// 		"Jenkins",
		// 	],
		// 	icon: "heartbeat",
		// },
		// {
		// 	title: "ThinkPedia LLP",
		// 	duration: "May 2019 - June 2019",
		// 	subtitle: "SDE Intern",
		// 	details: [
		// 		"Worked as a full stack developer to support tech team.",
		// 		"Developed a customer Web Application from scratch for social media management.",
		// 	],
		// 	tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
		// 	icon: "group",
		// },
	],
	education: [
		{
			title: "Bachelor of Science in Computer Science and Engineering",
			duration: "May 2018 - January 2022",
			subtitle: "American International University-Bangladesh (AIUB), Dhaka",
			details: [
				"Completed the course in with a CGPA of 3.7 (84%).",
				"Completed several course completing projects and thesis.",
				"Active Competitive Programmer with AIUB Programming Society.",
				"Active member of ESAB AIUB Unit Face.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Software Engineering",
				"Web Technologies",
				"Computer Architecture",
				"Computer Networks",
				"Network Security",
				"Compiler Designing",
				"Computer Vision",
				"Data Mining",
			],
			icon: "graduation-cap",
		},
		{
			title: "Higher Secondary",
			duration: "",
			subtitle: "Board of Intermediate and Secondary Education, Chattogram",
			details: [
				"Qualified for university entrence.",
				"Secured GPA 4 out of 5.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [				
				{
					text: "GitHub",
					link: "https://github.com/infinitemainul",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				// {
				// 	text: "Clone this page",
				// 	link: "https://github.com/mainulislammahi/mainulislammahi.github.io",
				// },
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/mainulislammahi/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/infinitemainul",
				},
				// {
				// 	text: "Buy me a coffee",
				// 	link: "https://www.buymeacoffee.com/r194dME8y",
				// },
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Mainul Islam Mahi.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
