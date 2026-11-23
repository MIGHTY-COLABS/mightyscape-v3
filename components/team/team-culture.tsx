import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const culturePoints = [
  {
    title: "Innovation Mindset",
    description:
      "We encourage creative thinking and exploration of new technologies to stay ahead of the curve.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Continuous Learning",
    description:
      "We invest in our team's growth through training, conferences, and knowledge sharing sessions.",
    image:
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Work-Life Balance",
    description:
      "We value downtime and personal well-being, knowing it leads to better creativity and productivity.",
    image:
      "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function TeamCulture() {
  return (
    <section className="team-culture py-16 md:py-24 flex items-center justify-center text-center">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-xl text-muted-foreground">
            At MIGHTYSCAPE, our culture is the foundation of everything we do.
            It's how we work, collaborate, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturePoints.map((point) => (
            <div key={point.title}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion
            for technology and innovation. Check out our current openings or
            send us your resume.
          </p>
          <Button asChild>
            <Link href="/careers" className="group">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
