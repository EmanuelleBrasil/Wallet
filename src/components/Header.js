import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import despesas from '../images/despesas.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses(expenses) {
    return expenses
      .reduce((acc, currValue) => acc
        + (parseFloat(currValue.value)
        * parseFloat(currValue.exchangeRates[currValue.currency].ask)), 0);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      
      <div className="header">
        <div className="dados-usuario">
          <div data-testid="email-field">{ `Usuário: ${email}` }</div>
          <div data-testid="total-field">{ `Total da despesa: ${this.totalExpenses(expenses).toString()}` }</div>
          <div data-testid="header-currency-field">Moeda: BRL</div>
        </div> 
        <img src={ despesas } alt="titulo-despesas"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
