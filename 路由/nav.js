import React from 'react';
import { Link } from "app";
import { useEffect } from 'react';

export function Nav (){

  useEffect(()=>{
    console.log('nav ++');
  });
    return(
        <div className="App">
          <Link className="abc" style={{fontSize:"12px",fontWeight:300}} to="/">Home</Link>
          <Link to="/list?id=100&page=1">list</Link>
          <Link to="/detail?id=0">detail</Link>
          <Link to="/more/about">about</Link>
          <Link to="/test">test</Link>
          <Link to="/login">login</Link>
          <Link to="/more/abo1ut">Not Found</Link>
          <Link to="/nan/index">开薪任务</Link>
          <Link to="/bf/bf">任务流</Link>
        </div>);
}