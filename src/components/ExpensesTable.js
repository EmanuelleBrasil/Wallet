import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../actions';

class ExpensesTable extends React.Component {
  constructor() {
    super();
    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton(expenseId) {
    const { deleteExp } = this.props;
    deleteExp(expenseId);
  }

  editButton(expenseId) {
    const { editExp } = this.props;
    editExp(expenseId);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tr>
          {expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{exp.description}</td>
              <td>{exp.tag}</td>
              <td>{exp.method}</td>
              <td>{exp.value}</td>
              <td>{exp.exchangeRates[exp.currency].name}</td>
              <td>{parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
              <td>
                {(parseFloat(exp.exchangeRates[exp.currency].ask)
                * parseFloat(exp.value)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteButton(exp.id) }
                >
                  Deletar
                </button>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.editButton(exp.id) }
                >
                  Editar despesa
                </button>
              </td>
            </tr>
          ))}
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (expenseId) => dispatch(deleteExpense(expenseId)),
  editExp: (expenseId) => dispatch(editExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};
