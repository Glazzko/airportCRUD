import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex]
        });
    };

    const save = async e => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log("Save failed:", errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`
                    }
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

class CompanyTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: "Company code",
                dataIndex: "code",
                key: "code",
                width: "30%",
                editable: true
            },
            {
                title: "Departure airplane name",
                dataIndex: "airplane",
                key: "airplane",
                width: "30%",
                editable: true
            },
            {
                title: "Airport",
                dataIndex: "airport",
                key: "airport",
                width: "30%",
                editable: true
            },

            {
                title: "Delete",
                dataIndex: "operation",
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => this.handleDelete(record.key)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null
            }
        ];
        this.state = {
            dataSource: [
                {
                    key: "0",
                    code: "014654",
                    airplane: "Boeing 787",
                    airport: "Kaunas International Airport"
                },
                {
                    key: "1",
                    code: "016164",
                    airplane: "Boeing 787",
                    airport: "Vilnius International Airport"
                },
                {
                    key: "2",
                    code: "010464",
                    airplane: "Boeing 787",
                    airport: "Palanga International Airport"
                },
                {
                    key: "3",
                    code: "050414",
                    airplane: "Boeing 787",
                    airport: "Šiauliai International Airport"
                },
                {
                    key: "4",
                    code: "05144",
                    airplane: "Boeing 787",
                    airport: "Klaipėda Airport"
                }
            ]
        };
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key)
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData
        });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell
            }
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave
                })
            };
        });
        return (
            <div>
                <Table
                    components={components}
                    rowClassName={() => "editable-row"}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

export default CompanyTable;
