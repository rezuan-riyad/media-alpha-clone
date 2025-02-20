import Navbar from "@/components/Navbar";
import Image from "next/image";
import group from "@/components/images/group-people.jpg";
import vision from "@/components/images/our-vision.jpg";
// import salerepresentativeimg from "@/components/images/sale_representative.jpg";
// import qualityControl from "@/components/images/quality_control.jpg";

// import allstate from "@/components/images/partners/Allstate.png";
// import bankrate from "@/components/images/partners/Bankrate.png";
// import expedia from "@/components/images/partners/expedia.png";
// import framers from "@/components/images/partners/farmers.png";
// import libertyMutual from "@/components/images/partners/liberty_mutual.png";
// import metlife from "@/components/images/partners/metlife.png";
// import nationwide from "@/components/images/partners/nationwide.png";
// // import priceline from "@/components/images/partners/priceline.png";
// import progressive from "@/components/images/partners/progressive.png";

import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="md:mb-24">
            <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-4">
            <span className="inline-block text-cyan-600">About <span className="text-primary">Us</span></span>
            </h1>
            <p className="text-gray-700 text-md leading-relaxed ">We bridge the gap between consumer actions and business opportunities. Our foundation is built on identifying valuable consumer moments and transforming them into meaningful connections. By partnering with service providers who interact with consumers during major life decisions, we create a powerful ecosystem that benefits both businesses and their potential customers.</p>
            </div>
            <Image
              src={group}
              alt="People working"
              className="max-h-[500px] w-auto mx-auto"
            />
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-12 ">
        {/* Vision Section */}
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-cyan-600">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                We believe that timing transforms opportunities. Our expertise lies in identifying those critical moments when consumers are making important life decisions, creating valuable connections between them and the businesses they need.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={vision}
                alt="Our Vision"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row gap-12 mb-20 items-center">
          <div className="md:w-1/2">
            <Image
              src="/path-to-approach-image.jpg"
              alt="Our Approach"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-cyan-600">Our Approach</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>We partner with reputable service providers who interact with consumers during natural decision points</li>
              <li>Our platform ensures data quality and consumer privacy while maximizing business opportunities</li>
              <li>We maintain long-term relationships through fair pricing and transparent practices</li>
              <li>We focus on timing and context to ensure data relevancy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-cyan-600">Our Culture</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><span className="font-semibold">Continuous Learning:</span> We stay curious about consumer behavior patterns and market dynamics</li>
              <li><span className="font-semibold">Collaborative Growth:</span> Our team thrives on shared knowledge and mutual support</li>
              <li><span className="font-semibold">Long-term Thinking:</span> We build lasting partnerships rather than pursuing quick wins</li>
              <li><span className="font-semibold">Data Ethics:</span> We maintain strict standards for data collection and usage</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/path-to-culture-image.jpg"
              alt="Our Culture"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row gap-12 mb-20 items-center">
          <div className="md:w-1/2">
            <Image
              src="/path-to-team-image.jpg"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-cyan-600">Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a diverse group of data scientists, market analysts, and technology experts united by our passion for connecting the right opportunities with the right businesses. Each team member brings unique insights to our mission of transforming consumer intent into valuable business opportunities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}