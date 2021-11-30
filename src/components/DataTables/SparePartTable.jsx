import React from 'react';
import DataTable from 'react-data-table-component';
import { SubSparepartData } from '../../graphQL/subscription';
import { useSubscription } from '@apollo/client';
import LoadingSvg from './LoadingSvg';

const Spareparttable = () => {
    const {data, loading, error} = useSubscription(SubSparepartData);

    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }

    console.log(data);

    const mappedData = data.sparePart.map((row) => {
        const test = <h1>Heytayo</h1>;
        return {
            id: row.id,
            name: row.name, 
            stock: row.stock,
            actions: test
        };
    });

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
            selector: 'actions',
            sortable: false 
        }
        
    ];
    
    const allSparepartData ={
        rowsPerPageText : 'Fill Data',
        rangeSeparatorText : 'to',
        selectAllRowsItem : true,
        selectAllRowsText : 'getData'
    }
    

    return (
        <div className="table-responsive">
            {!loading && (
                <DataTable 
                    columns={column} 
                    data={mappedData}
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