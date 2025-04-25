# Echo Lab Website

This is the digital archive showcase all projects done at ECHO Lab. Each project is featured as a LAB note and includes a picture and a brief description of the project. Notes are meant to be short and concise, you can include links to documents or publications that are relevant to it.


# What is the website structure and which folders do you upload the content?

```
Echo Lab Website/
├── Assets/                  # Static assets (images, logos)
├── Events/                  # Events data (managed by admin)
│   └── events.json          # List of upcoming events
├── Projects/                # LAB NOTES - NEW CONTENT GOES HERE 🗂📝
│   ├── project-list.json    # List of all projects - needs to be updated
│   └── *.js                 # Individual project files - Using template you can create a new project 
├── Modal-js/                # JavaScript modules (managed by admin)
│   ├── components/          # UI components
│   │   ├── card-creator.js  # creates the UI of the lab note
│   │   ├── events-handler.js 
│   │   └── modal.js
│   └── loader.js            # Loads the lab notes into the main HTML
├── Style-css/               # CSS styles of the website (managed by admin)
│   └── styles.css 
└── index.html               # Main HTML file (managed by admin)
```


# How to add a lab note? 📝

This is the main way to add content to the website. Follow these simple steps:

### 1. Create a New Project File
   - Go to the `Projects` folder
   - Create a new file named after your project (use simple words with hyphens, like `my-new-project.js`)
   - Copy and paste this text template into your new file:

   ```javascript
   //Project tile
   const noteData = {
     title: "YOUR PROJECT TITLE",
     date: "DD.MM.YYYY", // Use this date format
     image: "Assets/your-image.png", // Put your image in the Assets folder
     preview: "A brief description of your project...",
     researchTopics: [
       "Topic 1",
       "Topic 2",
       "Topic 3"
     ],
     objectives: "What you want to achieve with this project",
     methodology: "How you plan to do it or how you did it",
     lessons: [
       "What you learned 1",
       "What you learned 2",
       "What you learned 3"
     ],
     collaborators: [
       "Person 1",
       "Person 2",
       "Person 3"
     ],
     projectLink: "https://your-project-link.com",
     projectLinkText: "View Project",
     publicationLink: "https://your-publication-link.com",
     publicationLinkText: "Read Publication",
   
     sectionTitles: {
       topics: "Research Areas",
       lessons: "Key Learnings",
       collaborators: "Team Members"
     }
   };
   ```

REMEMBER: You can also download one of the current files and edit it locally in your computer with Text Edit and upload it to the folder. Just remember to change the name!

### 2. Style the Text in the Card

You can control how the text appears in each section:

*For Bullet points: Use an array*

   ```javascript
   lessons: [
  "What you learned 1",
  "What you learned 2"
]
  ```
   
*For Paragraphs: Use a string with <p> tags*

   ```javascript
objectives: "<p>This is a paragraph of text.</p>" "<p>This is another piece of text.</p>" 
  ```

*For Single-line text: Use a plain string*

   ```javascript   
title: "My Project Title"
 ```

*Optional: Change Section Titles*

If you'd like to customize the section headings on your card, you can edit this part:

   ```javascript
  sectionTitles: {
    topics: "Research Areas",
    lessons: "Key Learnings",
    collaborators: "Team Members"
  }
} 
 ```

### 3. **Add Your Project Image**
   - Put your project image in the `Assets` folder. You can go to the folder assets and click upload new.
   - Make sure to use the correct image path in your project file

### 4. **Update the Project List**
   - Open `Projects/project-list.json`
   - Add your project name (without the .js) to the list
   - Example: `"projects": ["existing-project-1", "existing-project-2", "my-new-project"]`
   - The order of the list will determine how the lab notes apear in the main website.



## Adding a New Event (Admin Only)

To add a new event to the website:

1. Open `Events/events.json`
2. Add your event information following this simple format and upload a picture in the image folder and paste the name where it says "image":
   ```json
   {
     "id": 3,
     "date": "DD.MM",
     "title": "Your Event Title",
     "image": "Assets/your-event-image.png"
   }

   ```

## ✅ Final Checklist for uploading projects:

 - Create a new project file in the Projects/ folder?
 - Use a clear and simple filename (like my-new-project.js)?
 - Fill in all the fields in the noteData object (title, date, image, etc.)?
 - Upload your image to the Assets/ folder?
 - Use the correct path to the image in your project file (Assets/your-image.png)?
 - Add your project name (without .js) to the project-list.json file?

If you have any problems try asking Johan, Sarah or Ainoa. 

That's it!
Your LAB note should now be live on the Echo Lab website :)
