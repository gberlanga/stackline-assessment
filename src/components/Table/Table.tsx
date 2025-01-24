import { FC } from 'react'
import { transformDataForTable } from '../../utils/helper'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Sales } from '../Graph/Graph'

export interface SalesTable {
    weekEnding: string,
    retailSales: string,
    wholesaleSales: string,
    unitsSold: number,
    retailerMargin: string,
}

interface TableProps {
    sales: Sales[]
}

const Table: FC<TableProps> = ({sales}) => {
    const rows: SalesTable[] = transformDataForTable(sales);
    const columns: GridColDef[] = [
        { field: 'weekEnding', headerName: 'WEEK ENDING', flex: 1  },
        { field: 'retailSales', headerName: 'RETAIL SALES', flex: 1 },
        { field: 'wholesaleSales', headerName: 'WHOLESALE SALES', flex: 1 },
        { field: 'unitsSold', headerName: 'UNITS SOLD',flex: 1 },
        { field: 'retailerMargin', headerName: 'RETAILER MARGIN', flex: 1}
      ];
    
    return(
        <Paper sx={{ height: 400, width:"100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.weekEnding} 
                sx={{ border: 0 }}
            />
        </Paper>
    )
}

export default Table;