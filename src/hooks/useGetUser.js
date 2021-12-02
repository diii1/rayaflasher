import { useQuery } from "@apollo/client";
import { User } from "../graphQL/query";
import { SubUserData } from "../graphQL/subscription";

export default function useGetUser(){
    const {data, loading, error, subscribeToMore} = useQuery(User);

    const suscribeUser = () => {
        subscribeToMore({
            document: SubUserData,
            updateQuery: (prev, { subscriptionData: { data }}) => {
                return data;
            }
        });
    }

    return {
        user: data ? data.user : [],
        loading, 
        error, 
        suscribeUser,
    };
}