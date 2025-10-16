import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Check, Star, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: 'LED Panel Light 1x4 Flange Kit',
    sku: 'F-L14/FLANGE-87',
    price: 299.99,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    description: 'High-performance LED panel light with flange mounting kit. Perfect for commercial and residential applications. Energy-efficient design with superior light output and long lifespan.',
    features: [
      '40W power consumption',
      '4800 lumens output',
      'CCT: 4000K (Neutral White)',
      'CRI >80 for true color rendering',
      '50,000 hour lifespan',
      'Dimmable with compatible controls',
      'Flange mounting kit included',
      '5-year manufacturer warranty'
    ],
    specifications: [
      { label: 'Product Type', value: 'LED Panel Light' },
      { label: 'Size', value: '1x4 ft (305x1219mm)' },
      { label: 'Power', value: '40W' },
      { label: 'Lumens', value: '4800 lm' },
      { label: 'Color Temperature', value: '4000K' },
      { label: 'CRI', value: '>80' },
      { label: 'Voltage', value: '120-277V AC' },
      { label: 'Lifespan', value: '50,000 hours' },
      { label: 'Dimming', value: '0-10V' },
      { label: 'Material', value: 'Aluminum Frame' },
      { label: 'Mounting', value: 'Recessed/Surface (Flange Kit)' },
      { label: 'Certifications', value: 'UL, DLC, Energy Star' },
    ],
    images: [
      'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=800',
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-slate-600 hover:text-primary-600">Home</a>
            <span className="text-slate-400">/</span>
            <a href="/products" className="text-slate-600 hover:text-primary-600">Products</a>
            <span className="text-slate-400">/</span>
            <a href="/products/panel-lights" className="text-slate-600 hover:text-primary-600">Panel Lights</a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">LED Panel 1x4</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <a
          href="/products"
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-primary-600 mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-square flex items-center justify-center">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gray-100 rounded-lg overflow-hidden aspect-square border-2 transition ${
                    selectedImage === index ? 'border-primary-600' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-sm text-slate-600">SKU: {product.sku}</span>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-slate-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                ${product.price.toFixed(2)}
              </div>
              {product.inStock ? (
                <div className="flex items-center space-x-2 text-accent-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">In Stock - Ships within 2-3 business days</span>
                </div>
              ) : (
                <div className="text-red-600 font-medium">Out of Stock</div>
              )}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-slate-900 mb-3">Key Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Heart className="w-6 h-6 text-slate-600" />
              </button>

              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Share2 className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <p className="text-sm text-primary-900">
                <strong>Need help choosing?</strong> Contact our lighting specialists at{' '}
                <a href="tel:920003344" className="font-semibold text-primary-700 hover:text-primary-800">
                  920-003-344
                </a>{' '}
                for expert advice.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-8 py-4 font-semibold text-primary-600 border-b-2 border-primary-600">
                Specifications
              </button>
              <button className="px-8 py-4 font-semibold text-slate-600 hover:text-slate-900">
                Documentation
              </button>
              <button className="px-8 py-4 font-semibold text-slate-600 hover:text-slate-900">
                Reviews
              </button>
            </nav>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-900 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-slate-700">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Related product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">LED Panel 2x2</h3>
                  <p className="text-primary-600 font-bold">$199.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
