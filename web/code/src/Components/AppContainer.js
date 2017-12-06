import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ noteId }) => ({ noteId });
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch({ type: 'NOTE', payload: { id: 5 } })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
