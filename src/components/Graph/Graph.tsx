import { FC } from 'react'
import { Line, LineChart, XAxis, ResponsiveContainer} from 'recharts'
import { transformDataForGraph } from "../../utils/helper"

export interface Sales {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number,
}

interface GraphProps {
    sales: Sales[]
}

const Graph: FC<GraphProps> = ({sales}) => {

    const data = transformDataForGraph(sales);
    return(
        <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}
                margin={{ top: 5, right: 40, left: 40, bottom: 20 }}>
                <XAxis dataKey="weekEnding" />
                <Line type="basis" dataKey="retailSales" stroke="#8884d8" dot={false}/>
                <Line type="basis" dataKey="wholesaleSales" stroke="#82ca9d" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )

}

export default Graph;