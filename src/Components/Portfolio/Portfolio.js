import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
        var note = this.props.data.note;
        console.log(this.props.data)
        var portfolio = this.props.data.projects.map(function(portfolio){
            const srcSet = "" + String(portfolio.image) + " 1x, " + String(portfolio.image2x) + " 2x";
            return <div class="grid-item">
                                <a href={portfolio.url} class="thumb-link" title={portfolio.title} data-size="1050x700">
                                    <img src={portfolio.image} srcSet={srcSet} alt=""/>
                                    <span class="shadow-overlay"></span>
                                </a>
                                <div class="item-folio__text">
                                    <h3 class="item-folio__title">
                                        {portfolio.title}
                                    </h3>
                                    <p class="item-folio__cat">
                                        {portfolio.description}
                                    </p>
                                </div>
                                <a href={portfolio.url} class="item-folio__project-link" title="Project link">
                                    <i class="im im-link"></i>
                                </a>
                                <div class="item-folio__caption">
                                    <p>
                                        {portfolio.caption}
                                    </p>
                                </div>
                    </div>
        })
    }

    return (
        <div class="grid">
        <div class="grid-sizer"></div>
          {portfolio}
        </div>
    );
  }
}

export default Portfolio;
