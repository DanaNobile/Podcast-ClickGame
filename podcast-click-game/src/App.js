import React, { Component } from "react";
import PodcastCard from "./components/PodcastCard/podcast";
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";

import podcasts from "./podcasts.json";




class App extends Component {
  // Setting this.state.friends to the friends json array
  state = { podcasts };






  MovePodcast = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const podcasts = this.state.podcasts.filter(podcast => podcast.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ podcasts });
  };

  render() {
    return (

      <Wrapper>
        <Title>My Favorite True Crime Podcasts</Title>
        {this.state.podcasts.map(podcast => (
          <PodcastCard
            removeFriend={this.removeFriend}
            id={podcast.id}
            image={podcast.image}

          />
        ))}
      </Wrapper>
    );
  }
}




export default App;
