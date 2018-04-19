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

  getData() {
    // Append id end of url to receive desired db entry
    // ID's range from 0 - 99
    axios.get('http://127.0.0.1:3003/0')
      .then(({ data }) =>
        this.setState({
          brief: {
            type: data.spaceType,
            title: data.spaceTitle,
            location: data.spaceLoc,
            numGuests: data.numGuests,
            numBedrooms: data.numBedrooms,
            numBeds: data.numBeds,
            numBaths: data.numBaths,
          },
          summary: {
            hostName: data.host.name,
            hostUrl: data.host.pictureUrl,
            summaryBrief: data.summary.plot.substring(0, 149),
            summaryFull: data.summary.plot,
            space: data.summary.space,
            interactionWithGuests: data.summary.interactionWithGuests,
            notes: data.summary.notes,
          },
        }))
      .catch(err => console.log(err));
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
