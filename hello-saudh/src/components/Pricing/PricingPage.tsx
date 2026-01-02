import  { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, UtensilsCrossed, MessageSquare, BarChart3, Gamepad2, QrCode, Trophy, MessageCircle, BarChart } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small cafes and food trucks starting their digital journey.",
      monthlyPrice: "6,999",
      annualPrice: "6,299",
      annualBilled: "75,588",
      features: [
        "All 4 Modules Included",
        "Up to 1,000 monthly guests",
        "500 WhatsApp Messages/mo",
        "Standard Email Support"
      ],
      notIncluded: [],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      description: "The complete suite for busy restaurants ready to scale and automate.",
      monthlyPrice: "11,999",
      annualPrice: "10,799",
      annualBilled: "1,29,588",
      features: [
        "Everything in Starter, plus:",
        "All 4 Modules Included",
        "Up to 10,000 monthly guests",
        "5,000 WhatsApp Messages/mo",
        "Priority 24/7 Support",
        "Advanced Analytics Dashboard"
      ],
      notIncluded: [],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For restaurant chains and franchises needing custom integration.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      annualBilled: "",
      features: [
        "All 4 Modules Included",
        "Unlimited monthly guests",
        "Custom WhatsApp Volume",
        "Dedicated Account Manager"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  // FAQ Accordion Component
  const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-border dark:border-border py-3 sm:py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left py-2 font-medium text-sm sm:text-base text-foreground dark:text-foreground hover:text-[#ffd00a] dark:hover:text-[#ffd00a] transition-colors gap-4"
        >
          <span className="text-left pr-4">{question}</span>
          <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform shrink-0 ${isOpen ? 'rotate-90' : ''}`} />
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground mt-2 pr-8 sm:pr-12"
          >
            {answer}
          </motion.div>
        )}
      </div>
    );
  };

  const servicesFeatures = [
    {
      title: "Saudh Catalogues",
      description: "We help businesses go digital instantly - no tech expertise required. Beautiful, responsive menus that update in real-time.",
      icon: QrCode,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Capture Quality Leads",
      description: "A gamified QR-based tool that lets businesses collect quality leads ethically by offering small incentives in return.",
      icon: Trophy,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Feedback & Insights",
      description: "Collecting anonymous feedback & turning them into smart insights using AI so businesses know what to improve.",
      icon: BarChart,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "WhatsApp Business Automation",
      description: "Once leads are captured, businesses can engage them with powerful WaBA tools to drive repeat visits.",
      icon: MessageCircle,
      color: "bg-rose-100 text-rose-600",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-background dark:bg-background pt-[70px] min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffd00a]/20 via-white to-white"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-[#ffd00a]/10 dark:bg-[#ffd00a]/10 text-foreground dark:text-foreground mb-6 sm:mb-8 border-[#ffd00a]/20 dark:border-[#ffd00a]/20">
                <span className="flex h-2 w-2 rounded-full bg-[#ffd00a] dark:bg-[#ffd00a] mr-2"></span>
                <span className="whitespace-nowrap">Elevate your dining experience</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground dark:text-foreground mb-4 sm:mb-6 px-2">
                Turn Guests into <span className="text-[#ffd00a] dark:text-[#ffd00a]">Loyal Fans</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
                The complete operating system for modern restaurants. From digital menus and gamified lead capture to AI insights and automated retention—all in one seamless package.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-20 px-4">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#ffd00a] dark:bg-[#ffd00a] text-gray-900 dark:text-gray-900 text-base sm:text-lg font-medium rounded-lg hover:bg-[#ffbd00] dark:hover:bg-[#ffbd00] transition-colors w-full sm:w-auto"
                >
                  View Pricing
                </button>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-border dark:border-border text-foreground dark:text-foreground text-base sm:text-lg font-medium rounded-lg hover:bg-muted dark:hover:bg-muted transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Quick Feature Tickers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto border-t border-border dark:border-border pt-6 sm:pt-8 text-muted-foreground dark:text-muted-foreground px-4">
                <div className="flex flex-col items-center gap-2">
                  <UtensilsCrossed className="h-6 w-6 text-[#ffd00a]" />
                  <span className="font-medium text-sm">Digital Menu</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Gamepad2 className="h-6 w-6 text-[#ffd00a]" />
                  <span className="font-medium text-sm">Gamified Capture</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-[#ffd00a]" />
                  <span className="font-medium text-sm">WhatsApp CRM</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-[#ffd00a]" />
                  <span className="font-medium text-sm">AI Insights</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/50 dark:bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground dark:text-foreground px-2">The Complete Guest Journey</h2>
              <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto px-4">
                Our 4-step framework transforms casual diners into loyal regulars.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-24">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-border dark:border-border bg-card dark:bg-card order-2 lg:order-1"
              >
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#ffd00a]/20 dark:from-[#ffd00a]/20 to-[#ffd00a]/5 dark:to-[#ffd00a]/5 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6 md:p-8">
                    <QrCode className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-[#ffd00a] dark:text-[#ffd00a] mx-auto mb-3 sm:mb-4" />
                    <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground">Saudh Services Ecosystem</p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
                {servicesFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl hover:bg-card dark:hover:bg-card transition-colors duration-200"
                  >
                    <div className={`p-2 sm:p-3 rounded-lg ${feature.color} shrink-0`}>
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-foreground dark:text-foreground">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-visible">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] bg-[#ffd00a]/10 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground dark:text-foreground px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Simple, Transparent Pricing
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                All plans include our complete suite of 4 services. Choose the capacity that fits your growth.
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className={`text-xs sm:text-sm font-medium ${!isAnnual ? 'text-foreground dark:text-foreground' : 'text-muted-foreground dark:text-muted-foreground'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ffd00a] dark:focus:ring-[#ffd00a] focus:ring-offset-2 ${isAnnual ? 'bg-[#ffd00a] dark:bg-[#ffd00a]' : 'bg-muted dark:bg-muted'}`}
                  role="switch"
                  aria-checked={isAnnual}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background dark:bg-background shadow ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
                <span className={`text-xs sm:text-sm font-medium ${isAnnual ? 'text-foreground dark:text-foreground' : 'text-muted-foreground dark:text-muted-foreground'}`}>
                  Yearly <span className="text-[#ffd00a] dark:text-[#ffd00a] font-bold ml-1">(Save 10%)</span>
                </span>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto pt-4 sm:pt-6 md:pt-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4 lg:-mt-4 lg:mb-4 z-10' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-20 w-28 sm:w-32 bg-[#ffd00a] dark:bg-[#ffd00a] text-gray-900 dark:text-gray-900 text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-center uppercase tracking-wide shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`h-full flex flex-col bg-card dark:bg-card border-2 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${plan.popular ? 'border-[#ffd00a] dark:border-[#ffd00a] shadow-xl md:scale-105' : 'border-border dark:border-border'}`}>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-foreground mb-2">{plan.name}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground min-h-[40px] sm:min-h-[50px] mt-2 mb-4 sm:mb-6">{plan.description}</p>
                      
                      <div className="mb-4">
                        {plan.monthlyPrice === "Custom" ? (
                          <div>
                            <span className="text-3xl sm:text-4xl font-bold text-foreground dark:text-foreground">Custom</span>
                            <div className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground mt-2">Contact for annual volume discounts</div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-xl sm:text-2xl font-normal text-muted-foreground dark:text-muted-foreground">₹</span>
                              <span className="text-3xl sm:text-4xl font-bold text-foreground dark:text-foreground">
                                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                              </span>
                              <span className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground ml-1">/mo</span>
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground mt-2">
                              {isAnnual 
                                ? `Billed ₹${plan.annualBilled} yearly` 
                                : 'Billed monthly'}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#ffd00a] dark:text-[#ffd00a] shrink-0 mt-0.5" />
                            <span className={`text-xs sm:text-sm ${feature.includes('Everything in Starter') ? 'font-semibold text-foreground dark:text-foreground' : 'text-muted-foreground dark:text-muted-foreground'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                        {plan.notIncluded.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-muted-foreground dark:text-muted-foreground opacity-50">
                            <X className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm line-through">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6 pt-0 mt-auto">
                      <button
                        className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                          plan.popular
                            ? 'bg-[#ffd00a] dark:bg-[#ffd00a] hover:bg-[#ffbd00] dark:hover:bg-[#ffbd00] text-gray-900 dark:text-gray-900'
                            : 'bg-muted dark:bg-muted hover:bg-muted/80 dark:hover:bg-muted/80 text-foreground dark:text-foreground border border-border dark:border-border'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background dark:bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8 sm:mb-10 md:mb-12 text-foreground dark:text-foreground px-2">Frequently Asked Questions</h2>
            
            <div className="space-y-2">
              <FAQItem
                question="Can I purchase just the Digital Menu or Gamification separately?"
                answer="No, Saudh is designed as a complete ecosystem. Our research shows that digital menus work 3x better when paired with gamified lead capture and automated feedback. We sell it as a single powerful package to ensure you get the best results."
              />
              <FAQItem
                question="Do I need to buy special hardware?"
                answer="Not at all! Saudh runs entirely on the cloud. Your guests use their own smartphones to scan QR codes, view menus, play games, and leave feedback. You can manage everything from any laptop or tablet."
              />
              <FAQItem
                question="How does the WhatsApp automation work?"
                answer="Once a guest plays a game or leaves feedback, we capture their contact info (with consent). Our system then automatically sends them personalized offers, birthday wishes, and 'we miss you' messages via WhatsApp to bring them back to your restaurant."
              />
              <FAQItem
                question="Is there a setup fee?"
                answer="For Starter and Growth plans, there is no setup fee. You can get started instantly. For Enterprise plans requiring custom POS integrations, there may be a one-time onboarding fee."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-muted/50 dark:bg-muted/20">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#ffd00a] dark:from-[#ffd00a] to-[#ffbd00] dark:to-[#ffbd00] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center text-gray-900 dark:text-gray-900 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">Ready to transform your guest experience?</h2>
              <p className="text-base sm:text-lg md:text-xl font-medium opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Join 500+ restaurants using Saudh to automate their growth. Setup takes less than 24 hours.
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground dark:bg-foreground text-background dark:text-background hover:opacity-90 rounded-lg text-base sm:text-lg font-medium transition-opacity w-full sm:w-auto">
                Get Started Now
              </button>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 dark:bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-black/10 dark:bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
