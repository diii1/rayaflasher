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

export const ServiceAllData = gql `
    query MyQuery {
        service {
            id
            sparePart {
                id
                name
            }
            nama
            identitas
            noHp
            merk
            type
            kerusakan
            harga
        }
    }
`;

export const User = gql `
    query MyQuery($email: String!) {
        user(where: {email: {_eq: $email}}) {
            id
            name
            email
            password
        }
    }
`;