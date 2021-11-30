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
    {id:8, tahun: "2000", nama:"Real Madrid CFaa"},
    {id:9, tahun: "2000", nama:"Real Madrid CF"},
    {id:10, tahun: "2000", nama:"Real Madrid CF"},
    {id:11, tahun: "2000", nama:"Real Madrid CF"},
    {id:12, tahun: "2000", nama:"Real Madrid CF"},
    {id:13, tahun: "2000", nama:"Real Madrid CF"},
    {id:14, tahun: "2000", nama:"Real Madrid CF"},
    {id:15, tahun: "2000", nama:"Real Madrid CF"},
    {id:16, tahun: "2000", nama:"Real Madrid CFaa"},
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

const allData ={
    rowsPerPageText : 'Fill Data',
    rangeSeparatorText : 'to',
    selectAllRowsItem : true,
    selectAllRowsText : 'getData'
}

const Tabledata = () => {
    return (
        <div className="table-responsive">
            <DataTable 
                columns={column} 
                data={tableData} 
                title="Data Nama" 
                pagination 
                paginationComponentOptions={allData}
                fixedHeader
                fixedHeaderScrollHeight="532px"
            />
        </div>
    );
}

export default Tabledata;
