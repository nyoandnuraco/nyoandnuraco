import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
//import Hero from '../components/hero'
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import styles from "./index.module.css";
import logo from '../components/nyoandnuralogo.png'
class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    //const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <br />
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>
            <h1 className={styles.landingheader}>
              NYO & <br />
              NURA <br/> COMPANY
            </h1>
           
          </div>
          <div className="wrapper">
          <p id={styles.abvfldcpy} className={"article-list"}>Must have top notch maintainable and custom made to fit your business needs.</p></div>
          <button id={styles.maincta} className="btn text-white btn-lg">
              Shop Now
            </button><br/><br/>
          <div className="wrapper">
            <h2 className="section-headline">Best Deals</h2>
            <br/><br/><br/><br/><br/><br/>
            <p id={styles.psubheader} className="article-list">
              Free website maintenence for two months included with purchase of
              Neldo or Neldo Champ Packages
            </p><br/><br/>
            <button id={styles.secondarycta} className="btn btn-lg">
              Shop Now
            </button>
          </div>
        
            <br/>
            <div className="wrapper">
            <h2 className="section-headline">Our Clients</h2>
            <br/><br/><br/><br/><br/><br/>
            <p id={styles.pclientcpy} className="article-list">A few of our customers...
            </p><br/>
<img className={styles.clientlogo} alt="logo" src={logo} />
<img className={styles.clientlogo} alt="logo" src={logo} />
<img className={styles.clientlogo} alt="logo" src={logo} />
<img className={styles.clientlogo} alt="logo" src={logo} />
<br/><br/><br/><br/><br/><br/>
            <button id={styles.secondarycta} className="btn btn-lg">
            View More
            </button>
            <br/>
          </div>
     
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <br/><br/><br/><br/><br/><br/>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
            <button id={styles.secondarycta} className="btn btn-lg">
            View More
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
