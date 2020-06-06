import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Blogs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: "stretch";
`;

const Blog = styled.article`
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  border: ${({ isFeatured, theme }) =>
    isFeatured ? `2px solid ${theme.blue}` : `1px solid ${theme.grey}`};
  background-color: white;
  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
  .left {
    flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      max-width: 900px;
    }
  }
  .right {
    padding: 15px;
    width: 270px;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

const Title = styled(Link)`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  font-size: 21px;
  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.p`
  font-size: 14px;
`;

const BlogRoll = ({ count }) => {
  const {
    allMarkdownRemark: { edges: posts }
  } = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 270, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Blogs>
      {posts && posts.length > 0 ? (
        posts.slice(0, count).map(({ node: post }) => (
          <Blog isFeatured={post.frontmatter.featuredpost} key={post.id}>
            <div className="left">
              <header>
                <Title to={post.fields.slug}>{post.frontmatter.title}</Title>
                <Date>
                  {post.timeToRead} minute read &bull; {post.frontmatter.date}
                </Date>
              </header>
              <p>{post.excerpt}</p>
            </div>
            {post.frontmatter.featuredimage && (
              <div className="right">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`
                  }}
                />
              </div>
            )}
          </Blog>
        ))
      ) : (
        <p>No Blog posts found - come back soon!</p>
      )}
    </Blogs>
  );
};

export default BlogRoll;
