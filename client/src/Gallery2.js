import React, { Component } from "react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.css";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import Sample from "./images/poster.jpg";
const BASE_URL = 'http://localhost:5000/';
const port = "http://localhost:5000"
const Legend = props => (
  <div className="efg">
    <img className="carousel circle" src={props.legendupload.profileImg} alt="abc" />
    <div className="legend top">legend {props.legendupload.number}</div>
    <div className="legend top">{props.legendupload.name}</div>
    <div className="legend"> {props.legendupload.desc}</div>
  </div>
)
class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    //this.onChangeNo = this.onChangeNo.bind(this);
    this.state = {
       // handle the API response
      /*imagelegendUrl1: null,
      imagelegendUrl2: null,
      imagelegendUrl3: null,
      imagelegendUrl4: null,
      imagelegendUrl5: null,
      imagelegendUrl6: null// to store uploaded image path
      //number: null*/
      legends: []
    };
  }
  componentDidMount(){
    /*
  axios.get(BASE_URL + 'getlegend1').then(response => {
    this.setState({
      imagelegendUrl1: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getlegend2').then(response => {
    this.setState({
      imagelegendUrl2: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getlegend3').then(response => {
    this.setState({
      imagelegendUrl3: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getlegend4').then(response => {
    this.setState({
      imagelegendUrl4: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getlegend5').then(response => {
    this.setState({
      imagelegendUrl5: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getlegend6').then(response => {
    this.setState({
      imagelegendUrl6: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  */
  axios.get('/legendupload/').then(response => {
    this.setState({
      legends: response.data.legenduploads
    });
  }).catch(error => {
    console.log(error);
  });
}
legendList() {
  return this.state.legends.map(legend => {
    return <Legend legendupload={legend}/>;
  })
}
  render() {
    //const {imagelegendUrl1, imagelegendUrl2, imagelegendUrl3, imagelegendUrl4, imagelegendUrl5, imagelegendUrl6} = this.state;
    //const {images} = this.state;
    return (
      <div className="back-carousel" id="member-gallery">
        <div className="header-carousel">EXECUTIVE TEAM</div>
        <div className="box-carousel">
          <Carousel
            autoPlay={true}
            stopOnHover={true}
            infiniteLoop={true}
            transitionTime="300"
            centerMode={true}
            centerSlidePercentage="33.33"
            interval="1500"
            showThumbs={false}
          >
            {this.legendList()}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;

/*<div className="efg">
  <img className="carousel circle" src={`BASE_URL${images[0].img}`} alt="abc" />
  <div className="legend top">legend 1</div>
  <div className="legend top">{images[0].name}</div>
  <div className="legend"> {images[0].desc}</div>
</div>
<div className="efg">
  <img className="carousel circle" src={`BASE_URL${images[1].img}`} alt="abcc" />
  <div className="legend top">legend 2</div>
  <div className="legend">{images[1].name}</div>
  <div className="legend">{images[1].desc}</div>
</div>
<div className="efg">
  <img className="carousel circle" src={`BASE_URL${images[2].img}`} alt="abc" />
  <div className="legend top">legend 3</div>
  <div className="legend">{images[2].name}</div>
  <div className="legend">{images[2].desc}</div>
</div>
<div className="efg">
  <img className="carousel circle" src={`BASE_URL${images[3].img}`} alt="abc" />
  <div className="legend top">legend 4</div>
  <div className="legend">{images[3].name}</div>
  <div className="legend">{images[3].desc}</div>
</div>
<div className="efg">
  <img className="carousel circle" src={`BASE_URL${images[4].img}`} alt="abc" />
  <div className="legend top">legend 5</div>
  <div className="legend">{images[4].name}</div>
  <div className="legend">{images[4].desc}</div>
</div>
<div className="efg">
  <img className="carousel circle" src={`BASE_URL${images[5].img}`} alt="abc" />
  <div className="legend top">legend 6</div>
  <div className="legend">{images[5].name}</div>
  <div className="legend">{images[5].desc}</div>
</div>*/
