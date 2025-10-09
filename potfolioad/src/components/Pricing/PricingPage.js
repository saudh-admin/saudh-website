// PricingPage.js
import React, { useState } from 'react';
import { Check, Star, Zap, Users, BarChart3, MessageCircle, Target } from 'lucide-react';
import './Pricing.scss';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import FAQ from "../FAQ/faq";
import { motion } from 'framer-motion';

const PricingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('digital-catalogue');
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const products = [
    {
      id: 'digital-catalogue',
      name: 'Digital Catalogue',
      description: 'Transform your business with a stunning digital catalog',
      icon: <Star className="icon" />,
      available: true,
      plans: [
        {
          id: 'dc-2months',
          duration: '1 Month',
          price: '₹1,500',
          originalPrice: null,
          popular: false,
          features: [
            'Complete digital catalog setup',
            'Mobile-responsive design',
            'Basic analytics',
            'Email support',
            'Contact support'
          ]
        },
        {
          id: 'dc-6months',
          duration: '6 Months',
          price: '₹6,999',
          originalPrice: '₹6,000',
          popular: true,
          bonus: '1 Month FREE',
          features: [
            'Everything in 2-month plan',
            'Advanced customization',
            'Priority support',
            'SEO optimization',
            'Social media integration'
          ]
        },
        {
          id: 'dc-12months',
          duration: '12 Months',
          price: '₹11,999',
          originalPrice: '₹12,000',
          popular: false,
          bonus: '2 Months FREE',
          features: [
            'Everything in 6-month plan',
            'Premium templates',
            'Advanced analytics',
            'Custom domain',
            'Dedicated account manager'
          ]
        }
      ]
    },
    {
      id: 'loyalty-program',
      name: 'Loyalty Program',
      description: 'Build customer loyalty with rewards and incentives',
      icon: <Users className="icon" />,
      available: true,
      plans: [
        {
          id: 'lp-2months',
          duration: '2 Months',
          price: '₹2,000',
          originalPrice: null,
          popular: false,
          features: [
            'Basic loyalty program setup',
            'Points-based rewards system',
            'Customer tracking',
            'Email support'
          ]
        },
        {
          id: 'lp-6months',
          duration: '6 Months',
          price: '₹5,000',
          originalPrice: '₹6,000',
          popular: true,
          bonus: '1 Month FREE',
          features: [
            'Everything in 2-month plan',
            'Advanced reward tiers',
            'Custom reward options',
            'Analytics dashboard',
            'Priority support'
          ]
        },
        {
          id: 'lp-12months',
          duration: '12 Months',
          price: '₹10,000',
          originalPrice: '₹12,000',
          popular: false,
          bonus: '2 Months FREE',
          features: [
            'Everything in 6-month plan',
            'Multi-tier loyalty system',
            'Advanced analytics',
            'API integration',
            'Dedicated support'
          ]
        }
      ]
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics',
      description: 'Get powerful insights with AI-driven analytics',
      icon: <BarChart3 className="icon" />,
      available: true,
      plans: [
        {
          id: 'ai-2months',
          duration: '2 Months',
          price: '₹2,000',
          originalPrice: null,
          popular: false,
          features: [
            'Basic AI analytics setup',
            'Customer behavior insights',
            'Basic reporting',
            'Email support'
          ]
        },
        {
          id: 'ai-6months',
          duration: '6 Months',
          price: '₹5,000',
          originalPrice: '₹6,000',
          popular: true,
          bonus: '1 Month FREE',
          features: [
            'Everything in 2-month plan',
            'Advanced AI predictions',
            'Custom dashboards',
            'Real-time analytics',
            'Priority support'
          ]
        },
        {
          id: 'ai-12months',
          duration: '12 Months',
          price: '₹10,000',
          originalPrice: '₹12,000',
          popular: false,
          bonus: '2 Months FREE',
          features: [
            'Everything in 6-month plan',
            'Machine learning insights',
            'Predictive analytics',
            'API access',
            'Dedicated analyst'
          ]
        }
      ]
    },
    {
      id: 'whatsapp-automation',
      name: 'WhatsApp Automation',
      description: 'Automate your WhatsApp business communications',
      icon: <MessageCircle className="icon" />,
      available: false,
      comingSoon: true
    },
    {
      id: 'lead-generation',
      name: 'Lead Generation',
      description: 'Generate high-quality leads for your business',
      icon: <Target className="icon" />,
      available: false,
      comingSoon: true
    }
  ];

  const selectedProductData = products.find(p => p.id === selectedProduct);

  const handlePlanClick = (planId) => {
    setSelectedPlan(selectedPlan === planId ? null : planId);
  };

  const handleProductChange = (productId) => {
    setSelectedProduct(productId);
    setSelectedPlan(null); // Reset selected plan when changing product
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="pricing-page">
          {/* Hero Section */}
          <motion.div 
            className="hero-section"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="container">
              <motion.div 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Simple, Transparent <span className="highlight">Pricing</span>
              </motion.div>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Choose the perfect plan to grow your business. No hidden fees, no surprises.
              </motion.p>
            </div>
          </motion.div>

          <div className="container main-content">
            {/* Product Selection */}
            <motion.div 
              className="product-selection"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 
                className="section-title"
                variants={itemVariants}
              >
                Choose Your Product
              </motion.h2>
              
              <motion.div 
                className="products-grid"
                variants={staggerContainer}
              >
                {products.map((product, index) => (
                  <motion.button
                    key={product.id}
                    onClick={() => handleProductChange(product.id)}
                    disabled={!product.available}
                    className={`product-card ${selectedProduct === product.id ? 'selected' : ''
                      } ${!product.available ? 'disabled' : ''}`}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: product.available ? 1.02 : 1, 
                      transition: { duration: 0.2 } 
                    }}
                    whileTap={{ scale: product.available ? 0.98 : 1 }}
                    custom={index}
                  >
                    {product.comingSoon && (
                      <motion.div 
                        className="coming-soon-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        Coming Soon
                      </motion.div>
                    )}
                    <div className="product-icon">
                      {product.icon}
                    </div>
                    <h3 className="product-name">
                      {product.name}
                    </h3>
                    <p className="product-description">
                      {product.description}
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Pricing Plans */}
            {selectedProductData?.available && selectedProductData?.plans ? (
              <motion.div 
                className="pricing-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                key={selectedProduct}
              >
                <motion.h3 
                  className="pricing-title"
                  variants={itemVariants}
                >
                  {selectedProductData.name} Pricing Plans
                </motion.h3>
                
                <motion.div 
                  className="plans-grid"
                  variants={staggerContainer}
                >
                  {selectedProductData.plans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      onClick={() => handlePlanClick(plan.id)}
                      className={`plan-card ${plan.popular ? 'popular' : ''} ${
                        selectedPlan === plan.id ? 'selected-plan' : ''
                      }`}
                      variants={cardVariants}
                      whileTap={{ scale: 0.98 }}
                      custom={index}
                      style={{ cursor: 'pointer' }}
                    >
                      {plan.popular && (
                        <motion.div 
                          className="popular-badge"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          Most Popular
                        </motion.div>
                      )}
                      {plan.bonus && (
                        <motion.div 
                          className="bonus-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {plan.bonus}
                        </motion.div>
                      )}
                      
                      <div className="plan-header">
                        <motion.h4 
                          className="plan-duration"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          {plan.duration}
                        </motion.h4>
                        <motion.div 
                          className="plan-pricing"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <span className="plan-price">
                            {plan.price}
                          </span>
                        </motion.div>
                        <motion.p 
                          className="payment-note"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          Total payment
                        </motion.p>
                      </div>
                      
                      <motion.ul 
                        className="features-list"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.5 + index * 0.1
                            }
                          }
                        }}
                      >
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="feature-item"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 }
                            }}
                          >
                            <Check className="check-icon" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                      
                      <motion.button 
                        className={`plan-button ${plan.popular ? 'popular-button' : ''} ${
                          selectedPlan === plan.id ? 'selected-button' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle actual plan selection/purchase here
                        }}
                      >
                        {selectedPlan === plan.id ? 'Get Started' : 'Get Started'}
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : selectedProductData?.comingSoon ? (
              <motion.div 
                className="coming-soon-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="coming-soon-icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Zap className="icon" />
                </motion.div>
                <motion.h3 
                  className="coming-soon-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {selectedProductData.name} - Coming Soon!
                </motion.h3>
                <motion.p 
                  className="coming-soon-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We're working hard to bring you this amazing feature. Stay tuned for updates!
                </motion.p>
                <motion.button 
                  className="notify-button"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me When Available
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                className="contact-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="contact-icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Star className="icon" />
                </motion.div>
                <motion.h3 
                  className="contact-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {selectedProductData?.name}
                </motion.h3>
                <motion.p 
                  className="contact-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Pricing details for this product will be available soon. Contact us for more information.
                </motion.p>
                <motion.button 
                  className="contact-button"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </motion.div>
            )}

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FAQ page="pricing" />
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className='top-button'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <hr /> 
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Top!
              </motion.button>
            </motion.div>

            <motion.div
              className='contact-home'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Have a project?
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's talk.
              </motion.h2>
              <motion.div
                className='contact-action'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className='contact-action-circle'></div>
                <div className='contact-action-word'>Contact</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;