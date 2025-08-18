# Student Card Customization Guide

Each student can customize their own card by editing their individual data file!

## How to Edit Your Card

### 1. Find Your File
Look for your file in `/src/data/students/student-X.js` where X is your student number:
- Student 1 → `student-1.js`
- Student 2 → `student-2.js` 
- Student 13 → `student-13.js`
- etc.

### 2. Create Your File (if it doesn't exist)
Copy this template and create your file:

```javascript
// Student X - Your Name
// Edit this file to customize your card

export const studentData = {
    id: X, // Your student number
    name: "Your Name",
    track: "Web Development", // or "Data Science", "Mobile Development", etc.
    level: "Beginner", // "Beginner", "Intermediate", "Advanced"
    skills: ["HTML", "CSS", "JavaScript"], // Your top 3 skills
    bio: "Write a short bio about yourself (50 chars max for best display)",
    projects: 5, // Number of projects you've completed
    joinDate: "January 2025",
    favoriteLanguage: "JavaScript",
    hobbies: ["Coding", "Gaming", "Music"], // Your hobbies
    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        portfolio: "https://yourportfolio.com"
    },
    quote: "Your inspiring quote here"
};
```

### 3. Customize Your Data
Edit these fields to personalize your card:

- **name**: Your full name
- **track**: Your learning track (Web Development, Data Science, etc.)
- **level**: Your current level (Beginner, Intermediate, Advanced)
- **skills**: Your top 3 technical skills (will show as tags)
- **bio**: A short description about yourself
- **projects**: Number of projects you've completed
- **hobbies**: Your interests outside of coding
- **socialLinks**: Your GitHub, LinkedIn, and portfolio URLs

### 4. Save Your File
Save the file as `/src/data/students/student-X.js` where X is your number.

### 5. Add Your Photo
Place your photo in `/public/students/student-X.jpg` (same number as your data file).

## Example Files
Check out these example files for reference:
- `/src/data/students/student-1.js` - Alex Johnson
- `/src/data/students/student-2.js` - B. Hariharan
- `/src/data/students/student-13.js` - Radhesh Pai

## Tips
- Keep your bio under 50 characters for best display
- Choose your top 3 skills - only 3 will show on the card
- Use a square photo (300x300px or 400x400px) for best results
- Save your photo as JPG for smaller file size

## Getting Help
If you need help creating your file, ask a mentor or copy one of the example files and modify it with your information!

Your card will automatically update on the website once you save your file! 🎉
