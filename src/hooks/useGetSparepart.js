import { useQuery } from "@apollo/client";
import { queryAllData } from "../graphQL/query";
import { SubSparepartData } from "../graphQL/subscription";

export default function useGetSparepart(){
    const {data, loading, error, subscribeToMore} = useQuery(queryAllData);

    const subscribeSparepart = () => {
        subscribeToMore({
            document: SubSparepartData,
            updateQuery: (prev, { subscriptionData: { data }}) => {
                return data;
            }
        });
    };

    return {
        sparepart: data ? data.sparePart : [],
        loading, 
        error, 
        subscribeSparepart,
    };
}