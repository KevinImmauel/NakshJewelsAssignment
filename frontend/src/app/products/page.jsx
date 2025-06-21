import ShopMainComp from "@/components/ShopMainComp";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
          <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Timeless Jewels
              </h2>

              <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore officia corporis quasi doloribus iure architecto quae
                voluptatum beatae excepturi dolores.
              </p>
            </div>
          </div>
        </section>
      </div>
      <ShopMainComp />
    </>
  );
}
