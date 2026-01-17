import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TurfCard } from './components/TurfCard';
import { ChatAssistant } from './components/ChatAssistant';
import { MOCK_TURFS } from './constants';
import { Turf, ViewState } from './types';
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  ArrowRight,
  Info,
  Layout,
  MapPin
} from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedTurf, setSelectedTurf] = useState<Turf | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('2024-05-24');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBookingLoading, setIsBookingLoading] = useState(false);

  const handleTurfSelect = (turf: Turf) => {
    setSelectedTurf(turf);
    setView('booking');
    window.scrollTo(0, 0);
  };

  const handleBookingConfirm = () => {
    if (!selectedSlot) return;
    setIsBookingLoading(true);
    // Simulate payment process
    setTimeout(() => {
      setIsBookingLoading(false);
      setView('payment-success');
    }, 2000);
  };

  const renderHome = () => (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-50"
            alt="Hero Background"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/20 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">Most Trusted Booking Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Rule the Pitch. <br />
              <span className="text-emerald-500">Book Your Slot.</span>
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Find premium cricket turfs near you. Accurate availability, seamless payments, and world-class facilities for your next match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('venues');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center space-x-2"
              >
                <span>Find a Turf</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setView('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-300">
                Joined by <span className="text-emerald-400">12k+</span> active players
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section id="venues" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Available Venues</h2>
            <p className="text-gray-500 max-w-lg">
              Hand-picked premium turfs with professional maintenance and international standards.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium">Today, May 24</span>
            </div>
            <button className="text-emerald-600 font-bold hover:underline">View All</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TURFS.map(turf => (
            <TurfCard key={turf.id} turf={turf} onSelect={handleTurfSelect} />
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Secure Booking", desc: "100% encrypted payment gateways and instant confirmation for every slot." },
              { icon: Clock, title: "24/7 Availability", desc: "Book your favorite midnight matches or early morning practice sessions." },
              { icon: Award, title: "Premium Standards", desc: "All listed turfs are verified for bounce, lighting, and safety measures." }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                  <feature.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderBooking = () => {
    if (!selectedTurf) return null;
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Turf Info & Selection */}
          <div className="lg:w-2/3 space-y-8">
            <button 
              onClick={() => setView('home')} 
              className="text-gray-500 hover:text-emerald-600 font-medium flex items-center space-x-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to search</span>
            </button>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold text-gray-900">{selectedTurf.name}</h1>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-emerald-600" /> {selectedTurf.location}</div>
                <div className="flex items-center font-bold text-emerald-600">₹{selectedTurf.pricePerHour}/hour</div>
              </div>
              <img 
                src={selectedTurf.image} 
                className="w-full h-80 object-cover rounded-3xl shadow-lg shadow-gray-200"
                alt={selectedTurf.name}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span>Select Date</span>
                </h3>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {['2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27'].map(date => (
                    <button 
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-shrink-0 px-6 py-4 rounded-2xl border transition-all ${
                        selectedDate === date 
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200' 
                        : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-600'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase opacity-80">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      <div className="text-xl font-bold">{new Date(date).getDate()}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>Select Time Slot</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedTurf.slots.map((slot, i) => (
                    <button 
                      key={i}
                      disabled={!slot.isAvailable}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        !slot.isAvailable ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed line-through' :
                        selectedSlot === slot.time ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100' :
                        'bg-white border-gray-200 hover:border-emerald-600 text-gray-700'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary & Checkout */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200 sticky top-24 space-y-6">
              <h3 className="text-2xl font-bold">Booking Summary</h3>
              
              <div className="space-y-4 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-gray-500">
                  <span>Venue</span>
                  <span className="font-bold text-gray-900">{selectedTurf.name}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Date</span>
                  <span className="font-bold text-gray-900">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Time Slot</span>
                  <span className="font-bold text-emerald-600">{selectedSlot || 'Not Selected'}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">₹{selectedTurf.pricePerHour}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-500">Taxes & Fees</span>
                  <span className="font-bold">₹{(selectedTurf.pricePerHour * 0.18).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-2xl font-black pt-4 border-t border-gray-100 text-emerald-600">
                  <span>Total</span>
                  <span>₹{(selectedTurf.pricePerHour * 1.18).toFixed(0)}</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <h4 className="font-bold flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  <span>Payment Method</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-3 border-2 border-emerald-600 rounded-xl bg-emerald-50 flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">UPI</span>
                    <span className="text-xs font-medium">GPay / PhonePe</span>
                  </button>
                  <button className="p-3 border-2 border-gray-100 rounded-xl bg-white flex flex-col items-center opacity-50 grayscale">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Card</span>
                    <span className="text-xs font-medium">Debit / Credit</span>
                  </button>
                </div>
              </div>

              <button 
                onClick={handleBookingConfirm}
                disabled={!selectedSlot || isBookingLoading}
                className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-emerald-100 flex items-center justify-center space-x-2 ${
                  !selectedSlot || isBookingLoading 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {isBookingLoading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Confirm & Pay</span>
                    <CheckCircle2 className="w-6 h-6" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">Secure SSL encrypted payment</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900">Empowering Athletes</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          TurfPro was founded in 2024 with a single mission: To eliminate the friction between athletes and the venues they love. We bring high-tech infrastructure to grassroots sports.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1200&auto=format&fit=crop" 
          className="rounded-[40px] shadow-2xl"
          alt="About Us"
        />
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600">We believe that every match, whether it's a friendly weekend clash or a high-stakes tournament, deserves a world-class stage. We partner with the best venues to ensure standardized quality across our platform.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-4xl font-black text-emerald-600 mb-2">500+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Matches Daily</div>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-4xl font-black text-emerald-600 mb-2">4.9</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="max-w-3xl mx-auto px-4 py-32 text-center space-y-8">
      <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto animate-bounce">
        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-gray-900">Booking Confirmed!</h1>
        <p className="text-xl text-gray-500">Get your cricket gear ready. Your slot at <span className="text-emerald-600 font-bold">{selectedTurf?.name}</span> is secured.</p>
      </div>
      
      <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 text-left space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <span className="font-bold text-gray-500 uppercase tracking-widest text-xs">Transaction ID</span>
          <span className="font-mono text-emerald-600">#TP-4921-9921</span>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date</div>
            <div className="text-lg font-bold">{selectedDate}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Time</div>
            <div className="text-lg font-bold text-emerald-600">{selectedSlot}</div>
          </div>
        </div>
        <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-2xl">
          <Info className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
          <p className="text-sm text-emerald-800">
            A confirmation email and SMS have been sent to your registered contact. Please arrive 15 minutes prior to your slot.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => setView('home')}
          className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200"
        >
          Explore More Venues
        </button>
        <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
          Download Invoice
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main className="transition-all duration-500 ease-in-out">
        {view === 'home' && renderHome()}
        {view === 'booking' && renderBooking()}
        {view === 'about' && renderAbout()}
        {view === 'payment-success' && renderSuccess()}
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Turf<span className="text-emerald-600">Pro</span></span>
              </div>
              <p className="text-gray-500 max-w-sm">
                The premier destination for athletes to find and book world-class cricket venues. Professionalism, accuracy, and excitement in every booking.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><button onClick={() => setView('about')} className="hover:text-emerald-600">About Us</button></li>
                <li><button className="hover:text-emerald-600">Careers</button></li>
                <li><button className="hover:text-emerald-600">Privacy Policy</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><button className="hover:text-emerald-600">Help Center</button></li>
                <li><button className="hover:text-emerald-600">Contact Us</button></li>
                <li><button className="hover:text-emerald-600">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 TurfPro Inc. All rights reserved.</p>
            <div className="flex space-x-6 text-gray-400">
              <span className="hover:text-emerald-600 cursor-pointer transition-colors">Instagram</span>
              <span className="hover:text-emerald-600 cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-emerald-600 cursor-pointer transition-colors">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
