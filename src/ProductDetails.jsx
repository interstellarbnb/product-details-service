import React from 'react';
import ReactDOM from 'react-dom';
import Basics from './components/Basics.jsx';
import Summary from './components/Summary.jsx';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Basics />
                </div>
                <div>
                   <Summary />
                </div>
            </div>
        );
    }
}

export default ProductDetails;