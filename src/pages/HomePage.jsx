import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Star } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import NoorButton from '../components/NoorButton';
import { coursesData } from '../data/courses';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="noor-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-400">Noor to Learn</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Illuminate your path to knowledge with our comprehensive online courses. 
              Learn from industry experts and transform your skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/courses">
                <NoorButton size="large" className="w-full sm:w-auto">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NoorButton>
              </Link>
              <NoorButton variant="secondary" size="large" className="w-full sm:w-auto">
                Learn More
              </NoorButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Noor to Learn?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide world-class education with a focus on practical skills and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert-Led Courses</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world experience and proven track records.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join a vibrant community of learners and get support from peers and instructors throughout your journey.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certificates</h3>
              <p className="text-gray-600">
                Earn recognized certificates upon course completion to showcase your new skills to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your learning journey with our most popular courses, designed for both beginners and advanced learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10 items-stretch max-w-7xl mx-auto">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <NoorButton size="large">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </NoorButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-200">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-blue-200">Completion Rate</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-yellow-400">4.9</span>
                <Star className="h-6 w-6 text-yellow-400 fill-current ml-1" />
              </div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <Link to="/courses">
            <NoorButton variant="secondary" size="large">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </NoorButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
