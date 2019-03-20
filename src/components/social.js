import React from 'react';
import { StaticQuery, graphql } from "gatsby"

const Social = () => (
<StaticQuery
	query={graphql`
      {
  allSocialJson {
    edges{
      node {
        id
        title
        link
        icon
      }
    }
  }
}
    `}
	render={data => (
	<ul className="list-group list-group-horizontal list-group-flush">
		{data.allSocialJson.edges.map(social => (
			<a key={social.node.id} href={social.node.link} title={social.node.title} className="list-group-item bg-transparent list-group-item-action text-center flex-fill">
				<i className={social.node.icon} />
			</a>
		))}
	</ul>)}
/>
)

export default Social;
