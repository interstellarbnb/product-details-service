import React from 'react';
import axios from 'axios';
import Brief from './components/Brief';
import Summary from './components/Summary';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      brief: [],
      summary: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Append id end of url to receive desired db entry
    // ID's range from 0 - 99
    axios.get('http://127.0.0.1:3003/0')
      .then((res) =>
        this.setState({
          brief: {
            'type': res.data.spaceType,
            'title': res.data.spaceTitle,
            'location': res.data. spaceLoc,
            'numGuests': res.data.numGuests,
            'numBedrooms': res.data.numBedrooms,
            'numBeds': res.data.numBeds,
            'numBaths': res.data.numBaths,
          },
            summary: {
              'hostName': res.data.host.name,
              'hostUrl': res.data.host.pictureUrl,
              'summary': res.data.summary,
            }
        })
      )
      .catch((err) =>
        console.log(err)
      );
  }


  render() {
    return (
      <div>
        <div>
          <Brief info={this.state.brief} />
        </div>
        <div>
          <Summary info={this.state.summary} />
        </div>
      </div>
    );
  }
}
export default ProductDetails;
