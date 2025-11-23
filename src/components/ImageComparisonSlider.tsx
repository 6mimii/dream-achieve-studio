import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const ImageComparisonSlider = ({ 
  beforeImage, 
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After" 
}: ImageComparisonSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    // Clamp between 0 and 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-pearl cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-pearl rounded-full flex items-center justify-center shadow-2xl border-4 border-deep-black cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="text-deep-black w-5 h-5 -mr-1" />
          <ChevronRight className="text-deep-black w-5 h-5 -ml-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
