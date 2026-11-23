export default function AboutHero() {
  return (
    <section className="page-intro about-intro">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="intro-copy">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MIGHTYSCAPE</h1>
            <p className="text-xl text-muted-foreground mb-8">
              MIGHTYSCAPE PRIVATE LIMITED is a technology company passionate about delivering scalable, 
              secure, and future-ready software solutions. Our offerings span IPTV, hospitality tech, 
              digital signage, and custom digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Engineer-Founded</h3>
              <p className="text-muted-foreground text-sm">
                Built by developers who understand technical challenges from the inside out.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Client-Focused</h3>
              <p className="text-muted-foreground text-sm">
                Committed to delivering solutions that exceed expectations and drive real value.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Product-Obsessed</h3>
              <p className="text-muted-foreground text-sm">
                Fanatical about crafting exceptional software that's robust, scalable, and delightful to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
