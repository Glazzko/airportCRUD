import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";
import { getDeparture } from "../actions/userActions";

const mapStateToProps = ({ usersR }) => {
    return { isLoaded: usersR.isLoaded, departure: usersR.departure };
};

const mapDispatchToProps = dispatch => ({
    departureClicked: () => dispatch(getDeparture())
});

const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableComponent);
export default TableContainer;
