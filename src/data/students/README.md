# Student Card Customization Guide

## How to Create Your Student Card

Each student can create their own card by following these simple steps:

### 1. Create Your File
Create a new file named `student-[YOUR_ID].js` (replace [YOUR_ID] with your student number)

### 2. Use This Template
Copy and paste this code into your file:

```javascript
// Student [ID] - [YOUR NAME]
// Edit this file to customize your card
// Only 3 things are needed: name, quote, and socialLinks

export const studentData = {
    id: [YOUR_ID], // Your student number (1-21)
    name: "Your Full Name",
    quote: "Your inspiring quote here",
    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        portfolio: "https://yourwebsite.com"
    }
};
```

### 3. What to Fill In

**Required Information:**
- **id**: Your student number (1-21)
- **name**: Your full name as you want it displayed
- **quote**: An inspiring quote or personal motto
- **socialLinks**: Your three main links
  - **github**: Your GitHub profile URL
  - **linkedin**: Your LinkedIn profile URL  
  - **portfolio**: Your personal website/portfolio URL

### 4. Your Photo
Make sure you have a photo named `student-[YOUR_ID].jpg` in the `/public/students/` folder.

### 5. Example
```javascript
export const studentData = {
    id: 5,
    name: "Jane Smith",
    quote: "Code is the language of the future",
    socialLinks: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        portfolio: "https://janesmith.dev"
    }
};
```

That's it! Your card will automatically appear on the Students page with:
- Your photo
- Your name  
- Your quote
- Three clickable social media icons

## Need Help?
If you need assistance, ask your instructor or check the existing student files for examples.
