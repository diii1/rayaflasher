import React from 'react';
import DataTable from 'react-data-table-component';
import LoadingSvg from './LoadingSvg';
import useGetService from '../../hooks/useGetService';
import Serviceactions from '../Service/ServiceActions';

const Servicetable = () => {
    const { service, loading, error } = useGetService();

    if (loading){
        return <LoadingSvg/>
    }

    if (error){
        console.log(error);
        return null;
    }
    console.log(service);

    const mappedData = service.map((row) => {
        return {
            id: row.id,
            nama: row.nama, 
            identitas: row.identitas,
            noHp: row.noHp,
            merk: row.merk,
            type: row.type,
            kerusakan: row.kerusakan,
            sparePart: row.sparePart.name,
            harga: row.harga,
            actions: <Serviceactions />
        };
    });

    const column = [
        {
            name: 'ID',
            selector: 'id',
            maxWidth: "80px",
            sortable: true
        },
        {
            name: 'Nama',
            selector: 'nama',
            maxWidth: "100px",
            sortable: true
        },
        {
            name: 'No Identitas',
            selector: 'identitas',
            maxWidth: "150px",
            sortable: true
        },
        {
            name: 'No HP',
            selector: 'noHp',
            maxWidth: "160px",
            sortable: true
        },
        {
            name: 'Merk',
            selector: 'merk',
            maxWidth: "50px",
            sortable: true
        },
        {
            name: 'Type',
            selector: 'type',
            maxWidth: "50px",
            sortable: true
        },
        {
            name: 'Kerusakan',
            selector: 'kerusakan',
            maxWidth: "150px",
            sortable: true
        },
        {
            name: 'Sparepart',
            selector: 'sparePart',
            maxWidth: "100px",
            sortable: true
        },
        {
            name: 'Harga',
            selector: 'harga',
            maxWidth: "100px",
            sortable: true
        },
        {
            name: 'Actions',
            selector: 'actions',
            sortable: false 
        }
        
    ];
    
    const allServiceData ={
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
                    title="Data Service"
                    pagination 
                    paginationComponentOptions={allServiceData}
                    fixedHeader
                    fixedHeaderScrollHeight="532px"
                />
            )}
        </div>
    );
}

export default Servicetable;
