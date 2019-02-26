import React, { Component } from 'react';

import ApplyHeader from "./components/applyHeader";
import Footer from "./components/footer";
import FormLoan from "./components/formLoan";


class Apply extends Component {
  render() {
    return (
      <div className="container">
       
        <ApplyHeader />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="something">Apply Loan by filling in the details</h1>
        <p className="something">Check your MSMEPoints to assess your credibility for the loan approval.</p>
        <FormLoan />
      </div>
    );
  }
}

export default Apply;
