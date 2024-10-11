// Sample event data
const events = [
    {
        title: "Summer Music Festival",
        description: "Join us for a fun-filled day of live music and great vibes.",
        date: "2024-08-15",
        category: "Music"
    },
    {
        title: "Tech Innovators Meetup",
        description: "A meetup for tech enthusiasts and innovators.",
        date: "2024-09-10",
        category: "Tech"
    },
    {
        title: "Photography Workshop",
        description: "Learn the basics of photography from a pro!",
        date: "2024-08-22",
        category: "Workshops"
    },
    {
        title: "Local Football Tournament",
        description: "Get ready for an exciting local football tournament.",
        date: "2024-10-05",
        category: "Sports"
    },
    {
        title: "Coding Bootcamp",
        description: "A 3-day intensive coding bootcamp for beginners.",
        date: "2024-08-25",
        category: "Tech"
    },
    {
        title: "Jazz Night",
        description: "Experience the best jazz music in town!",
        date: "2024-11-02",
        category: "Music"
    },
    {
        title: "Startup Weekend",
        description: "Pitch your startup idea and collaborate with others!",
        date: "2024-09-30",
        category: "Tech"
    },
];

// Function to display events
function displayEvents(eventData) {
    const eventList = document.getElementById('events');
    eventList.innerHTML = '';  // Clear previous events

    eventData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        
        eventCard.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <p class="event-date">Date: ${new Date(event.date).toDateString()}</p>
            <p><strong>Category:</strong> ${event.category}</p>
        `;

        eventList.appendChild(eventCard);
    });
}

// Initial display of events (all events)
displayEvents(events);

// Filter events by category
const categoryFilter = document.getElementById('category-filter');

categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;

    if (selectedCategory === 'All') {
        displayEvents(events);  // Show all events
    } else {
        const filteredEvents = events.filter(event => event.category === selectedCategory);
        displayEvents(filteredEvents);
    }
});

