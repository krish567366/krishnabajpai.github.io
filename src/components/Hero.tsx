import { Button } from "@/components/ui/button";
import heroFlow from "@/assets/hero-flow.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight text-foreground">
                Krishna Bajpai
              </h1>
              <h2 className="text-3xl lg:text-4xl font-sketch font-bold relative mt-2">
                Machine Learning Engineer & AI Solutions Architect
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mt-4">
                Expert in building production-grade machine learning systems with TensorFlow and PyTorch. Specializing in MLOps, deep learning architectures, and scalable AI solutions for enterprise applications.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-light text-foreground">94.4%</div>
                <div className="text-sm text-muted-foreground font-sketch">prediction accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground">35%</div>
                <div className="text-sm text-muted-foreground font-sketch">cost savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground">2.3x</div>
                <div className="text-sm text-muted-foreground font-sketch">ROI improvement</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                See Case Studies
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <img 
              src={heroFlow} 
              alt="Data to AI Model to Business Impact flow diagram"
              className="w-full h-auto"
            />
            {/* Handwritten annotation */}
            <div className="absolute -top-4 -right-4 font-sketch text-sm text-sketch rotate-12">
              ↗ Real results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;