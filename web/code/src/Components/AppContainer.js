import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ route }) => ({ route });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
