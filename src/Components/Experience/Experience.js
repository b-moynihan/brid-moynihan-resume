import React, { Component } from 'react';

class Experience extends Component{
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      
      var work = this.props.data.work.map(function(work){
        return <div class="timeline__block"><div class="timeline__bullet"></div><div class="timeline__header"><p class="timeline__timeframe">{work.years}</p><h3>{work.company}</h3><h5>{work.title}</h5></div><div class="timeline__desc"><p>{work.description}</p></div></div> 
      })

      var education = this.props.data.education.map(function(education){
        return <div class="timeline__block"><div class="timeline__bullet"></div><div class="timeline__header"><p class="timeline__timeframe">{education.graduated}</p><h3>{education.school}</h3><h5>{education.degree}</h5></div><div class="timeline__desc"><p>{education.description}</p></div></div> 
      })
    }

    return (
      <section id="about" class="s-about target-section">
        
        <div class="row about-content about-content--timeline">

          <div class="col-full text-center">
              <h3>Work Experience</h3>
          </div>

          <div class="col-twelve tab-full left">
              <div class="timeline">

              {work}

              </div>
          </div>

          <div class="col-full text-center">
              <h3>Education Experience</h3>
          </div>

          <div class="col-twelve tab-full right">
              <div class="timeline">

                  {education}

              </div>
          </div>

          </div>

  </section>
    );
  }
}
export default Experience;
