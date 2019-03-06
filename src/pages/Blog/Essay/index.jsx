import React, { Component } from 'react';
import store from '../../../store';
import { getBlogList } from '../stroe/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ReactMarkdown = require('react-markdown');

class Essay extends Component {
  componentWillMount() {
    getBlogList();
  }

  render() {
    let id = this.props.match.params.id;
    let data = store.getState().blogList[id];

    return (
      <div className="essay">
        <h2>{data.title}</h2>
        <ReactMarkdown source={data.content} />
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
)(withRouter(Essay));
