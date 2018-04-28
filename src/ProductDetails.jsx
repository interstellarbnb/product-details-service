import React from 'react';
import axios from 'axios';
import Brief from './components/Brief';
import Summary from './components/Summary';
import Amenities from './components/Amenities';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brief: [],
      summary: [],
      amenities: {
        basics: [],
        dining: [],
        bedBath: [],
        facilities: [],
        notIncluded: [],
      },
    };
  }

  componentDidMount() {
    let endpoint = window.location.href.split('/')[3];
    endpoint = endpoint || 1;
    this.getData(endpoint);
  }

  getData(endpoint) {
    // Append id end of url to receive desired db entry
    // ID's range from 0 - 99
    axios.get(`http://ec2-13-57-253-115.us-west-1.compute.amazonaws.com/${endpoint}/listing`)
      .then(({ data, data: { host, summary, amenities } }) =>
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
            hostName: host.name,
            hostUrl: host.pictureUrl,
            summaryBrief: summary.plot.substring(0, 149),
            summaryFull: summary.plot,
            space: summary.space,
            guestInteraction: summary.guestInteraction,
            notes: summary.notes,
          },
          amenities: {
            basics: amenities.basics,
            dining: amenities.dining,
            bedBath: amenities.bedBath,
            facilities: amenities.facilities,
            notIncluded: amenities.notIncluded,
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
        <div>
          <Amenities info={this.state.amenities} />
        </div>
      </div>
    );
  }
}
export default ProductDetails;
