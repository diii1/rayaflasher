import { useQuery } from "@apollo/client";
import { ServiceAllData } from "../graphQL/query";
import { SubServiceData } from "../graphQL/subscription";

export default function useGetService(){
    const {data, loading, error, subscribeToMore} = useQuery(ServiceAllData);
    
    const subsribeService = () => {
        subscribeToMore({
            document: SubServiceData,
            updateQuery: (prev, { subscriptionData: { data }}) => {
                return data;
            }
        });
    }

    return {
        service: data ? data.service : [],
        loading,
        error, 
        subsribeService,
    };
}