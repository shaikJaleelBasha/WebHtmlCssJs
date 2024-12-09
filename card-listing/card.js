const products = [
    {
        image: "https://ae01.alicdn.com/kf/H764363e5d22c430b8b3fbd1f363db5bbM/LIGE-Fashion-Top-Brand-Luxury-Gold-Watches-Men-s-Stainless-Steel-Waterproof-Quartz-Clock-Male-Military.jpg",
        discount: "20%",
        name: "Ligie Watch",
        rating: "4.6",
        price: "$500 USD",
        location: "3km"
    },
    {
        image: "https://cdn7.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/4436/34744/LIGE-Mens-Watches-Top-Brand-Luxury-Leather-Casual-Quartz-Watch-Men-Military-Sport-Waterproof-Clock-Gold__79354.1522933698.jpg",
        discount: "15%",
        name: "Sports Watch",
        rating: "4.8",
        price: "$750 USD",
        location: "5km"
    },
    {
        image: "https://ae01.alicdn.com/kf/HTB1z3uVKFXXXXcsaXXXq6xXFXXX3/MEGIR-men-s-quartz-watches-stainless-steel-mesh-band-black-watch-chronograph-slim-strap-mens-watch.jpg",
        discount: "10%",
        name: "Classic Watch",
        rating: "4.5",
        price: "$300 USD",
        location: "2km"
    }

]

const productContainer = document.getElementById("product-cards");

products.forEach(product=>{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    productCard.innerHTML=`
   <div class="watch-image">
            <img src="${product.image}" alt="image">
            <div class="discount">
                <p>Discount: ${product.discount}</p>
            </div>
        </div>
        <div class="watch-details">
            <div class="group">
                <p><b>${product.name}</b></p>
                <p class="rating">${product.rating} &#x2605</p>
            </div>
            <div class="group">
                <p>Price</p>
                <p>${product.price}</p>
            </div>
            <div class="group">
                <p>Location</p>
                <p>${product.location}</p>
            </div>
        </div>`;
            productContainer.appendChild(productCard);
});