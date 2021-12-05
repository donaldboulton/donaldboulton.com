module.exports = {
  siteMetadata: {
    title: 'PubliusLogic',
    author: {
      name: 'Donald Boulton',
      url: 'https://publiuslogic.com',
      summary:
        'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
    },
    description: 'A Gatsby v4 starter for corporate/marketing/blog websites.',
    siteUrl: 'https://hello-gatsby-starter.hellotham.com',
    location: 'OKC, Middle Earth',
    social: {
      email: 'mailto:donaldboulton@gmail.com',
      phone: 'tel:+4056231494',
      facebook: 'https://www.facebook.com/donboulton',
      instagram: 'https://www.instagram.com/boulton3662',
      twitter: 'https://twitter.com/donboulton',
      linkedin: 'https://www.linkedin.com/donboulton',
      github: 'https://github.com/donaldboulton/',
    },
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx',
        path: `${__dirname}/src/mdx/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
              linkImagesToOriginal: false,
            },
          },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
        ],
        remarkPlugins: [{ resolve: 'remark-slug' }, { resolve: '@mapbox/rehype-prism' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PubliusLogic',
        short_name: 'PubliusLogic',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#660099',
        display: 'minimal-ui',
        icon: 'src/images/gatsby/publiuslogic-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(filter: { path: {regex: "/^(?!/404/|/404.html|/dev-404-page/)/"} }) {
            nodes {
              path
            }
          }
        }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: 'weekly',
            priority: 0.7,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                author {
                  name
                }
                siteUrl
                site_url: siteUrl
              }
              buildTime
            }
            allFile(filter: {relativePath: {eq: "gatsby/Gatsby_Monogram.png"}}) {
              nodes {
                childImageSharp {
                  resize(width: 1200) {
                    src
                  }
                }
              }
            }
          }
        `,
        setup(options) {
          return Object.assign({}, options.query, {
            title: options.query.site.siteMetadata.title,
            feed_url: options.query.site.siteMetadata.siteUrl + '/rss.xml',
            image_url:
              options.query.site.siteMetadata.siteUrl + options.query.allFile.nodes[0].childImageSharp.resize.src,
            author: options.query.site.siteMetadata.author.name,
            managingEditor: options.query.site.siteMetadata.author.name,
            webMaster: options.query.site.siteMetadata.author.name,
            copyright: options.query.site.buildTime.slice(0, 4) + ' ' + options.query.site.siteMetadata.title,
            language: 'en',
            pubDate: options.query.site.buildTime,
          })
        },
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  author: edge.node.frontmatter.author,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.slug,
                  enclosure: {
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.image.childImageSharp.resize.src,
                  },
                  categories: edge.node.frontmatter.tags,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: { slug: { regex: "/^post/" } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        description
                        author
                        date
                        image {
                          childImageSharp {
                            resize(width: 1200) {
                              src
                            }
                          }
                        }
                        tags
                      }
                      html
                      slug
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/post/',
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`, `content`, `path`, `date`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          BlogPost : {
            title         : node => node.title,
            description   : node => node.description,
            content       : node => node.rawMarkdownBody,
            slug          : node => node.slug,
            date          : node => node.date,
            image : (node, getNode) => getNode(node.image___NODE)
          },
          Mdx: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            slug: node => node.slug,
            date: node => node.frontmatter.date
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-213728425-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: 'G-09Q3PSV062', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: '2721625',
          hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=31536000, immutable",
          ],
          "/static/*": [
            "Cache-Control: public, max-age=31536000, immutable",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; preload",
          "X-Robots-Tag: index",
          "X-Frame-Options: DENY",
          "X-XSS-Protection: 1; mode=block",
          "X-Content-Type-Options: nosniff",
          "Referrer-Policy: same-origin",
          "Access-Control-Allow-Origin: https://gatsbystarterbasicinstructions.gatsbyjs.io/, https://utteranc.es/client.js",
          "Access-Control-Allow-Methods: POST; GET; PUT; DELETE; HEAD",
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `about`, `/contact`, `/post/*`],
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
}
