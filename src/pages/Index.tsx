
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatWidget from "@/components/chat/ChatWidget";
import VideoCard from "@/components/VideoCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">PathWise</h1>
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">My Paths</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Leaderboard</a>
            </div>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Sign In</Button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-indigo-600">Your Personalized Learning </span>
          <span className="text-cyan-500">Journey </span>
          <span className="text-teal-400">Starts Here</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Discover the perfect path to master any technology. Learn, track progress, and compete with others in your learning journey.
        </p>

        {/* Search Bar */}
        <div className="flex max-w-xl mx-auto mb-16">
          <Input 
            className="flex-1 rounded-r-none" 
            placeholder="Search for any technology or topic..." 
          />
          <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700">
            Explore
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-600">1000+</p>
            <p className="text-gray-600">Learning Paths</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-600">50K+</p>
            <p className="text-gray-600">Active Learners</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-indigo-600">95%</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* Popular Learning Paths */}
        <h3 className="text-2xl font-bold text-left mb-6">Popular Learning Paths</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-indigo-600 font-bold">#{item}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Learning Path {item}</h4>
              <p className="text-gray-600 mb-4">Master the fundamentals and advanced concepts with our comprehensive curriculum.</p>
              <Button variant="outline" className="w-full">View Path</Button>
            </div>
          ))}
        </div>

        {/* Featured Videos Section */}
        <h3 className="text-2xl font-bold text-left mb-6">Featured Video Tutorials</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoCard 
              title="React Crash Course"
              description="A complete beginner's guide to React"
              views="1.2M"
              duration="45 minutes"
              videoId="w7ejDZ8SWv8"
            />
            
            <VideoCard 
              title="Advanced JavaScript Techniques"
              description="Master the advanced concepts and patterns"
              views="850K"
              duration="1 hour 20 minutes"
              videoId="jS4aFq5-91M"
            />
            
            <VideoCard 
              title="Node.js Project Tutorial"
              description="Build a complete project from scratch"
              views="675K"
              duration="2 hours 15 minutes"
              videoId="Oe421EPjeBE"
            />
            
            <VideoCard 
              title="CSS Tips and Tricks"
              description="Productivity hacks and best practices"
              views="520K"
              duration="55 minutes"
              videoId="1Rs2ND1ryYc"
            />
            
            <VideoCard 
              title="TypeScript Full Course"
              description="Learn TypeScript from zero to hero"
              views="980K"
              duration="1 hour 45 minutes"
              videoId="30LWjhZzg50"
            />
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
