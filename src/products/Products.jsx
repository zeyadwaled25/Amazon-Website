import { useEffect, useState } from "react";

function Products({ selectedCategory, selectedPriceRange }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
        const data = await response.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category.name === selectedCategory);
    }

    if (selectedPriceRange !== "all" && Array.isArray(selectedPriceRange)) {
      filtered = filtered.filter(
        product => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRange, products]);

  return (
    <div className="products row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="col mb-4">
            <div className="card gap-3 h-100">
              <img src={product.images[0]} className="card-img-top p-3" alt={product.title} />
              <div className="card-body d-flex flex-column gap-3">
                <h6 className="card-title m-0">{product.title}</h6>
                <div className="rating">
                  <span className="stars text-warning">★★★★☆</span>
                  <span className="rating-count text-muted ms-1">650</span>
                  <div className="text-muted small">300+ bought in past month</div>
                </div>
                <div className="purchase-info">
                  <div className="price">
                    <span className="fw-bold fs-5">₹{product.price}</span>
                    <span className="text-muted ms-2">(46% off)</span>
                  </div>
                  <small className="text-muted d-block mb-3">Save extra with No Cost EMI</small>
                  <small className="text-muted d-block mb-2">
                    FREE delivery by <span className="fw-bold">Sat,14 Sept,<br /> 7:00 am - 9:00 pm</span>
                  </small>
                </div>
                <button className="btn btn-warning mt-auto rounded-pill add-to-cart">Add to cart</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noavailable d-flex justify-content-center align-items-center flex-column text-center w-100">
          <p>No Products Available in {<span className="fw-bold">{selectedCategory}</span>} Just Now.</p>
          <img 
            src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg" 
            alt="No Products Available" 
            className="mb-3"
            style={{ width: '300px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Products;
