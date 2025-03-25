// Prompt Library - Enhanced Script

// Prompt Data
const prompts = [
    {
        id: 'email-drafting',
        title: 'Email Drafting',
        category: 'communication',
        icon: 'email',
        description: 'Professional email templates for local government communication.',
        template: `You are a professional local government communicator writing to [specific audience, e.g., local business owners].
Key Characteristics:
• Use clear and concise language.
• Maintain a professional yet approachable tone.
• Focus on community impact.
• Avoid council-specific identifiers and confidential information.

Task: Draft an email about [specific topic] that:
1. Opens with a clear purpose.
2. Provides key information in 2-3 paragraphs.
3. Ends with a clear call to action.
4. Uses plain English (avoid jargon).

Length: Approximately [desired word count] words.
Note: Ensure compliance with local government communication policies.`
    },
    {
        id: 'meeting-agenda',
        title: 'Meeting Agenda Creation',
        category: 'communication',
        icon: 'event_note',
        description: 'Create structured 60-minute meeting agendas for various purposes.',
        template: `You are an experienced meeting facilitator.
Task: Create a 60-minute meeting agenda template for [type of meeting, e.g., community planning session] that:
• Includes standard meeting components (e.g., introductions, main topics, closing remarks).
• Allocates appropriate time blocks for each section.
• Incorporates engagement points such as Q&A sessions or interactive discussions.
• Includes space for action items and notes.

Format: Present the agenda as a clear, structured outline with time allocations.`
    },
    {
        id: 'policy-analysis',
        title: 'Policy Analysis',
        category: 'document',
        icon: 'policy',
        description: 'Analyze local government documents for key objectives and impacts.',
        template: `You are a policy analyst reviewing local government documents.
Task: Analyze the following [document type, e.g., zoning policy draft] for:
• Key objectives and requirements.
• Main stakeholder impacts.
• Potential implementation considerations.
• Areas requiring clarification.

Format: Present the analysis in a structured format with clear headings.
Note: Handle all information confidentially. This is an initial analysis; a final review requires human expertise.`
    },
    {
        id: 'report-summary',
        title: 'Report Summarization',
        category: 'document',
        icon: 'summarize',
        description: 'Create concise summaries of local government reports.',
        template: `You are a local government research officer.
Task: Summarize the provided document [document title or type] with:
• A one-paragraph executive summary (approximately [number of sentences] sentences).
• 3-5 key findings or recommendations.
• Important data points or statistics.
• Next steps or implications.

Format: Use clear headings and bullet points where appropriate.
Remember: Maintain confidentiality and verify the summary against the source material.`
    },
    {
        id: 'risk-assessment',
        title: 'Risk Assessment Template',
        category: 'project',
        icon: 'warning',
        description: 'Create comprehensive risk assessment frameworks for projects.',
        template: `You are a project risk management specialist.
Task: Create a risk assessment framework for [project type, e.g., infrastructure development] that:
• Identifies potential risks in key categories (e.g., financial, operational, environmental).
• Suggests mitigation strategies for each risk.
• Provides a simple rating system for likelihood and impact (e.g., High, Medium, Low).
• Includes recommendations for ongoing risk monitoring.

Format: Present as a structured template suitable for project planning, including example entries.
Note: All risk assessments require human review and validation.`
    },
    {
        id: 'community-engagement',
        title: 'Community Engagement',
        category: 'project',
        icon: 'groups',
        description: 'Develop strategies for engaging diverse community groups.',
        template: `You are a community engagement specialist.
Task: Develop engagement strategies for [project type, e.g., new park development] that:
• Consider the needs of a diverse community, including underrepresented groups.
• Suggest multiple engagement methods (e.g., public forums, surveys, online platforms).
• Include accessibility considerations for all community members.
• Provide success metrics (e.g., participation rates, feedback quality).

Format: Present actionable recommendations with clear implementation steps and timelines.`
    },
    {
        id: 'data-interpretation',
        title: 'Data Interpretation',
        category: 'research',
        icon: 'analytics',
        description: 'Analyze and interpret local government data sets.',
        template: `You are a data analyst in local government.
Task: Analyze the provided [data type, e.g., traffic flow data] to:
• Identify key trends.
• Highlight significant patterns.
• Suggest areas for further investigation.
• Note any data limitations or quality issues.

Format: Present your findings in a clear, non-technical report suitable for stakeholders, using charts or graphs if helpful.
Remember: Maintain data confidentiality. All analysis requires validation with subject matter experts.`
    },
    {
        id: 'best-practices',
        title: 'Best Practice Research',
        category: 'research',
        icon: 'library_books',
        description: 'Research and compile best practices for local government initiatives.',
        template: `You are a local government researcher.
Task: Research best practices for [topic, e.g., waste management recycling programs] focusing on:
• Current industry standards up to [specify date if necessary].
• Relevant case studies from similar municipalities.
• Implementation considerations, including potential challenges.
• Success metrics used to measure effectiveness.

Format: Provide a structured report with clear citations for all sources.
Note: Verify all examples and case studies independently for the most recent information.`
    },
    {
        id: 'newsletter-content',
        title: 'Newsletter Content',
        category: 'content',
        icon: 'newspaper',
        description: 'Create engaging newsletter content for community updates.',
        template: `You are a local government communications officer.
Task: Create newsletter content about [topic, e.g., upcoming community events] for [audience, e.g., local residents] that:
• Uses clear, engaging language.
• Focuses on community benefits and involvement opportunities.
• Includes key action points and calls to action (e.g., event registration).
• Maintains an appropriate and consistent tone with previous communications.

Length: Approximately [specified word count] words.
Note: Remove any placeholder text and verify all information for accuracy before publication.`
    },
    {
        id: 'faq-development',
        title: 'FAQ Development',
        category: 'content',
        icon: 'help_outline',
        description: 'Create comprehensive FAQ sets for community programs.',
        template: `You are a community information officer.
Task: Create an FAQ set for [topic, e.g., new recycling program] that:
• Anticipates common questions from the community.
• Provides clear, concise answers.
• Uses accessible language suitable for a general audience.
• Includes relevant contact points for additional information.

Format: Present as Q&A pairs with clear headings, organized into categories if applicable.
Note: Verify all answers for accuracy and update them regularly to reflect any changes.`
    },
    // Add new prompt
    {
        id: 'public-speech',
        title: 'Public Speech Writing',
        category: 'communication',
        icon: 'record_voice_over',
        description: 'Create engaging speeches for public officials addressing community events.',
        template: `You are a speechwriter for a local government official preparing to address [event type, e.g., town hall meeting].
Task: Write a speech that:
• Opens with a compelling greeting that acknowledges the audience and occasion.
• Presents [main topic/announcement] in clear, accessible language.
• Includes 2-3 key talking points with supporting evidence or examples.
• Addresses potential community concerns proactively.
• Concludes with a clear call to action and forward-looking statement.

Length: Approximately [time length, e.g., 5-7] minutes when spoken (approximately [word count, e.g., 650-850] words).
Tone: [formal/conversational/inspirational] while remaining authentic to the speaker's voice.
Note: Avoid political rhetoric and focus on community-centered, inclusive language.`
    },
    // Add new prompt
    {
        id: 'feedback-survey',
        title: 'Feedback Survey Design',
        category: 'research',
        icon: 'rate_review',
        description: 'Create effective surveys to gather community feedback on programs and services.',
        template: `You are a community engagement specialist designing a feedback survey for [program/service name].
Task: Create a survey that:
• Begins with a clear introduction explaining the purpose and how feedback will be used.
• Includes a mix of question types (multiple choice, rating scales, open-ended).
• Focuses on gathering actionable insights regarding [specific aspects to evaluate].
• Can be completed in under [time limit, e.g., 5] minutes.
• Ends with a thank you message and clear next steps.

Format: Provide the complete survey with question sequencing and response options.
Remember: Questions should be neutral, avoid leading language, and be accessible to all community members.`
    }
];

