
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
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
                Expert Physiotherapy Care in Pakistan
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fadeIn">
                Professional treatment and rehabilitation services to help you recover, strengthen, and thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Physiotherapy Session"
                className="rounded-2xl shadow-2xl animate-fadeIn"
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
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
    </div>
  );
};

export default Index;
