import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import Main from 'page/main';
import 'index.css';


/* <div>
  <p>这是主页</p>
  <div className="diag" onBlur={hidemenu} onClick={about} tabIndex="0">关于我们</div>
  <button onClick={() => open('http://localhost:3000/detail?id=0')}>open</button>
  <button onClick={() => open('/detail?id=0')}>open</button>
  <button onClick={() => open('detail?id=0')}>open</button>
  <button onClick={() => go('http://localhost:3000/detail?id=0')}>go</button>
  <button onClick={() => go('/detail?id=0')}>go</button>
  <button onClick={() => go('detail?id=0')}>go</button>
  <button onClick={show}>loading</button>
</div> */



ReactDOM.render(<App default={Main} />, document.getElementById('domRoot'));