// Global state
let state = {
    favorites: JSON.parse(localStorage.getItem('favoritePrompts') || '[]'),
    currentFilters: {
        searchTerm: '',
        category: 'all'
    }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Materialize components
    initializeMaterialize();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Show welcome dialog for first-time visitors
    if (!localStorage.getItem('hasVisitedBefore')) {
        showWelcomeDialog();
        localStorage.setItem('hasVisitedBefore', 'true');
    }
    
    // Render prompts
    renderPrompts(prompts);
    
    // Initialize event listeners
    initializeEventListeners();
});

// Initialize Materialize Components
function initializeMaterialize() {
    // Initialize modals
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    
    // Initialize selects
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);
}

// Show Welcome Dialog
function showWelcomeDialog() {
    const modalElement = document.getElementById('welcome-modal');
    const modalInstance = M.Modal.getInstance(modalElement) || M.Modal.init(modalElement);
    modalInstance.open();
    
    // Handle "Don't show again" checkbox
    document.getElementById('dontShowAgain').addEventListener('change', (e) => {
        if (e.target.checked) {
            localStorage.setItem('hasVisitedBefore', 'true');
        }
    });
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Search input with debounce
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            state.currentFilters.searchTerm = searchInput.value.toLowerCase();
            filterPrompts();
        }, 150);
    });
    
    // Category chips
    const categoryChips = document.querySelectorAll('.chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            categoryChips.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            state.currentFilters.category = chip.getAttribute('data-category');
            filterPrompts();
        });
        
        // Keyboard navigation for chips
        chip.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                chip.click();
            }
        });
    });
    
    // Help button
    document.querySelector('.help-button').addEventListener('click', showWelcomeDialog);
    
    // Reset filters button
    document.getElementById('reset-filters').addEventListener('click', () => {
        searchInput.value = '';
        state.currentFilters.searchTerm = '';
        
        categoryChips.forEach(c => {
            c.classList.remove('active');
            c.setAttribute('aria-pressed', 'false');
        });
        
        const allChip = document.querySelector('.chip[data-category="all"]');
        allChip.classList.add('active');
        allChip.setAttribute('aria-pressed', 'true');
        state.currentFilters.category = 'all';
        
        filterPrompts();
    });
    
    // Suggest new prompt button
    document.getElementById('suggest-prompt-btn').addEventListener('click', () => {
        const modalElement = document.getElementById('suggest-prompt-modal');
        const modalInstance = M.Modal.getInstance(modalElement) || M.Modal.init(modalElement);
        modalInstance.open();
    });
    
    // Submit prompt form
    document.getElementById('submit-prompt-btn').addEventListener('click', () => {
        const form = document.getElementById('suggest-form');
        
        // Check form validity
        if (form.checkValidity()) {
            // Process form submission
            const title = document.getElementById('prompt-title').value;
            const description = document.getElementById('prompt-description').value;
            const category = document.getElementById('prompt-category').value;
            const template = document.getElementById('prompt-template').value;
            
            // In a real app, you'd submit this to a backend
            // Here we'll show a success message
            M.toast({
                html: '<i class="material-icons left">check_circle</i>Prompt submitted successfully!',
                classes: 'success',
                displayLength: 3000
            });
            
            // Close modal and reset form
            const modalInstance = M.Modal.getInstance(document.getElementById('suggest-prompt-modal'));
            modalInstance.close();
            form.reset();
            
            // Reset select dropdown state
            setTimeout(() => {
                M.FormSelect.init(document.getElementById('prompt-category'));
            }, 100);
        } else {
            // Form is invalid, trigger validation UI
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.reportValidity();
            });
        }
    });
}

