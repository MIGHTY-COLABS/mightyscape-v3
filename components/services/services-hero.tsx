export default function ServicesHero() {
  return (
    <section className="page-intro">
      <div className="container relative z-10">
        <div className="intro-copy">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expert services tailored to your unique business challenges.
            From custom development to cloud consulting, we've got you covered.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#custom-dev" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              Custom Development
            </a>
            <a href="#cloud-devops" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              Cloud & DevOps
            </a>
            <a href="#ui-ux" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              UI/UX Design
            </a>
            <a href="#drm" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              DRM & Security
            </a>
            <a href="#integration" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              Enterprise Integration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
