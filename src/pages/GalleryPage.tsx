import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, Filter } from "lucide-react";
import heroImage from "@/assets/hero-children-playing.jpg";
import teacherReading from "@/assets/teacher-reading-story.jpg";
import artActivities from "@/assets/children-art-activities.jpg";
import playground from "@/assets/outdoor-playground.jpg";
import snackTime from "@/assets/snack-time.jpg";
import musicTime from "@/assets/music-time.jpg";
import natureExploration from "@/assets/nature-exploration.jpg";
import learningActivities from "@/assets/learning-activities.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: "Children playing together in our bright classroom",
      category: "playtime",
      title: "Free Play Time"
    },
    {
      id: 2,
      src: teacherReading,
      alt: "Teacher reading stories to engaged children",
      category: "learning",
      title: "Story Time Circle"
    },
    {
      id: 3,
      src: artActivities,
      alt: "Creative art projects and painting activities",
      category: "learning",
      title: "Art & Creativity"
    },
    {
      id: 4,
      src: playground,
      alt: "Safe outdoor playground with climbing equipment",
      category: "outdoor",
      title: "Outdoor Adventures"
    },
    {
      id: 5,
      src: snackTime,
      alt: "Healthy snack time in our bright cafeteria",
      category: "playtime",
      title: "Snack Time Fun"
    },
    {
      id: 6,
      src: musicTime,
      alt: "Music and movement activities with instruments",
      category: "learning",
      title: "Music & Movement"
    },
    {
      id: 7,
      src: natureExploration,
      alt: "Children exploring nature and learning outdoors",
      category: "outdoor",
      title: "Nature Discovery"
    },
    {
      id: 8,
      src: learningActivities,
      alt: "Educational puzzles and learning activities",
      category: "learning",
      title: "Learning Centers"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", count: galleryImages.length },
    { id: "playtime", label: "Playtime", count: galleryImages.filter(img => img.category === "playtime").length },
    { id: "learning", label: "Learning", count: galleryImages.filter(img => img.category === "learning").length },
    { id: "outdoor", label: "Outdoor", count: galleryImages.filter(img => img.category === "outdoor").length }
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Take a peek into our vibrant learning environment and see the joy, 
            creativity, and wonder that fills our days at Little Stars.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-muted-foreground mr-3" />
            <span className="text-muted-foreground font-subheading font-medium">Filter by category:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
                <span className="ml-2 bg-white/20 rounded-full px-2 py-0.5 text-xs">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted hover-lift hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-heading font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm font-body capitalize">
                      {image.category}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground font-body">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              ←
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              →
            </button>

            {/* Image */}
            {(() => {
              const currentImage = filteredImages.find(img => img.id === selectedImage);
              return currentImage ? (
                <div className="animate-scale-in">
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="text-center mt-4">
                    <h3 className="text-white text-xl font-heading font-semibold mb-2">
                      {currentImage.title}
                    </h3>
                    <p className="text-white/80 font-body capitalize">
                      {currentImage.category}
                    </p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            See Our Environment in Person
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-body max-w-2xl mx-auto">
            Pictures tell a story, but nothing compares to experiencing our warm, 
            nurturing environment firsthand. Schedule a tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Schedule a Tour
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;