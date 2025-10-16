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
          name: 'Lamps & Luminaires',
          items: [
            { name: 'LED Bulbs', image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300', link: '/products/led-bulbs' },
            { name: 'Panel Lights', image: 'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=300', link: '/products/panel-lights' },
            { name: 'Downlights', image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Track Lighting', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'High Bay', image: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Street Lights', image: 'https://images.pexels.com/photos/1684979/pexels-photo-1684979.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        },
        {
          name: 'Panels & Fixtures',
          items: [
            { name: 'LED Panels', image: 'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Troffer Fixtures', image: 'https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Surface Mount', image: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Pendant Fixtures', image: 'https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Outdoor Fixtures', image: 'https://images.pexels.com/photos/1684979/pexels-photo-1684979.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        },
        {
          name: 'LED Strips',
          items: [
            { name: 'Flexible LED Strips', image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Rigid LED Strips', image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'RGB Strips', image: 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'High Output Strips', image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        },
        {
          name: 'Wiring Devices',
          items: [
            { name: 'Switches', image: 'https://images.pexels.com/photos/159358/alarm-systems-security-device-security-system-house-alarm-159358.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Sockets & Outlets', image: 'https://images.pexels.com/photos/159358/alarm-systems-security-device-security-system-house-alarm-159358.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Dimmers', image: 'https://images.pexels.com/photos/159358/alarm-systems-security-device-security-system-house-alarm-159358.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Junction Boxes', image: 'https://images.pexels.com/photos/159358/alarm-systems-security-device-security-system-house-alarm-159358.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        },
        {
          name: 'Smart Controls',
          items: [
            { name: 'Smart Switches', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Motion Sensors', image: 'https://images.pexels.com/photos/159358/alarm-systems-security-device-security-system-house-alarm-159358.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Light Controllers', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' },
            { name: 'Smart Hubs', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300', link: '#' }
          ]
        }
      ],
      featured: {
        title: 'Energy Efficient Solutions',
        description: 'Save up to 80% on energy costs with our certified products',
        image: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=400',
        link: '#'
      }
    }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:920003344" className="flex items-center hover:text-primary-100 transition">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">920-003-344</span>
            </a>
            <a href="mailto:info@lightpro.sa" className="flex items-center hover:text-primary-100 transition">
              <Mail className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">info@lightpro.sa</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/support" className="hover:text-primary-100 transition">Support</a>
            <a href="/login" className="hover:text-primary-100 transition">Login</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">LightPro</h1>
              <p className="text-xs text-slate-500">Lighting Solutions</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-slate-700 hover:text-primary-600 font-medium px-4 py-2 transition">
                  <span>{category.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === category.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] bg-white shadow-2xl rounded-lg border border-gray-200">
                    <div className="grid grid-cols-5 gap-0">
                      {category.subcategories && category.subcategories.map((subcategory, idx) => (
                        <div
                          key={subcategory.name}
                          className={`p-4 ${idx !== category.subcategories!.length - 1 ? 'border-r border-gray-200' : ''}`}
                        >
                          <h3 className="text-xs font-bold text-primary-700 mb-3 uppercase tracking-wide pb-2 border-b border-primary-200">
                            {subcategory.name}
                          </h3>
                          <div className="space-y-1">
                            {subcategory.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.link}
                                className="block px-2 py-2 text-sm text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded transition"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {category.featured && (
                      <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4">
                          <img
                            src={category.featured.image}
                            alt={category.featured.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold text-primary-900 mb-1">
                              {category.featured.title}
                            </h4>
                            <p className="text-sm text-slate-600 mb-2">
                              {category.featured.description}
                            </p>
                            <a
                              href={category.featured.link}
                              className="text-primary-600 font-semibold text-sm hover:text-primary-700 inline-flex items-center"
                            >
                              Learn More →
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <a href="/about" className="text-slate-700 hover:text-primary-600 font-medium px-4 py-2 transition">
              About Us
            </a>
            <a href="/projects" className="text-slate-700 hover:text-primary-600 font-medium px-4 py-2 transition">
              Projects
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-primary-600 transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium shadow-sm">
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
                        <h3 className="text-xs font-bold text-primary-700 mb-2 uppercase tracking-wide">
                          {subcategory.name}
                        </h3>
                        <div className="space-y-1">
                          {subcategory.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className="block py-2 text-sm text-slate-600 hover:text-primary-600"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/about" className="block py-3 text-slate-700 font-medium">About Us</a>
            <a href="/projects" className="block py-3 text-slate-700 font-medium">Projects</a>
            <a href="/support" className="block py-3 text-slate-700 font-medium">Support</a>
            <a href="/login" className="block py-3 text-slate-700 font-medium">Login</a>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium mt-4">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
