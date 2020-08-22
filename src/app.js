import React,{ useState}  from 'react';
import "app.css"

const P='/';
function Page404() {return (<h3>模板不存在</h3>);}
  
function Default() {return null;}

function E(e){return e||window.event;}

function findP(o,tag){
	tag=tag.toUpperCase();
	do{
		if(o.tagName.toUpperCase()===tag)
			return o;
	}
	while((o=o.parentNode));
	return o;
}

function aclick(e){
	e=E(e);e.preventDefault();
	go(e.target.href?e.target.href:findP(e.target,'A').href);
}

function fmData(str){
	let data={},b;
	if(str&&str.length>1){
	  let li=decodeURIComponent(str).match(/\w+=([^&]+)/g);
	  if(li){
		li.map((k)=>{
			if((b=k.indexOf('='))>-1)
				data[k.substring(0,b)]=k.substring(b+1);return 0;
		});
	  }
	}
	return data;
  }

function fmUrl(url){
	return /https?:\/\//.test(url)?url:clear((Root?Root:'')+url);
}

function clear(s){
	return s.indexOf('//')>-1?s.replace(/\/+/g,P):s;
}

function checkroot(u){
	if(Root&&u.indexOf(Root)===0)
		return u.substring(Root.length);
	return u;
}

function getPath(u){
	let reg=new RegExp(/https?:\/\//.test(u)?'/[^/]+([^?#]+)':'^/?([^?#]+)'),r;
	r=u.match(reg);
	return (r&&r.length>1)? checkroot(r[1]):'/';
}

function getSearch(u){
	let r=u.match(/\?[^#]+/);
	return r?r[0].substring(1):null;
}

function Analysis(url){
	let r={path:clear(getPath(url)),data:fmData(getSearch(url)),hash:null},ind=url.indexOf('#');
	if(ind>0){
		r.hash=fmData(url.substring(ind+1));
	}
	return r;
}

window.onpopstate=(e)=>{
	go(window.location.href);
};

let goPage=null,count=0,Target=null;
function App(props){
	let [Dom,setDom]=useState(null);
	count++;
	console.log('app --'+count);

	function goHome(r){
		return {
			app:props.default?props.default:Default,
			data:r.data,
			hash:r.hash
		}
	}

	goPage=function(r,isself){
		let cb=!!isself||(!Target)?setDom:Target;
		if(r.path&&r.path!==P){
			const path=r.path.indexOf(P)===0?r.path.substring(1):r.path;
			import("page/"+path).then(Cmm => {
				cb({app:Cmm.default,data:r.data,hash:r.hash});
			})
			.catch(() => {
				cb({app:props.notFound?props.notFound:Page404});
			});
		}
		else
		  cb(goHome(r));
	}

	if(Dom===null){
		let r=Analysis(window.location.href);
		if(r.path===P){
			Dom=goHome(r);
		}
		else{
			goPage(r);
			return null;
		}
	}
	return(<Dom.app data={Dom.data} hash={Dom.hash} />)
}

export function encodeUrl(data){
	return encodeURIComponent(data);
}

export function open(url,blank){
	url=fmUrl(url);
	if(blank)
		window.open(url);
	else
		window.location.href=url;
}

export function go(url,isself){
	url=fmUrl(url);
	if(goPage){
		window.history.pushState(null,null,url);
		goPage(Analysis(window.location.href),isself);
	}
	else
		console.error('Link必须在App中调用');
}

let LoadingObj=null;
export function Loading(show,mess){
	if(LoadingObj===null){
		let ca=function (tag,cs,inh){
			let a=document.createElement(tag);if(cs)a.className=cs;if(inh)a.innerHTML=inh;return a;
		}
		let box=ca('div','app_loading'),t=ca('div','app_loading_box'),run=ca('div','app_loading_star','<i></i><i></i>'),mess=ca('span');
		t.appendChild(run);
		t.appendChild(mess);
		box.appendChild(t);
		document.body.appendChild(box);
		LoadingObj={box:box,run:run,mess:mess};
		ca=null;
	}
	if(LoadingObj.box){
		LoadingObj.mess.innerHTML=mess?mess:'';
		LoadingObj.run.className=show?'app_loading_star app_loading_star_run':'';
		LoadingObj.box.style.display=show?'flex':'none';
	}
}

export function setTarget(newtarget){
	Target=newtarget;
}

export function Link(props){
	let p=Object.assign({}, props);
	if(p.onClick){
		let ol=p.onClick;
		p.onClick=(e)=>{
			e=E(e);
			if(ol(e)!==false)
				aclick(e);
			else
				e.preventDefault();
		};
	}
	else
		p.onClick=aclick;
	if(p.to)
		p.href=fmUrl(p.to);
	delete p.to;
	return React.createElement('a',p);
}

let Root=null;
Root&&(Root=clear(P+Root+P));
export default App;