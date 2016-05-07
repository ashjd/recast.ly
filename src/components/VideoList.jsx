var VideoList = (props) => { 
  var list = props.videos.map( (video) => {
    return <VideoListEntry>{video}</VideoListEntry>; 
  });
   
  return (
    <div className="video-list media">
      {list}
    </div>
  );  
};

// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     var i = 1;
//     var list = this.props.videos.map( (video) => {
//       return <VideoListEntry>{video}</VideoListEntry>; 
//     });
//     return <div className="video-list media"> {list} </div>;
//   }
// }

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

//React.render(<VideoList videos={exampleVideoData} />, document.getElem('body'));