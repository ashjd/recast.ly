

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {   
      videos: [],
      video: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 10
    };

    this.props.searchYouTube(options, (videos) => 
        this.setState({
          videos: videos,
          video: videos[0]
        })
    );
  }
    

  handleVideoEntryClick (video) {
    this.setState({video: video});
  }
  

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleVideoEntryClick={this.handleVideoEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

