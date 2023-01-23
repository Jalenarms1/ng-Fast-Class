import { gql } from "@apollo/client";

export const TEST_GET = gql`
    query testGet {
        testGet {
            key
        }
    }
`