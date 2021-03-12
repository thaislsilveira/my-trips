import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query GetPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
