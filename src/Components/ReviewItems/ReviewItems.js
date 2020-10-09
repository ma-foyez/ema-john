import React from 'react';
import Products from '../Products/Products';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ReviewItems = (props) => {
    const history = useHistory();
    console.log(props.reviewItems);
    const { img, name, seller, price, quantity, key, features, stock } = props.reviewItems
    return (
        <div className="product container">
            <div className="row">
                <div className="col-md-4">
                    <div className="product-img">
                        <img src={img} alt="product img" className="img-fluid m-4" />
                    </div>
                </div>
                <div className="col-md-7 mr-3">
                    <div className="single-product">
                        <h4 className="product-name"></h4> <br />
                        <h5 className="seller"> By {seller}</h5>
                        <div className="row mt-4">
                            <div className="col-md-6 mt-4">
                                <h5><strong>$ {price}</strong></h5> <br />
                                <h5>Quantity : {quantity}</h5>
                            </div>
                            <div className="col-md-6">
                                <div className="feature">
                                    <h4 className="sub-feature">Features</h4>
                                    <ul>
                                        {
                                            features.map(feature => <li key={props.key}>{feature.description}-{feature.value}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="btn product-button" onClick={() => props.handleRemoveProduct(key)}>Remove Item</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ReviewItems;