// Project data
const projects = [
    {
        company: "USAA",
        companyLogo: "https://cdn.brandfetch.io/id7nXFaoJg/w/718/h/718/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#12385C',
        role: "Software Developer",
        date: "Apr 2024 - Present",
        desc: "",
        descBullets: [
            "Utilized Kafka to facilitate real-time data streaming, improving system responsiveness and supporting event-driven architecture for asynchronous processing.",
            "Designed and optimized RESTful APIs with Spring MVC and Spring Boot, applying industry best practices for security, performance, and integration.",
            "Enhanced user interface performance by optimizing Angular components and reducing load times, leading to a better user experience and increased user engagement."
        ]
    },
    {
        company: "Publicis Sapient",
        companyLogo: "https://cdn.brandfetch.io/id1a_DBw-1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#FE414D',
        role: "Software Engineer",
        date: "Jun 2023 - Apr 2024",
        desc: "",
        descBullets: [
            "Implemented Hibernate ORM for database schema automation, improving data persistence and reducing manual effort.",
            "Designed and implemented a layered architecture using design patterns (Singleton, Factory, Strategy) to improve code readability and maintainability.",
            "Worked closely with product and design teams, translating business requirements into technical solutions and driving feature development."
        ]
    },
    {
        company: "Arvest Bank",
        companyLogo: "https://cdn.brandfetch.io/idGIe3oexM/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#00457C',
        role: "Software Engineer",
        date: "Jan 2021 - Dec 2022",
        desc: "",
        descBullets: [
            "Improved transaction processing performance using AWS RDS and EC2.",
            "Applied AWS CloudWatch for real-time monitoring and proactive issue resolution.",
            "Built secure RESTful APIs to support mobile banking features and real-time updates with SNS and Kafka."
        ]
    },
    {
        company: "OYO Rooms",
        companyLogo: "https://cdn.brandfetch.io/idSXt7tZEr/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#EE2A24',
        role: "Software Developer",
        date: "Dec 2019 - Jan 2021",
        desc: "",
        descBullets: [
            "Enhanced front-end UI/UX with Angular, improving the hotel manager’s operational efficiency.",
            "Built and maintained hotel management modules, including dynamic pricing and booking systems.",
            "Integrated secure OAuth 2.0 login and implemented continuous deployment with Docker and Jenkins."
        ]
    },
    {
        company: "Idea",
        companyLogo: "https://cdn.brandfetch.io/idN6iTSgKh/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#ED2740',
        role: "Junior Software Engineer",
        date: "Oct 2017 - Nov 2019",
        desc: "",
        descBullets: [
            "Developed REST APIs for mobile integrations and real-time subscription management.",
            "Utilized Redis for caching to improve response time and reduce database load.",
            "Assisted in CI/CD pipeline configuration using Jenkins and Maven."
        ]
    }
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
