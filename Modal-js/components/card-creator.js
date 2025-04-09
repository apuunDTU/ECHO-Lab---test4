import { openModal } from './modal.js';

// Function to create a lab note card
export function createLabNoteCard(noteData) {
    const card = document.createElement('div');
    card.className = 'research-card';
    card.dataset.id = noteData.id;
    
    // Create card header with image
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const img = document.createElement('img');
    img.src = noteData.image;
    img.alt = noteData.title;
    header.appendChild(img);
    
    // Add date
    const date = document.createElement('div');
    date.className = 'card-date';
    date.textContent = noteData.date;
    header.appendChild(date);
    
    card.appendChild(header);
    
    // Create card content
    const content = document.createElement('div');
    content.className = 'card-content';
    
    // Left column
    const leftColumn = document.createElement('div');
    leftColumn.className = 'card-left';
    
    // Add title with word count check
    const title = document.createElement('h2');
    title.className = 'project-title';
    title.textContent = noteData.title;
    
    // Count words and adjust font size if 6 or more words
    const wordCount = noteData.title.split(/\s+/).length;
    if (wordCount >= 5) {
        title.classList.add('long-title');
    }
    
    leftColumn.appendChild(title);
    
    // Add preview text
    const preview = document.createElement('div');
    preview.className = 'card-preview';
    preview.innerHTML = noteData.preview;
    leftColumn.appendChild(preview);
    
    // Right column
    const rightColumn = document.createElement('div');
    rightColumn.className = 'card-right';
    
    // Add research topics section
    const topicsSection = createSection(noteData.sectionTitles.topics, noteData.researchTopics, 'text');
    rightColumn.appendChild(topicsSection);
    
    // Add objectives section
    const objectivesSection = createSection('Objectives', [noteData.objectives], 'text');
    rightColumn.appendChild(objectivesSection);
    
    // Add methodology section
    const methodologySection = createSection('Methodology', noteData.methodology, 'list');
    rightColumn.appendChild(methodologySection);
    
    // Add lessons section
    const lessonsSection = createSection(noteData.sectionTitles.lessons, noteData.lessons, 'list');
    rightColumn.appendChild(lessonsSection);
    
    // Add collaborators section
    const collaboratorsSection = createSection(noteData.sectionTitles.collaborators, noteData.collaborators, 'list');
    rightColumn.appendChild(collaboratorsSection);
    
    content.appendChild(leftColumn);
    content.appendChild(rightColumn);
    card.appendChild(content);
    
    // Add links section
    const links = document.createElement('div');
    links.className = 'card-links';
    
    if (noteData.projectLink) {
        const projectLink = document.createElement('a');
        projectLink.href = noteData.projectLink;
        projectLink.textContent = noteData.projectLinkText;
        projectLink.target = '_blank';
        links.appendChild(projectLink);
    }
    
    if (noteData.publicationLink) {
        const publicationLink = document.createElement('a');
        publicationLink.href = noteData.publicationLink;
        publicationLink.textContent = noteData.publicationLinkText;
        publicationLink.target = '_blank';
        links.appendChild(publicationLink);
    }
    
    card.appendChild(links);
    
    // Add click event to open modal
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking on links
        if (!e.target.closest('a')) {
            openModal(card);
        }
    });
    
    return card;
}

// Helper function to create a section with title and content
function createSection(title, content, format = 'text') {
    const section = document.createElement('div');
    section.className = 'section';

    const titleElement = document.createElement('h3');
    titleElement.className = 'section-title';
    titleElement.textContent = title;

    const contentElement = document.createElement('div');
    contentElement.className = 'topic-content';

    if (format === 'list' && Array.isArray(content)) {
        const list = document.createElement('ul');
        list.className = 'lessons-list';
        content.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        contentElement.appendChild(list);
    } else {
        contentElement.innerHTML = content;
    }

    section.appendChild(titleElement);
    section.appendChild(contentElement);

    return section;
} 