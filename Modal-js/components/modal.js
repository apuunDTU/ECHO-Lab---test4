// Function to open the event modal and display the image
function openEventModal(imagePath) {
    const modal = document.getElementById('eventModal');
    const image = document.getElementById('eventImage');
    image.src = imagePath;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close the event modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close event modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEventModal();
    }
});

// Function to open the card modal and display content
export function openModal(card) {
    const modal = document.getElementById('cardModal');
    const modalContent = modal.querySelector('.modal-content');
    const cardClone = card.cloneNode(true);
    
    // Clear previous content and append the cloned card
    modalContent.innerHTML = '';
    modalContent.appendChild(cardClone);
    
    // Create the 'Save as PDF' button dynamically
    const savePdfButton = document.createElement('button');
    savePdfButton.textContent = 'Save as PDF';
    savePdfButton.classList.add('save-pdf-button');  // Optional: Add a class for styling
    modalContent.appendChild(savePdfButton);
    
    // Add event listener to save PDF
    savePdfButton.addEventListener('click', function() {
        saveAsPDF(modalContent);
    });

    // Show the modal and prevent scrolling
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close the card modal
export function closeModal() {
    const modal = document.getElementById('cardModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Function to save modal content as a PDF using html2pdf.js
function saveAsPDF(content) {
    // Ensure html2pdf is loaded and called correctly
    if (typeof html2pdf === 'undefined') {
        console.error('html2pdf.js not loaded!');
        return;
    }

    // Get the dimensions of the modal content
    const contentWidth = content.offsetWidth;
    const contentHeight = content.offsetHeight;

    // Create an instance of the html2pdf library
    const pdfOptions = {
        filename: 'research_card.pdf',
        html2canvas: { 
            scale: 2, // Optional: improves image quality
            width: contentWidth, // Set width to the modal content's width
            height: contentHeight, // Set height to the modal content's height
            x: 0,
            y: 0,
        },
        jsPDF: { 
            unit: 'mm', 
            format: [contentWidth / 3.7795275591, contentHeight / 3.7795275591], // Convert from px to mm (approx 1px = 0.264583 mm)
            orientation: 'portrait' 
        },
    };

    // Use html2pdf.js to save the content as a PDF
    html2pdf()
        .from(content)  // Content to be converted to PDF
        .set(pdfOptions)  // Set the options (dimensions and quality)
        .save();  // Triggers the download of the PDF
}

// Add event listener for close button in the modal
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Close modal when clicking outside the content
document.getElementById('cardModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
