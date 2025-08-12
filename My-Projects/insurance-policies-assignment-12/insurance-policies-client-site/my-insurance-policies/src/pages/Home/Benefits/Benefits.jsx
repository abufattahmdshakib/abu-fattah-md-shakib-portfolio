import React from 'react';
import BenefitCard from './BenefitCard';
import tracking from '../../../assets/benefits/tracking.png';
import call from '../../../assets/benefits/call.png';
import support from '../../../assets/benefits/support.png';

const benefits = [
  {
  id: 1,
  title: 'Real-Time Policy Status',
  description:
    'Track your insurance policy applications and approvals in real-time. Get notified instantly at every step — from submission to activation.',
  image: tracking,
},
{
  id: 2,
  title: 'Guaranteed Policy Security',
  description:
    'Your policy and personal data are safe with us. We maintain the highest level of digital protection to ensure a secure and worry-free experience.',
  image: call,
},
{
  id: 3,
  title: '24/7 Expert Assistance',
  description:
    'Need help choosing a plan or tracking your policy? Our experienced advisors are available 24/7 to guide you with fast and friendly support.',
  image: support,
}
];

const Benefits = () => {
  return (
    <div className="py-16 rounded-xl mb-10 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-blue-700 font-bold text-center mb-12">Why Choose Us</h2>
        <div className="flex flex-col gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
