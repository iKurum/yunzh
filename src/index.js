import React,{ useEffect} from 'react';
import ReactDOM from 'react-dom';
import App,{go,open,Loading}  from 'app'
import {Nav} from 'page/componet/nav'
import 'index.css'

function Index (){

  function kill(){
    console.log('index is killed');
  }

  function onmenu(e){
    let a=document.querySelector('.diag');
    if(a){
      a.style.top=e.clientY+'px';
      a.style.left=e.clientX+'px';
      a.style.display='block';
      a.focus();
    }
    console.log('menu...');
    e.preventDefault();
    e.stopPropagation();
  }

  function hidemenu(e){
    e.target.style.display='none';
  }

  function about(e){
    e.target.blur();
    console.log('关于我们');
  }

  useEffect(()=>{
    console.log('home okey ...');
    document.oncontextmenu=onmenu;
    return kill;
  },[]);

  function show(){
    Loading(true,'盼盼盼盼');
    setTimeout(() => {
      Loading();
    }, 1000);
  }
  

    return(
      <div>
        <Nav></Nav>
        <p>这是主页</p>
        <div className="diag" onBlur={hidemenu} onClick={about} tabIndex="0">关于我们</div>
        <button onClick={()=>open('http://localhost:3000/detail?id=0')}>open</button>
        <button onClick={()=>open('/detail?id=0')}>open</button>
        <button onClick={()=>open('detail?id=0')}>open</button>
        <button onClick={()=>go('http://localhost:3000/detail?id=0')}>go</button>
        <button onClick={()=>go('/detail?id=0')}>go</button>
        <button onClick={()=>go('detail?id=0')}>go</button>
        <button onClick={show}>loading</button>
        </div>
      );
    }



ReactDOM.render(<App default={Index} />, document.getElementById('domRoot'));