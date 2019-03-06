import React, { Component } from 'react';
import './index.css';

export default class Quote extends Component {
  constructor(p) {
    super(p);
    this.state = {
      quotes: [
        { content: '程序员绝不说NO', author: '岩田聪' },
        {
          content: '在我看到我说过什么之前，我怎么知道我自己是怎么想的？',
          author: 'E.M.福斯特《小说面面观》',
        },
      ],
      quote: {},
    };
  }

  componentWillMount() {
    let quotes = this.state.quotes;
    let l = quotes.length;
    let r = Math.floor(l * Math.random());
    let newQuote = this.state.quotes[r];
    this.setState({
      quote: newQuote,
    });
  }

  render() {

    return (
      <div className="quote">
        <div className="quote-content">{this.state.quote.content}</div>
        <div className="quote-author">{this.state.quote.author}</div>
      </div>
    );
  }
}
