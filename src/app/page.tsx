// Hero.tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold leading-tight text-black md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 md:mt-4 md:text-xl lg:text-2xl">
          {subtitle}
        </p>
        <div className="mt-8">
          <a
            href={buttonLink}
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Features.tsx
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="px-6 py-4">
      <h2 className="mb-3 text-lg font-semibold leading-tight text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      title: 'Secure Transactions',
      description: 'Protect your assets with our secure blockchain technology.',
    },
    {
      title: 'Decentralized Network',
      description: 'Join the decentralized movement and take control of your data.',
    },
    {
      title: 'Community Building',
      description: 'Connect with like-minded individuals and grow your network.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold leading-tight text-center text-gray-800">
          Our Features
        </h2>
        <div className="flex flex-wrap">
          {featuresData.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// Testimonials.tsx
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="px-6 py-4">
      <p className="text-lg leading-relaxed text-gray-600">{quote}</p>
      <h3 className="mt-2 text-xl font-semibold leading-tight text-gray-800">{author}</h3>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: 'Best blockchain social media platform ever!',
      author: 'John Doe',
    },
    {
      quote: 'I love the secure transactions and community building features.',
      author: 'Jane Smith',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold leading-tight text-gray-800">
          Testimonials
        </h2>
        <div className="flex flex-wrap">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// Pricing.tsx
import React from 'react';

interface PriceProps {
  plan: string;
  price: string;
  features: string[];
}

const Price: React.FC<PriceProps> = ({ plan, price, features }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <h2 className="mb-6 text-xl font-semibold leading-tight text-gray-800">{plan}</h2>
        <p className="mb-6 text-xl font-semibold leading-tight text-gray-800">{price}</p>
        <ul className="mb-6">
          {features.map((feature, index) => (
            <li key={index} className="mb-2 text-gray-600">
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue">
          Sign Up
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingData = [
    {
      plan: 'Basic',
      price: '$9.99/month',
      features: [
        '1 User Account',
        '5 Transactions per Day',
        'Limited Support',
      ],
    },
    {
      plan: 'Premium',
      price: '$29.99/month',
      features: [
        '5 User Accounts',
        'Unlimited Transactions',
        'Priority Support',
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold leading-tight text-gray-800">
          Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricingData.map((price, index) => (
            <Price key={index} plan={price.plan} price={price.price} features={price.features} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

// CTA.tsx
import React from 'react';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTA: React.FC<CTAProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold leading-tight text-black md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 md:mt-4 md:text-xl lg:text-2xl">
          {subtitle}
        </p>
        <div className="mt-8">
          <a
            href={buttonLink}
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

// index.tsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Blockchain Social Media Platform"
        subtitle="Secure, Decentralized, and Community-Driven"
        buttonText="Sign Up Now"
        buttonLink="/"
      />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA
        title="Join the Revolution Today"
        subtitle="Experience the future of social media with our blockchain platform."
        buttonText="Sign Up Now"
        buttonLink="/"
      />
    </div>
  );
};

export default IndexPage;