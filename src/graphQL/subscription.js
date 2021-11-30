import { gql } from "graphql-tag";

export const SubSparepartData = gql `
    subscription MySubscription {
        sparePart {
        id
        name
        stock
        }
    }
`;