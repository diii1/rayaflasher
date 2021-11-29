import React from 'react';
import DataTable from 'react-data-table-component';

const tableData = [
    {id:1, tahun: "2000", nama:"Real Madrid CF"},
    {id:2, tahun: "2000", nama:"Real Madrid CF"},
    {id:3, tahun: "2000", nama:"Real Madrid CF"},
    {id:4, tahun: "2000", nama:"Real Madrid CF"},
    {id:5, tahun: "2000", nama:"Real Madrid CF"},
    {id:6, tahun: "2000", nama:"Real Madrid CF"},
    {id:7, tahun: "2000", nama:"Real Madrid CF"},
    {id:8, tahun: "2000", nama:"Real Madrid CF"},
];

const column = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true
    },
    {
        name: 'Tahun',
        selector: 'tahun',
        sortable: true
    },
    {
        name: 'Nama',
        selector: 'nama',
        sortable: true
    }
];

const Tabledata = () => {
    return (
        <div>
            <DataTable columns={column} data={tableData} title="Data Nama"/>
        </div>
    );
}

export default Tabledata;
