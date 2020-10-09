import React from 'react';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
    <div className="row">
      <div className="col-md-6">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} /> <br/>
        
        <input name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
      </div>
      <div className="col-md-6">
        <h3>Please pay</h3>
        <ProcessPayment />
      </div>
    </div>
    );
};

export default Shipment;