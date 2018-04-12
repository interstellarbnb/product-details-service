import React from 'react';
import ReactDOM from 'react-dom';
import Brief from './components/Brief.jsx';

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
                    <Brief />
                </div>
                
            </div>
        );
    }
}

export default ProductDetails;