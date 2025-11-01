import { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/courses';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Filter courses based on search term and filter type
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || 
                         (filterType === 'free' && !course.isPaid) ||
                         (filterType === 'paid' && course.isPaid);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-yellow-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">All Courses</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our comprehensive collection of courses designed to help you master new skills and advance your career.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-20 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filterType === 'all' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType('free')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filterType === 'free' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Free
                </button>
                <button
                  onClick={() => setFilterType('paid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filterType === 'paid' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-gray-600 hover:text-yellow-600'
                  }`}
                >
                  Premium
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            {filteredCourses.length === 1 
              ? '1 course found' 
              : `${filteredCourses.length} courses found`
            }
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10 items-stretch">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('all');
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Course Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Learn modern web technologies and frameworks</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Programming</h3>
              <p className="text-gray-600 text-sm">Master programming languages and concepts</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Create beautiful and functional designs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
