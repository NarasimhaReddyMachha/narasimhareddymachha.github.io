// Project data
const projects = [
    {
        company: "Creatrs Touch",
        color: '#12385C',
        role: "Junior Web Developer",
        date: "Aug 2022 - June 2023",
        desc: "",
        descBullets: [
            "Designed and managed a MySQL database schema, written and optimized SQL queries for data retrieval, repoting and basic CRUD operations. Created automated data imgestion pipelines with python scripts to import and clean CSV files from clients which led to reduced manual data prep time by 75%.",
            "Built interactive dashboards using Plotly Dash, helping clients to explore sales and user metrics through simple interfaces. Provided level 1 support for data pipelines issues with 99% uptime.",
            "Deployed and maintained applications on Heroku using Git and supported post deployment assistance, log checking using Heroku  dashboard and python to solve any issues quickly.",
            "Integrated NLTK based sentiment classifier into the client dashboard to auto tag customer feedback which provides immediate insights to the marketing teams."
        ]
    },
    {
        company: "APSSDC",
        color: '#FE414D',
        role: "Embedded Systems Intern",
        date: "Jan 2022 - May 2022",
        desc: "",
        descBullets: [
            "Developed and evaluated embedded C firmware for 8051-based microcontrollers using the Keil uVision (C51), implementing sensor data acquisition and control logic for Arduino-style prototypes.",
            "Circuit schematics were designed, simulated, and debugged in Proteus to guarantee precise timing and dependable sensor-driven system functioning.",
            "Worked on a Smart Car Parking project with HC-SR04 ultrasonic sensors on an Arduino, optimizing calibration to achieve 95% detection accuracy and built obstacle detection algorithms, performed iterative firmware debugging and optimized sensor calibrations for precise vehicle detection.",
            "Constructed detailed technical documentation, such as test results, code annotations, and system architectural diagrams, which improved team knowledge transfer and simplified further development."
        ]
    },
    {
        company: "MIC College of Technology",
        color: '#00457C',
        role: "Assistant",
        date: "Aug 2019 - May 2021",
        desc: "",
        descBullets: [
            "Coordinated and managed a team of 6 students in designing and deploying AI enhanced electrical monitoring systems for three campus buildings, integrated voltage sensors and developed Random Forest, SVM modelsachieving 90% fault detection accuracy which improved the system uptime by 20%",
            "Designed and simulated power distribution and control circuits in MATLAB, developed end-to-end ML data pipelines in Python to preprocess and label sensor datasets which reduced model training by 30%",
            "Responsible for project management combining AI and electronics research, monitored component budgets and inventory for the experiments conducted during research and implemented process optimizations that resulted in a 15% reduction in setup time and a 10% reduction in material waste."
        ]
    },
    
    
];const companyButtons = document.querySelectorAll('.company-button');
const projectList = document.getElementById('project-list');

// Function to render selected company job experience
function renderProject(index) {
    const project = projects[index];
    projectList.innerHTML = ''; // Clear existing content

    // Create project details container
    const projectDiv = document.createElement('div');
    projectDiv.style.padding = '20px';
    projectDiv.style.backgroundColor = '#f9f9f9';
    projectDiv.style.borderLeft = `10px solid ${project.color}`;
    projectDiv.style.borderRadius = '5px';

    // Add company logo and details
    const companyLogo = document.createElement('img');
    companyLogo.src = project.companyLogo;
    companyLogo.alt = project.company;
    companyLogo.style.width = '50px';
    companyLogo.style.height = '50px';
    projectDiv.appendChild(companyLogo);

    const companyName = document.createElement('h3');
    companyName.innerText = project.company;
    projectDiv.appendChild(companyName);

    const role = document.createElement('p');
    role.innerText = `${project.role} | ${project.date}`;
    projectDiv.appendChild(role);

    const description = document.createElement('p');
    description.innerText = project.desc;
    projectDiv.appendChild(description);

    // List the description bullets
    const descList = document.createElement('ul');
    descList.style.listStyleType = 'disc';  // Add bullet points to the list
    descList.style.marginLeft = '20px';  // Add some left margin for better indentation

    project.descBullets.forEach(bullet => {
        const listItem = document.createElement('li');
        listItem.innerText = bullet;
        descList.appendChild(listItem);
    });

    projectDiv.appendChild(descList);

    // Append the project div to the project list
    projectList.appendChild(projectDiv);
}

// Handle company button clicks
companyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove the selected class from all buttons
        companyButtons.forEach(btn => {
            btn.classList.remove('selected');
            // Reset the background color of the highlight
            btn.style.setProperty('--highlight-color', 'transparent');
        });

        // Add the selected class to the clicked button
        button.classList.add('selected');

        // Set the company color dynamically
        const companyColor = projects[index].color;
        button.style.setProperty('--highlight-color', companyColor); // Update the highlighter's color

        // Render the job details for the clicked company
        renderProject(index);
    });
});

// Initial render for the first company
renderProject(0);
companyButtons[0].classList.add('selected'); // Mark first company as selected by default
companyButtons[0].style.setProperty('--highlight-color', projects[0].color); // Set the first company color
