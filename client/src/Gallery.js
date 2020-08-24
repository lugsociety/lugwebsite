import React ,{Component} from "react";
import Sample from "./images/Sample.jpg";
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/';
const port = "http://localhost:5000"
const Image = props => (
  <div className="child">
   <img src={props.imageupload.profileImg} className="gya circle" alt="click"/>
  </div>
)

class Gallery extends Component {
  constructor(props) {
    super(props);
    //this.onChangeNo = this.onChangeNo.bind(this);
    this.state = {
       // handle the API response
      /*imageUrl1: null,
      imageUrl2: null,
      imageUrl3: null,
      imageUrl4: null,
      imageUrl5: null,
      imageUrl6: null,
      imageUrl7: null,
      imageUrl8: null,
      imageUrl9: null */// to store uploaded image path
      //number: null
      imageuploads: []
    };
  }
  componentDidMount(){
  /*axios.get(BASE_URL + 'getimage1').then(response => {
    this.setState({
      imageUrl1: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage2').then(response => {
    this.setState({
      imageUrl2: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage3').then(response => {
    this.setState({
      imageUrl3: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage4').then(response => {
    this.setState({
      imageUrl4: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage5').then(response => {
    this.setState({
      imageUrl5: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage6').then(response => {
    this.setState({
      imageUrl6: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage7').then(response => {
    this.setState({
      imageUrl7: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage8').then(response => {
    this.setState({
      imageUrl8: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });
  axios.get(BASE_URL + 'getimage9').then(response => {
    this.setState({
      imageUrl9: BASE_URL + "uploads" + response.data.fi
    });
  }).catch(error => {
    console.log(error);
  });*/
  axios.get('/imageupload/')
  .then(response => {
    this.setState({ imageuploads: response.data.imageuploads })
  })
  .catch((error) => {
    console.log(error);
  })
}
imageList() {
  return this.state.imageuploads.map(imageupload => {
    return <Image imageupload={imageupload}/>;
  })
}
  render(){
  return (
    <div className="Event" id="event-gallery">
      <div className="header1">EVENT GALLERY</div>
      <div>
        <div className="box">
          {this.imageList()}
        </div>
      </div>
    </div>
  );
}
}

export default Gallery;
/*<div className="child">
 <img src={imageUrl1} className="gya circle" alt="click"/>
</div>
<div className="child">
  <img className="gya circle" src={imageUrl2} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl3} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl4} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl5} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl6} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl7} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl8} alt="click" />
</div>
<div className="child">
  <img className="gya circle" src={imageUrl9} alt="click" />
</div>*/
