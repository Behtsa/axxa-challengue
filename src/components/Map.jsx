import React from 'react';
import ReactDOM from 'react-dom';

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJWuqogqkRW94eg-cueuXTY_qrGWSNnxA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `1000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -32.202924, lng: -64.404945 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
        // Length issue
        // `https://gist.githubusercontent.com`,
        // `/farrrr/dfda7dd7fccfec5474d3`,
        // `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    //   ].join("")
        `https://gist.githubusercontent.com`,
        `/superliza/8d3a015b1cfeae07908f2fb2ec1decff`,
        `/raw/b93fb70892a5f96f93c0d167643985abb6bde62d/data`
     ].join("")

       
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.agentes)
            // alert(JSON.stringify(data.photos));
          this.setState({ markers: data.agentes });
        });
    }
  
    render() {
      return (
        <MapWithAMarkerClusterer markers={this.state.markers} />
        
      )
    }
}

<DemoApp />

export default DemoApp;