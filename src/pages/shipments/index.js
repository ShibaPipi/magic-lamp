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

  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    // render: text => <a href="">{text}</a>,
  }, {
    title: 'reference_no',
    dataIndex: 'reference_no',
    key: 'reference_no',
  }, {
    title: 'order_no',
    dataIndex: 'order_no',
    key: 'order_no',
  }, {
    title: 'contract_no',
    dataIndex: 'contract_no',
    key: 'contract_no',
  }, {
    title: 'order_date',
    dataIndex: 'order_date',
    key: 'order_date',
  }, {
    title: 'supplier_name',
    dataIndex: 'supplier_name',
    key: 'supplier_name',
  }, {
    title: 'product_name',
    dataIndex: 'product_name',
    key: 'product_name',
  }, {
    title: 'product_quantity',
    dataIndex: 'product_quantity',
    key: 'product_quantity',
  }, {
    title: 'unit',
    dataIndex: 'unit',
    key: 'unit',
  }, {
    title: 'pack_specification',
    dataIndex: 'pack_specification',
    key: 'pack_specification',
  }, {
    title: 'pack_net',
    dataIndex: 'pack_net',
    key: 'pack_net',
  }, {
    title: 'pack_weight',
    dataIndex: 'pack_weight',
    key: 'pack_weight',
  }, {
    title: 'pack_quantity',
    dataIndex: 'pack_quantity',
    key: 'pack_quantity',
  }, {
    title: 'total_net',
    dataIndex: 'total_net',
    key: 'total_net',
  }, {
    title: 'total_weight',
    dataIndex: 'total_weight',
    key: 'total_weight',
  }, {
    title: 'is_pallet',
    dataIndex: 'is_pallet',
    key: 'is_pallet',
  }, {
    title: 'pallet_quantity',
    dataIndex: 'pallet_quantity',
    key: 'pallet_quantity',
  }, {
    title: 'total_volume',
    dataIndex: 'total_volume',
    key: 'total_volume',
  }, {
    title: 'delivery_date',
    dataIndex: 'delivery_date',
    key: 'delivery_date',
  }, {
    title: 'forwarder_name',
    dataIndex: 'forwarder_name',
    key: 'forwarder_name',
  }, {
    title: 'is_paid',
    dataIndex: 'is_paid',
    key: 'is_paid',
  }, {
    title: 'pay_date',
    dataIndex: 'pay_date',
    key: 'pay_date',
  }, {
    title: 'transit_state',
    dataIndex: 'transit_state',
    key: 'transit_state',
  }, {
    title: 'created_at',
    dataIndex: 'created_at',
    key: 'created_at',
  }, {
    title: 'Operation',
    key: 'operation',
    render: (text, record) => (
      <span className={styles.operation}>
          <ShipmentModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </ShipmentModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
    ),
  }];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <ShipmentModal record={{}} onOk={createHandler}>
            <Button type="primary">Create Shipment</Button>
          </ShipmentModal>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
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
