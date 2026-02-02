// Dummy Job Data (Real world eke meka Backend eken enne)
const jobsData = [
    { id: 1, title: "Construction Supervisor", company: "BuildCorp", location: "Dubai", salary: "$3,500/mo", type: "Full Time", tags: ["Urgent", "Visa Sponsored"], icon: "fa-hard-hat" },
    { id: 2, title: "Registered Nurse", company: "NHS UK", location: "UK", salary: "£40,000/yr", type: "Full Time", tags: ["Medical", "Relocation"], icon: "fa-user-nurse" },
    { id: 3, title: "Heavy Vehicle Driver", company: "LogiTrans", location: "Qatar", salary: "$2,200/mo", type: "Contract", tags: ["Transport", "Food Provided"], icon: "fa-truck" },
    { id: 4, title: "Software Engineer", company: "TechSolutions", location: "Germany", salary: "€70,000/yr", type: "Full Time", tags: ["Remote Option", "English Speaking"], icon: "fa-laptop-code" },
    { id: 5, title: "Hospitality Manager", company: "Hilton", location: "Canada", salary: "$55,000/yr", type: "Full Time", tags: ["Hotel", "Experience Req"], icon: "fa-concierge-bell" },
    { id: 6, title: "Electrician", company: "PowerGrid", location: "Dubai", salary: "$2,800/mo", type: "Part Time", tags: ["Technical", "License Req"], icon: "fa-bolt" }
];

const jobContainer = document.getElementById('jobContainer');
const jobCount = document.getElementById('jobCount');
const searchInput = document.getElementById('searchInput');
const locationFilter = document.getElementById('locationFilter');
const resetBtn = document.getElementById('resetBtn');

// Function to render jobs
function renderJobs(jobs) {
    jobContainer.innerHTML = ""; // Clear existing
    
    if (jobs.length === 0) {
        jobContainer.innerHTML = `<div style="text-align:center; padding:20px; color:#666;">No jobs found matching your criteria.</div>`;
        jobCount.innerText = "0 Jobs Found";
        return;
    }

    jobCount.innerText = `Showing ${jobs.length} Jobs`;

    jobs.forEach((job, index) => {
        const jobHTML = `
            <div class="job-card-wide animate-card" style="animation-delay: ${index * 0.1}s">
                <div class="job-logo"><i class="fas ${job.icon}"></i></div>
                <div class="job-details">
                    <h3>${job.title}</h3>
                    <div class="job-meta">
                        <span><i class="fas fa-building"></i> ${job.company}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                        <span><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
                        <span><i class="fas fa-clock"></i> ${job.type}</span>
                    </div>
                    <div class="job-tags">
                        ${job.tags.map(tag => `<span class="tag-sm">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="job-actions">
                    <a href="#" class="btn-primary">Apply Now</a>
                </div>
            </div>
        `;
        jobContainer.innerHTML += jobHTML;
    });
}

// Filter Function
function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const locationValue = locationFilter.value;

    const filtered = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm);
        const matchesLocation = locationValue === "all" || job.location.includes(locationValue);
        
        return matchesSearch && matchesLocation;
    });

    renderJobs(filtered);
}

// Event Listeners for Real-time filtering
searchInput.addEventListener('input', filterJobs);
locationFilter.addEventListener('change', filterJobs);

// Reset Button
resetBtn.addEventListener('click', () => {
    searchInput.value = "";
    locationFilter.value = "all";
    renderJobs(jobsData);
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobsData);
    
    // Navbar Sticky logic (copied from home script)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });
});