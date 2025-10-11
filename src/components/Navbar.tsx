import { useState } from 'react';
import { Search, Phone, Mail, ChevronDown, Menu, X, Zap } from 'lucide-react';

interface MegaMenuItem {
  name: string;
  image: string;
  link: string;
}

interface SubCategory {
  name: string;
  items: MegaMenuItem[];
}

interface Category {
  name: string;
  items?: MegaMenuItem[];
  subcategories?: SubCategory[];
  featured?: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categories: Category[] = [
    {
      name: 'Products',
      subcategories: [
        {
          name: 'LED Strips',
          items: [
            { name: 'Flexible LED Strips', image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Rigid LED Strips', image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'RGB & Color Changing', image: 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'High Output Strips', image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'IP-Rated Waterproof', image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Smart LED Strips', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        },
        {
          name: 'Panels & Fixtures',
          items: [
            { name: 'LED Panels', image: 'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Troffer Fixtures', image: 'https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Surface Mount', image: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Pendant Fixtures', image: 'https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Track Lighting', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Outdoor Fixtures', image: 'https://images.pexels.com/photos/1684979/pexels-photo-1684979.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        },
        {
          name: 'Other Products',
          items: [
            { name: 'LED Lamps & Bulbs', image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Traditional Lighting', image: 'https://images.pexels.com/photos/1210276/pexels-photo-1210276.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Sensors & Controls', image: 'https://images.pexels.com/photos/159358/alarm-systems-security-device-security-system-house-alarm-159358.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Emergency Lighting', image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Specialty Products', image: 'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        }
      ],
      featured: {
        title: 'Energy Star Certified',
        description: 'Save up to 80% on energy costs with our certified products',
        image: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=400',
        link: '#'
      }
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:1-800-LIGHTING" className="flex items-center hover:text-blue-400 transition">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">1-800-LIGHTING</span>
            </a>
            <a href="mailto:contact@lighting.com" className="flex items-center hover:text-blue-400 transition">
              <Mail className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">contact@lighting.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/support" className="hover:text-blue-400 transition">Support</a>
            <a href="/login" className="hover:text-blue-400 transition">Login</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900">LightPro Solutions</h1>
          </a>

          <div className="hidden lg:flex items-center space-x-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium py-2 transition">
                  <span>{category.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === category.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] bg-white shadow-2xl rounded-lg border border-gray-100 p-6">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-3">
                        {category.subcategories && category.subcategories.map((subcategory) => (
                          <div key={subcategory.name} className="mb-6">
                            <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide border-b pb-2">
                              {subcategory.name}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {subcategory.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.link}
                                  className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition group/item"
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-medium text-sm text-slate-900 group-hover/item:text-blue-600 transition">
                                      {item.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1">View Products</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {category.featured && (
                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-4">
                          <img
                            src={category.featured.image}
                            alt={category.featured.title}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-bold text-slate-900 mb-2">
                            {category.featured.title}
                          </h4>
                          <p className="text-sm text-slate-600 mb-3">
                            {category.featured.description}
                          </p>
                          <a
                            href={category.featured.link}
                            className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                          >
                            Learn More →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a href="/resources" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Resources
            </a>
            <a href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition">
              About Us
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-blue-600 transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
              Get Quote
            </button>
          </div>

          <button
            className="lg:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 max-h-[70vh] overflow-y-auto">
            {categories.map((category) => (
              <div key={category.name} className="mb-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === category.name ? null : category.name)}
                  className="w-full flex justify-between items-center py-3 text-slate-700 font-medium"
                >
                  <span>{category.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === category.name ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === category.name && (
                  <div className="pl-4 space-y-4">
                    {category.subcategories && category.subcategories.map((subcategory) => (
                      <div key={subcategory.name}>
                        <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wide">
                          {subcategory.name}
                        </h3>
                        <div className="space-y-2">
                          {subcategory.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className="flex items-center space-x-3 py-2 text-slate-600 hover:text-blue-600"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <span className="text-sm">{item.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/resources" className="block py-3 text-slate-700 font-medium">Resources</a>
            <a href="/about" className="block py-3 text-slate-700 font-medium">About Us</a>
            <a href="/support" className="block py-3 text-slate-700 font-medium">Support</a>
            <a href="/login" className="block py-3 text-slate-700 font-medium">Login</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium mt-4">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
