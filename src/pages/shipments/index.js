import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './shipments.less';
import { PAGE_SIZE } from './constants';
import ShipmentModal from './components/ShipmentModal';

function Shipments({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'shipments/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/shipments',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    dispatch({
      type: 'shipments/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'shipments/create',
      payload: values,
    });
  }

  const fieldNames = [
    '参考号码',
    '订单号码',
    '合同号码',
    '订单日期',
    '供应商名称',
    '产品名称',
    '产品数量',
    '单位',
    '包装规格',
    '包装净重',
    '包装毛重',
    '包装数量',
    '总净重',
    '总毛重',
    '是否托盘',
    '托盘数量',
    '总体积',
    '交货日期',
    '货代名称',
    '是否付款',
    '付款日期',
    '运输状态'
  ];

  const fields = ['id', 'reference_no', 'order_no', 'contract_no', 'order_date', 'supplier_name', 'product_name', 'product_quantity', 'unit', 'pack_specification', 'pack_net', 'pack_weight', 'pack_quantity', 'total_net', 'total_weight', 'is_pallet', 'pallet_quantity', 'total_volume', 'delivery_date', 'forwarder_name', 'is_paid', 'pay_date', 'transit_state', 'created_at', 'updated_at'];

  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    // render: text => <a href="">{text}</a>,
    fixed: 'left',
    width: 50,
  }, {
    title: '参考号码',
    dataIndex: 'reference_no',
    key: 'reference_no',
    width: 200,
  }, {
    title: '订单号码',
    dataIndex: 'order_no',
    key: 'order_no',
    width: 200,
  }, {
    title: '合同号码',
    dataIndex: 'contract_no',
    key: 'contract_no',
    width: 200,
  }, {
    title: '订单日期',
    dataIndex: 'order_date',
    key: 'order_date',
    width: 200,
  }, {
    title: '供应商名称',
    dataIndex: 'supplier_name',
    key: 'supplier_name',
    width: 200,
  }, {
    title: '产品名称',
    dataIndex: 'product_name',
    key: 'product_name',
    width: 200,
  }, {
    title: '产品数量',
    dataIndex: 'product_quantity',
    key: 'product_quantity',
    width: 200,
  }, {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    width: 200,
  }, {
    title: '包装规格',
    dataIndex: 'pack_specification',
    key: 'pack_specification',
    width: 200,
  }, {
    title: '包装净重',
    dataIndex: 'pack_net',
    key: 'pack_net',
    width: 200,
  }, {
    title: '包装毛重',
    dataIndex: 'pack_weight',
    key: 'pack_weight',
    width: 200,
  }, {
    title: '包装数量',
    dataIndex: 'pack_quantity',
    key: 'pack_quantity',
    width: 200,
  }, {
    title: '总净重',
    dataIndex: 'total_net',
    key: 'total_net',
    width: 200,
  }, {
    title: '总毛重',
    dataIndex: 'total_weight',
    key: 'total_weight',
    width: 200,
  }, {
    title: '是否托盘',
    dataIndex: 'is_pallet',
    key: 'is_pallet',
    width: 200,
  }, {
    title: '托盘数量',
    dataIndex: 'pallet_quantity',
    key: 'pallet_quantity',
    width: 200,
  }, {
    title: '总体积',
    dataIndex: 'total_volume',
    key: 'total_volume',
    width: 200,
  }, {
    title: '交货日期',
    dataIndex: 'delivery_date',
    key: 'delivery_date',
    width: 200,
  }, {
    title: '货代名称',
    dataIndex: 'forwarder_name',
    key: 'forwarder_name',
    width: 200,
  }, {
    title: '是否付款',
    dataIndex: 'is_paid',
    key: 'is_paid',
    width: 200,
  }, {
    title: '付款日期',
    dataIndex: 'pay_date',
    key: 'pay_date',
    width: 200,
  }, {
    title: '运输状态',
    dataIndex: 'transit_state',
    key: 'transit_state',
    width: 100,
  }, {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    fixed: 'right',
    width: 200,
  },
    //   {
    //   title: 'Operation',
    //   key: 'operation',
    //   render: (text, record) => (
    //     <span className={styles.operation}>
    //         <ShipmentModal record={record} onOk={editHandler.bind(null, record.id)}>
    //           <a>Edit</a>
    //         </ShipmentModal>
    //         <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
    //           <a href="">Delete</a>
    //         </Popconfirm>
    //       </span>
    //   ),
    // }
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <ShipmentModal record={{}} onOk={createHandler}>
            <Button type="primary">Create Shipment</Button>
          </ShipmentModal>
        </div>
        <Table
          bordered
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
          scroll={{ x: 1500, y: 1000 }}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

export default connect((state) => {
  const { list, total, page } = state.shipments;

  return {
    list,
    total,
    page,
    loading: state.loading.models.shipments,
  };
})(Shipments);
