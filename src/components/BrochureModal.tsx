"use client";

import { useState } from "react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  brochureUrl: string;
}

export default function BrochureModal({ isOpen, onClose, projectTitle, brochureUrl }: BrochureModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    contactNumber: '',
    email: '',
    whatsappUpdates: false,
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Popular country codes for real estate clients
  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
  ];

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadFile = async (url: string, filename: string) => {
    try {
      console.log('Attempting to download:', url);
      
      // Simple method: just open the PDF in a new tab
      // This will let the browser handle the download
      window.open(url, '_blank');
      console.log('Download initiated via window.open');
      return true;
      
    } catch (error) {
      console.error('Download failed:', error);
      
      // Ultimate fallback: create a simple link and click it
      try {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('Download initiated via link click');
        return true;
      } catch (fallbackError) {
        console.error('All download methods failed:', fallbackError);
        return false;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.contactNumber || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      console.log('Brochure URL:', brochureUrl);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Download the brochure
      if (brochureUrl && brochureUrl !== '#') {
        const filename = `${projectTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.pdf`;
        const downloadSuccess = await downloadFile(brochureUrl, filename);
        
        if (downloadSuccess) {
          // Close modal and show success message
          onClose();
          alert('Thank you! Your brochure download has started.');
        } else {
          alert('Sorry, there was an issue downloading the brochure. Please try again or contact us for assistance.');
        }
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          countryCode: '+91',
          contactNumber: '',
          email: '',
          whatsappUpdates: false,
          agreeTerms: false
        });
      } else {
        alert('Sorry, the brochure is not available at the moment. Please contact us for more information.');
        onClose();
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="pr-12">
            <h2 className="font-dm-serif text-xl font-bold text-[#292F36] text-center">
              Fill in the form below and download the brochure
            </h2>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CDA274] font-jost text-[#292F36]"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CDA274] font-jost text-[#292F36]"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="flex">
            {/* Country Code Dropdown */}
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleSelectChange}
              className="border border-gray-300 rounded-l-lg px-3 py-3 bg-white focus:outline-none focus:border-[#CDA274] font-jost text-[#292F36] min-w-[100px]"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            
            {/* Phone Number Input */}
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number*"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:border-[#CDA274] font-jost text-[#292F36]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email ID*"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#CDA274] font-jost text-[#292F36]"
              required
            />
          </div>

          {/* WhatsApp Updates Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              name="whatsappUpdates"
              checked={formData.whatsappUpdates}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-[#CDA274] border-gray-300 rounded focus:ring-[#CDA274]"
            />
            <label className="font-jost text-sm text-[#292F36] leading-relaxed">
              📱 Receive Updates on WhatsApp
            </label>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-[#CDA274] border-gray-300 rounded focus:ring-[#CDA274]"
              required
            />
            <label className="font-jost text-sm text-[#292F36] leading-relaxed">
              I agree to the{' '}
              <a href="#" className="text-[#CDA274] hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.agreeTerms}
            className={`w-full py-3 px-6 rounded-lg font-jost font-semibold text-white transition-all duration-300 ${
              isSubmitting || !formData.agreeTerms
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#FFC107] hover:bg-[#FFB300] shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 4" />
                </svg>
                <span>Submitting...</span>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}