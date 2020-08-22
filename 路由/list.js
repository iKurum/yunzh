import React from 'react';
import 'css/list.css';
import { Link} from 'app'
import {Nav} from 'page/componet/nav'

 
function List (props){

		return(
			<div>
				<Nav></Nav>
				<h3>This is List!</h3>
				<div>传入数据：{JSON.stringify(props.data||{})}</div>
				<Link to="/">返回首页</Link>
				<ul>
					<li><Link to="/detail?id=1">习近平将主持中非团结抗疫特别峰会</Link></li>
					<li><Link to="/detail?id=2">稳住基本盘 中国经济持续复苏</Link></li>
					<li><Link to="/detail?id=3">中非贸易共享电商红利  国际合作战胜疫情唯一途径</Link></li>
					<li><Link to="/detail?id=4">友谊之船行稳致远 你是否看懂了美国的用心？</Link></li>
					<li><Link to="/detail?id=5">《求是》:扎实推动民法典实施  读懂总书记"公开课"</Link></li>
					<li><Link to="/detail?id=6">中国政府积极控制疫情 不认为北京疫情失控</Link></li>
					<li><Link to="/detail?id=7">诬蔑中国“散播虚假信息” 外交部回应 推特清楚自己多虚伪</Link></li>
				</ul>
				<hr />
				<div><input type="button" value="离开" onClick={()=>{ window.location.href="http://www.baidu.com/";} }/></div>
			</div>
		);
}
 
export default List;