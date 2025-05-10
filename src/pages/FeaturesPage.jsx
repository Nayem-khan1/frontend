import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800">E-Mall Features</h1>
      <p className="mt-4 text-gray-600 text-center">
        E-Mall is a cutting-edge e-commerce platform that provides a seamless, secure shopping experience. Below are the key features of the platform:
      </p>

      <div className="mt-6 space-y-8">
        {/* Secure Authentication */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">🔐 Secure Authentication</h2>
          <p className="text-gray-600">
            Register, log in, and stay authenticated with JWT-powered tokens for a secure and smooth shopping experience.
          </p>
        </div>

        {/* Product Catalog */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">🛍️ Product Catalog</h2>
          <p className="text-gray-600">
            Browse, search, and filter products by category, price, or rating to find exactly what you're looking for.
          </p>
        </div>

        {/* Product Detail Pages */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">📦 Product Detail Pages</h2>
          <p className="text-gray-600">
            View high-resolution product images, read customer reviews, and discover related items to make informed purchasing decisions.
          </p>
        </div>

        {/* Shopping Cart */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">🛒 Shopping Cart</h2>
          <p className="text-gray-600">
            Add, update, or remove items from your cart. View real-time totals and taxes, so you're always aware of your purchases.
          </p>
        </div>

        {/* Streamlined Checkout */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">💳 Streamlined Checkout</h2>
          <p className="text-gray-600">
            Enter your shipping address, review your order summary, and complete the payment all in one seamless flow.
          </p>
        </div>

        {/* Admin Dashboard */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">⚙️ Admin Dashboard</h2>
          <p className="text-gray-600">
            Manage the product catalog, user accounts, and orders with an intuitive admin dashboard. Create, edit, or remove products as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
