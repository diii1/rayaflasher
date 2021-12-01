import React from 'react';
import DataTable from 'react-data-table-component';
// import { SubSparepartData } from '../../graphQL/subscription';
// import { useSubscription } from '@apollo/client';
import Sparepartactions from '../SparePart/SparePartActions';
import LoadingSvg from './LoadingSvg';
import useDeleteSparepart from '../../hooks/useDeleteSparepart';
import useGetSparepart from '../../hooks/useGetSparepart';

const Spareparttable = () => {
    // const {data, loading, error} = useSubscription(SubSparepartData);
    const { sparepart, loading, error, subscribeSparepart } = useGetSparepart();
    const { deleteSparepart, loadingDelete } = useDeleteSparepart();

    const handleEdit = () => {
        console.log("Edit Data");
    }

    const handleDelete = (id) => {
        deleteSparepart({
            variables: {
                id: id
            }
        });
        console.log(id);
    }

    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }

    // console.log(data);

    const mappedData = sparepart.map((row) => {
        return {
            id: row.id,
            name: row.name, 
            stock: row.stock,
            actions: <Sparepartactions edit={handleEdit} delete={() => handleDelete(row.id)} />
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
                    title="Data Spare Part"
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