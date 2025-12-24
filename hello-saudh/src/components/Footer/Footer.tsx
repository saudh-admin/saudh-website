import { motion } from "motion/react";
import { useTheme } from '../theme-provider';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="bg-background dark:bg-background text-foreground dark:text-foreground py-8 sm:py-12 md:py-16 px-4 sm:px-6 border-t border-border dark:border-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info Section */}
          <div className="footer-col">
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={theme === "dark" ? "/saudh-img-light-mode.png" : "/saudh-img-darkmode.png"} 
                className="h-8 sm:h-10 md:h-12 w-auto" 
                alt="Saudh Logo" 
              />
            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground dark:text-muted-foreground text-sm leading-relaxed">
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
                <span className="text-muted-foreground dark:text-muted-foreground text-xs uppercase tracking-wider">Email</span>
                <a 
                  href="mailto:rounak@saudh.com" 
                  className="text-foreground dark:text-foreground hover:text-[#ffd00a] dark:hover:text-[#ffd00a] transition-colors duration-300 text-sm"
                >
                  rounak@saudh.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground dark:text-muted-foreground text-xs uppercase tracking-wider">Phone</span>
                <a 
                  href="tel:9234441398" 
                  className="text-foreground dark:text-foreground hover:text-[#ffd00a] dark:hover:text-[#ffd00a] transition-colors duration-300 text-sm"
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
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
              >
                Digital Catalogues
              </a>
              <a 
                href="/Services/Loyalty" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
              >
                Loyalty Program
              </a>
              <a 
                href="/Services/Gamification" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
              >
                Lead Generation
              </a>
              <a 
                href="/Services/Analytics" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
              >
                AI Analytics
              </a>
              <a 
                href="/Services/Whatsapp-automation" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
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
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61550264025212" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/saudh.ai/" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/saudh/?viewAsMember=true" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.youtube.com/@saudh_india" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm"
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
          className="pt-8 border-t border-border dark:border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground dark:text-muted-foreground text-xs">
              <span>© 2025 SAUDH. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a 
                href="#privacy" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors duration-300 text-xs"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors duration-300 text-xs"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors duration-300 text-xs"
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
