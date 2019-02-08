import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeBlog {
          edges {
            node {
              nid
              title
              blog_teaser {
                value
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data);
      return (
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
          <h1>Blog</h1>
          {
            data.allNodeBlog.edges.map(item => (
              <div key={item.node.nid}>
                <Link to={`/post/${item.node.nid}`}><h3>{item.node.title}</h3></Link>
                {
                  item.node.blog_teaser && (
                    <p dangerouslySetInnerHTML={{__html: item.node.blog_teaser.value}} />
                  )
                }

              </div>

            ))
          }


        </Layout>
      )}
    }
  />
)

export default IndexPage
