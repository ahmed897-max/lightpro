import { TrendingDown, Shield, Headphones, Award, Clock, Truck } from 'lucide-react';

const features = [
  {
    icon: TrendingDown,
    title: 'Energy Savings',
    description: 'Reduce energy costs by up to 80% with our LED solutions'
  },
  {
    icon: Shield,
    title: '10-Year Warranty',
    description: 'Industry-leading warranty on all premium products'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert technical support whenever you need it'
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'UL, ETL, and Energy Star certified products'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick quotes and project implementation'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Complimentary shipping on orders over $500'
  }
];

const tools = [
  {
    title: 'ROI Calculator',
    description: 'Calculate your return on investment',
    link: '#'
  },
  {
    title: 'Energy Audit',
    description: 'Get a free energy assessment',
    link: '#'
  },
  {
    title: 'Product Selector',
    description: 'Find the perfect lighting solution',
    link: '#'
  },
  {
    title: 'Rebate Finder',
    description: 'Discover available incentives',
    link: '#'
  }
];

const FeaturesSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose LightPro Solutions?
            </h2>
            <p className="text-xl text-slate-600">
              Industry-leading products and services backed by decades of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition group"
                >
                  <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-600 transition">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enhanced Project Solutions
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Access our suite of professional tools designed to streamline your lighting projects. From initial planning to final implementation, we provide the resources you need for success.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                Explore All Tools
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.link}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition border border-white/20 group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {tool.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and discover how our lighting solutions can save you money while enhancing your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
              Request Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition text-lg font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
