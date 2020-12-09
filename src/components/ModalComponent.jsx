import React, { Fragment, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Modal } from "antd";

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 7
    }
};
function ModalComponent(props) {
    const [values, setValues] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = e => {
        const fieldName = e.target.id;
        const fieldValue = e.target.value;
        setValues({ ...values, [fieldName]: fieldValue });
    };
    const onFinish = values => {
        props.handleUserForm(values);
        console.log(values);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Fragment>
            <div>
                <div>
                    <Button type="primary" onClick={showModal}>
                        Modal
                    </Button>
                </div>
                <Modal
                    title="Form"
                    onCancel={handleCancel}
                    visible={isModalVisible}
                    onOk={onFinish}
                >
                    <Form {...layout}>
                        <Form.Item
                            name="airport"
                            label="Name of the airport                    "
                            id="airport"
                            onChange={handleChange}
                            value={values.airport}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        ></Form.Item>
                    </Form>
                </Modal>
            </div>
        </Fragment>
    );
}

export default ModalComponent;
