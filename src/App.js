import './App.css';
import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Portfoliio from './Components/Portfolio/Portfolio';
import Experience from './Components/Experience/Experience';
import Repertoire from './Components/Repertoire/Repertoire';
import Contact from './Components/Contact/Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerProps: {},
      skillsProps: {},
      experienceProps: {},
      portfolioProps: {},
      repertoireProps: {},
      contactProps: {},
      footerProps: {}
    }
  };

  getProps(){
    $.when(
      $.ajax({
        url: '/data/header.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({headerProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      }),
      $.ajax({
        url: '/data/skills.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({skillsProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      }),
      $.ajax({
        url: '/data/experience.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({experienceProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      }),
      $.ajax({
        url: '/data/portfolio.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({portfolioProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      }),
      $.ajax({
        url: '/data/repertoire.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({repertoireProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      }),
      $.ajax({
        url: '/data/contact.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({contactProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      }),
      $.ajax({
        url: '/data/footer.json',
        dataType:'json',
        cache: true,
        success: function(data){
          this.setState({footerProps: data});
        }.bind(this),
        error: function(err){
          console.log(err);
          alert(err);
        }
      })
    )
  }

  componentDidMount(){
    this.getProps();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Skills data={this.state.skillsProps.skills}/>
        <Experience data={this.state.experienceProps.resume}/>
        <Portfoliio data={this.state.portfolioProps.portfolio}/>
        <Repertoire data={this.state.repertoireProps.repertoire}/>
        <Contact data={this.state.contactProps.contact}/>
        <Footer data={this.state.footerProps.main}/>
      </div>
    );
  }
}

export default App;