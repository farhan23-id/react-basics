import { useParams } from "react-router";

function ProductDetil() {
  //   const { productSlug } = useParams<{ productSlug: string }>();
  const params = useParams<{ productSlug: string }>();

  return (
    <>
      <h1>Product Detail</h1>
      <p>This is the detail page for {params.productSlug}</p>
    </>
  );
}

export default ProductDetil;
