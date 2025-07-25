import Image from "next/image";

// export default function Home() {
//   return (

//     <div>Hello world</div>
//   );
// }


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent animate-pulse">
              Hello World
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to the future of web development. Where innovation meets simplicity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Fast Performance</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Lightning-fast load times and optimized performance for the best user experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Smart Solutions</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Intelligent features designed to solve real-world problems with elegant simplicity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Precision Focus</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Every detail crafted with purpose to deliver exactly what you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100+</div>
              <div className="text-amber-100">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50K+</div>
              <div className="text-amber-100">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">99%</div>
              <div className="text-amber-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Join thousands of satisfied users who have transformed their experience with us.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}