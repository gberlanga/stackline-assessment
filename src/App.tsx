import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchProductDetailsAsync } from './redux/slices/dataSlice'
import { useAppDispatch } from './utils/useAppDispatch'
import Layout from "./components/Layout/Layout"
import { RootState } from './redux/store'

function App() {
  const dispatch = useAppDispatch();
  const {products} = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(fetchProductDetailsAsync());
  }, [dispatch]);
  if (!products || products.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <Layout product={products[0]}/>
    </div>
  );
}

export default App
