import { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class ShipmentEditModal extends Component {

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
    const { reference_no, order_no, contract_no, order_date, supplier_name, product_name, product_quantity, unit, pack_specification, pack_net, pack_weight, pack_quantity, total_net, total_weight, is_pallet, pallet_quantity, total_volume, delivery_date, forwarder_name, is_paid, pay_date, transit_state, created_at } = this.props.record;
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
          title="Edit Shipment"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
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
              label="产品数量"
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
              label="包装规格"
            >
              {
                getFieldDecorator('pack_specification', {
                  initialValue: pack_specification,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="包装净重"
            >
              {
                getFieldDecorator('pack_net', {
                  initialValue: pack_net,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="包装毛重"
            >
              {
                getFieldDecorator('pack_weight', {
                  initialValue: pack_weight,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="包装数量"
            >
              {
                getFieldDecorator('pack_quantity', {
                  initialValue: pack_quantity,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="总净重"
            >
              {
                getFieldDecorator('total_net', {
                  initialValue: total_net,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="总毛重"
            >
              {
                getFieldDecorator('total_weight', {
                  initialValue: total_weight,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="是否托盘"
            >
              {
                getFieldDecorator('is_pallet', {
                  initialValue: is_pallet,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="托盘数量"
            >
              {
                getFieldDecorator('pallet_quantity', {
                  initialValue: pallet_quantity,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="总体积"
            >
              {
                getFieldDecorator('total_volume', {
                  initialValue: total_volume,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="交货日期"
            >
              {
                getFieldDecorator('delivery_date', {
                  initialValue: delivery_date,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="货代名称"
            >
              {
                getFieldDecorator('forwarder_name', {
                  initialValue: forwarder_name,
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
            <FormItem
              {...formItemLayout}
              label="运输状态"
            >
              {
                getFieldDecorator('transit_state', {
                  initialValue: transit_state,
                })(<Input/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="创建时间"
            >
              {
                getFieldDecorator('created_at', {
                  initialValue: created_at,
                })(<Input/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ShipmentEditModal);
