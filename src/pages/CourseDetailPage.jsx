import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, CheckCircle, Play, Star, DollarSign } from 'lucide-react';
import { useState } from 'react';
import NoorButton from '../components/NoorButton';
import { coursesData } from '../data/courses';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  
  const course = coursesData.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses">
            <NoorButton>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </NoorButton>
          </Link>
        </div>
      </div>
    );
  }

  const handleEnrollFree = () => {
    setIsEnrolled(true);
    alert('Enrolled successfully! Welcome to the course.');
  };

  const handleBuyNow = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentConfirm = () => {
    setShowPaymentModal(false);
    setIsEnrolled(true);
    alert('Payment successful! Redirecting to payment gateway...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                {course.isPaid ? (
                  <span className="noor-price-tag mr-3">
                    ${course.price}
                  </span>
                ) : (
                  <span className="noor-free-tag mr-3">
                    FREE
                  </span>
                )}
                <span className="text-blue-200 text-sm">
                  {course.isPaid ? 'Premium Course' : 'Free Course'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.lessons.length} lessons</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 fill-current text-yellow-400" />
                  <span>4.8 (124 reviews)</span>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  {!isEnrolled ? (
                    <>
                      {course.isPaid ? (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-gray-800">
                              ${course.price}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              $149.99
                            </span>
                          </div>
                          <NoorButton 
                            onClick={handleBuyNow}
                            className="w-full"
                            size="large"
                          >
                            <DollarSign className="mr-2 h-5 w-5" />
                            Buy Now for ${course.price}
                          </NoorButton>
                        </div>
                      ) : (
                        <NoorButton 
                          onClick={handleEnrollFree}
                          className="w-full"
                          size="large"
                        >
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Enroll for Free
                        </NoorButton>
                      )}
                    </>
                  ) : (
                    <div className="text-center">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <p className="text-green-600 font-semibold mb-4">You're enrolled!</p>
                      <NoorButton className="w-full" size="large">
                        <Play className="mr-2 h-5 w-5" />
                        Start Learning
                      </NoorButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Description */}
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Description</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    This comprehensive course is designed to take you from beginner to advanced level. 
                    Whether you're just starting out or looking to enhance your existing skills, 
                    this course provides practical, hands-on learning that you can apply immediately.
                  </p>
                  <p className="mb-4">
                    Our expert instructor brings years of industry experience and will guide you 
                    through each concept with clear explanations and real-world examples. 
                    You'll work on practical projects that build your portfolio and demonstrate your skills.
                  </p>
                  <p>
                    By the end of this course, you'll have the confidence and knowledge to tackle 
                    real-world challenges and advance your career in this exciting field.
                  </p>
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{lesson}</h3>
                        <p className="text-sm text-gray-500">15-20 minutes</p>
                      </div>
                      {isEnrolled ? (
                        <Play className="h-5 w-5 text-blue-600" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Instructor Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Instructor</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{course.instructor}</h4>
                    <p className="text-sm text-gray-500">Expert Instructor</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Experienced professional with over 10 years in the industry. 
                  Passionate about teaching and helping students achieve their goals.
                </p>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">This course includes:</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lifetime access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile and desktop access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Downloadable resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Complete Purchase</h3>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{course.title}</span>
                <span className="font-semibold">${course.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center font-bold">
                <span>Total</span>
                <span>${course.price}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <NoorButton 
                onClick={handlePaymentConfirm}
                className="flex-1"
              >
                Confirm Payment
              </NoorButton>
              <NoorButton 
                variant="secondary"
                onClick={() => setShowPaymentModal(false)}
                className="flex-1"
              >
                Cancel
              </NoorButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
