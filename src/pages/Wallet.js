import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import '../style/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <Header />
        <ExpensesForm />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currency,
});

export default connect(
  mapStateToProps,
)(Wallet);
