import { useState } from "react";
import { X } from "lucide-react";

interface SolarImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const solarImages: SolarImage[] = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "Solar Installation Project 1",
    title: "Solar Project 1",
    description: "Professional solar installation and implementation",
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Solar Installation Project 2",
    title: "Solar Project 2",
    description: "Advanced solar power system deployment",
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Solar Installation Project 3",
    title: "Solar Project 3",
    description: "Residential solar energy solution",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Solar Installation Project 4",
    title: "Solar Project 4",
    description: "Commercial solar installation project",
  },
  {
    id: 5,
    src: "/5.jpg",
    alt: "Solar Installation Project 5",
    title: "Solar Project 5",
    description: "Industrial solar power system",
  },
  {
    id: 6,
    src: "/6.jpg",
    alt: "Solar Installation Project 6",
    title: "Solar Project 6",
    description: "Large-scale solar implementation",
  },
  {
    id: 7,
    src: "/7.jpg",
    alt: "Solar Installation Project 7",
    title: "Solar Project 7",
    description: "Rooftop solar panel installation",
  },
  {
    id: 8,
    src: "/8.jpg",
    alt: "Solar Installation Project 8",
    title: "Solar Project 8",
    description: "Solar energy infrastructure development",
  },
  {
    id: 9,
    src: "/9.jpg",
    alt: "Solar Installation Project 9",
    title: "Solar Project 9",
    description: "Complete solar power solution",
  },
  {
    id: 10,
    src: "/10.jpg",
    alt: "Solar Installation Project 10",
    title: "Solar Project 10",
    description: "High-efficiency solar system",
  },
  {
    id: 11,
    src: "/11.jpg",
    alt: "Solar Installation Project 11",
    title: "Solar Project 11",
    description: "Advanced solar technology deployment",
  },
  {
    id: 12,
    src: "/12.jpg",
    alt: "Solar Installation Project 12",
    title: "Solar Project 12",
    description: "Sustainable energy solution",
  },
  {
    id: 13,
    src: "/13.jpg",
    alt: "Solar Installation Project 13",
    title: "Solar Project 13",
    description: "Solar panel array installation",
  },
  {
    id: 14,
    src: "/14.jpg",
    alt: "Solar Installation Project 14",
    title: "Solar Project 14",
    description: "Green energy implementation",
  },
  {
    id: 15,
    src: "/15.jpg",
    alt: "Solar Installation Project 15",
    title: "Solar Project 15",
    description: "Solar power generation system",
  },
  {
    id: 16,
    src: "/16.jpg",
    alt: "Solar Installation Project 16",
    title: "Solar Project 16",
    description: "Renewable energy project",
  },
  {
    id: 17,
    src: "/17.jpg",
    alt: "Solar Installation Project 17",
    title: "Solar Project 17",
    description: "Solar infrastructure setup",
  },
  {
    id: 18,
    src: "/18.jpg",
    alt: "Solar Installation Project 18",
    title: "Solar Project 18",
    description: "Solar energy system installation",
  },
  {
    id: 19,
    src: "/19.jpg",
    alt: "Solar Installation Project 19",
    title: "Solar Project 19",
    description: "Professional solar implementation",
  },
  {
    id: 20,
    src: "/20.jpg",
    alt: "Solar Installation Project 20",
    title: "Solar Project 20",
    description: "Solar power station development",
  },
  {
    id: 21,
    src: "/21.jpg",
    alt: "Solar Installation Project 21",
    title: "Solar Project 21",
    description: "Modern solar installation",
  },
  {
    id: 22,
    src: "/22.jpg",
    alt: "Solar Installation Project 22",
    title: "Solar Project 22",
    description: "Solar panel system deployment",
  },
  {
    id: 23,
    src: "/23.jpg",
    alt: "Solar Installation Project 23",
    title: "Solar Project 23",
    description: "Comprehensive solar solution",
  },
  {
    id: 24,
    src: "/24.jpg",
    alt: "Solar Installation Project 24",
    title: "Solar Project 24",
    description: "Solar energy project implementation",
  },
  {
    id: 25,
    src: "/25.jpg",
    alt: "Solar Installation Project 25",
    title: "Solar Project 25",
    description: "Complete solar power system",
  },
];

export default function SolarSuccessStories() {
  const [selectedImage, setSelectedImage] = useState<SolarImage | null>(null);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-950 dark:to-cyan-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Solar Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful solar installations and
            renewable energy projects
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {solarImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>

              {/* Click Indicator */}
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-gray-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
