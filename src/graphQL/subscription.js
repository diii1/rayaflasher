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

export const SubServiceData = gql `
    subscription MySubscription {
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
`;