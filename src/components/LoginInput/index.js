import React, {Component} from "react";
import styles from './index.module.less';
import {Form, Input, Icon} from 'antd'


class LoginInput extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

            }
        });
    };

    render() {
        const { form } = this.props;
        const {getFieldDecorator} = form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: '#FFFFFF' }} />}
                            placeholder="Username"
                            style={{marginBottom:20+'px'}}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: '#FFFFFF' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
            </Form>
        );
    }

}

export default Form.create()(LoginInput)
