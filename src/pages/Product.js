import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProductInfo from "../components/ProductInfo"

export default function Product(id) {
  let productId = useParams().productId
  return (
    <div>
      <Navbar />
      <ProductInfo productId={productId} />
    </div>
  );
}