import image from './images/IMG-4189.jpg';

export default function Contact () {
    console.log(image);
    return (
        <>
            <div className='contact-section'>
            
              <div className='header-image'>
                <img 
                className='image'
                src={image}
                alt="Jessica Garcia"
                />
              </div>

              <h1>Contact Me</h1>

              
              <h3>Email: <a className='contact-link' href="mailto:jessicagarcia9696@gmail.com">jessicagarcia9696@gmail.com</a></h3>
              <h3>Phone: <a className='contact-link' href="tel:+17863898247">786-389-8247</a></h3>
              <h3>LinkedIn: <a className='contact-link' href="https://www.linkedin.com/in/jessicagarciatech">jessicagarciatech</a></h3>
              <h3>GitHub: <a className='contact-link' href="https://www.github.com/jessicagarciatech">jessicagarciatech</a></h3>

              <h3>Location: Miami, Florida</h3>
            </div>
          
        </>
    )
}