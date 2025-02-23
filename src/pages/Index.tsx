
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Activity,
  Users,
  Calendar,
  MessageCircle,
  Brain,
  Baby,
  Workflow,
  Star,
  PhoneCall,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Sports Physiotherapy",
      description: "Specialized treatment for sports-related injuries and performance enhancement.",
      icon: Activity,
    },
    {
      title: "Rehabilitation",
      description: "Comprehensive rehabilitation programs for post-surgery and injury recovery.",
      icon: Heart,
    },
    {
      title: "Group Sessions",
      description: "Group therapy sessions for specific conditions and wellness programs.",
      icon: Users,
    },
    {
      title: "Neurological Therapy",
      description: "Expert treatment for neurological conditions and stroke recovery.",
      icon: Brain,
    },
    {
      title: "Pediatric Physiotherapy",
      description: "Specialized care for children with developmental and physical challenges.",
      icon: Baby,
    },
    {
      title: "Chronic Pain Management",
      description: "Advanced techniques for managing and reducing chronic pain conditions.",
      icon: Workflow,
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Sports Professional",
      content: "The sports physiotherapy program helped me recover from my injury and return to professional playing within months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3",
    },
    {
      name: "Fatima Ali",
      role: "Recovery Patient",
      content: "After my surgery, their rehabilitation program was crucial in helping me regain my mobility and strength.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3",
    },
    {
      name: "Mohammad Imran",
      role: "Chronic Pain Patient",
      content: "Their chronic pain management techniques have significantly improved my quality of life.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3",
    },
  ];

  const handleBookAppointment = () => {
    window.open(`https://wa.me/923081049699?text=${encodeURIComponent("Hi, I would like to book a physiotherapy appointment.")}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="text-primary font-semibold mb-4 block animate-fadeIn">
                First Home Physiotherapy Service Provider of Pakistan
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
                Expert Physiotherapy Care in Pakistan
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fadeIn">
                Professional treatment and rehabilitation services to help you recover, strengthen, and thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90" onClick={handleBookAppointment}>
                  Book on WhatsApp
                  <PhoneCall className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1676901831117-0494895c0ba1?ixlib=rb-4.0.3"
                alt="Pakistani Physiotherapy Session"
                className="rounded-2xl shadow-2xl animate-fadeIn w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive physiotherapy services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-slideIn">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="text-primary p-0">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our patients say about their recovery journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book a consultation with our expert physiotherapists today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" onClick={handleBookAppointment}>
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PhysioHub</h3>
              <p className="text-gray-400">
                Professional physiotherapy services in Pakistan, dedicated to your recovery and well-being.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Sports Physiotherapy</li>
                <li className="text-gray-400">Rehabilitation</li>
                <li className="text-gray-400">Neurological Therapy</li>
                <li className="text-gray-400">Pediatric Care</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <a href="tel:+923081049699" className="hover:text-white transition-colors">
                    +92 308 1049699
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="https://wa.me/923081049699" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-white text-white hover:bg-white/10"
                    onClick={handleBookAppointment}
                  >
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PhysioHub Pakistan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
