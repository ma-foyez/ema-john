import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCartForm from './SplitCartForm';

const stripePromise = loadStripe('pk_test_51Ha4ahLFPetasGKGNO3ou3zttapd7YTkCoJAneCzxdOv56dfzmxspJbb3sBfPc21HDl085FkREDE1lCpiuSrvRI900rr8u2FJu');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           {/* <SplitCartForm /> */}
           <SimpleCardForm />
        </Elements>
    );
};

export default ProcessPayment;