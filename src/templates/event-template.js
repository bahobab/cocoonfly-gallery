import React from 'react'
import {graphql} from 'gatsby';

  export const query = graphql`
  query GetSingleEvent($slug: String){
    event: strapiEvent(slug: {eq: $slug}) {
      date(formatString: "")
      description
      location
      media {
        mediaUrl {
          publicURL
        }
      }
    }
  }
`;

function eventTemplate({data}) {
  // console.log('>>>>>>>>>>', JSON.stringify(data))
  return (
    <div>
      <h1>Hello from event page</h1>
    </div>
  )
}

export default eventTemplate
