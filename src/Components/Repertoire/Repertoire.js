import React, { Component } from 'react';

class Repertoire extends Component {
  render() {
    if(this.props.data){
      var spotify = this.props.data.spotify.map(function(spotify){
      return <div class="col-block">
                  <iframe style={{borderRadius: '12px'}} src={spotify.url} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                  <h5>{spotify.name}</h5>
                </div>
    })
  }
    return (
      <section id="stats" class="s-blog">
          <div class="row narrow section-intro has-bottom-sep">
            <div class="col-full">
                <h3>Playlists</h3>
                <h1>Spotify Creations</h1>
                
                <p class="lead"></p>
            </div>
        </div>
      <div class="row block-1-3 block-tab-1-2 block-mob-full stats">
        {spotify}
      </div>
  </section> 
    );
  }
}

export default Repertoire;


