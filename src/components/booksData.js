import chemistry from '../image/book-1.jpg';
import english from '../image/book-2.webp';
import englishGrammar from '../image/book-3.jpg';
import html from '../image/book-4.jpg';
import physics from '../image/book-5.webp';
import biology from '../image/book-6.jpg';
import environmentalScience from '../image/book-7.jpg';
import mathematicsAptitude from '../image/book-8.jpg';
import java from '../image/book-9.jpeg';

const booksData = [
    { id: 1, title: 'Chemistry', img: chemistry, description: 'An essential guide to chemistry concepts and experiments.', isNewArrival: true, isFeatured: false },
    { id: 2, title: 'English', img: english, description: 'Improve your English vocabulary and comprehension skills.', isNewArrival: false, isFeatured: true },
    { id: 3, title: 'English Grammar', img: englishGrammar, description: 'Master the rules of English grammar with ease.', isNewArrival: true, isFeatured: false },
    { id: 4, title: 'HTML Basics', img: html, description: 'Learn the fundamentals of HTML for web development.', isNewArrival: false, isFeatured: true },
    { id: 5, title: 'Physics Fundamentals', img: physics, description: 'Explore the laws of physics with real-world applications.', isNewArrival: true, isFeatured: true },
    { id: 6, title: 'Biology Insights', img: biology, description: 'Understand the core principles of biology and life sciences.', isNewArrival: false, isFeatured: false },
    { id: 7, title: 'Environmental Science', img: environmentalScience, description: 'Learn about ecology, sustainability, and the environment.', isNewArrival: true, isFeatured: false },
    { id: 8, title: 'Mathematics Aptitude', img: mathematicsAptitude, description: 'Sharpen your math aptitude for competitive exams.', isNewArrival: false, isFeatured: true },
    { id: 9, title: 'Java Programming', img: java, description: 'A complete guide to Java programming language.', isNewArrival: true, isFeatured: true },
];

export default booksData;

