import { useEffect, useState } from 'react';
import { dummyStoriesData } from '../assets/assets';
import { Plus } from 'lucide-react';
import moment from 'moment';
import StoryModal from './StoryModal'; // Assuming this is the import path

const StoriesBar = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [viewStory, setViewStory] = useState(null);

  // Fixed typo: renamed to fetchStories to match Modal prop expectations
  const fetchStories = async () => {
    setStories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">
        
        {/* Add story card */}
        <div 
          onClick={() => setShowModal(true)} 
          className="rounded-lg shadow-sm min-w-[120px] max-w-[120px] aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white flex-shrink-0"
        >
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-slate-700">Create Story</p>
          </div>
        </div>

        {/* Story cards */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow min-w-[120px] max-w-[120px] aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 overflow-hidden active:scale-95 flex-shrink-0"
          >
            {/* User Profile Picture */}
            <img
              src={story.user.profile_picture}
              alt=""
              className="absolute size-8 top-3 left-3 z-20 rounded-full ring-2 ring-indigo-400 shadow"
            />

            {/* Content Rendering (Fixed Redundant Logic) */}
            <div className="absolute inset-0 z-0">
              {story.media_type === 'image' ? (
                <img
                  src={story.media_url}
                  alt=""
                  className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-80"
                />
              ) : story.media_type === 'video' ? (
                <video
                  src={story.media_url}
                  className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-80"
                />
              ) : (
                // Background for text stories
                <div className="h-full w-full bg-indigo-600 flex items-center justify-center p-2">
                   {/* Text content shows here if no media */}
                </div>
              )}
            </div>

            {/* Text Overlay */}
            <p className="absolute bottom-6 left-3 z-10 text-white text-[10px] font-medium truncate max-w-[100px]">
              {story.content}
            </p>

            {/* Timestamp */}
            <p className="text-white/80 absolute bottom-1 right-2 z-10 text-[10px]">
              {moment(story.createdAt).fromNow(true)}
            </p>
          </div>
        ))}
      </div>

      {/* Add story modal - Fixed Prop Name to match your StoryModal.jsx */}
      {showModal && (
        <StoryModal 
          setShowModal={setShowModal} 
          fetchStories={fetchStories} 
        />
      )}
    </div>
  );
};

export default StoriesBar;