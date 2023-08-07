import AboutLogo from '@/assets/img/about/1.jpg'
import MyCV from '@/assets/CV_Nguyen_Ninh_Tung_Duong.pdf'
import { TypeAnimation } from 'react-type-animation';
import { useRef, useEffect  } from 'react';
import Parallax from 'parallax-js'
import Logo550 from '@/assets/img/about/550x640.jpg'
const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if(sceneEl && sceneEl.current){
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true
      })
  
      parallaxInstance.enable();
  
      return () => parallaxInstance.disable();
    }
    
  }, [])
    return (
        <>
        <div className="arlo_tm_section relative" style={{paddingTop: 100}} id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                    <div className="image layer" data-depth="0.2">
                      <img src={Logo550} alt="550x640" />
                      <div className="inner" 
                      style={{background: `url(${AboutLogo})`}}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img src={Logo550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>

                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>I'm Nguyen Ninh Tung Duong <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Freelancer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer',
        2000,
        'Web Developer',
        2000,
        
      ]}
      wrapper="span"
      speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /> <span className="arlo_tm_animation_text_word"></span></h4>
                  </div>
                  <div className="definition">
                    <p>Hi! My name is <strong>Nguyen Ninh Tung Duong</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span><label>Birthday:</label> 17.05.2001 (GenZ)</span>
                      </li>
                      <li>
                        <span><label>Gender:</label> Male</span>
                      </li>
                      {/* <li>
                        <span><label>City:</label> Ha Noi, Viet Nam</span>
                      </li>
                      <li>
                        <span><label>Interests:</label> Soccer, UFC</span>
                      </li> */}
                      <li>
                        <span><label>Studied:</label> UTT</span>
                      </li>
                      <li>
                        <span><label>Specialization:</label> Software Enginery</span>
                      </li>	
                      <li>
                        <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                      </li>
                      <li>
                        <span><label>Mail:</label> <a href="mailto:duongkq3@gmail.com">duongkq3&#64;gmail.com</a></span>
                      </li>
                      <li>
                        <span><label>Facebook:</label> <a href="https://www.facebook.com/tung.kyu17/" target='_blank'>&#64;tung.kyu17</a></span>
                      </li>
                      <li>
                        <span><label>Twitter:</label> <a href="https://twitter.com/TngDng74291989" target='_blank'>&#64;TngDng74291989</a></span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={MyCV} download><span>Download CV</span></a>
                      </li>
                      {/* <li className="anchor">
                        <a href="#contact"><span>Send Message</span></a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default About