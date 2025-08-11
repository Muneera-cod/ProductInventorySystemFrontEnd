import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../redux/reducers/api/ProductApi';

function ProductDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsQuery(id);

  // The API returns an array, so get the first product
  const product = Array.isArray(data) ? data[0] : data;

  if (isLoading) {
    return <div className="p-8 text-center">Loading...</div>;
  }
  if (error || !product) {
    return <div className="p-8 text-center text-red-600">Product not found or error loading product.</div>;
  }

  return (
    <div className="w-2/3 m-auto bg-white rounded-lg shadow-lg p-8 mt-8">
      <h1 className="text-2xl font-bold mb-4">{product.product_name}</h1>
      <div className="mb-2">
        <span className="font-semibold">Product Code:</span> {product.product_code || <span className="text-gray-400">N/A</span>}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Status:</span>{" "}
        <span className={product.active ? "text-green-600" : "text-red-600"}>
          {product.active ? "Active" : "Inactive"}
        </span>
      </div>
      <div className="mb-2">
        <span className="font-semibold">HSN Code:</span> {product.hsn_code || <span className="text-gray-400">N/A</span>}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Favourite:</span> {product.is_favourite ? "Yes" : "No"}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Created User:</span> {product.created_user || <span className="text-gray-400">N/A</span>}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Created Date:</span> {product.created_date || <span className="text-gray-400">N/A</span>}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Updated Date:</span> {product.updated_date || <span className="text-gray-400">N/A</span>}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Variants:</span>
        {product.variants && product.variants.length > 0 ? (
          <ul className="list-disc ml-6 mt-1">
            {product.variants.map((variant, idx) => (
              <li key={idx}>
                <span className="font-medium">{variant.name}:</span>{" "}
                {variant.options && variant.options.length > 0
                  ? variant.options.join(", ")
                  : "N/A"}
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-gray-400 ml-2">No variants</span>
        )}
      </div>
      <button>Delete</button>
    </div>
  );
}

export default ProductDetailsPage;