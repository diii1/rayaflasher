import { useMutation } from "@apollo/client";
import { UpdateService } from "../graphQL/mutation";
import { ServiceAllData } from "../graphQL/query";

export default function useUpdateService(){
    const [updateService, {loading: loadingUpdate}] = useMutation(UpdateService, {
        refetchQueries: [ServiceAllData],
    });
    return {
        updateService,
        loadingUpdate
    };
}