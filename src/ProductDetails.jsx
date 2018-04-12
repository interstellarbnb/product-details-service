import React from 'react';
import ReactDOM from 'react-dom';
import Basics from './components/Basics.jsx'

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Basics />
            </div>
        );
    }
}

export default ProductDetails;