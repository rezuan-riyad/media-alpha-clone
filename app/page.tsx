import Navbar from "@/components/Navbar";
import Image from "next/image";
import peoplemeetingimg from "@/components/images/people_meeting.jpg";
import salerepresentativeimg from "@/components/images/sale_representative.jpg";
import qualityControl from "@/components/images/quality_control.jpg";

import allstate from "@/components/images/partners/Allstate.png";
import bankrate from "@/components/images/partners/Bankrate.png";
import expedia from "@/components/images/partners/expedia.png";
import framers from "@/components/images/partners/farmers.png";
import libertyMutual from "@/components/images/partners/liberty_mutual.png";
import metlife from "@/components/images/partners/metlife.png";
import nationwide from "@/components/images/partners/nationwide.png";
// import priceline from "@/components/images/partners/priceline.png";
import progressive from "@/components/images/partners/progressive.png";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 md:mb-24">
          <div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-relaxed">
          <span className="block">Turn Consumer Intent</span>
          <span className="block">Into Actionable</span>
          <span className=" inline-block text-cyan-600">Revenue Opportunities</span>
          </h1>

          <p className="text-gray-600 text-xl mt-6 mb-4">Data science-powered marketing</p>
          <p className="text-gray-700 text-md leading-relaxed">Connect with consumers at their moment of highest purchase intent through our intelligent data marketplace</p>
          </div>
            <Image
              src={peoplemeetingimg}
              alt="People in a business meeting"
              className="max-h-[500px] w-auto ml-auto"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 md:mb-24">
      
            <Image
              src={salerepresentativeimg}
              alt=""
              className="max-h-[400px] w-auto"
            />

          <div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-4">
              <span className="block">Unlock</span>
              <span className="block">the Power of</span>
              <span className=" inline-block text-cyan-600">Consumer Intent Signals</span>
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">Our advanced platform identifies and captures high-intent consumer behavior across multiple touchpoints. By understanding key life moments and purchase signals, we connect businesses with consumers exactly when they are ready to buy. Transform these intent signals into valuable customer relationships through our data marketplace.</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-16 mb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Beyond Traditional Lead Generation</h2>
              <p className="text-gray-300 text-lg mb-8">
                We do not just collect contact information, we capture the complete context of consumer intent. Whether it is a major life change, a service inquiry, or a product search, our platform identifies and qualifies these moments to create valuable opportunities for our partners.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 md:mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-4">
              <span className="text-cyan-600">Quality </span>Through Intelligence
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our marketplace thrives on real-time intent signals:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Precise timing: Connect with consumers during key decision moments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Rich context: Understand the full scope of consumer needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Verified intent: Access pre-qualified opportunities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Actionable data: Receive comprehensive insights for effective engagement
                </span>
              </li>
            </ul>
          </div>
          <Image
              src={qualityControl}
              alt="Quality"
              className="max-h-[500px] w-auto ml-auto"
            />
        </div>
        <div className="container mx-auto p-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-4">Why Choose Us?</h2>
              <p className="text-gray-600">Partner with a leader in data-driven consumer insights</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 mb-4">Intent Recognition Technology</h3>
                <p className="text-gray-600">Our sophisticated platform identifies and analyzes consumer behavior patterns, capturing genuine purchase intent across multiple channels and life events. This ensures you are connecting with consumers at their highest point of interest.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 mb-4">Smart Data Partnership</h3>
                <p className="text-gray-600">We collaborate with premium publishers and service providers to capture authentic consumer intent signals. Our partnerships ensure a steady flow of high-quality, verified opportunities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-cyan-600 mb-4">Value Optimization</h3>
                <p className="text-gray-600">Maximize your return through our intelligent pricing model that aligns with consumer intent strength and conversion probability. Our transparent marketplace ensures you pay for quality, not just quantity.</p>
              </div>
            </div>
        </div>
    </div>

    <div className="bg-gray-50" id="our-partners">
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-4">Our  <span className="text-cyan-600">Partners</span></h2>
        <p className="text-gray-600">Trusted by leading companies across industries</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <Image src={allstate} alt="Allstate" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={bankrate} alt="Bankrate" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={expedia} alt="Expedia" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={framers} alt="Farmers" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={libertyMutual} alt="Liberty Mutual" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={metlife} alt="MetLife" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={nationwide} alt="Nationwide" className="p-2 w-40 h-20 rounded-lg" />
        <Image src={progressive} alt="Progressive" className="p-2 w-40 h-20 rounded-lg" />
      </div>
    </div>
    </div>


    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Explore Our <span className="text-cyan-600">Resources</span></h2>
        <p className="text-gray-600">Stay informed with our latest insights and industry trends</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[...Array(6)].map((_, i) => (
          <a 
        href="#" 
        key={i} 
        className="bg-white rounded-lg shadow-md overflow-hidden block transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
        <div className="h-48 bg-gray-200 relative">
          <Image 
            src={peoplemeetingimg}
            alt="Blog thumbnail"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Understanding Consumer Intent Signals</h3>
          <p className="text-gray-600 mb-4">Discover how leveraging consumer intent data can transform your marketing strategy and drive better results.</p>
          <span className="text-cyan-600 font-semibold group-hover:text-cyan-700">
            Read More →
          </span>
        </div>
          </a>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}