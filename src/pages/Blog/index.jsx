import Quote from '../../Components/Quote';
import Essay from './Essay';
import { Route, Link, Switch } from 'react-router-dom';

import React, { Component } from 'react';
import store from '../../store';
import { getBlogList } from './stroe/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.css';

class Blog extends Component {
  constructor(params) {
    super(params);
    this.state = store.getState();
  }

  componentWillMount() {
    this.props.getBlogList();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/blog/:id" component={Essay} />
          <Route path="/blog">
            <div>
              <Quote />
              <BlogList bloglist={this.state.blogList} />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapState = state => ({
  blogList: state.blogList,
});

const mapDispatch = dispatch => ({
  getBlogList() {
    dispatch(getBlogList());
  },
});
export default connect(
  mapState,
  mapDispatch,
)(withRouter(Blog));

function BlogList({ bloglist }) {
  const list = bloglist.map(item => (
    <Link key={item.id} to={'/blog/' + item.id}>
      <li className="blog-list-item">{item.title}</li>
    </Link>
  ));
  return <ul className="blog-list">{list}</ul>;
}
