import { useState } from 'react';
import { Search, Phone, Mail, ChevronDown, Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categories = [
    {
      name: 'LED Strips',
      subcategories: [
        'Flexible LED Strips',
        'Rigid LED Strips',
        'RGB & Color Changing',
        'High Output Strips',
        'IP-Rated Waterproof',
        'Smart LED Strips'
      ]
    },
    {
      name: 'Products',
      subcategories: [
        'LED Fixtures',
        'LED Lamps & Bulbs',
        'Traditional Lighting',
        'Sensors & Controls',
        'Emergency Lighting',
        'Specialty Products'
      ]
    },
    {
      name: 'Panels & Fixtures',
      subcategories: [
        'LED Panels',
        'Troffer Fixtures',
        'Surface Mount',
        'Pendant Fixtures',
        'Track Lighting',
        'Outdoor Fixtures'
      ]
    },
    {
      name: 'Resources',
      subcategories: [
        'Product Catalogs',
        'Spec Sheets',
        'Installation Guides',
        'Case Studies',
        'Energy Calculator',
        'Rebate Finder'
      ]
    },
    {
      name: 'Tools',
      subcategories: [
        'ROI Calculator',
        'Energy Savings Tool',
        'Product Selector',
        'Download Center',
        'Support Portal'
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-blue-400 transition">
              <Phone className="w-4 h-4 mr-2" />
              1-800-LIGHTING
            </a>
            <a href="#" className="flex items-center hover:text-blue-400 transition">
              <Mail className="w-4 h-4 mr-2" />
              contact@lighting.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition">Support</a>
            <a href="#" className="hover:text-blue-400 transition">Login</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900">LightPro Solutions</h1>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
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
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-lg py-4 border border-gray-100">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
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
          <div className="lg:hidden pb-4">
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
                  <div className="pl-4 space-y-2">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block py-2 text-slate-600 hover:text-blue-600"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="block py-3 text-slate-700 font-medium">About Us</a>
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
