import React from "react";
import withMortgageCalculator from "./withMortgageCalculator";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.onMortgageCalculate}>
          <div className="row">
            <div className="col-md-12">
              <h1>Mortgage Calculator - Basic Sample</h1>
              <span>
                This sample uses JavaScript to read the data from the form,
                write the values into a JavaScript object and then calls the
                rule engine with the object. The results are then written back
                to the form.
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h2>Loan Information</h2>
              <div className="form-group">
                <label htmlFor="loanAmount">Loan amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="loanAmount"
                  name="loanAmount"
                  placeholder="loan amount"
                  onChange={this.props.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apr">APR</label>
                <input
                  type="text"
                  className="form-control"
                  id="apr"
                  name="apr"
                  placeholder="apr"
                  onChange={this.props.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="termInYears">Term in years</label>
                <input
                  type="text"
                  className="form-control"
                  id="termInYears"
                  name="termInYears"
                  placeholder="term in years"
                  onChange={this.props.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <h2>Payment Summary</h2>
                </div>
                <div className="col-md-4 text-right">
                  <button
                    type="submit"
                    className="btn btn-default"
                    style={{ marginTop: "20px" }}
                    disabled={this.props.disabled}
                  >
                    Calculate mortgage
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="montlyPayment">Montly payment</label>
                <input
                  type="text"
                  className="form-control"
                  id="montlyPayment"
                  placeholder="monthly payment"
                  readOnly="readonly"
                  value={this.props.monthlyPayment}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalCost">Total loan cost</label>
                <input
                  type="text"
                  className="form-control"
                  id="totalCost"
                  placeholder="total loan cost"
                  readOnly="readonly"
                  value={this.props.totalCost}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withMortgageCalculator(App);
