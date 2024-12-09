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
        image: "https://ae01.alicdn.com/kf/H61abf9bb157c4c96b1dbee83e4d1e88fO/Men-s-Luxury-Brand-Sports-Watch.jpg",
        discount: "15%",
        name: "Sports Watch",
        rating: "4.8",
        price: "$750 USD",
        location: "5km"
    },
    {
        image: "https://ae01.alicdn.com/kf/H1cb1bf3a84b54f4f9c8eae07b81d495dM/Classic-Watch-for-Men.jpg",
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
                <img src="https://ae01.alicdn.com/kf/H764363e5d22c430b8b3fbd1f363db5bbM/LIGE-Fashion-Top-Brand-Luxury-Gold-Watches-Men-s-Stainless-Steel-Waterproof-Quartz-Clock-Male-Military.jpg"
                    alt="image">
                    <div class="discount">
                        <p>Discount: 20%</p>
                    </div>
            </div>
            <div class="watch-details">
                <div class="group">
                    <p><b>ligie watch</b></p>
                    <p class="rating">4.6 &#x2605 </p>
                </div>
                <div class="group">
                    <p>price</p>
                    <p>$500 USD</p>
                </div>
                <div class="group">
                    <p>location</p>
                    <p>3km</p>
                </div>
            </div>`;
            productContainer.appendChild(productCard);
});