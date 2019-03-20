import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import sadTrombone from '../sounds/sadtrombone.swf.mp3';

class NotFoundPage extends React.Component {

	componentDidMount() {
		var x = document.getElementById('sadTrombone');
		x.play();

	}

	render() {
		return (<Layout>
			<SEO title="404: Not found" />
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<audio id="sadTrombone">
                <source src={sadTrombone} type="audio/mpeg"></source>
			</audio>
        </Layout>)
	}
}

export default NotFoundPage
