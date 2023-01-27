import { gql } from "@apollo/client";

export const TEST_GET = gql`
    query testGet {
        testGet {
            key
        }
    }
`

export const MY_CLASSES = gql`
    query getMyClasses {
        getMyClasses {
            subject
            courseName
            open
            getStudentCount
            
        }
    }
`