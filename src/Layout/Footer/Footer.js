import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
        <footer>
        <div class="row">
            <div class="col-full">

                <div class="footer-logo">
                    <a class="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage"/></a>
                </div>
                <ul class="footer-social">
                  <li>
                      <a href="#https://twitter.com/brid_moynihan"><i class="im im-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                  </li>
                  <li>
                      <a href="https://www.instagram.com/moynihanbrid/"><i class="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/br%C3%ADd-m-0300b516b/"><i class="im im-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                  </li>
                </ul>
                    
            </div>
        </div>

        <div class="row footer-bottom">

            <div class="col-twelve">
                <div class="copyright">
                    <span>Design inspired by © Copyright Hola 2017</span> 
                    <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>	
                </div>

                <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"><i class="im im-arrow-up" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
