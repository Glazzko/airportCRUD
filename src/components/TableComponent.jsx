import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Input, InputNumber, Popconfirm, Form } from "antd";

const originData = [];

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`
                        }
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const TableComponent = props => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState("");

    const isEditing = record => record.key === editingKey;

    const edit = record => {
        form.setFieldsValue({
            name: "",
            age: "",
            address: "",
            ...record
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey("");
    };

    const save = async key => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    useEffect(() => {
        props.departureClicked();
        //*  console.log(props.airport);*//
    }, []);

    const dataItems = props.departure.map(res => {
        return {
            key: res.id,
            airport: res.airport,
            airplane: res.airplane,
            departuretime: res.departuretime
        };
    });

    const columns = [
        {
            title: "name",
            dataIndex: "airport",
            key: "airport",
            width: "25%",
            editable: true
        },
        {
            title: "age",
            dataIndex: "airplane",
            key: "airplane",

            width: "15%",
            editable: true
        },
        {
            title: "address",
            dataIndex: "departuretime",
            key: "departuretime",
            width: "40%",
            editable: true
        },
        {
            title: "operation",
            dataIndex: "operation",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8
                            }}
                        >
                            Save
                        </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <a
                        disabled={editingKey !== ""}
                        onClick={() => edit(record)}
                    >
                        Edit
                    </a>
                );
            }
        }
    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === "age" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            })
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell
                    }
                }}
                bordered
                dataSource={dataItems}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel
                }}
            />
        </Form>
    );
};
export default TableComponent;
