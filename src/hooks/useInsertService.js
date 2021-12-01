import { useMutation } from "@apollo/client";
import { ServiceAllData } from "../graphQL/query";
import { InsertService } from "../graphQL/mutation";

export default function useInsertService(){
    const [insertService, { loading: loadingInsert}] = useMutation(InsertService, {
        refetchQueries: [ServiceAllData],
    });
    return {
        insertService,
        loadingInsert
    };
}