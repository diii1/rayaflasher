import { useMutation } from "@apollo/client";
import { DeleteSparePart } from "../graphQL/mutation";
import { queryAllData } from "../graphQL/query";

export default function useDeleteSparepart(){
    const [deleteSparepart, { loading: loadingDelete}] = useMutation(DeleteSparePart, {
        refetchQueries: [queryAllData], 
    });

    return {
        deleteSparepart,
        loadingDelete
    };
}