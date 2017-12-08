import { connect } from 'react-redux';
import WorkItemDetail from './WorkItemDetail';

const mapStateToProps = ({ route }) => ({ route });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WorkItemDetail);
