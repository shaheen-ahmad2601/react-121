import "./products.css"

const Products = () => {
  return (
    <div className="container">
        <div className="product-div">
        <img className="child-div" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwBfFbKvcrxFLdp_Of0Fb1wA0ZoQ4sQ7QUUaVfkvfXQo8T3NDjXSkAw_1UGUrbjTdJac&usqp=CAU" alt="" />
        <p>This is the latest macbook , you can have a look</p>
        <p>Price : $1000</p>
        </div>
        <div className="product-div">
            <img  className="child-div" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkIM0ihfXLX4B0qPsnUdA0bwd2rXU39T8lI9d-WlPN0hAXwerQRRvHPMYIpkjdLBBFm0&usqp=CAU" alt="" />
            <p>This is the latest macbook , you can have a look</p>
        <p>Price : $1000</p>
        </div>
        <div className="product-div">
            <img className="child-div" src="https://images.macrumors.com/article-new/2020/11/macbook-air-m1-unboxing.jpg" alt="" />
            <p>This is the latest macbook , you can have a look</p>
        <p>Price : $1000</p>
        </div>
      
    </div>
  )
}

export default Products
