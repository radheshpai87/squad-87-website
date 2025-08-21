// Utility to load student data
// This will automatically import all student data files

// Import individual student data files
import { studentData as student1 } from './students/student-1.js';
import { studentData as student2 } from './students/student-2.js';
import { studentData as student13 } from './students/student-13.js';

// Default template for students who haven't created their data file yet
const createDefaultStudent = (id, name) => ({
    id,
    name,
    quote: "Every expert was once a beginner",
    socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        portfolio: "#"
    }
});

// List of all student names (same as before)
const studentNames = [
    "Alex Johnson",      // Student 1
    "B. Hariharan",      // Student 2
    "David Chen",        // Student 3
    "Sarah Williams",    // Student 4
    "Michael Brown",     // Student 5
    "Emma Davis",        // Student 6
    "James Wilson",      // Student 7
    "Olivia Martinez",   // Student 8
    "Daniel Garcia",     // Student 9
    "Sophia Anderson",   // Student 10
    "Ryan Taylor",       // Student 11
    "Isabella Thomas",   // Student 12
    "Radhesh Pai",       // Student 13
    "Ava Jackson",       // Student 14
    "Tyler White",       // Student 15
    "Mia Harris",        // Student 16
    "Brandon Clark",     // Student 17
    "Charlotte Lewis",   // Student 18
    "Justin Robinson",   // Student 19
    "Amelia Walker",     // Student 20
    "Zachary Hall",      // Student 21
];

// Create array of all student data
export const getAllStudentData = () => {
    const customData = {
        1: student1,
        2: student2,
        13: student13,
        // Add more as students create their files
    };

    return studentNames.map((name, index) => {
        const id = index + 1;
        return customData[id] || createDefaultStudent(id, name);
    });
};

export { studentNames };
