import { connect } from "react-redux";
import { sendEvent, getCompany } from "../actions/userActions";
import CompanyComponent from "../components/CompanyComponent";

const mapStateToProps = ({ usersR }) => {
    return {
        isLoaded: usersR.isLoaded,
        company: usersR.company
    };
};

const mapDispatchToProps = dispatch => ({
    handleUserForm: values => dispatch(sendEvent(values)),
    companyClicked: () => dispatch(getCompany())
});

const CompanyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyComponent);
export default CompanyContainer;
