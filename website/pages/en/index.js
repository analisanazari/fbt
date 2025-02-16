/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('fbt.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={siteConfig.repoUrl}>Try It Out</Button>
            {/*
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
            */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Compose translatable text inline with your source: <br />' +
          '<MarkdownBlock>\n```\n' +
          '<button>\n  <fbt desc="Canonical intro text">\n    ' +
          'Hello, World!\n  </fbt>\n</button>\n' +
          '```\n</MarkdownBlock>\n',
        title: 'Inlined translatable text',
      },
      {
        content: 'Collect your translatable source texts with ease: <br />' +
          '<MarkdownBlock>\n```\n' +
          '{\n' +
          '  "hashToText":{\n' + // ` + <br />' +
          '    "ni7kanCF2RfGZAS9mDOToQ==":\n' +
          '     "Hello, World!"\n' + //`<br />' +
          '  },\n' +
          '  ...,\n' +
          '  "desc": "Canonical intro text"\n}\n' +
          '```\n</MarkdownBlock>\n',
        title: 'Seamless text collection',
      },
      {
        content: 'Easily pull translations into your app' +
          '<MarkdownBlock>\n```\n' +
          '<button>Hello, Byd!</button>\n' +
          '```\n</MarkdownBlock>\n',
        title: 'Integrated translations',
      },
    ]}
  </Block>
);

// const LearnHow = () => (
//   <Block background="light">
//     {[
//       {
//         content: 'Talk about learning how to use this',
//         imageAlign: 'right',
//         title: 'Learn How',
//       },
//     ]}
//   </Block>
// );

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('fbt.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: "FBT is a framework for internationalizing user interfaces in JavaScript.  It is designed to be not only powerful and flexible, but also simple and intuitive.  Getting grammatically correct translated texts in dynamic applications is hard.  Let FBT do the hard work for you.",
        image: imgUrl('fbt.png'),
        imageAlign: 'right',
        title: "Why FBT?",
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
