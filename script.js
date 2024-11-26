// Prompt Data
const prompts = [
    {
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
    }
];

// DOM Elements
const searchInput = document.getElementById('search-input');
const promptsContainer = document.getElementById('prompts-container');
const categoryChips = document.querySelectorAll('.chip');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPrompts(prompts);
    initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
    // Search input with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterPrompts, 150);
    });

    // Category chips
    categoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Add exit animation to currently visible cards
            document.querySelectorAll('.prompt-card:not(.filtered-out)').forEach(card => {
                card.classList.add('card-exit');
            });

            // Remove active class from all chips with animation
            categoryChips.forEach(c => {
                c.classList.remove('active');
                c.classList.remove('chip-selected');
            });

            // Add active class and animation to selected chip
            chip.classList.add('active');
            chip.classList.add('chip-selected');

            // Delay filtering to allow for exit animation
            setTimeout(() => {
                filterPrompts();
            }, 300);
        });
    });
}

// Filter Prompts
function filterPrompts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.chip.active').getAttribute('data-category');
    
    const filtered = prompts.filter(prompt => {
        const matchesSearch = prompt.title.toLowerCase().includes(searchTerm) ||
                            prompt.description.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderPrompts(filtered);
}

// Render Prompts with Animation
function renderPrompts(promptsToRender) {
    promptsContainer.innerHTML = promptsToRender.map((prompt, index) => `
        <div class="col s12 m6 l4">
            <div class="card prompt-card card-enter" 
                 data-category="${prompt.category}" 
                 style="--animation-order: ${index};">
                <div class="card-content">
                    <i class="material-icons category-icon">${prompt.icon}</i>
                    <span class="card-title">${prompt.title}</span>
                    <p>${prompt.description}</p>
                </div>
                <div class="card-action">
                    <a href="#" onclick="copyPrompt('${prompt.title}'); return false;" class="copy-button">
                        <i class="material-icons left">content_copy</i>Copy Template
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Remove enter animation class after animation completes
    setTimeout(() => {
        document.querySelectorAll('.card-enter').forEach(card => {
            card.classList.remove('card-enter');
        });
    }, 500);
}

// Copy Prompt Template with Animation
function copyPrompt(title) {
    const prompt = prompts.find(p => p.title === title);
    if (prompt) {
        navigator.clipboard.writeText(prompt.template)
            .then(() => {
                // Find the card element
                const card = document.querySelector(`.prompt-card .card-title:contains("${title}")`).closest('.prompt-card');
                
                // Add copy success animation
                card.classList.add('copy-success');
                
                // Show toast
                M.toast({
                    html: 'Template copied to clipboard!',
                    classes: 'rounded copy-toast'
                });
                
                // Remove animation class after it completes
                setTimeout(() => {
                    card.classList.remove('copy-success');
                }, 1000);
            })
            .catch(err => {
                M.toast({
                    html: 'Failed to copy template',
                    classes: 'rounded red copy-toast'
                });
            });
    }
}
