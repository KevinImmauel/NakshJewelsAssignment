import React from "react";

function Faq() {
  return (
    <div className="flow-root">
      <div className="font-bold text-4xl mb-16">Frequently Asked Questions</div>
      <div className="-my-4 flex flex-col divide-y divide-gray-200">
        <details
          className="group py-4 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Do you provide a certificate of authenticity for your jewellery?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="pt-4 text-gray-900">
            Yes, all jewellery pieces from Naksh Jewellers come with a
            certificate of authenticity. Our gold and diamond products are BIS
            Hallmarked and certified by trusted gem labs to ensure complete
            transparency and trust.
          </p>
        </details>

        <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              What is your return or exchange policy?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="pt-4 text-gray-900">
            We offer a 7-day return or exchange policy for unused and undamaged
            jewellery in its original packaging. Custom or engraved pieces are
            non-returnable. For assistance, please contact our support team.
          </p>
        </details>

        <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Can I customize jewellery designs at Naksh Jewellers?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="pt-4 text-gray-900">
            Absolutely! We specialize in handcrafted and custom-made jewellery.
            Share your design ideas or inspirations, and our artisans will bring
            them to life with perfection and elegance.
          </p>
        </details>
      </div>
    </div>
  );
}

export default Faq;
