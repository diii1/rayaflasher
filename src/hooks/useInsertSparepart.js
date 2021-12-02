import { useMutation } from "@apollo/client";
import { InsertSparepart } from "../graphQL/mutation";
import { queryAllData } from "../graphQL/query";

export default function useInsertSparepart(){
    const [insertSparepart, {loading: loadingInsert}] = useMutation(InsertSparepart,{
        refetchQueries: [queryAllData],
    });
    return {
        insertSparepart,
        loadingInsert,
    };
}