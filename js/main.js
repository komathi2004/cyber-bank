document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar-menu ul li a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
            const pills = document.querySelectorAll(".pill-nav-item");
            const subsections = document.querySelectorAll(".subsection");

            pills.forEach((pill) => {
                pill.addEventListener("click", function () {
                    // Remove 'active' class from all pills and subsections
                    pills.forEach((p) => p.classList.remove("active"));
                    subsections.forEach((sub) => sub.classList.remove("active"));

                    // Add 'active' class to the clicked pill
                    this.classList.add("active");

                    // Get the corresponding subsection and activate it
                    const subsectionId = this.getAttribute("data-subsection");
                    document.getElementById(subsectionId).classList.add("active");
                });
            });
        });

document.addEventListener('DOMContentLoaded', function() {
            // Sidebar Toggle Functionality
            const sidebarToggle = document.getElementById('sidebar-toggle');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
            });
            
            // Navigation Menu Functionality
            const menuItems = document.querySelectorAll('.sidebar-menu > ul > li');
            
            menuItems.forEach(item => {
                // Handle section switching
                item.addEventListener('click', function(e) {
                    const sectionId = item.getAttribute('data-section');
                    if (sectionId) {
                        switchSection(sectionId);
                    }
                });
            });
            
            // Switch content sections
            function switchSection(sectionId) {
                // Hide all sections
                const allSections = document.querySelectorAll('.content-section');
                allSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show selected section
                const selectedSection = document.getElementById(sectionId);
                if (selectedSection) {
                    selectedSection.classList.add('active');
                    
                    // Activate first pill in the section by default
                    const firstPill = selectedSection.querySelector('.pill-nav-item');
                    if (firstPill) {
                        const pillItems = selectedSection.querySelectorAll('.pill-nav-item');
                        pillItems.forEach(pill => pill.classList.remove('active'));
                        firstPill.classList.add('active');
                        
                        const subsectionId = firstPill.getAttribute('data-subsection');
                        if (subsectionId) {
                            switchSubsection(selectedSection, subsectionId);
                        }
                    }
                }
                
                // Update active menu item
                menuItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                const activeMenuItem = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeMenuItem) {
                    activeMenuItem.classList.add('active');
                }
            }
            
            
            
            // Switch subsections within a section
            function switchSubsection(parentSection, subsectionId) {
                // Hide all subsections
                const subsections = parentSection.querySelectorAll('.subsection');
                subsections.forEach(sub => sub.classList.remove('active'));
                
                // Show selected subsection
                const selectedSubsection = parentSection.querySelector(`#${subsectionId}`);
                if (selectedSubsection) {
                    selectedSubsection.classList.add('active');
                }
            }
            
            // Quick Actions Button Handlers
            const actionButtons = document.querySelectorAll('.action-btn');
            
            actionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Get button text to determine action
                    const actionText = this.textContent.trim();
                    
                    if (actionText.includes('Add University')) {
                        alert('Navigate to Add University Form');
                        switchSection('universities');
                    } else if (actionText.includes('New Program')) {
                        alert('Navigate to Add Program Form');
                        switchSection('study-abroad');
                    } else if (actionText.includes('Create Article')) {
                        alert('Navigate to Article Editor');
                        switchSection('content');
                    } else if (actionText.includes('Upload Media')) {
                        alert('Navigate to Media Upload');
                        switchSection('content');
                    }
                });
            });
            
            // View Details Button Handler for University Cards
            const viewDetailsButtons = document.querySelectorAll('.view-details');
            
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const universityCard = this.closest('.university-card');
                    const universityName = universityCard.querySelector('.university-name').textContent;
                    
                    alert(`View details for ${universityName}`);
                });
            });
            
            // Edit and Delete Button Handlers for University Cards
            const editButtons = document.querySelectorAll('.btn-edit');
            const deleteButtons = document.querySelectorAll('.btn-delete');
            
            editButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const universityCard = this.closest('.university-card');
                    const universityName = universityCard.querySelector('.university-name').textContent;
                    
                    alert(`Edit ${universityName}`);
                });
            });
            
            deleteButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const universityCard = this.closest('.university-card');
                    const universityName = universityCard.querySelector('.university-name').textContent;
                    
                    if (confirm(`Are you sure you want to delete ${universityName}?`)) {
                        alert(`${universityName} has been deleted`);
                    }
                    
                });
            });
            
            // Search Functionality
            const searchInput = document.querySelector('.search-container input');
            const searchButton = document.querySelector('.search-container button');
            
            function performSearch() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                }
                
            }
            
            searchButton.addEventListener('click', performSearch);
            
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
            
            // Add necessary styles for subsections
            const styleEl = document.createElement('style');
            styleEl.textContent = `
                .subsection {
                    display: none;
                }
                .subsection.active {
                    display: block;
                }
            `;
            document.head.appendChild(styleEl);
            
            // Responsive Adjustments
            function handleResponsive() {
                if (window.innerWidth <= 992) {
                    sidebar.classList.add('collapsed');
                }
            }
            
            // Initial call
            handleResponsive();
            
            // Listen for window resize
            window.addEventListener('resize', handleResponsive);
        });

        

        document.addEventListener('DOMContentLoaded', function() {
            const overlay = document.getElementById('overlay');
            const closeButton = document.querySelector('.close-btn');
        
            // Event delegation: listen for clicks on the whole document
            document.addEventListener('click', function(event) {
                const myProfileBtn = event.target.closest('#my-profile-btn');
                
                if (myProfileBtn) {
                    console.log('"My Profile" button clicked');
                    overlay.style.display = 'flex';
                }
            });
        
            // Close popup when close button is clicked
            closeButton.addEventListener('click', function() {
                overlay.style.display = 'none';
            });
        
            // Close popup when clicking outside of it
            overlay.addEventListener('click', function(event) {
                if (event.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        });
        