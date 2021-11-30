import React from 'react';
import DataTable from 'react-data-table-component';
import { SubSparepartData } from '../../graphQL/subscription';
import { useSubscription } from '@apollo/client';
import LoadingSvg from './LoadingSvg';

const Spareparttable = () => {
    const {data, loading, error} = useSubscription(SubSparepartData);

    const column = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true
        },
        {
            name: 'Nama',
            selector: 'name',
            sortable: true
        },
        {
            name: 'Stock',
            selector: 'stock',
            sortable: true
        },
        {
            name: 'Actions',
            selector: 'action',
            sortable: false
        }
    ];
    
    const allSparepartData ={
        rowsPerPageText : 'Fill Data',
        rangeSeparatorText : 'to',
        selectAllRowsItem : true,
        selectAllRowsText : 'getData'
    }
    
    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }

    return (
        <div className="table-responsive">
            {!loading && (
                <DataTable 
                    columns={column} 
                    data={data.sparePart}
                    title="Data Nama" 
                    pagination 
                    paginationComponentOptions={allSparepartData}
                    fixedHeader
                    fixedHeaderScrollHeight="532px"
                />
            )}
        </div>
    );
}

export default Spareparttable;