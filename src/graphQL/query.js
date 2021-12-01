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
`