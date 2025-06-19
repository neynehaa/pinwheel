// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Star } from "lucide-react"

// interface Testimonial {
//   id: number
//   name: string
//   company: string
//   content: string
//   rating: number
//   avatar: string
// }

// const testimonialData: Testimonial[][] = [
//   [
//     {
//       id: 1,
//       name: "Courtney Henry",
//       company: "microsoft corp",
//       content: "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
//       rating: 4,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 2,
//       name: "Ronald Richards",
//       company: "meta limited",
//       content: "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
//       rating: 4,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 3,
//       name: "Bessie Cooper",
//       company: "apple inc ltd",
//       content: "Our platform helps build secure onboarding authentica experiences & engage your users. We build .",
//       rating: 4,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//   ],
//   [
//     {
//       id: 4,
//       name: "Jenny Wilson",
//       company: "google llc",
//       content:
//         "Amazing platform that transformed our user experience. The security features are top-notch and easy to implement.",
//       rating: 5,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 5,
//       name: "Devon Lane",
//       company: "amazon web services",
//       content:
//         "Excellent onboarding solution that helped us reduce user drop-off rates significantly. Highly recommended!",
//       rating: 4,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 6,
//       name: "Marvin McKinney",
//       company: "netflix inc",
//       content: "The authentication system is robust and user-friendly. Our team was able to integrate it seamlessly.",
//       rating: 5,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//   ],
//   [
//     {
//       id: 7,
//       name: "Kristin Watson",
//       company: "spotify technology",
//       content:
//         "Great platform for building secure user experiences. The documentation is clear and support is excellent.",
//       rating: 4,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 8,
//       name: "Cameron Williamson",
//       company: "adobe systems",
//       content: "We've seen a 40% improvement in user engagement since implementing this platform. Fantastic results!",
//       rating: 5,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 9,
//       name: "Cody Fisher",
//       company: "salesforce inc",
//       content: "The onboarding flow is intuitive and the security measures give us peace of mind. Perfect solution.",
//       rating: 4,
//       avatar: "/placeholder.svg?height=80&width=80",
//     },
//   ],
// ]

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div className="flex justify-center gap-1">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <Star
//           key={star}
//           className={`w-5 h-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
//         />
//       ))}
//     </div>
//   )
// }

// function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   return (
//     <Card className="h-full shadow-sm border-0 bg-white">
//       <CardContent className="p-8 text-center space-y-6">
//         <div className="flex justify-center">
//           <div className="w-20 h-20 rounded-full border-4 border-pink-400 overflow-hidden">
//             <div
//               className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
//               style={{
//                 backgroundImage: `url(${testimonial.avatar})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
//           <p className="text-gray-500 text-sm">{testimonial.company}</p>
//         </div>

//         <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>

//         <StarRating rating={testimonial.rating} />
//       </CardContent>
//     </Card>
//   )
// }

// export default function TestimonialCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [currentX, setCurrentX] = useState(0)
//   const [dragOffset, setDragOffset] = useState(0)

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true)
//     setStartX(e.clientX)
//     setCurrentX(e.clientX)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return

//     e.preventDefault()
//     setCurrentX(e.clientX)
//     const diff = e.clientX - startX
//     setDragOffset(diff)
//   }

//   const handleMouseUp = () => {
//     if (!isDragging) return

//     setIsDragging(false)
//     const diff = currentX - startX
//     const threshold = 100 // minimum drag distance to trigger slide change

//     if (Math.abs(diff) > threshold) {
//       if (diff > 0 && currentSlide > 0) {
//         // Dragged right, go to previous slide
//         setCurrentSlide(currentSlide - 1)
//       } else if (diff < 0 && currentSlide < testimonialData.length - 1) {
//         // Dragged left, go to next slide
//         setCurrentSlide(currentSlide + 1)
//       }
//     }

//     setDragOffset(0)
//     setStartX(0)
//     setCurrentX(0)
//   }

//   const handleMouseLeave = () => {
//     if (isDragging) {
//       handleMouseUp()
//     }
//   }

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-12">
//       <div
//         className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div
//           className="flex transition-transform duration-300 ease-out"
//           style={{
//             transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
//           }}
//         >
//           {testimonialData.map((slideTestimonials, slideIndex) => (
//             <div key={slideIndex} className="w-full flex-shrink-0 px-4">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//                 {slideTestimonials.map((testimonial) => (
//                   <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center gap-2 mt-8">
//         {testimonialData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? "bg-red-500" : "bg-gray-300"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonialData = [
  [
    { id: 1, name: "Courtney Henry", company: "microsoft corp", content: "Our platform helps build secure onboarding...", rating: 4 },
    { id: 2, name: "Ronald Richards", company: "meta limited", content: "Our platform helps build secure onboarding...", rating: 4 },
    { id: 3, name: "Bessie Cooper", company: "apple inc ltd", content: "Our platform helps build secure onboarding...", rating: 4 },
  ],
  [
    { id: 4, name: "Jenny Wilson", company: "google llc", content: "Amazing platform that transformed our UX...", rating: 5 },
    { id: 5, name: "Devon Lane", company: "amazon", content: "Excellent onboarding solution. Highly recommended!", rating: 4 },
    { id: 6, name: "Marvin McKinney", company: "netflix", content: "Robust and user-friendly authentication system.", rating: 5 },
  ],
  [
    { id: 7, name: "Kristin Watson", company: "spotify", content: "Great platform and support.", rating: 4 },
    { id: 8, name: "Cameron Williamson", company: "adobe", content: "40% improvement in engagement. Fantastic!", rating: 5 },
    { id: 9, name: "Cody Fisher", company: "salesforce", content: "Intuitive onboarding with great security.", rating: 4 },
  ],
].map(slide => slide.map(t => ({ ...t, avatar: "/placeholder.svg?height=80&width=80" })))

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
    ))}
  </div>
)

const TestimonialCard = ({ name, company, content, avatar, rating }: (typeof testimonialData)[0][0]) => (
  <Card className="h-full shadow-sm border-0 bg-white">
    <CardContent className="p-8 text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full border-4 border-pink-400 overflow-hidden">
          <div
            className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
            style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
      <StarRating rating={rating} />
    </CardContent>
  </Card>
)

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [dragX, setDragX] = useState(0)
  const isDragging = startX !== 0

  const startDrag = (e: React.MouseEvent) => setStartX(e.clientX)
  const onDrag = (e: React.MouseEvent) => isDragging && setDragX(e.clientX - startX)
  const endDrag = () => {
    if (Math.abs(dragX) > 100) {
      setCurrentSlide(s => Math.max(0, Math.min(testimonialData.length - 1, s + (dragX < 0 ? 1 : -1))))
    }
    setStartX(0)
    setDragX(0)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(calc(-${currentSlide * 100}% + ${dragX}px))` }}
        >
          {testimonialData.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {slide.map(testimonial => (
                  <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonialData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-red-500" : "bg-gray-300"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
