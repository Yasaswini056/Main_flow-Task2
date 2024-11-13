// Array of courses
const courses = [
    { title: "Web Development", imgSrc: "https://habrastorage.org/getpro/habr/upload_files/704/b82/949/704b82949bd620fbb82f7df29409ad72.jpeg", description: "Learn how to build websites from scratch using HTML, CSS, and JavaScript.", duration: "6 weeks" },
    { title: "Data Science", imgSrc: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0-1024x580.jpg", description: "Explore the world of data and how to work with large datasets using Python.", duration: "8 weeks" },
    { title: "Machine Learning", imgSrc: "https://letstalkscience.ca/sites/default/files/2021-01/Robot_thinking.jpg", description: "Learn the basics of machine learning algorithms and how to apply them.", duration: "10 weeks" },
    { title: "Python Programming", imgSrc: "https://contentstatic.techgig.com/thumb/msid-107923788,width-800,resizemode-4/Python-programming-Must-have-tools-for-ML-and-Data-Science.jpg?9098", description: "Learn the fundamentals of Python programming and build real-world applications.", duration: "12 weeks" },
    { title: "Game Development", imgSrc: "https://www.strivemindz.com/images/offerings/mobile/game-development.jpg", description: "Create your own games using Unity and C#.", duration: "10 weeks" }
];

let currentCourseIndex = 0;

// Open Course Modal
function openCourseDetails(index) {
    currentCourseIndex = index;
    const course = courses[index];
    
    // Construct the course details HTML
    document.getElementById("courseDetailsContent").innerHTML = `
        <img id="courseImage" src="${course.imgSrc}" alt="${course.title}">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
    `;
    
    // Set the image size
    const courseImage = document.getElementById("courseImage");
    courseImage.style.width = "100%";        // Set width to 100% of the modal container
    courseImage.style.maxWidth = "500px";    // Set max width to 500px (can be adjusted)
    courseImage.style.height = "300px";       // Maintain aspect ratio of the image

    // Display the modal
    document.getElementById("courseModal").style.display = "flex";
}

// Close Course Modal
function closeModal() {
    document.getElementById("courseModal").style.display = "none";
}

// Navigate Between Courses
function navigateCourse(direction) {
    currentCourseIndex += direction;
    if (currentCourseIndex < 0) currentCourseIndex = courses.length - 1;
    if (currentCourseIndex >= courses.length) currentCourseIndex = 0;
    openCourseDetails(currentCourseIndex);
}

// Contact Form Validation
function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const queryType = document.getElementById("queryType").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (!name || !email || !queryType || !message) {
        alert("All fields must be filled out.");
        return false;
    }

    // Check for valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Thank you for reaching out! Your message has been sent successfully.");
    document.getElementById("contactForm").reset();

    return true;
}