// Filter Prompts
function filterPrompts() {
    const { searchTerm, category } = state.currentFilters;
    
    const filtered = prompts.filter(prompt => {
        const matchesSearch = 
            prompt.title.toLowerCase().includes(searchTerm) ||
            prompt.description.toLowerCase().includes(searchTerm) ||
            prompt.template.toLowerCase().includes(searchTerm);
            
        const matchesCategory = category === 'all' || prompt.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    renderPrompts(filtered);
    
    // Update results counter
    const resultsCounter = document.getElementById('results-counter');
    resultsCounter.textContent = `Showing ${filtered.length} of ${prompts.length} prompts`;
    
    // Toggle empty state
    const emptyState = document.getElementById('empty-state');
    emptyState.style.display = filtered.length === 0 ? 'block' : 'none';
}

// Render Prompts
function renderPrompts(promptsToRender) {
    const promptsContainer = document.getElementById('prompts-container');
    
    promptsContainer.innerHTML = promptsToRender.map((prompt, index) => {
        const isFavorite = state.favorites.includes(prompt.id);
        const favoriteClass = isFavorite ? 'active' : '';
        const favoriteIcon = isFavorite ? 'star' : 'star_border';
        
        return `
            <div class="col s12 m6 l4">
                <div class="card prompt-card" data-category="${prompt.category}" data-id="${prompt.id}" style="--card-index: ${index}">
                    <div class="card-content">
                        <span class="card-title">
                            <i class="material-icons category-icon">${prompt.icon}</i>
                            ${prompt.title}
                        </span>
                        <div class="card-category">${getCategoryLabel(prompt.category)}</div>
                        <p class="card-description">${prompt.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="#!" class="card-button view-prompt-btn" data-id="${prompt.id}">
                            <i class="material-icons left">visibility</i>View Template
                        </a>
                        <a href="#!" class="favorite-button ${favoriteClass}" data-id="${prompt.id}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                            <i class="material-icons">${favoriteIcon}</i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners to the newly created elements
    addCardEventListeners();
}

// Add Card Event Listeners
function addCardEventListeners() {
    // View prompt buttons
    document.querySelectorAll('.view-prompt-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const promptId = btn.getAttribute('data-id');
            openPromptDetail(promptId);
        });
    });
    
    // Copy buttons
    document.querySelectorAll('.copy-prompt-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const promptId = btn.getAttribute('data-id');
            copyPrompt(promptId);
        });
    });
    
    // Favorite buttons
    document.querySelectorAll('.favorite-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const promptId = btn.getAttribute('data-id');
            toggleFavorite(promptId);
        });
    });
}

// Open Prompt Detail
function openPromptDetail(promptId) {
    const prompt = prompts.find(p => p.id === promptId);
    if (!prompt) return;
    
    // Update modal content
    document.getElementById('modal-icon').textContent = prompt.icon;
    document.getElementById('modal-title').textContent = prompt.title;
    document.getElementById('modal-category').textContent = getCategoryLabel(prompt.category);
    document.getElementById('modal-description').textContent = prompt.description;
    document.getElementById('modal-template').textContent = prompt.template;
    
    // Update favorite button
    const isFavorite = state.favorites.includes(promptId);
    const favoriteBtn = document.getElementById('modal-favorite-btn');
    favoriteBtn.innerHTML = `
        <i class="material-icons left">${isFavorite ? 'star' : 'star_border'}</i>
        ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    `;
    favoriteBtn.onclick = () => toggleFavorite(promptId);
    
    // Update copy button
    const copyBtn = document.getElementById('modal-copy-btn');
    copyBtn.onclick = () => copyPrompt(promptId);
    
    // Open modal
    const modalElement = document.getElementById('prompt-detail-modal');
    const modalInstance = M.Modal.getInstance(modalElement) || M.Modal.init(modalElement);
    modalInstance.open();
}

// Toggle Favorite
function toggleFavorite(promptId) {
    const index = state.favorites.indexOf(promptId);
    
    if (index === -1) {
        // Add to favorites
        state.favorites.push(promptId);
        M.toast({
            html: '<i class="material-icons left">star</i>Added to favorites!',
            classes: 'success',
            displayLength: 2000
        });
    } else {
        // Remove from favorites
        state.favorites.splice(index, 1);
        M.toast({
            html: '<i class="material-icons left">star_border</i>Removed from favorites',
            classes: '',
            displayLength: 2000
        });
    }
    
    // Save to localStorage
    localStorage.setItem('favoritePrompts', JSON.stringify(state.favorites));
    
    // Update UI
    const favoriteButtons = document.querySelectorAll(`.favorite-button[data-id="${promptId}"]`);
    favoriteButtons.forEach(btn => {
        const isFavorite = state.favorites.includes(promptId);
        btn.classList.toggle('active', isFavorite);
        btn.querySelector('i').textContent = isFavorite ? 'star' : 'star_border';
        btn.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
    });
    
    // Update modal if open
    const modalFavoriteBtn = document.getElementById('modal-favorite-btn');
    if (modalFavoriteBtn) {
        const isFavorite = state.favorites.includes(promptId);
        modalFavoriteBtn.innerHTML = `
            <i class="material-icons left">${isFavorite ? 'star' : 'star_border'}</i>
            ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        `;
    }
}

// Copy Prompt Template
function copyPrompt(promptId) {
    const prompt = prompts.find(p => p.id === promptId);
    if (!prompt) return;
    
    navigator.clipboard.writeText(prompt.template)
        .then(() => {
            M.toast({
                html: '<i class="material-icons left">check_circle</i>Template copied to clipboard!',
                classes: 'success copied-toast',
                displayLength: 2000
            });
        })
        .catch(err => {
            M.toast({
                html: '<i class="material-icons left">error</i>Failed to copy template',
                classes: 'red',
                displayLength: 3000
            });
            console.error('Copy failed:', err);
        });
}

// Helper Functions
function getCategoryLabel(category) {
    const categories = {
        'communication': 'Communication',
        'document': 'Document Management',
        'project': 'Project Planning',
        'research': 'Research & Analysis',
        'content': 'Content Development'
    };
    
    return categories[category] || category;
}
