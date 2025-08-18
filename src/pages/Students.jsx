import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getAllStudentData } from "../data/studentData.js";

const Students = () => {
    const studentsData = getAllStudentData();
    
    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: 'url(/squad_87_1.jpg)',
                    minHeight: '100vh',
                    height: '100%'
                }}
            ></div>
            <Navbar />
            <div className="relative z-10 bg-black/50 min-h-screen">
                <main className="pt-16 pb-8 px-2 sm:px-4">
                    <div className="max-w-full mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
                            style={{
                                fontFamily: '"Playfair Display", serif',
                                color: '#F2572D',
                                textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 2px 4px rgba(0,0,0,0.8)'
                            }}>
                            Our Students
                        </h1>
                        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-6"
                            style={{ fontFamily: 'Manrope, sans-serif' }}>
                            Passionate learners and future innovators of Squad 87.
                        </p>
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-9 gap-1 sm:gap-2 md:gap-3 lg:gap-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 mt-4 md:mt-6">
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

// A small, reusable card that expands on hover and reveals details.
function StudentCard({ studentData }) {
    const { 
        id = 1, 
        name = "Unknown Student", 
        track = "Web Development", 
        level = "Beginner", 
        skills = ["HTML", "CSS", "JavaScript"], 
        projects = 3, 
        quote = "Learning every day", 
        socialLinks = {},
        bio = "Learning and growing every day",
        favoriteLanguage = "JavaScript",
        hobbies = ["Coding", "Learning"]
    } = studentData || {};
    
    const studentImageUrl = `/students/student-${id}.jpg`;
    
    return (
        <div className="group relative z-0 hover:z-50">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/30 bg-white/10 shadow-lg transition-all duration-500 ease-out transform group-hover:scale-[2.5] group-hover:border-orange-400/80 group-hover:shadow-2xl">
                {/* Base card content - visible when not hovered */}
                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
                    <img 
                        src={studentImageUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-gray-100/10 to-gray-300/10 flex items-center justify-center" style={{ display: 'none' }}>
                        <div className="text-lg text-white/60">👤</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/30 backdrop-blur-sm">
                        <p className="text-white text-xs truncate font-medium">{name}</p>
                    </div>
                </div>

                {/* Expanded content - visible on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl p-4 flex flex-col">
                    {/* Avatar */}
                    <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400/70 bg-gradient-to-br from-orange-400/30 to-orange-600/30">
                            <img 
                                src={studentImageUrl}
                                alt={name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-full h-full flex items-center justify-center text-orange-300 text-xl" style={{ display: 'none' }}>👤</div>
                        </div>
                    </div>

                    {/* Name & Track */}
                    <div className="text-center mb-3">
                        <h3 className="text-white text-base font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {name}
                        </h3>
                        <p className="text-orange-300 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {track}
                        </p>
                        <p className="text-green-300 text-xs">{level}</p>
                    </div>

                    {/* Quote */}
                    <div className="mb-3">
                        <p className="text-white/90 text-xs text-center italic leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            "{quote}"
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-3">
                        <p className="text-orange-300 text-xs font-semibold mb-1 text-center">Skills</p>
                        <div className="flex gap-1 justify-center flex-wrap">
                            {skills.slice(0, 3).map((skill, index) => (
                                <span key={index} className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs border border-white/30">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects & Favorite Language */}
                    <div className="mb-3 text-center">
                        <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs border border-green-400/30 mb-1">
                            {projects} Projects
                        </span>
                        <p className="text-white/70 text-xs">
                            Loves: <span className="text-orange-300">{favoriteLanguage}</span>
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 justify-center mt-auto">
                        <a href={socialLinks?.github || "#"} target="_blank" rel="noopener noreferrer" 
                           className="w-6 h-6 rounded-full bg-gray-700/60 flex items-center justify-center text-white/80 hover:text-white hover:bg-gray-700/80 transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href={socialLinks?.linkedin || "#"} target="_blank" rel="noopener noreferrer"
                           className="w-6 h-6 rounded-full bg-blue-600/60 flex items-center justify-center text-blue-200 hover:text-blue-100 hover:bg-blue-600/80 transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href={socialLinks?.portfolio || "#"} target="_blank" rel="noopener noreferrer"
                           className="w-6 h-6 rounded-full bg-orange-600/60 flex items-center justify-center text-orange-200 hover:text-orange-100 hover:bg-orange-600/80 transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9v2h2V9H4zm10 0v2h2V9h-2z" clipRule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
