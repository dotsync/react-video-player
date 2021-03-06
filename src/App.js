import './App.css';
import React from 'react';
import { Video } from './components/Video';
import { Menu } from './components/Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu />
        <Video src={this.state.src}/>
      </div>
    );
  }
}
