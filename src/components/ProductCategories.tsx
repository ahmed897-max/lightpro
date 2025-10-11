import { Lightbulb, Lamp, PanelTop, Gauge, Zap, Settings } from 'lucide-react';

const categories = [
  {
    icon: Lightbulb,
    title: 'LED Strips & Tapes',
    description: 'Flexible lighting solutions for any application',
    products: '500+ Products',
    color: 'blue'
  },
  {
    icon: Lamp,
    title: 'LED Fixtures',
    description: 'High-performance commercial and residential fixtures',
    products: '350+ Products',
    color: 'indigo'
  },
  {
    icon: PanelTop,
    title: 'Panels & Troffers',
    description: 'Energy-efficient ceiling lighting solutions',
    products: '200+ Products',
    color: 'cyan'
  },
  {
    icon: Gauge,
    title: 'Sensors & Controls',
    description: 'Smart automation for intelligent spaces',
    products: '150+ Products',
    color: 'teal'
  },
  {
    icon: Zap,
    title: 'Emergency Lighting',
    description: 'Code-compliant safety and exit lighting',
    products: '120+ Products',
    color: 'orange'
  },
  {
    icon: Settings,
    title: 'Specialty Products',
    description: 'Custom solutions for unique requirements',
    products: '180+ Products',
    color: 'slate'
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Explore Our Product Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive lighting solutions for every application. Browse our extensive catalog of premium products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-${category.color}-100 p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${category.color}-600`} />
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {category.products}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  {category.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {category.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group-hover:gap-2 transition-all">
                  View Products
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
