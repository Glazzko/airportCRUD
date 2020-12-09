import { connect } from "react-redux";
import { sendEvent } from "../actions/userActions";

import ModalComponent from "../components/ModalComponent";

const mapStateToProps = ({ usersR }) => {
    return { isLoaded: usersR.isLoaded };
};

const mapDispatchToProps = dispatch => ({
    handleUserForm: values => dispatch(sendEvent(values))
});

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalComponent);
export default ModalContainer;
