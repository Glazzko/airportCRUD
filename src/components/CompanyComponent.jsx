import React, { Fragment, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, InputNumber, Button, Table, Popconfirm, Space } from "antd";
import ModalComponent from "./ModalComponent";
import CompanyTable from "./CompanyTable";

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 7
    }
};
function CompanyComponent(props) {
    //* handleDelete = key => {*//
    //*    const dataItems = [...state.dataItems];
    //*    this.setState({
    //*        dataItems: dataItems.filter(res => res.key !== key)
    //*    });
    //*  };

    useEffect(() => {
        props.companyClicked();
        //*  console.log(props.airport);*//
    }, []);

    const columns = [
        {
            title: "Company code",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Company Airplane",
            dataIndex: "airplane",
            key: "airplane"
        }
    ];

    const dataItems = props.company.map(res => {
        return {
            key: res.id,
            name: res.name,
            airplane: res.airplane
        };
    });

    //*componentWillMount() {
    //* axios.get("http://localhost:3000/api/users").then(res => {
    //*  this.props.fetchData(res.data);
    //* });
    //* }

    return (
        <Fragment>
            <p></p>

            <CompanyTable />
        </Fragment>
    );
}

export default CompanyComponent;
