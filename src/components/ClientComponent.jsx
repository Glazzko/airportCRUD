import React, { Fragment, useState, useEffect } from "react";
import "antd/dist/antd.css";
import {
    Form,
    Input,
    Button,
    Table,
    Popconfirm,
    InputNumber,
    Select,
    Space,
    TimePicker
} from "antd";

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 7
    }
};
function ClientComponent(props) {
    const [values, setValues] = useState({});
    const handleChange = e => {
        const fieldName = e.target.id;
        const fieldValue = e.target.value;
        setValues({ ...values, [fieldName]: fieldValue });
    };

    const onFinish = values => {
        props.handleUserForm(values);
        //* console.log(values);*//
    };

    useEffect(() => {
        props.airportClicked();
        props.companyCode();

        //*  console.log(props.airport);*//
    }, []);

    const columns = [
        {
            title: "Airport name",
            dataIndex: "airport",
            key: "airport"
        },
        {
            title: "Airplane",
            dataIndex: "airplane",
            key: "airplane"
        },
        {
            title: "Company code",
            dataIndex: "code",
            key: "code"
        },
        {
            title: "Trip number",
            dataIndex: "tripnumber",
            key: "tripnumber"
        },
        {
            title: "Departure time",
            dataIndex: "departuretime",
            key: "departuretime"
        },
        {
            title: "Arrival time",
            dataIndex: "arrivaltime",
            key: "arrivaltime"
        },
        {
            title: "Arriving airport name",
            dataIndex: "arrivingairport",
            key: "arrivingairport"
        }
    ];

    const dataItems = props.airport.map(res => {
        return {
            key: res.id,
            airport: res.airport,
            airplane: res.airplane,
            code: res.code,
            tripnumber: res.tripnumber,
            departuretime: res.departuretime,
            arrivaltime: res.arrivaltime,
            arrivingairport: res.arrivingairport
        };
    });

    //*componentWillMount() {
    //* axios.get("http://localhost:3000/api/users").then(res => {
    //*  this.props.fetchData(res.data);
    //* });
    //* }

    return (
        <Fragment>
            <Form {...layout} onFinish={onFinish}>
                <p></p>

                <Form.Item
                    name="airport"
                    label="Name of the airport"
                    id="airport"
                    onChange={handleChange}
                    value={values.airport}
                >
                    <Select placeholder="Select  airport name">
                        {props.airport.map(item => {
                            return (
                                <Select.Option key={item.id}>
                                    {item.airport}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="companycode"
                    label="Company code"
                    id="companycode"
                    onChange={handleChange}
                    value={values.companycode}
                >
                    <Select placeholder="Select company code">
                        {props.code.map(item => {
                            return (
                                <Select.Option key={item.id}>
                                    {item.code}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="tripnumber"
                    label="Trip number"
                    id="tripnumber"
                    onChange={handleChange}
                    value={values.tripnumber}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name="departuretime"
                    label="Flight departure time"
                    id="departuretime"
                    onChange={handleChange}
                    value={values.departuretime}
                >
                    <TimePicker />
                </Form.Item>
                <Form.Item
                    name="airportarrival"
                    label="Arrived airport name"
                    id="airportarrival"
                    onChange={handleChange}
                    value={values.airportarrival}
                >
                    <Select placeholder="Select arrived airport name">
                        {props.airport.map(item => {
                            return (
                                <Select.Option key={item.id}>
                                    {item.airport}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="arrivaltime"
                    label="Flight arrival time"
                    id="arrivaltime"
                    onChange={handleChange}
                    value={values.arrivaltime}
                >
                    <TimePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Table columns={columns} dataSource={dataItems} />
        </Fragment>
    );
}

export default ClientComponent;
