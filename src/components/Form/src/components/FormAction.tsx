/*
 * @Author: zz
 * @Date: 2021-06-28 17:22:48
 * @LastEditors: weizheng
 * @LastEditTime: 2021-07-02 18:28:05
 */
import React from 'react';
import { Col, Form, Button, Space } from 'antd';
import { FormActionProps } from '../types/form';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const FormAction: React.FC<FormActionProps> = (props) => {
  const {
    resetAction,
    resetButtonOptions,
    submitButtonOptions,
    actionColOpt,
    colStyle = { textAlign: 'rigth' },
    showResetButton = true,
    showSubmitButton = true,
    showAdvancedButton = false,
    isAdvanced,
    advancedAction,
    advancedButtonOptions,
    submitAction,
  } = props;
  const renderAdvancedButton = () => {
    return (
      <Button type="link" size="small" onClick={advancedAction} {...advancedButtonOptions}>
        {isAdvanced ? <UpOutlined /> : <DownOutlined />}
        {isAdvanced ? '收起' : '打开'}
      </Button>
    );
  };
  return (
    <Col {...actionColOpt} style={colStyle}>
      <Form.Item>
        <Space>
          {showResetButton && (
            <Button type="default" onClick={resetAction} {...resetButtonOptions}>
              {resetButtonOptions && resetButtonOptions.text}
            </Button>
          )}
          {showSubmitButton && (
            <Button type="primary" onClick={submitAction} {...submitButtonOptions}>
              {submitButtonOptions && submitButtonOptions.text}
            </Button>
          )}
          {showAdvancedButton && renderAdvancedButton()}
        </Space>
      </Form.Item>
    </Col>
  );
};
export default FormAction;
