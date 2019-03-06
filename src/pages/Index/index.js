import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import './index.css';
import Playground from '../Playground';
import Blog from '../Blog';
import { getBlogList } from '../../pages/Blog/stroe/actionCreators';
import store from '../../store';
const { Header, Content } = Layout;

export default class Index extends Component {
  componentWillMount() {
    store.dispatch(getBlogList());
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <div className="logo">未始有物</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/blog">博客</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/playground">游乐场</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            className="index-content"
            style={{
              background: '#fff',
            }}
          >
            <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/playground" component={Playground} />
              <Redirect to="/blog" />
            </Switch>
          </Content>
        </Layout>
      </Router>
    );
  }
}
