import React, { Component } from 'react';
import './index.css';

export default class Playground extends Component {
  render() {
    return (
      <div>
        游乐场
        <ul className="playground-list">
          <li className="playground-list-itme">
            <a href="/api/playground/homewardJourney">
              <img
                alt="游戏预览"
                src="/api/playground/homewardJourney/gif.gif"
              />
              归途
            </a>
          </li>
          <li className="playground-list-itme">
            <a href="/api/playground/gobang">
              <img alt="游戏预览" src="/api/playground/gobang/gif.gif" />
              五子棋
            </a>
          </li>
          <li className="playground-list-itme">
            <a href="/api/playground/homewardJourney">
              <img
                alt="游戏预览"
                src="/api/playground/homewardJourney/gif.gif"
              />
              markdown编辑器
            </a>
          </li>
          <li className="playground-list-itme">
            <img alt="游戏预览" src="/api/playground/crawler/gif.gif" />
            简易爬虫(施工中)
          </li>
          <li className="playground-list-itme">
            <img alt="游戏预览" src="/api/playground/fight/gif.gif" />
            以前的java玩具项目移植web(施工中)
          </li>
        </ul>
      </div>
    );
  }
}
