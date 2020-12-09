import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import ClientComponent from "../containers/ClientContainer";
import CompanyComponent from "../containers/CompanyContainer";
import DepartureComponent from "../containers/DepartureContainer";
import TableComponent from "../containers/TableContainer";
import ArrivingComponent from "../containers/ArrivingContainer";
import { Menu } from "antd";

function AppComponent(props) {
    return (
        <Fragment>
            <Menu mode="horizontal" theme="dark">
                <Menu.Item key="Home">
                    <Link to="/">Home </Link>
                </Menu.Item>
                <Menu.Item key="Airport name">
                    <Link to="/airportname">Airport Name </Link>
                </Menu.Item>
                <Menu.Item key="About">
                    <Link to="/test">Test lentele </Link>
                </Menu.Item>
                <Menu.Item key="Company">
                    <Link to="/company">Company flight info </Link>
                </Menu.Item>
                <Menu.Item key="Arriving">
                    <Link to="/arriving">Arriving info </Link>
                </Menu.Item>
                <Menu.Item key="Departure">
                    <Link to="/departure">Departure info </Link>
                </Menu.Item>
            </Menu>
            <Switch>
                <Route path="/airportname" component={ClientComponent} />
                <Route path="/company" component={CompanyComponent} />
                <Route path="/arriving" component={ArrivingComponent} />
                <Route path="/test" component={TableComponent} />
                <Route path="/departure" component={DepartureComponent} />
            </Switch>
        </Fragment>
    );
}

export default AppComponent;
