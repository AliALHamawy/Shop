import { useLocation, useNavigate } from 'react-router-dom'
import { FaStar, FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
import './Product.css'

function Product() {
    const location = useLocation()
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const item = location.state?.item
    
    // If no item is found, redirect back to shop
    if (!item) {
        navigate('/')
        return null
    }
    
    const handleQuantityChange = (action) => {
        if (action === 'increase') {
            setQuantity(prev => prev + 1)
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }
    
    const handleAddToCart = () => {
        // Add to cart logic here
        console.log('Added to cart:', { ...item, quantity })
        alert(`${item.title} added to cart!`)
    }
    
    const handleBuyNow = () => {
        // Buy now logic here
        console.log('Buying now:', { ...item, quantity })
    }
    
    return (
        <div className="product-container">
            <button className="back-button" onClick={() => navigate('/')}>
                <FaArrowLeft /> Back to Shop
            </button>
            
            <div className="product-wrapper">
                <div className="product-image-section">
                    <img src={item.coverImg} alt={item.title} className="product-main-image" />
                </div>
                
                <div className="product-info-section">
                    <h1 className="product-title">{item.title}</h1>
                    
                    <div className="product-rating">
                        <div className="stars">
                            <FaStar className="star filled" />
                            <FaStar className="star filled" />
                            <FaStar className="star filled" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                        </div>
                        <span className="rating-text">(4.0 based on 120 reviews)</span>
                    </div>
                    
                    <p className="product-price">{item.price}</p>
                    
                    <div className="product-sizes">
                        <h3>Available Sizes:</h3>
                        <p>{item.sizes}</p>
                    </div>
                    
                    <div className="product-quantity">
                        <h3>Quantity:</h3>
                        <div className="quantity-selector">
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('decrease')}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="quantity-value">{quantity}</span>
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('increase')}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    <div className="product-actions">
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="buy-now-btn" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>
                    
                    <div className="product-description">
                        <h3>Product Description:</h3>
                        <p>
                            This high-quality {item.title} is designed for comfort and style. 
                            Made with premium materials to ensure durability and long-lasting wear.
                            Perfect for any occasion, whether casual or formal.
                        </p>
                    </div>
                    
                    <div className="product-details">
                        <h3>Product Details:</h3>
                        <ul>
                            <li>Material: Premium Quality</li>
                            <li>Care Instructions: Machine wash cold</li>
                            <li>Imported</li>
                            <li>Free shipping on orders over $50</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product