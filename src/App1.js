import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function getById(o) {
	return document.getElementById(o);
}

export function query(s, o) {
	return (o ? o : document).querySelector(s);
}

export function queryAll(s, o) {
	return (o ? o : document).querySelectorAll(s);
}

class Page404 extends React.Component {
	render() {
		return (
			<div style={{
				position: 'absolute',
				top: '40%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				textAlign: 'center'
			}}>
				<h3>模板不存在</h3>
				<Link to='/main'>返回首页</Link>
			</div>
		)
	}
};

class Default extends React.Component {
	render() {
		return null
	};
};

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Dom: null
		};
		this.data = null;
		this.url = null;
		this.path = 0;
		this.callback = false;
		this.fillState(props);
		this.default = props.default;
		this.notFound = props.notFound;
	}

	getDefault() {
		return this.default ? this.default : Default;
	}

	get404() {
		return this.notFound ? this.notFound : Page404;
	}

	fillState(a) {
		if (a) {
			this.data = a.data;
			this.path = a.path;
			this.url = a.url;
		}
	}

	loadurl(url) {
		if (url && url !== '/') {
			const path = url.substring(1);
			import("page/" + path).then(Cmm => {
				this.callback = true;
				this.setState(
					{
						Dom: Cmm.default
					}
				);
			})
				.catch(error => {
					this.callback = true;
					this.setState(
						{
							Dom: this.get404()
						}
					);
				});
		}
	}

	checkstate() {
		if (this.path !== 0) {
			let p = this.path;
			this.path = 0;
			this.loadurl(p);
		}
		else {
			if (this.data)
				this.data = null;
		}
	}

	componentDidMount() {
		this.callback = false;
		this.checkstate();
	}

	componentDidUpdate(prevProps, prevState) {
		this.callback = false;
		if (prevProps.url !== this.props.url) {
			this.fillState(this.props);
			this.checkstate();
		}
	}

	render() {
		if (this.state.Dom === null || this.props.path === '/') {
			if (this.path !== 0 && this.props.path !== '/')
				return null;
			let Dv = this.getDefault();
			return <Dv />;
		}
		if (!this.callback && this.url !== this.props.url)
			return null;
		return <this.state.Dom data={this.data} />
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.gopage = this.gopage.bind(this);
	}

	fillProp(str) {
		let data = {}, b;
		if (str && str.length > 1) {
			let li = decodeURIComponent(str.substring(1)).match(/\w+=([^&]+)/g);
			if (li) {
				li.map((k) => {
					if ((b = k.indexOf('=')) > -1)
						data[k.substring(0, b)] = k.substring(b + 1); return 0;
				});
			}
		}
		return data;
	}

	gopage(par) {
		let a = par.location;
		let path = a.pathname, data = this.fillProp(a.search);
		let url = a.pathname + a.search + a.hash;
		return <Page path={path} data={data} url={url} default={this.props.default} notFound={this.props.notFound} />
	}

	render() {
		// console.log('show app');
		return (
			<Router>
				<Route path="*" children={this.gopage} />
			</Router>
		);
	}
}

export default App;
