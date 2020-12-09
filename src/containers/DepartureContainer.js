import { connect } from "react-redux";
import { getDeparture } from "../actions/userActions";
import DepartureComponent from "../components/DepartureComponent";

const mapStateToProps = ({ usersR }) => {
    return {
        isLoaded: usersR.isLoaded,
        departure: usersR.departure
    };
};

const mapDispatchToProps = dispatch => ({
    departureClicked: () => dispatch(getDeparture())
});

const DepartureContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DepartureComponent);
export default DepartureContainer;
