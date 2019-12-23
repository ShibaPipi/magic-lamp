import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './purchases.less';
import { PAGE_SIZE } from './constants';
import PurchaseModal from './components/PurchaseModal';

function Purchases({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'purchases/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/purchases',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    dispatch({
      type: 'purchases/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'purchases/create',
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
    title: 'product_standard',
    dataIndex: 'product_standard',
    key: 'product_standard',
  }, {
    title: 'product_quantity',
    dataIndex: 'product_quantity',
    key: 'product_quantity',
  }, {
    title: 'unit',
    dataIndex: 'unit',
    key: 'unit',
  }, {
    title: 'price_yuan',
    dataIndex: 'price_yuan',
    key: 'price_yuan',
  }, {
    title: 'price_dollar',
    dataIndex: 'price_dollar',
    key: 'price_dollar',
  }, {
    title: 'refund_rate',
    dataIndex: 'refund_rate',
    key: 'refund_rate',
  }, {
    title: 'pay_type',
    dataIndex: 'pay_type',
    key: 'pay_type',
  }, {
    title: 'delivery_date',
    dataIndex: 'delivery_date',
    key: 'delivery_date',
  }, {
    title: 'total_price_yuan',
    dataIndex: 'total_price_yuan',
    key: 'total_price_yuan',
  }, {
    title: 'total_price_dollar',
    dataIndex: 'total_price_dollar',
    key: 'total_price_dollar',
  }, {
    title: 'is_paid',
    dataIndex: 'is_paid',
    key: 'is_paid',
  }, {
    title: 'pay_date',
    dataIndex: 'pay_date',
    key: 'pay_date',
  }, {
    title: 'created_at',
    dataIndex: 'created_at',
    key: 'created_at',
  }, {
    title: 'Operation',
    key: 'operation',
    render: (text, record) => (
      <span className={styles.operation}>
          <PurchaseModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </PurchaseModal>
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
          <PurchaseModal record={{}} onOk={createHandler}>
            <Button type="primary">Create Purchase</Button>
          </PurchaseModal>
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
  const { list, total, page } = state.purchases;

  return {
    list,
    total,
    page,
    loading: state.loading.models.purchases,
  };
})(Purchases);
