import { connect } from "react-redux";
import { getDeparture } from "../actions/userActions";
import ArrivingComponent from "../components/ArrivingComponent";

const mapStateToProps = ({ usersR }) => {
    return {
        isLoaded: usersR.isLoaded,
        departure: usersR.departure
    };
};

const mapDispatchToProps = dispatch => ({
    departureClicked: () => dispatch(getDeparture())
});

const ArrivingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArrivingComponent);
export default ArrivingContainer;
