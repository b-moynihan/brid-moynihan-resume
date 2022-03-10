import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header class="s-header">

            <div class="header-logo">
                <a class="site-logo" href="index.html"><img src="images/logo.png" alt="Homepage"/>
                </a>
            </div>

            <nav class="header-nav-wrap">
                <ul class="header-nav">
                    <li class="current"><a class="smoothscroll"  href="#home" title="home">Home</a></li>
                    <li><a class="smoothscroll"  href="#about" title="about">About</a></li>
                    <li><a class="smoothscroll"  href="#works" title="works">Works</a></li>
                    <li><a class="smoothscroll"  href="#blog" title="blog">Blog</a></li>
                    <li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                </ul>
            </nav>

            <a class="header-menu-toggle" href="#0"><span>Menu</span></a>

        </header>
    );
  }
}

export default Header;
