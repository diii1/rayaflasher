import { useMutation } from "@apollo/client";
import { DeleteService } from "../graphQL/mutation";
import { ServiceAllData } from "../graphQL/query";

export default function useDeleteService(){
    const [deleteService, { loading: loadingDelete}] = useMutation(DeleteService, {
        refetchQueries: [ServiceAllData],
    });

    return {
        deleteService, 
        loadingDelete
    };
}