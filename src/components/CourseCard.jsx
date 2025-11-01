import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="noor-course-card group h-full flex flex-col rounded-2xl overflow-hidden">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Price/Free Tag */}
        <div className="absolute top-4 right-4">
          {course.isPaid ? (
            <span className="noor-price-tag text-base px-5 py-2">
              ${course.price}
            </span>
          ) : (
            <span className="noor-free-tag text-base px-5 py-2">
              FREE
            </span>
          )}
        </div>
      </div>

      {/* Course Content */}
  <div className="p-10 flex flex-col flex-1 gap-4">
        {/* Course Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center text-gray-600">
          <User className="h-5 w-5 mr-2" />
          <span className="text-base font-medium">{course.instructor}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-3 flex-grow">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-base">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">{course.lessons.length} lessons</span>
          </div>
          <div className="text-base text-gray-500 font-medium">
            {course.isPaid ? 'Premium' : 'Free Course'}
          </div>
        </div>

        {/* View Course Button */}
        <Link 
          to={`/courses/${course.id}`}
          className="flex items-center justify-center w-full py-4 px-6 bg-blue-600 text-white text-base font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 group mt-2"
        >
          <span>View Course</span>
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
