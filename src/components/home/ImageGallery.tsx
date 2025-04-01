
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const schoolImages = [
  {
    src: '/lovable-uploads/1743dd4b-6b5d-4c3f-83d3-e0772a0b5985.png',
    alt: 'Students with certificates and teachers',
    caption: 'Award Ceremony - Students receiving certificates of achievement'
  },
  {
    src: '/lovable-uploads/22b7882e-7477-4297-b7a1-c98d22de29d6.png',
    alt: 'Students with teachers on playground',
    caption: 'Sports Day - Students preparing for football match'
  },
  {
    src: '/lovable-uploads/56f1e38d-3a9b-4342-af55-22627c52fa52.png',
    alt: 'Students with teachers and sports equipment',
    caption: 'Extracurricular Activities - Students with teachers and sports equipment'
  },
  {
    src: '/lovable-uploads/b187cbf9-34ee-4fd1-b0b8-1ac21666c5fa.png',
    alt: 'Republic Day celebrations',
    caption: 'Republic Day Celebration - Cultural program by students'
  },
  {
    src: '/lovable-uploads/24a7315b-30a1-45f8-a77b-5f17ad69d617.png',
    alt: 'Cultural celebrations',
    caption: 'Cultural Events - Students in traditional attire'
  },
  {
    src: '/lovable-uploads/0f8cc30f-2b84-425b-ba80-6d276a39e49f.png',
    alt: 'Teachers Day celebration',
    caption: 'Teachers Day Celebration - Honoring our educators'
  },
  {
    src: '/lovable-uploads/d8badbd5-8abc-4ae0-9ec8-edd4025b0924.png',
    alt: 'Children receiving gifts',
    caption: 'Prize Distribution - Recognizing student achievements'
  },
  {
    src: '/lovable-uploads/7de2099e-90b5-48f2-a4d4-3621c7f88c89.png',
    alt: 'Cultural program',
    caption: 'Cultural Program - Celebrating our heritage'
  }
];

const ImageGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">School Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Glimpses of activities, events and celebrations at Mansarovar Public School
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <Carousel className="w-full">
            <CarouselContent>
              {schoolImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center">
                    <div className="aspect-video w-full max-h-[500px] overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-3 text-center text-gray-600">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static -translate-y-0 mr-2" />
              <CarouselNext className="relative static -translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {schoolImages.slice(0, 8).map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
