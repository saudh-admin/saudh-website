import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info Section */}
          <div className="footer-col">
            <motion.div
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-wider"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              SAUDH
            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Saudh - where the Physical Meets the Digital.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Email</span>
                <a 
                  href="mailto:rounak@saudh.com" 
                  className="text-gray-900 hover:text-[#ffd00a] transition-colors duration-300 text-sm"
                >
                  rounak@saudh.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Phone</span>
                <a 
                  href="tel:9234441398" 
                  className="text-gray-900 hover:text-[#ffd00a] transition-colors duration-300 text-sm"
                >
                  +91 9234441398
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="footer-col">
            <motion.div
              className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Services
            </motion.div>
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href="/Services/Digital-catalogue" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
              >
                Digital Catalogues
              </a>
              <a 
                href="/Services/Loyalty" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
              >
                Loyalty Program
              </a>
              <a 
                href="/Services/Gamification" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
              >
                Lead Generation
              </a>
              <a 
                href="/Services/Analytics" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
              >
                AI Analytics
              </a>
              <a 
                href="/Services/Whatsapp-automation" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
              >
                WhatsApp Automation
              </a>
            </motion.div>
          </div>

          {/* Social & Connect Section */}
          <div className="footer-col">
            <motion.div
              className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect With Us
            </motion.div>
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://x.com/contactsaudh" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61550264025212" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/saudh.ai/" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/saudh/?viewAsMember=true" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.youtube.com/@saudh_india" 
                className="text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs">
              <span>© 2025 SAUDH. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a 
                href="#privacy" 
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-xs"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-xs"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 text-xs"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
