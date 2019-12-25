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

  const fieldNames  = [
    '参考号码',
    '订单号码',
    '合同号码',
    '订单日期',
    '供应商名称',
    '产品名称',
    '产品标准',
    '数量',
    '单位',
    '单价（人民币）',
    '单价（美元）',
    '退税率',
    '付款方式',
    '交货期',
    '总价（人民币）',
    '总价（美元）',
    '是否付款',
    '付款日期',
  ];

  const fields = [
    'reference_no',
    'order_no',
    'contract_no',
    'order_date',
    'supplier_name',
    'product_name',
    'product_standard',
    'product_quantity',
    'unit',
    'price_yuan',
    'price_dollar',
    'refund_rate',
    'pay_type',
    'delivery_date',
    'total_price_yuan',
    'total_price_dollar',
    'is_paid',
    'pay_date',
  ];

  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    // render: text => <a href="">{text}</a>,
    width: 50,
    fixed: 'left',
  }, {
    title: '参考号码',
    dataIndex: 'reference_no',
    key: 'reference_no',
    width: 150,
  }, {
    title: '订单号码',
    dataIndex: 'order_no',
    key: 'order_no',
    width: 150,
  }, {
    title: '合同号码',
    dataIndex: 'contract_no',
    key: 'contract_no',
    width: 150,
  }, {
    title: '订单日期',
    dataIndex: 'order_date',
    key: 'order_date',
    width: 200,
  }, {
    title: '供应商名称',
    dataIndex: 'supplier_name',
    key: 'supplier_name',
    width: 120,
  }, {
    title: '产品名称',
    dataIndex: 'product_name',
    key: 'product_name',
    width: 100,
  }, {
    title: '产品标准',
    dataIndex: 'product_standard',
    key: 'product_standard',
    width: 100,
  }, {
    title: '数量',
    dataIndex: 'product_quantity',
    key: 'product_quantity',
    width: 100,
  }, {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    width: 100,
  }, {
    title: '单价（人民币）',
    dataIndex: 'price_yuan',
    key: 'price_yuan',
    width: 150,
  }, {
    title: '单价（美元）',
    dataIndex: 'price_dollar',
    key: 'price_dollar',
    width: 150,
  }, {
    title: '退税率',
    dataIndex: 'refund_rate',
    key: 'refund_rate',
    width: 100,
  }, {
    title: '付款方式',
    dataIndex: 'pay_type',
    key: 'pay_type',
    width: 100,
  }, {
    title: '交货期',
    dataIndex: 'delivery_date',
    key: 'delivery_date',
    width: 200,
  }, {
    title: '总价（人民币）',
    dataIndex: 'total_price_yuan',
    key: 'total_price_yuan',
    width: 150,
  }, {
    title: '总价（美元）',
    dataIndex: 'total_price_dollar',
    key: 'total_price_dollar',
    width: 150,
  }, {
    title: '是否付款',
    dataIndex: 'is_paid',
    key: 'is_paid',
    width: 100,
  }, {
    title: '付款日期',
    dataIndex: 'pay_date',
    key: 'pay_date',
    width: 200,
  }, {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    fixed: 'right',
    width: 200,
  },
  // {
  //   title: 'Operation',
  //   key: 'operation',
  //   render: (text, record) => (
  //     <span className={styles.operation}>
  //         <PurchaseModal record={record} onOk={editHandler.bind(null, record.id)}>
  //           <a>Edit</a>
  //         </PurchaseModal>
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
          <PurchaseModal record={{}} onOk={createHandler}>
            <Button type="primary">Create Purchase</Button>
          </PurchaseModal>
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
  const { list, total, page } = state.purchases;

  return {
    list,
    total,
    page,
    loading: state.loading.models.purchases,
  };
})(Purchases);
