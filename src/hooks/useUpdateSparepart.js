import { useMutation } from "@apollo/client";
import { UpdateSparepart } from "../graphQL/mutation";
import { queryAllData } from "../graphQL/query";

export default function useUpdateSparepart(){
    const [updateSparepart, { loading: loadingUpdate }] = useMutation(UpdateSparepart, {
        refetchQueries: [queryAllData],
    });
    return {
        updateSparepart,
        loadingUpdate,
    };
}