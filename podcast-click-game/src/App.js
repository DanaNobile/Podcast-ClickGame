import React, { Component } from "react";
import PodcastCard from "./components/PodcastCard/podcast";
import Wrapper from "./components/Wrapper/wrapper";

import Score from "./components/Score/score";
import podcasts from "./podcasts.json";
import "./App.css";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    podcasts,
    clickedPodcasts: [],
    score: 0,
    goal: 12,
    status: ""

  };

  shuffleScoreCard = id => {
    let clickedPodcasts = this.state.clickedPodcasts;

    if (clickedPodcasts.includes(id)) {
      this.setState({ cclickedPodcasts: [], score: 0, status: "Game Over! Sorry, you lost. Click to play again!" });
      return;
    } else {
      clickedPodcasts.push(id)

      if (clickedPodcasts.length === 12) {
        this.setState({ score: 12, status: "You Won! Great Job, True Crime Junkie! Click to play again!", clickedPodcasts: [] });
        console.log('You Win');
        return;
      }

      this.setState({ podcasts, clickedPodcasts, score: clickedPodcasts.length, status: " " });

      for (let i = podcasts.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [podcasts[i], podcasts[j]] = [podcasts[j], podcasts[i]];
      }
    }
  }


  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Podcast Clicky Game</h1>
          <p className="App-intro">
            Your goal is to try and click all of the podcasts, without clicking the same image twice! Look out though! The images start to move on you, so flex your memory muscle!
        </p>
        </header>
        <Score total={this.state.score}
          goal={12}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.podcasts.map(podcastID => (
            <PodcastCard
              shuffleScoreCard={this.shuffleScoreCard}
              id={podcastID.id}
              key={podcastID.id}
              image={podcastID.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Designed and built by Dana Nobile.</p>
        </footer>
      </div>
    );
  }




}




export default App;
