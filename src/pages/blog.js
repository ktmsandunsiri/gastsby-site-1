import * as React from 'react'
import Layout from './components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    console.log(data);
    return (
        <Layout pageTitle="My Blog Posts">
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                              <h2>{node?.frontmatter?.title}</h2>
                              <p>Posted: {node?.frontmatter?.date}</p>
                              <MDXRenderer>
                                  {node.body}
                              </MDXRenderer>
                        </article >
                    ))
                }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {order: ASC, fields: frontmatter___date}) {
        nodes {
          id
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          parent {
            ... on File {
              modifiedTime(formatString: "MMMM D, YYYY")
            }
          }
          body
        }     
    }
  }
`
export default BlogPage