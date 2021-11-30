import { gql } from "graphql-tag";

export const InsertSparepart = gql `
    mutation MyMutation($object: sparePart_insert_input = {}) {
        insert_sparePart_one(object: $object) {
        id
        }
    }
`;