import ProgressBar from "@ramonak/react-progress-bar";


const Skill = () => {
    return (
        <>
<div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Skill Frontend</h4>
                </div>
                <li>Cut/graft template Website Responsive</li>
                <li>Framework/Library: Bootstrap, Antd, React.js</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span><span className="label">Wordpress</span><span className="number">95%</span></span>
                        <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}

                        />
                        </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                      <span><span className="label">Css</span><span className="number">85%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>
                    </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                      <span><span className="label">HTML</span><span className="number">75%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>
                    </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Skill Backend</h4>
                </div>
                <li>Program language: Javascript, Typescript</li>
                <li>Restful APIs</li>
                <li>Framework: Express, Nest.js</li>
                <li>Database: MySQL, MongoDB</li>

              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                    <div className="arlo_tm_progress" data-value="95" data-color="#000">
                      <span><span className="label">Wordpress</span><span className="number">95%</span></span>
                      <div className="arlo_tm_bar_bg">
                            <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>
                        </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="85" data-color="#000">
                      <span>
                        <span className="label">Css</span><span className="number">85%
                        </span>
                    </span>
                      <div className="arlo_tm_bar_bg">
                      <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>

                      </div>
                    </div>
                    <div className="arlo_tm_progress" data-value="75" data-color="#000">
                      <span><span className="label">HTML</span><span className="number">75%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>
</div>
                    </div>
                    <div className="arlo_tm_progress" data-value="90" data-color="#000">
                      <span><span className="label">After Effect</span><span className="number">90%</span></span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar completed={95} 
                        bgColor="#333"
                        isLabelVisible={false}
                        height={"8px"}/>
</div>
                    </div>
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

export default Skill