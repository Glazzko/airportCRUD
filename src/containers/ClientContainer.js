import { connect } from "react-redux";
import { sendEvent, getAirport, getCode } from "../actions/userActions";
import ClientComponent from "../components/ClientComponent";

const mapStateToProps = ({ usersR }) => {
    return {
        isLoaded: usersR.isLoaded,
        airport: usersR.airport,
        code: usersR.code
    };
};

const mapDispatchToProps = dispatch => ({
    handleUserForm: values => dispatch(sendEvent(values)),
    airportClicked: () => dispatch(getAirport()),
    companyCode: () => dispatch(getCode())
});

const ClientContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientComponent);
export default ClientContainer;
