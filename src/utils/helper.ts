import { Sales } from "../components/Graph/Graph"
import { SalesTable } from "../components/Table/Table";

const DATEMAP:{ [key: string]: string }  = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
}


export function transformDataForGraph(sales: Sales[]): Sales[] {
    let monthlyMap: Map<string, Sales> = new Map();

    sales.map((value: Sales) => {
        let { weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin} = value;
        const sale: Sales = {
            weekEnding: DATEMAP[weekEnding.split('-')[1]],
            retailSales: retailSales/100,
            wholesaleSales: wholesaleSales/100,
            unitsSold,
            retailerMargin: retailerMargin/100
        }
        // Accumulate repeated months
        if(monthlyMap.has(sale.weekEnding)){
            const currentAccum = monthlyMap.get(sale.weekEnding);
            sale.retailSales += currentAccum?.retailSales || 0;
            sale.wholesaleSales += currentAccum?.wholesaleSales || 0;
            sale.unitsSold += currentAccum?.unitsSold || 0;
            sale.retailerMargin += currentAccum?.retailerMargin || 0;
            monthlyMap.set(sale.weekEnding, sale);
        } else {
            monthlyMap.set(sale.weekEnding, sale)
        }
    })
    return Array.from(monthlyMap.values());
}

export function transformDataForTable(sales: Sales[]): SalesTable[] {
    let transformedData: SalesTable[] = [];

    sales.map((value: Sales) => {
        let { weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin} = value;
        const sale: SalesTable = {
            weekEnding: weekEnding.split('-').reverse().join('-'),
            retailSales: `$${retailSales/100}`,
            wholesaleSales: `$${wholesaleSales/100}`,
            unitsSold,
            retailerMargin: `$${retailerMargin/100}`
        }
        transformedData.push(sale);
    })
    return transformedData;
}