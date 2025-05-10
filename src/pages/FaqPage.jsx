import React from 'react';

// A functional component implementing a responsive FAQ section with accessible collapsible panels
const FaqPage = () => (
  <main className="max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h1>
    <section className="space-y-6">
      {/* Each <details> element provides a native, accessible expand/collapse UI */}
      
      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          How do I place an order?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            Browse the products, select your preferred item and size (if applicable), and click <strong>"Add to Cart"</strong>. Once ready, proceed to checkout, fill in your shipping details, and complete payment using your preferred method.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          What payment methods are supported?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            We accept all major credit/debit cards, UPI, net banking, and digital wallets like Google Pay and Paytm. All payments are securely processed via Razorpay or Stripe, depending on your location.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          Can I track my order?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            Yes! Once your order is shipped, you'll receive a tracking link via email and SMS. You can also log into your account and view the status of your orders under the <strong>"My Orders"</strong> section.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          How do I update or cancel my order?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            Orders can be updated or cancelled within 1 hour of placement from the <strong>"My Orders"</strong> page. After that, you’ll need to contact support to request changes, depending on the shipping status.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          Do I need an account to make a purchase?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            No, guest checkout is available. However, creating an account helps you manage orders, track shipments, save your wishlist, and access personalized recommendations.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 bg-white shadow-sm">
        <summary className="text-lg font-medium cursor-pointer leading-snug">
          How do I apply a discount code?
        </summary>
        <div className="mt-2 text-gray-700 prose">
          <p>
            You can enter a valid coupon code at checkout on the payment page. The discount will be applied instantly if the code is valid and meets all applicable conditions.
          </p>
        </div>
      </details>
    </section>
  </main>
);

export default FaqPage;
