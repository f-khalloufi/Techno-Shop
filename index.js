$(document).ready(function () {
    var cartCount = 0;

    // Add item to cart
    $(".add-to-cart").click(function () {
        cartCount++;
        updateCartCount();
    });

    // Remove item from cart
    $(".remove-from-cart").click(function () {
        if (cartCount > 0) {
            cartCount--;
            updateCartCount();
        } else {
            alert("Your cart is already empty!");
        }
    });

    // Reset cart
    $("#reset-cart").click(function () {
        if (cartCount > 0) {
            cartCount = 0;
            updateCartCount();
            alert("Cart has been reset.");
        } else {
            alert("Your cart is already empty!");
        }
    });

    // Function to update cart count display
    function updateCartCount() {
        $("#cart-count p").text(cartCount);
    }
});

