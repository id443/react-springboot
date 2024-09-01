import { Link, Route, Routes } from 'react-router-dom'
import Tablica from '../raznyeElementy/Tablica.jsx'
import AboutCompany from './AboutCompany.jsx'
import { Mission } from './Mission.jsx'
import Vision from './Vision.jsx'

const About = () => {
    return (
        <>
            <h1>About page</h1>
            <Tablica headers={headers} initialData={data}/>
            <ul>
                <li><Link to="company">Company</Link></li>
                <li><Link to="mission">Mission</Link></li>
                <li><Link to="vision">Vision</Link></li>
            </ul>
            <Routes>
                <Route path="company" element={<AboutCompany />} />
                <Route path="mission" element={<Mission />} />
                <Route path="vision" element={<Vision />} />
            </Routes>
        </>
    )
}

const headers = ["Book", "Author", "Language", "Published", "Sales"];

const data = [
    ["A Tale of Two Cities", "Charles Dickens", "English", "1859", "200 million"],
    [
      "Le Petit Prince (The Little Prince)",
      "Antoine de Saint-Exupéry",
      "French",
      "1943",
      "150 million",
    ],
    [
      "Harry Potter and the Philosopher's Stone",
      "J. K. Rowling",
      "English",
      "1997",
      "120 million",
    ],
    [
      "And Then There Were None",
      "Agatha Christie",
      "English",
      "1939",
      "100 million",
    ],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
  ];
export default About