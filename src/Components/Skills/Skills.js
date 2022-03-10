import React, { Component } from 'react';

class Skills extends Component{
  render() {
    // TODO Update to only pass About Me json  
    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
      var frameworks = this.props.data.frameworks.map(function(frameworks){
        var className= 'progress '+'percent'+frameworks.level;
        return <li><div className={className}><span>{frameworks.level}%</span></div><strong>{frameworks.name}</strong></li>
      })
      var languages = this.props.data.languages.map(function(languages){
        var className= 'progress '+'percent'+languages.level;
        return <li><div className={className}><span>{languages.level}%</span></div><strong>{languages.name}</strong></li>
      })
      var soft_skill = this.props.data.soft_skill.map(function(soft_skill){
        var className= 'progress '+'percent'+soft_skill.level;
        return <li><div className={className}><span>{soft_skill.level}%</span></div><strong>{soft_skill.name}</strong></li>
      })
    }

    return (
      <section id="about" class="s-about target-section">
        
      <div class="row narrow section-intro has-bottom-sep">
          <div class="col-full text-center">
              <h3>About</h3>
              <h1>More About Me</h1>
              <p class="lead">{bio}</p>
          </div>
      </div>

      <div class="row about-content">

          <div class="col-six tab-full left">
              <h3>Frameworks & Tools!</h3>

              <ul class="skill-bars">
                 {frameworks}
              </ul>
          </div>

          <div class="col-six tab-full left">
              <h3>Languages!</h3>

              <ul class="skill-bars">
                 {languages}
              </ul>
          </div>

      </div> 

      <div class="row about-content">

          <div class="col-twelve tab-full left">
              <h3>Soft Skills!</h3>

              <ul class="skill-bars">
                 {soft_skill}
              </ul>
          </div>

      </div> 
      {/* <!-- end about-content --> */}

      <div class="row about-content about-content--buttons">

          <div class="col-six tab-full left">
              <a href="#0" class="btn btn--primary full-width">Download My CV</a>
          </div>
          <div class="col-six tab-full right">
              <a href="#0" class="btn full-width">Hire Me Now</a>
          </div>

      </div>
       {/* <!-- end about-content buttons --> */}

  </section>
    );
  }
}

export default Skills;
