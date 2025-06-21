import Faq from "@/components/Faq";
import Feedback from "@/components/Feedback";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Hero Section */}
      <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Timeless Craftsmanship, Handcrafted Just for You
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Discover exquisite gold and diamond jewellery designed to
              celebrate life’s special moments. At Naksh Jewellers, elegance
              meets authenticity in every handcrafted piece you wear and cherish
              forever.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/products"
                className="inline-block rounded-sm bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-400 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Naksh Jewellers Showcase"
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      {/* About or Story Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                The Legacy of Naksh
              </h2>

              <p className="mt-4 text-gray-700">
                Naksh Jewellers is built on generations of artistry and trust.
                We offer elegant designs, certified quality, and a promise of
                transparency. Our passion lies in helping you mark your most
                meaningful moments with timeless creations.
              </p>
            </div>

            <div className="mt-4 md:mt-8">
              <a
                href="/products"
                className="inline-block rounded-sm bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-400 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
                About Us
              </a>
            </div>

            <div className="w-full flex justify-center items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1740020264402-3a493f16dac8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt="Our Craftsmanship"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="my-16">
        <Faq />
      </div>

      <div className="mb-16">
        <Feedback />
      </div>
    </div>
  );
}
