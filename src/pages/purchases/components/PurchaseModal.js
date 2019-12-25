import { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class PurchaseEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const {
      reference_no,
      order_no,
      contract_no,
      order_date,
      supplier_name,
      product_name,
      product_standard,
      product_quantity,
      unit,
      price_yuan,
      price_dollar,
      refund_rate,
      pay_type,
      delivery_date,
      total_price_yuan,
      total_price_dollar,
      is_paid,
      pay_date
    } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          {children}
        </span>
        <Modal
          title="Create Purchase"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal="true" onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="参考号码"
            >
              {
                getFieldDecorator('reference_no', {
                  initialValue: reference_no,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="订单号码"
            >
              {
                getFieldDecorator('order_no', {
                  initialValue: order_no,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="合同号码"
            >
              {
                getFieldDecorator('contract_no', {
                  initialValue: contract_no,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="订单日期"
            >
              {
                getFieldDecorator('order_date', {
                  initialValue: order_date,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="供应商名称"
            >
              {
                getFieldDecorator('supplier_name', {
                  initialValue: supplier_name,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="产品名称"
            >
              {
                getFieldDecorator('product_name', {
                  initialValue: product_name,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="产品标准"
            >
              {
                getFieldDecorator('product_standard', {
                  initialValue: product_standard,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="数量"
            >
              {
                getFieldDecorator('product_quantity', {
                  initialValue: product_quantity,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单位"
            >
              {
                getFieldDecorator('unit', {
                  initialValue: unit,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单价（人民币）"
            >
              {
                getFieldDecorator('price_yuan', {
                  initialValue: price_yuan,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单价（美元）"
            >
              {
                getFieldDecorator('price_dollar', {
                  initialValue: price_dollar,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="退税率"
            >
              {
                getFieldDecorator('refund_rate', {
                  initialValue: refund_rate,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="付款方式"
            >
              {
                getFieldDecorator('pay_type', {
                  initialValue: pay_type,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="交货期"
            >
              {
                getFieldDecorator('delivery_date', {
                  initialValue: delivery_date,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="总价（人民币）"
            >
              {
                getFieldDecorator('total_price_yuan', {
                  initialValue: total_price_yuan,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="总价（美元）"
            >
              {
                getFieldDecorator('total_price_dollar', {
                  initialValue: total_price_dollar,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="是否付款"
            >
              {
                getFieldDecorator('is_paid', {
                  initialValue: is_paid,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="付款日期"
            >
              {
                getFieldDecorator('pay_date', {
                  initialValue: pay_date,
                })(<Input/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(PurchaseEditModal);
