import { gql } from "graphql-tag";

export const InsertSparepart = gql `
    mutation MyMutation($object: sparePart_insert_input = {}) {
        insert_sparePart_one(object: $object) {
            id
        }
    }
`;

export const DeleteSparePart = gql `
    mutation MyMutation($id: Int!) {
        delete_sparePart_by_pk(id: $id) {
            id
        }
    }  
`;

export const UpdateSparepart = gql `
    mutation MyMutation($id: Int!, $name: String!, $stock: Int!) {
        update_sparePart_by_pk(
        pk_columns: {id: $id}, 
        _set: {name: $name, stock: $stock}) {
            id
        }
    }
`;