import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getAllStudentData } from "../data/studentData.js";
import './students.css';

const Students = () => {
    const studentsData = getAllStudentData();
    
    return (
        <div className="students-bg">
            <div className="students-bg-image"></div>
            <Navbar />
            <div className="students-content">
                <main className="students-main">
                    <div>
                        <h1 className="students-title">Our Students</h1>
                        <p className="students-desc">Passionate learners and future innovators of Squad 87.</p>
                        <div className="students-grid">
                            {studentsData.map((studentData, index) => (
                                <StudentCard key={index} studentData={studentData} />
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Students;

// A simple student card that shows: Image, Name, Quote, and 3 Social Links
function StudentCard({ studentData }) {
    const { 
        id = 1, 
        name = "Unknown Student", 
        quote = "Learning and growing every day",
        socialLinks = {}
    } = studentData || {};
    
    const studentImageUrl = `/students/student-${id}.jpg`;
    
    return (
        <div className="student-card-group">
            <div className="student-card">
                {/* Base card content - visible when not hovered */}
                <div className="student-card-img-bg">
                    <img 
                        src={studentImageUrl}
                        alt={name}
                        className="student-card-img"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                    <div className="student-card-placeholder" style={{ display: 'none' }}>
                        <div>👤</div>
                    </div>
                </div>
                <div className="student-card-footer">
                    <p className="student-card-footer-text">{name}</p>
                </div>
                
                {/* Expanded content - visible on hover */}
                <div className="student-card-expanded">
                    {/* 1. Student Image/Avatar */}
                    <div className="student-card-avatar">
                        <div className="student-card-avatar-img">
                            <img 
                                src={studentImageUrl}
                                alt={name}
                                className="student-card-img"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="student-card-avatar-placeholder" style={{ display: 'none' }}>👤</div>
                        </div>
                    </div>
                    
                    {/* 2. Student Name */}
                    <div className="student-card-name">{name}</div>
                    
                    {/* 3. Student Quote */}
                    <div className="student-card-quote">"{quote}"</div>
                    
                    {/* 4. Three Social Links: GitHub, LinkedIn, Portfolio */}
                    <div className="student-card-socials">
                        {/* GitHub Link */}
                        <a 
                            href={socialLinks?.github || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="student-card-social"
                            title="GitHub Profile"
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        
                        {/* LinkedIn Link */}
                        <a 
                            href={socialLinks?.linkedin || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="student-card-social"
                            title="LinkedIn Profile"
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        
                        {/* Personal Portfolio Link */}
                        <a 
                            href={socialLinks?.portfolio || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="student-card-social"
                            title="Personal Portfolio"
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 2h8v8H6V6z" clipRule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
