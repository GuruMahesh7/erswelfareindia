import { Link } from 'react-router-dom';
import { Shield, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  // removed backend status and doctors count display
  return (
    <div className="min-h-screen">
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-32" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=2069&auto=format&fit=crop')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Supporting Healthcare Professionals Together
            </h1>
            <p className="text-xl mb-8 text-white">
              Join drswelfareindia - A comprehensive self-support scheme designed exclusively for doctors and dentists to ensure financial security and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center flex items-center justify-center"
              >
                Join Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Use local image placed at public/images/medical-team.jpg (replace with your old image file) */}
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built by Healthcare Professionals, For Healthcare Professionals
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Designed specifically for doctors and dentists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Comprehensive family coverage and nominee benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Transparent and easy-to-understand membership process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Dedicated support team available 24/7</span>
                </li>
              </ul>
              <Link
                to="/membership"
                className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Membership Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose drswelfareindia?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support and benefits tailored specifically for healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Financial Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive financial support and security measures designed to protect you and your family's future.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a network of healthcare professionals who support and help each other through every challenge.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Healthcare Benefits</h3>
              <p className="text-gray-600 leading-relaxed">
                Exclusive healthcare benefits and assistance programs designed specifically for medical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards securing your future and joining a supportive community of healthcare professionals.
          </p>
          <Link
            to="/join"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Start Your Application Today
          </Link>
        </div>
      </section>
    </div>
  );
}
