import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
//import Hero from '../components/hero'
import { Link } from "gatsby";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import styles from "./index.module.css";
import logo from "../components/nyoandnuralogo.png";
import bgimg from "./AdobeStock_126507566.jpeg";
var cursor;
class RootIndex extends React.Component {
  componentDidMount(){
   cursor = document.getElementById('cursor');
console.log(cursor);
  }
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");

// play with these
var settings = {
  colorChangeSpeedFactor: .01, // how fast does the color changes? Lower is slower, exponential
  trailLength: 1000, // how long is the trail?
  diameter: 30, // how wide is the spray mark?
  fadeStart: 0 // where does the trail start fading out? percentage along itself
}
var __meta_settings__ = {
  disabled: true
}



// just some dummy data to make a not blank initial page
var cursorTrail = JSON.parse(`[{"hue":311.454399995273,"speed":7.0710678118654755,"x":157,"y":131},{"hue":313.1217999965884,"speed":4.242640687119285,"x":160,"y":128},{"hue":314.7891999979038,"speed":7.211102550927978,"x":164,"y":122},{"hue":316.4565999992192,"speed":5.385164807134504,"x":166,"y":117},{"hue":318.1240000005346,"speed":14.035668847618199,"x":167,"y":103},{"hue":319.7913999960292,"speed":10.04987562112089,"x":166,"y":93},{"hue":321.4587999973446,"speed":8.54400374531753,"x":163,"y":85},{"hue":323.12619999866,"speed":0,"x":163,"y":85},{"hue":324.7935999999754,"speed":9.219544457292887,"x":161,"y":76},{"hue":326.46099999547005,"speed":6.082762530298219,"x":160,"y":70},{"hue":328.12839999678545,"speed":3.1622776601683795,"x":159,"y":67},{"hue":329.79579999810085,"speed":3,"x":159,"y":64},{"hue":331.46319999941625,"speed":2,"x":159,"y":62},{"hue":334.7979999962263,"speed":2.8284271247461903,"x":161,"y":60},{"hue":336.4653999975417,"speed":4.123105625617661,"x":165,"y":59},{"hue":338.1327999988571,"speed":6,"x":171,"y":59},{"hue":339.8002000001725,"speed":5,"x":176,"y":59},{"hue":341.4675999956671,"speed":9,"x":185,"y":59},{"hue":343.1349999969825,"speed":8.06225774829855,"x":193,"y":60},{"hue":344.8023999982979,"speed":8.54400374531753,"x":201,"y":63},{"hue":346.4697999996133,"speed":7.280109889280518,"x":208,"y":65},{"hue":348.13719999510795,"speed":6.708203932499369,"x":214,"y":68},{"hue":349.80459999642335,"speed":5.0990195135927845,"x":219,"y":69},{"hue":351.47199999773875,"speed":3.1622776601683795,"x":222,"y":70},{"hue":353.13939999905415,"speed":3,"x":225,"y":70},{"hue":354.80680000036955,"speed":2,"x":227,"y":70},{"hue":356.4741999958642,"speed":5.385164807134504,"x":232,"y":68},{"hue":358.1415999971796,"speed":3.605551275463989,"x":234,"y":65},{"hue":359.808999998495,"speed":6.082762530298219,"x":235,"y":59},{"hue":1.4763999998103827,"speed":5.0990195135927845,"x":236,"y":54},{"hue":3.1437999953050166,"speed":4,"x":236,"y":50},{"hue":4.811199996620417,"speed":5,"x":236,"y":45},{"hue":6.478599997935817,"speed":7.810249675906654,"x":231,"y":39},{"hue":8.145999999251217,"speed":9.219544457292887,"x":224,"y":33},{"hue":9.813400000566617,"speed":11.180339887498949,"x":214,"y":28},{"hue":11.48079999606125,"speed":11.180339887498949,"x":204,"y":23},{"hue":13.14819999737665,"speed":12.649110640673518,"x":192,"y":19},{"hue":14.81559999869205,"speed":0,"x":192,"y":19},{"hue":16.48300000000745,"speed":7.280109889280518,"x":185,"y":17},{"hue":18.150399995502084,"speed":10.198039027185569,"x":175,"y":15},{"hue":19.817799996817484,"speed":15.297058540778355,"x":160,"y":12},{"hue":21.485199998132885,"speed":0,"x":160,"y":12},{"hue":23.152599999448285,"speed":8.06225774829855,"x":152,"y":11},{"hue":24.81999999494292,"speed":5,"x":147,"y":11},{"hue":26.48739999625832,"speed":6,"x":141,"y":11},{"hue":28.15479999757372,"speed":7,"x":134,"y":11},{"hue":29.82219999888912,"speed":6.082762530298219,"x":128,"y":12},{"hue":31.48960000020452,"speed":6.324555320336759,"x":122,"y":14},{"hue":33.15699999569915,"speed":7.280109889280518,"x":115,"y":16},{"hue":34.82439999701455,"speed":10.295630140987,"x":106,"y":21},{"hue":36.49179999832995,"speed":5.830951894845301,"x":101,"y":24},{"hue":38.15919999964535,"speed":8.54400374531753,"x":93,"y":27},{"hue":39.826599995139986,"speed":7.810249675906654,"x":87,"y":32},{"hue":41.493999996455386,"speed":9.219544457292887,"x":80,"y":38},{"hue":43.161399997770786,"speed":5.656854249492381,"x":76,"y":42},{"hue":44.828799999086186,"speed":12.041594578792296,"x":67,"y":50},{"hue":46.496200000401586,"speed":3.605551275463989,"x":65,"y":53},{"hue":48.16359999589622,"speed":0,"x":65,"y":53},{"hue":49.83099999721162,"speed":4.242640687119285,"x":62,"y":56},{"hue":51.49839999852702,"speed":4.47213595499958,"x":60,"y":60},{"hue":53.16579999984242,"speed":5.0990195135927845,"x":59,"y":65},{"hue":54.833199995337054,"speed":6.324555320336759,"x":57,"y":71},{"hue":56.500599996652454,"speed":6.082762530298219,"x":56,"y":77},{"hue":58.167999997967854,"speed":7,"x":56,"y":84},{"hue":59.835399999283254,"speed":4,"x":56,"y":88},{"hue":61.502800000598654,"speed":3,"x":56,"y":91},{"hue":63.17019999609329,"speed":5.385164807134504,"x":61,"y":93},{"hue":64.83759999740869,"speed":9.486832980505138,"x":70,"y":96},{"hue":66.50499999872409,"speed":8,"x":78,"y":96},{"hue":68.17240000003949,"speed":13,"x":91,"y":96},{"hue":69.83979999553412,"speed":14,"x":105,"y":96},{"hue":71.50719999684952,"speed":11,"x":116,"y":96},{"hue":73.17459999816492,"speed":0,"x":116,"y":96},{"hue":74.84199999948032,"speed":10,"x":126,"y":96},{"hue":76.50939999497496,"speed":7,"x":133,"y":96},{"hue":78.17679999629036,"speed":7.0710678118654755,"x":140,"y":97},{"hue":79.84419999760576,"speed":2.23606797749979,"x":142,"y":98},{"hue":81.51159999892116,"speed":2.8284271247461903,"x":144,"y":100},{"hue":83.17900000023656,"speed":3.605551275463989,"x":146,"y":103},{"hue":84.84639999573119,"speed":5.0990195135927845,"x":147,"y":108},{"hue":86.51379999704659,"speed":7.280109889280518,"x":149,"y":115},{"hue":89.84859999967739,"speed":24.515301344262525,"x":144,"y":139},{"hue":91.51599999517202,"speed":15.231546211727817,"x":138,"y":153},{"hue":93.18339999648742,"speed":11.661903789690601,"x":132,"y":163},{"hue":94.85079999780282,"speed":8.54400374531753,"x":129,"y":171},{"hue":96.51819999911822,"speed":4.47213595499958,"x":127,"y":175},{"hue":98.18560000043362,"speed":2,"x":127,"y":177},{"hue":101.52039999724366,"speed":1,"x":127,"y":178},{"hue":103.18779999855906,"speed":1,"x":127,"y":179},{"hue":104.85519999987446,"speed":25.179356624028344,"x":152,"y":182},{"hue":106.52259999536909,"speed":23.194827009486403,"x":175,"y":185},{"hue":109.85739999799989,"speed":16.0312195418814,"x":191,"y":186},{"hue":113.19220000063069,"speed":24.331050121192877,"x":215,"y":190},{"hue":119.86180000007153,"speed":12.36931687685298,"x":227,"y":193},{"hue":123.19659999688156,"speed":4.47213595499958,"x":231,"y":195},{"hue":126.53139999951236,"speed":1,"x":232,"y":195},{"hue":129.8661999963224,"speed":1,"x":233,"y":195},{"hue":131.5335999976378,"speed":0,"x":233,"y":195},{"hue":133.2009999989532,"speed":0,"x":233,"y":195},{"hue":134.8684000002686,"speed":0,"x":233,"y":195}]`);

// keep track of where the cursor is
var cursorPos = {
  x: -100, // start outside the screen
  y: -100
};

function getPos(event) {
  return {
    x: event.pageX,
    y: event.pageY
  }
}
// can't get the mouse position outside of events, so cache it in the cursorPos object
document.addEventListener('mousemove', function(e) {
  cursorPos = getPos(e);
});
document.addEventListener('touchmove', function(e) {
  cursorPos = getPos(e.changedTouches[0]); // no multitouch support (yet? 😜)
  e.preventDefault(); // prevent touch scrolling
});

// "hide" the cursor by moving it off screen
function goAway(e) {
  cursorPos.x = -1000;
  cursorPos.y = -1000;
}
document.addEventListener('mouseleave', goAway);
document.addEventListener('touchend', goAway);

document.addEventListener('click', function(e) {
  console.log(JSON.stringify(cursorTrail));
});

function frame(time) {
  var hue = `$(55,55,55,55%)`;
  
  cursorTrail.push(Object.assign({
    hue: hue,
    speed: cursorTrail.length <= 1 ? 0 : ((pos, lastPos) => {
      // distance between points ~ speed. Might be nice to smooth this by averaging over the last few points
      return Math.sqrt(Math.pow(lastPos.x - pos.x, 2) + Math.pow(lastPos.y - pos.y, 2));
    })(cursorPos, cursorTrail[cursorTrail.length - 1])
  }, cursorPos));
  
  // keep popping off the first one
  // nice little following effect, plus your browser would probably die if everything was kept
  if (cursorTrail.length > settings.trailLength) {
    cursorTrail.shift();
  }

  // follow the mouse!
  cursor.style.top = `${cursorPos.y}px`;
  cursor.style.left = `${cursorPos.x}px`;
  
  // make it look like the circle is solid  
  cursor.style.backgroundColor = `hsl(255, 50%, 50%)`;;

  // generate a trail of shadows
  cursor.style.boxShadow = cursorTrail.map((pos, i) => {
    const offsetX = pos.x - cursorPos.x;
    const offsetY = pos.y - cursorPos.y;
    const age = (settings.trailLength - i) / settings.trailLength;
    const fadeOut = age < settings.fadeStart ? 0 : Math.pow(4 * (age - settings.fadeStart), 2); 
    const color = `hsla(0, 50%, 50%, 100%)`;
    // return `${offsetX}px ${offsetY}px ${pos.speed + 1}px ${age * settings.diameter + settings.diameter}px ${color}`;
    return `${offsetX}px ${offsetY}px ${pos.speed + 1}px ${settings.diameter}px white`;
  }).reverse().join(', ');

  window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);

console.log('initialized');
    return (
      
      <Layout location={this.props.location}>
        <br />
        <div style={{ background: "#fff" }}>
      
  
          <Helmet title={siteTitle} />
          <div className={styles.hero}>
          <div id='cursor' style={{ display: "block", position: "absolute", height:"2px", width: "2px", borderRadius: "ceil(2px / 2)", backgroundColor: "transparent", top: "-100px", left: "-100px",zIndex:"2",position:"absolute" }}></div>
          <h1 className={styles.landingheader}>
          <span> </span>
              <span>N</span>
              <span>Y</span>
              <span>O</span> 
              <span> </span>
              <span>&</span>
              <span> </span>
              <span>NURAH</span>  
              <span> </span>
              <span>LLC</span>
              <span> </span>
            </h1>
        
          <img className={styles.landingbgimg} src={bgimg} width="100%" height="100%"/>
          <Link className={styles.mainctawrapper} to="/shop/">
            <button id={styles.maincta} className="btn text-white btn-lg">
              Shop Now
            </button>
          </Link>
          </div>
       
          <div className="wrapper">
            <p id={styles.abvfldcpy} className={"article-list"}>
              Must have top notch maintainable and custom made to fit your
              business needs.
            </p>
          </div>
         
          <br />
          <br />
          <div className="wrapper">
            <h2 className="section-headline">Best Deals</h2>

            <p id={styles.psubheader} className="article-list">
              Free website maintenence for two months included with purchase of
              Neldo or Neldo Champ Packages
            </p>
            <br />
            <br />
            <Link to="/shop/">
              <button id={styles.secondarycta} className="btn btn-lg">
                Shop Now
              </button>
            </Link>
          </div>

          <br />
          <div className="wrapper">
            <h2 className="section-headline">Our Clients</h2>

            <p id={styles.pclientcpy} className="article-list">
              A few of our customers...
            </p>
            <br />
            <img className={styles.clientlogo} alt="logo" src={logo} />
            <img className={styles.clientlogo} alt="logo" src={logo} />
            <img className={styles.clientlogo} alt="logo" src={logo} />
            <img className={styles.clientlogo} alt="logo" src={logo} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to="/ourwork/">
              <button id={styles.secondarycta} className="btn btn-lg">
                View More
              </button>
            </Link>
            <br />
          </div>

          <div className="wrapper">
            <h2 className="section-headline">Recent Articles</h2>

            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
            <Link to="/blog/">
              <button id={styles.secondarycta} className="btn btn-lg">
                View More
              </button>
            </Link>
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
