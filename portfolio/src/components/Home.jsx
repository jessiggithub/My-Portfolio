import Image from './images/IMG-4189.jpg';

export default function Home() {

    return (
        <div>
             <div className='home-container'>
                <div className='header-image'>
                    <img
                      className='image'
                      src={Image}
                      alt='Jessica Garcia'
                      />
                </div>
                <div className='cta-text'>
                    <div className='tech-skills-container'>
                        <h1>Technical skills</h1>

                        <h3>Front End</h3>
                        <p>HTML, CSS, JavaScript, React.js, VS Code, Yup, Axios, Jest</p>

                        <h3>Back End</h3>
                        <p>GitHub</p>

                        <h3>Other</h3>
                        <p>Vercel</p>
                    </div>
                  
                    <div className='project-card'>
                        <h1>Projects</h1>
                    

                    <div className='project-card'>
                        <button className='project-button'>
                            <a href='https://github.com/jessiggithub/calculator.git'>Calculator</a>
                        </button>
                    </div>
                </div>
             </div>
        </div>
        </div>
    )
}