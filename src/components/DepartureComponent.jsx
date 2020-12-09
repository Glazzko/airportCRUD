import React, { Fragment, useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Popconfirm } from "antd";

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 7
    }
};
function ClientComponent(props) {
    useEffect(() => {
        props.departureClicked();
        //*  console.log(props.airport);*//
    }, []);

    const columns = [
        {
            title: "Airport name",
            dataIndex: "airport",
            key: "airport"
        },
        {
            title: "Departuring airplane",
            dataIndex: "airplane",
            key: "airplane"
        },
        {
            title: "Departuring time",
            dataIndex: "departuretime",
            key: "departuretime"
        },
        {
            title: "Delete",
            dataIndex: "Delete",
            render: (text, res) =>
                dataItems.length >= 1 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(res.key)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                ) : null
        }
    ];

    const dataItems = props.departure.map(res => {
        return {
            key: res.id,
            airport: res.airport,
            airplane: res.airplane,
            departuretime: res.departuretime
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
            <Table columns={columns} dataSource={dataItems} />
        </Fragment>
    );
}

export default ClientComponent;
