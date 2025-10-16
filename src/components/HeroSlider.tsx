import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Advanced LED Lighting Solutions',
    subtitle: 'Transform Your Space with Energy-Efficient Technology',
    description: 'Discover our comprehensive range of commercial and residential lighting products',
    cta: 'Explore Products',
    image: 'https://images.pexels.com/photos/1210276/pexels-photo-1210276.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    id: 2,
    title: 'Smart Controls & Sensors',
    subtitle: 'Intelligent Lighting for Modern Buildings',
    description: 'Maximize efficiency with automated lighting control systems',
    cta: 'Learn More',
    image: 'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    id: 3,
    title: 'Custom Design Solutions',
    subtitle: 'Tailored Lighting for Your Project',
    description: 'Work with our experts to create the perfect lighting solution',
    cta: 'Get Started',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    id: 4,
    title: 'Sustainable & Eco-Friendly',
    subtitle: 'Reduce Energy Costs by Up to 80%',
    description: 'Join thousands of businesses saving money with LED technology',
    cta: 'Calculate Savings',
    image: 'https://images.pexels.com/photos/1684979/pexels-photo-1684979.jpeg?auto=compress&cs=tinysrgb&w=1920'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl text-primary-400 mb-4 font-semibold">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition flex items-center space-x-2 text-lg font-semibold group">
                  <span>{slide.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary-600' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
