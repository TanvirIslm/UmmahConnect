import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

// Fixed: Changed fetchStories to fetchStrories to match the typo in your StoriesBar parent component
const StoryModal = ({setShowModal, fetchStrories}) => {

    const bgColors = ["#2d5a27", "red", "orange", "blue", "yellow", "purple"]
    const [mode, setMode] = useState('text')
    const [background, setBackground] = useState(bgColors[0])
    const [text, setText] = useState("")
    const [media, setMedia] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleMediaUpload = (e)=>{
        const file = e.target.files?.[0]
        if(file){
            setMedia(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }
    
    const handleCreateStory = async () => {
        // You can now call fetchStrories() here after your API logic
    }

  return (
    // Fixed: Tailwind needs brackets for custom z-index values like z-[110]
    <div className='fixed inset-0 z-[110] min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
            <div className='flex items-center gap-4 mb-4'> 
                <button onClick={()=> setShowModal(false)} className='text-white p-2 cursor-pointer'>
                    <ArrowLeft/>
                </button>
                <h2 className='text-lg font-semibold'>Create Story</h2>
                <span className="w-10"></span>
            </div>
            {/* Modal Content goes here */}
        </div>
    </div>
  )
}

export default StoryModal