// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //set the state for - 
      // all the videos in the video list
      videos: exampleVideoData,
      //current video in the player
      currentVideo: exampleVideoData[0]
    };

    handleClick = function(event) {
      //get the song that was clicked
      //set it as the current video
      
    };

    //handleClick.bind(reference to videoPlayer, reference to videoList)

  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer currentVideo = { this.state.currentVideo }/>
        </div>
        <div className="col-md-5">
          <VideoList videos = { this.state.videos }/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

