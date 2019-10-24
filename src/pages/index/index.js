import { connect } from 'dva';
import Link from "umi/link";
import { Row, Col, Affix, Carousel, Card, Icon, Avatar, BackTop } from 'antd';
import Menu from './components/Menu'
import styles from './index.less';

const { Meta } = Card;

function Index({dispatch, list, menuAffixed}) {
  function menuAffixedHandler() {
    dispatch({
      type: 'index/changeMenuAffixed'
    })
  }

  return (
    <Row>
      <Row className={styles.title} gutter={[16, 16]} type="flex" justify="center" align="middle">
        <Col>
          <img className={styles.logo} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
        </Col>
        <Col>
          <div>Doge Blog</div>
        </Col>
      </Row>
      <Affix
        offsetTop={0}
        onChange={menuAffixedHandler}
      >
        <Menu menuAffixed={menuAffixed} />
      </Affix>
      <Carousel style={{ marginBottom: '70px' }} autoplay>
        <div className={styles.slickSlide}>
          <h3>1</h3>
        </div>
        <div className={styles.slickSlide}>
          <h3>2</h3>
        </div>
        <div className={styles.slickSlide}>
          <h3>3</h3>
        </div>
        <div className={styles.slickSlide}>
          <h3>4</h3>
        </div>
      </Carousel>
      <Row
        type="flex"
        justify="center"
        align="top"
      >
        <Col className={`${styles.leftContent} ${styles.col}`} span={12}>
          {list.map((item, index) => {
            if (index < 4) {
              return (
                <Link to='' key={index}>
                  <Card
                    className={styles.postCard}
                    hoverable
                    cover={<img alt="example" src="https://www.17sucai.com/preview/1324218/2018-08-10/3133/images/blog/2.jpg"/>}
                    style={{marginBottom:'40px'}}
                  >
                    <Meta title={item.title} description="" />
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      style={{ paddingTop: '45px' }}
                    />
                  </Card>
                </Link>
              )
            }
          })}
        </Col>
        <Col className={`${styles.rightContent} ${styles.col}`} span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
      <BackTop />
    </Row>
  );
}

export default connect((state) => {
  const { list, menuAffixed } = state.index;

  return { list, menuAffixed };
})(Index);
