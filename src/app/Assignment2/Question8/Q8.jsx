'use client'
// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import { useState, useEffect } from "react";

export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const images = [
        '/Images/image1.png',
        '/Images/image2.png',
        '/Images/image3.png',
        '/Images/image4.png'
    ];

    // Change to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    // Toggle between play and pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(nextSlide, 3000); // 3 seconds interval

        return () => clearInterval(interval); // Cleanup interval when component unmounts or when paused
    }, [isPlaying]);

    return (
        <div style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            <div>
                <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
            </div>

            <div style={{ marginTop: "10px" }}>
                <button onClick={togglePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
}
