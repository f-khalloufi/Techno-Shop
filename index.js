$(document).ready(function() {
    var cartCount = 0;

    // Add item to cart
    $(".add-to-cart").click(function() {
        // Increment cart count  
        cartCount++;
        $("#cart-count p").text(cartCount);
    });
});

