import Header from "../Header/Header"
import SidePanel from "../SidePanel/SidePanel";
import Graph from "../Graph/Graph"
import Table from "../Table/Table"
import { Product } from "../../redux/slices/dataSlice";
import { FC } from "react";
import styles from './layout.module.css'

interface LayoutProps {
    product: Product
}


const Layout: FC<LayoutProps> = ({ product }) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.mainPanel}> 
                <span className={styles.leftPanel}>
                    <SidePanel
                        image={product.image}
                        title={product.title}
                        subtitle={product.subtitle}
                        tags={product.tags}
                        />
                </span>
                <span className={styles.rightPanel}>
                    <div className={styles.graph}>
                        <h3 className={styles.graphTitle}>Retail Sales</h3>
                        <Graph sales={product.sales}/>
                    </div>
                    <div className={styles.table}>
                        <Table sales={product.sales}/>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Layout;