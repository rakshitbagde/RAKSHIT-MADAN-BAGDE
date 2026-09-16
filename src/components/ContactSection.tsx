import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Building,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Clock,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/academicData';
import { useAvatar } from '../utils/avatar';

export const ContactSection: React.FC = () => {
  const [avatarUrl] = useAvatar();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    institution: '',
    inquiryType: 'Research Collaboration',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
            Academic Inquiries & Correspondence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
            Get in Touch with Dr. Bagde
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Open for research partnerships, guest keynote invitations, peer reviews, and student consultations.
          </p>
          <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Institutional Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
              
              <div className="pb-4 border-b border-stone-100 flex items-center gap-4">
                <img
                  src={avatarUrl}
                  alt={PROFILE_DATA.name}
                  className="w-14 h-14 rounded-xl object-cover object-top border border-amber-300 shadow-xs shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 leading-tight">
                    {PROFILE_DATA.name}
                  </h3>
                  <p className="text-xs text-amber-700 font-medium">
                    {PROFILE_DATA.title}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Official Higher Education Office
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">
                      Department of Economics
                    </strong>
                    <span>{PROFILE_DATA.institution}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">
                      Location
                    </strong>
                    <span>Ganeshpur, Bhandara, Maharashtra - 441904, India</span>
                    <span className="block text-[11px] text-stone-500 mt-0.5">
                      Affiliated to RTM Nagpur University
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">
                      Electronic Mail
                    </strong>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-amber-700 font-medium hover:underline"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-serif">
                      Student Advisory & Office Hours
                    </strong>
                    <span>Monday – Saturday: 8:00 AM – 02:00 PM</span>
                    <span className="block text-[11px] text-stone-500">
                      Late M. Padole Arts College (Department of Economics)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick direct mail link button */}
              <div className="pt-2">
                <a
                  href={`mailto:${PROFILE_DATA.email}?subject=Academic%20Inquiry%20from%20Portfolio%20Website`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Compose Direct Email</span>
                </a>
              </div>

            </div>

            {/* Research Platforms Badge */}
            <div className="bg-stone-100 p-5 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
              <span className="font-bold text-stone-900 block font-serif">
                Scholarly Network Connections:
              </span>
              <p>
                Dr. Bagde frequently responds to academic queries and discussion threads across SSRN, Google Scholar, and Quora's "RAKSHIT BAGDE's Space".
              </p>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-1">
              Send an Academic Message
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Fill out this form to submit your inquiry directly to Dr. Rakshit Bagde.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-base text-emerald-900">
                  Message Prepared Successfully
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formState.name}</strong>. Your message regarding "<strong>{formState.inquiryType}</strong>" has been queued for Dr. Rakshit Bagde at <em>{PROFILE_DATA.email}</em>.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(formState.inquiryType + ' - ' + formState.name)}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.name + ' (' + formState.email + ' / ' + formState.institution + ')')}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        institution: '',
                        inquiryType: 'Research Collaboration',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Prof. / Dr. / Mr. / Ms."
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your.email@university.edu"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Affiliation / College / Org
                    </label>
                    <input
                      type="text"
                      value={formState.institution}
                      onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                      placeholder="e.g. University / Research Institute"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Keynote / Guest Lecture">Keynote / Guest Lecture</option>
                      <option value="Student Mentorship & Guidance">Student Mentorship & Guidance</option>
                      <option value="Book Purchase / Distribution">Book Purchase / Distribution</option>
                      <option value="General Academic Inquiry">General Academic Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Message Content *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly state the purpose of your communication..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Dr. Bagde</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
