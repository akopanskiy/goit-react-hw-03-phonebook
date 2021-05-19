import { Component } from 'react';
import shortid from 'shortid';
import styles from './Form.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };
  nameId = shortid.generate();
  numberId = shortid.generate();

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            <div className={styles.flexRow}>
              <input
                className={styles.lfInput}
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
                id={this.nameId}
              />
            </div>
          </label>
          <label className={styles.label} htmlFor={this.numberId}>
            <div className={styles.flexRow}>
              <input
                className={styles.lfInput}
                placeholder="Number"
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
                id={this.numberId}
              />
            </div>
          </label>
          <button className={styles.lfSubmit} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
export default ContactForm;
