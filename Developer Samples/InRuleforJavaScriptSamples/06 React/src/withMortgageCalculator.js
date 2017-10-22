import React from "react";
import MortgageCalculator from "mortgage-calculator";

const withMortgageCalculator = Component =>
  class WithMortgageCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        monthlyPayment: 0,
        totalCost: 0
      };
      this.calculate = this.calculate.bind(this);
      this.change = this.change.bind(this);
    }
    calculate(event) {
      event.preventDefault();

      const mortgage = {
        LoanInfo: {
          Principal: this.state.loanAmount,
          APR: this.state.apr,
          TermInYears: this.state.termInYears
        }
      };

      const session = MortgageCalculator.createRuleSession();
      session.createEntity("Mortgage", mortgage);

      session.applyRules(log => {
        if (log.hasErrors) {
          console.log(log.runtimeErrors.join("\n"));
        } else {
          this.setState({
            monthlyPayment: mortgage.PaymentSummary.MonthlyPayment.toFixed(2),
            totalCost: mortgage.PaymentSummary.TotalCost.toFixed(2)
          });
        }
      });
    }
    change(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    render() {
      const newProps = {
        ...this.state,
        disabled:
          this.state.apr && this.state.loanAmount && this.state.termInYears
            ? false
            : true,
        onChange: this.change,
        onMortgageCalculate: this.calculate
      };
      return <Component {...this.props} {...newProps} />;
    }
  };

export default withMortgageCalculator;
