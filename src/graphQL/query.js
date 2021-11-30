import gql from "graphql-tag";

export const queryAllData = gql `
    query MyQuery {
        sparePart {
        id
        name
        stock
        }
    }  
`;