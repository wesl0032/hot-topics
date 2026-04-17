// I used ClaudeAI to help me pinpoint and correct errors in my JS */

// Get references
const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html'; // home page default

// Create function that loads requested material
const loadContent = (urlFeed) => {
    container.innerHTML = '<p class="loading">Loading&hellip;</p>';
    
    // Run fetch(urlFeed).then().catch()
    fetch(urlFeed)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error - status: ${response.status}`);
            }
            return response.text();
        })
        .then((html) => {
            container.innerHTML = html;
        })
        .catch((error) => {
            container.innerHTML = `<p class="loading">Sorry, content could not load. (${error.message})</p>`;
        });
};

    // Call loadContent with Current Value of URL
    loadContent(url);

    // Create function that selects partial
    const selectContent = (event) => {
        // prevent default link tag action
        event.preventDefault();

    // Get value of href 
    const href = event.currentTarget.getAttribute('href');

    // Update active state on nav links 
    links.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Call function loadContent with the href
    // Value of clicked link 
    loadContent(href);
    } // close selectContent here

    // Register links for click event 
    links.forEach(link => link.addEventListener('click', selectContent));

