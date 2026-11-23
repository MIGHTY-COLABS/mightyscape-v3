export default function ProductsHero() {
  return (
    <section className="page-intro">
      <div className="container relative z-10">
        <div className="intro-copy">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Powerful, scalable solutions designed for real-world challenges.
            Each product is built with performance, security, and user experience at its core.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pureiptv" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              PureIPTV
            </a>
            <a href="#livelink" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              LiveLink OTT
            </a>
            <a href="#hostlink" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              HostLink Suite
            </a>
            <a href="#signage" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              Digital Signage
            </a>
            <a href="#sitzstay" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              SitzStay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
