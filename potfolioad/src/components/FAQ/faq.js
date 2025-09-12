import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { CATEGORIES } from "../../utils/constants";
import "./faq.scss";

const AccordionCard = ({ title, answer, category, show, index, showAccordion, setShowAccordion, isEven }) => {
    const handleClick = () => {
        let items = [...showAccordion];
        items[index] = !items[index];
        setShowAccordion(items);
    };

    return (
        <motion.div
            className={`faq-accordion-item ${show ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ scale: 1.01 }}
        >
            <div className="faq-accordion-header" onClick={handleClick}>
                <div className="faq-accordion-title">{title}</div>
                <motion.div
                    className={`faq-accordion-icon ${show ? 'rotated' : ''}`}
                    animate={{ rotate: show ? 180 : 0 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </div>
            <motion.div
                className={`faq-accordion-content ${show ? 'expanded' : ''}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: show ? 'auto' : 0,
                    opacity: show ? 1 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                    opacity: { duration: 0.2, ease: "easeInOut" }
                }}
            >
                <div className="faq-accordion-body">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
                        transition={{ 
                            duration: 0.25, 
                            delay: show ? 0.1 : 0,
                            ease: "easeInOut" 
                        }}
                    >
                        {answer}
                    </motion.p>
                    {category && (
                        <motion.div
                            className="faq-category-tag"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 5 }}
                            transition={{ 
                                duration: 0.2, 
                                delay: show ? 0.15 : 0,
                                ease: "easeInOut" 
                            }}
                        >
                            <span>{category}</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

// FAQ data for different pages
const getFAQData = (page) => {
    const faqData = {
        home: [
            {
                title: "What is Saudh, and who is it for?",
                answer: "Saudh is the operating system for the physical world. We help malls, food courts,restaurants, salons, spas, and retail outlets digitize their customer experience — from showcasing services to collecting feedback, generating leads, and drivingrepeat visits.",
                // category: "About Us",
                show: false
            },
            {
                title: "How is Saudh different from other tools?",
                answer: "Unlike generic tools, Saudh offers a fully connected suite — digital catalogues, gamified lead generation, WhatsApp automation, feedback insights, and loyalty programs — all under one roof.It’s not just tech; it’s a growth engine built for physical businesses.",
                // category: "Process",
                show: false
            },
            {
                title: "Do I need technical skills to use Saudh?",
                answer: "Not at all. Saudh is built to be plug-and-play. If you can send a message on WhatsApp, you can use Saudh.And if you ever need help, our team is just a call away.",
                // category: "Services",
                show: false
            },
            {
                title: "What kind of businesses can benefit from Saudh?",
                answer: "Whether you're running a restaurant, salon, spa, grocery store, or a mall with dozens of outlets, Saudh adapts to your business needs.If you serve walk-in customers in the real world, we’re built for you.",
                // category: "Services",
                show: false
            },
            {
                title: "How do I get started or book a demo?",
                answer: "Simply reach out via our contact form, WhatsApp, or email. Our team will schedule a quick walkthrough tailored to your business — no strings attached.",
                show: false

            },
            {
                title: "Do you offer custom branding?",
                answer: "Absolutely. We offer demo versions of our catalogue and lead tools so you can explore how Saudh works in a real- world setting before making a decision.",
                show: false
            },
            {
                title: "Can I try it before committing?",
                answer: "Absolutely. We offer demo versions of our catalogue and lead tools so you can explore how Saudh works in a real- world setting before making a decision.",
                show: false
            },
            {
                title: "Is Saudh a mobile app or a web platform?",
                answer: "Saudh is a web-first platform optimized for mobile. That means your customers don’t need to download an app.Everything opens instantly via a QR code or link.",
                show: false
            },
            {
                title: "Is this only for malls or individual businesses, too?",
                answer: "Both. Saudh powers entire malls with centralized control, but individual businesses — like restaurants or salons — can also use it independently.We scale with you.",
                show: false
            },
            {
                title: "How does pricing work?",
                answer: "We offer flexible plans based on the services you need — whether you’re a single outlet or a mall operator.Add - ons like WhatsApp automation or loyalty can be included based on your goals.Contact us for a customized quote.",
                show: false
            },

        ],
        // contact: [
        //     {
        //         title: "How quickly do you respond to contact form submissions?",
        //         answer: "We typically respond to all contact form submissions within 2-4 hours during business hours. For urgent inquiries, please mention it in your message.",
        //         category: "Communication",
        //         show: false
        //     },
        //     {
        //         title: "What information should I include in my project brief?",
        //         answer: "Include your business goals, target audience, budget range, timeline, and any specific requirements or preferences. The more details you provide, the better we can serve you.",
        //         category: "Process",
        //         show: false
        //     },
        //     {
        //         title: "Do you offer free consultations?",
        //         answer: "Yes! We offer a complimentary 30-minute consultation to discuss your project needs, answer questions, and determine if we're the right fit for your business.",
        //         category: "Services",
        //         show: false
        //     },
        //     {
        //         title: "What are your business hours?",
        //         answer: "Our business hours are Monday to Friday, 9 AM to 6 PM IST. We also offer flexible scheduling for international clients in different time zones.",
        //         category: "Communication",
        //         show: false
        //     },
        //     {
        //         title: "Can I schedule a call outside of business hours?",
        //         answer: "Absolutely! We understand that business owners have busy schedules. We offer flexible scheduling including evenings and weekends for your convenience.",
        //         category: "Communication",
        //         show: false
        //     }
        // ],
        // services: [
        //     {
        //         title: "What services does Saudh offer?",
        //         answer: "Saudh offers a comprehensive range of digital services including branding, interface design, development, digital marketing, WhatsApp automation, and ongoing support. We specialize in creating digital solutions that help businesses grow and engage with their customers effectively.",
        //         category: "Services",
        //         show: false
        //     },
        //     {
        //         title: "Do you work with startups?",
        //         answer: "Yes! We love working with startups and offer special packages tailored to their needs and budget constraints. We understand the unique challenges startups face.",
        //         category: "Services",
        //         show: false
        //     },
        //     {
        //         title: "How long does a typical project take to complete?",
        //         answer: "Project timelines vary depending on complexity and scope. A simple branding project might take 2-4 weeks, while a comprehensive digital platform could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
        //         category: "Process",
        //         show: false
        //     },
        //     {
        //         title: "What makes your WhatsApp automation different?",
        //         answer: "Our WhatsApp automation is specifically designed for businesses, featuring AI-powered responses, lead capture, campaign management, and seamless integration with existing systems. It's more than just chatbots - it's a complete customer engagement solution.",
        //         category: "Technology",
        //         show: false
        //     },
        //     {
        //         title: "How do you handle project revisions and feedback?",
        //         answer: "We have a structured feedback process with multiple revision rounds included in our packages. We use collaborative tools to ensure clear communication and timely updates throughout the project.",
        //         category: "Process",
        //         show: false
        //     }
        // ],
        branding: [
            {
                title: "What's included in your branding package?",
                answer: "Our branding package includes logo design, brand guidelines, color palette, typography, business cards, and brand identity elements. We also provide brand strategy consultation to ensure your brand reflects your business values.",
                category: "Branding",
                show: false
            },
            {
                title: "How many logo concepts do you provide?",
                answer: "We typically provide 3-5 initial logo concepts based on your brief. From there, we refine the chosen direction through multiple revision rounds until you're completely satisfied.",
                category: "Branding",
                show: false
            },
            {
                title: "Can you redesign an existing logo?",
                answer: "Absolutely! We can refresh existing logos while maintaining brand recognition, or create completely new designs if needed. We'll discuss your goals and recommend the best approach.",
                category: "Branding",
                show: false
            },
            {
                title: "Do you provide brand guidelines?",
                answer: "Yes! We create comprehensive brand guidelines that include logo usage rules, color specifications, typography guidelines, and examples of how to apply your brand across different mediums.",
                category: "Branding",
                show: false
            },
            {
                title: "How long does branding take?",
                answer: "A complete branding project typically takes 3-6 weeks, depending on complexity and revision rounds. We'll provide a detailed timeline at the start of your project.",
                category: "Process",
                show: false
            }
        ],
        interface: [
            {
                title: "What is the Saudh Catalogue?",
                answer: "The Saudh Catalogue is a digital version of your business’s offerings — from food menus to salon services and retail products — accessible through a simple QR code or web link.It’s fast, visually engaging, and built to drive customer decisions.",
                category: CATEGORIES.DIGITAL_CATALOGUES,
                show: false
            },
            {
                title: " How is this different from a basic QR menu?",
                answer: "Most QR menus are static PDFs or images. Saudh’s Catalogue is dynamic, interactive, and mobile- optimized.It supports live updates, ordering features, shared carts, rich visuals, and even insights — all designed to convert views into action.",
                category: CATEGORIES.DIGITAL_CATALOGUES,
                show: false
            },
            {
                title: "Can I use this for services like salons or spas, not just food?",
                answer: "Yes. The Saudh Catalogue makes it easy to tailor for salons, spas, clinics, retail, and more.You can showcase services, durations, pricing, and add- ons — just like a digital service brochure",
                category: CATEGORIES.DIGITAL_CATALOGUES,
                show: false
            },
            {
                title: "What is the shared cart and how does it work?",
                answer: "Shared Cart allows multiple users — like a group dining at a food court — to add items to a single, unified cart from different outlets.It’s perfect for collaborative ordering and improves coordination without needing a waiter.",
                category: CATEGORIES.DIGITAL_CATALOGUES,
                show: false
            },
            {
                title: "Can customers pre-order through the catalogue?",
                answer: "Yes. With our pre-ordering feature, customers can place their orders in advance and get notified when it’s ready — reducing wait times and improving throughput for your staff.",
                category: CATEGORIES.DIGITAL_CATALOGUES,
                show: false
            },
            {
                title: "Can I customize the look and feel of my catalogue?",
                answer: "Absolutely. Choose from industry-specific templates or let us customize your catalogue with your brand colors, logo, fonts, and visual style — so it feels uniquely yours.",
                category: CATEGORIES.DIGITAL_CATALOGUES,
                show: false
            },
            {
                title: "How do I add or update my items?",
                answer: "You’ll get a simple dashboard where you can add or update items in real-time. No tech skills needed.Need help? Our support team can assist or manage it for you.",
                show: false
            },
            {
                title: "Can I add images and descriptions?",
                answer: "Yes — and we recommend it. Add photos, detailed descriptions, pricing, service durations, and even item tags to make your catalogue more informative and appealing",
                show: false
            },
            {
                title: "Does this integrate with my POS or inventory system?",
                answer: "At this stage, the catalogue works independently. However, we’re planning future integrations with popular POS and inventory platforms as part of our roadmap. Early access will be shared with our existing partners.",
                show: false
            },
            {
                title: "Can I access analytics or usage insights?",
                answer: "Yes. You’ll get data on how often your catalogue is viewed, which items are most popular, and where users drop off — helping you make smarter decisions over time.",
                show: false
            }

        ],
        digital: [
            {
                title: "What is WhatsApp Business Automation?",
                answer: "Saudh's WhatsApp Business Automation helps you engage customers automatically — from sending offers and reminders to collecting feedback, confirming bookings, or sharing loyalty updates — all on their favourite messaging app.",
                // category: "WhatsApp Automation",
                show: false
            },
            {
                title: "Is this different from the regular WhatsApp Business App?",
                answer: "Yes. While the regular app is manual, Saudh uses the WhatsApp Business API to let you communicate with thousands of customers automatically, at scale.",
                // category: "Technology",
                show: false
            },
            {
                title: "What kind of messages can I send?",
                answer: "You can send discount codes, appointment reminders, order updates, pre-order links, loyalty points, and more — based on your business goals.",
                // category: "Messaging",
                show: false
            },
            {
                title: "Do you help with template approvals and message setup?",
                answer: "Yes. We handle the approvals, write the messages with you, and make sure everything complies with WhatsApp's rules — saving you time and hassle.",
                // category: "Setup",
                show: false
            },
            {
                title: "Can customers reply or chat back with us?",
                answer: "Absolutely. WhatsApp automation doesn't replace personal conversations — it just makes them more efficient. Your customers can reply anytime.",
                // category: "Interaction",
                show: false
            },
            {
                title: "Can I schedule messages or send broadcasts?",
                answer: "Yes. You can schedule messages in advance or send targeted broadcasts based on past orders, feedback, or loyalty activity.",
                // category: "Scheduling",
                show: false
            },
            {
                title: "Will I need a new number to use this?",
                answer: "Not necessarily. If your current number qualifies for API use, you can keep it. Basically, there should not be a Whatsapp account associated with the number to use this.",
                // category: "Setup",
                show: false
            },
            {
                title: "Can I connect this with my catalogue, loyalty, or feedback tools?",
                answer: "Yes — and that's where it shines. You can automatically send feedback links after a service, remind users about unclaimed rewards, or confirm pre-orders via WhatsApp.",
                // category: "Integration",
                show: false
            },
            {
                title: "Is it compliant with WhatsApp's rules and privacy guidelines?",
                answer: "Yes. We use only official, approved API providers, and all customer communication is fully opt-in and secure.",
                // category: "Compliance",
                show: false
            },
            {
                title: "Can I remind customers about abandoned carts or missed actions?",
                answer: "Yes! For example, if a user starts a pre-order or a Spin-to-Win game but doesn't finish, you can automatically send a reminder via WhatsApp — turning drop-offs into conversions.",
                // category: "Engagement",
                show: false
            }
        ],
        support: [
            {
                title: "What is Gamified Lead Generation by Saudh?",
                answer: "Saudh's Gamified Lead Generation helps you collect customer data using interactive games. Instead of filling boring forms, customers play a fun game to win a reward — and you capture their details in the process.",
                show: false
            },
            {
                title: "How does gamified lead generation work?",
                answer: "You set up a campaign (like 'Win a Free Dessert' or 'Get ₹50 Off'), and customers spin a virtual wheel. It's engaging, and in exchange for a reward, they share their details — building your marketing database effortlessly.",
                show: false
            },
            {
                title: "What types of games do you offer besides Spin-to-Win?",
                answer: "Along with Spin-to-Win, we offer formats like Roll the Dice, where customers roll virtual dice and win discounts based on their score. More formats — like scratch cards and lucky picks — are in the pipeline to keep things fresh.",
                show: false
            },
            {
                title: "How does gamification help me collect customer leads?",
                answer: "Gamified experiences create a win-win situation: your customers enjoy a quick game and receive a reward, while you collect valuable contact details and preferences for future engagement.",
                show: false
            },
            {
                title: "What kind of customer data can I collect through these games?",
                answer: "You can collect names, phone numbers, birthdays, emails, preferences, or any other custom input you choose — based on your marketing goals.",
                show: false
            },
            {
                title: "Can I customize the rewards, game logic, or win conditions?",
                answer: "Yes. You control everything — from the reward types and quantities to the probability of winning. You can also theme the game visuals and messaging to match your brand or campaign.",
                show: false
            },
            {
                title: "Are these games mobile-friendly and easy to access?",
                answer: "Absolutely. All games are optimized for mobile browsers — no downloads or logins required. Customers can access them instantly via QR code, website link, or WhatsApp.",
                show: false
            },
            {
                title: "Can I run multiple campaigns or change the games regularly?",
                answer: "Yes. You can run multiple campaigns simultaneously — for example, different games for different outlets or festive offers. Switching formats or updating offers takes just a few clicks.",
                show: false
            },
            {
                title: "How do I access and download lead data?",
                answer: "You'll have a secure dashboard to view, filter, and export your lead data anytime. Use it for campaigns, re-engagement, or insights.",
                show: false
            },
            {
                title: "Is it GDPR/compliance-friendly?",
                answer: "Yes. We follow data consent best practices and ensure customers are clearly informed about data usage. You can add your own terms and disclaimers as well.",
                show: false
            }
        ],
        projects: [
            {
                title: "Can I see examples of your previous work?",
                answer: "Yes! Check out our projects section to see detailed case studies of our work. Each project includes the challenge, solution, and results achieved for our clients.",
                category: "Portfolio",
                show: false
            },
            {
                title: "Do you work with similar businesses to mine?",
                answer: "We work across various industries and can adapt our expertise to your specific sector. Contact us to discuss how we can apply our experience to your business needs.",
                category: "Portfolio",
                show: false
            },
            {
                title: "Can you provide client references?",
                answer: "Yes! We're happy to provide references from satisfied clients in your industry. We have long-term relationships with many of our clients who can speak to our work quality.",
                category: "Portfolio",
                show: false
            },
            {
                title: "What's your project success rate?",
                answer: "We have a 95%+ client satisfaction rate and most of our clients continue working with us for ongoing projects. We measure success by achieving our clients' business goals.",
                category: "Portfolio",
                show: false
            },
            {
                title: "Do you offer project warranties?",
                answer: "Yes! We provide warranties on our work and offer post-launch support to ensure everything functions perfectly. We stand behind the quality of our deliverables.",
                category: "Support",
                show: false
            }
        ],
        analytics: [
            {
                title: "What is Saudh's AI-Enabled Feedback system?",
                answer: "It's a smart tool that helps you collect, analyze, and act on customer feedback — without manually going through hundreds of responses. You get structured insights, not just raw opinions.",
                category: "AI Feedback",
                show: false
            },
            {
                title: "What kind of feedback can I collect?",
                answer: "You can gather feedback on service quality, product experience, staff behavior, ambience, or anything else you choose. Customize the questions to match your business goals — from quick ratings to open-ended suggestions.",
                category: "Feedback Collection",
                show: false
            },
            {
                title: "How does the AI actually help?",
                answer: "The AI processes customer responses to detect sentiment, trends, and recurring issues. For example, it might show that customers love your ambience but frequently mention long wait times — helping you take focused action.",
                category: "AI Technology",
                show: false
            },
            {
                title: "Is the feedback anonymous?",
                answer: "Yes, it can be. You can choose to collect anonymous feedback for honest responses or ask for contact details if you plan to follow up with the customer.",
                category: "Privacy",
                show: false
            },
            {
                title: "Can I customize the feedback questions?",
                answer: "Absolutely. You decide what to ask — from simple star ratings to more specific questions like 'What could we improve?' or 'Was your stylist attentive?'",
                category: "Customization",
                show: false
            },
            {
                title: "How do I share the feedback form with customers?",
                answer: "You can share the feedback link through WhatsApp, your digital catalogue, QR codes at the table or counter, or even post-service reminders — all connected through Saudh's platform.",
                category: "Distribution",
                show: false
            },
            {
                title: "Will I receive reports or just raw data?",
                answer: "You'll receive visual dashboards and summaries, not just CSV files. See what's working, what's not, and how feedback is evolving over time — all in one place.",
                category: "Analytics",
                show: false
            },
            {
                title: "Can I use this to evaluate staff or outlet performance?",
                answer: "Yes. You can segment feedback by staff, outlet, time period, or even specific services — making it easy to recognize top performers or identify training needs.",
                category: "Performance",
                show: false
            },
            {
                title: "Is this meant only for food businesses or others too?",
                answer: "Not at all. Our feedback system works equally well for salons, spas, malls, gyms, clinics, and more — anywhere real-world experiences matter.",
                category: "Industries",
                show: false
            },
            {
                title: "Can this replace Google Reviews?",
                answer: "While it won't replace them, it complements them. Use Saudh to collect private, honest feedback, fix issues early, and then nudge happy customers to leave public reviews when they're most satisfied.",
                category: "Reviews",
                show: false
            }
        ],

    };

    return faqData[page] || faqData.home; // Default to home if page not found
};

const FAQ = ({ page = 'home' }) => {
    const [showAccordion, setShowAccordion] = useState([]);

    const accordionData = getFAQData(page) || [];

    // Initialize accordion state
    useEffect(() => {
        // For home page, open all FAQs by default; for other pages, keep them closed
        const defaultState = page === 'home' ? true : false;
        setShowAccordion(Array(accordionData.length).fill(defaultState));
    }, [accordionData.length, page]);

    // Display all questions
    const displayedQuestions = accordionData;

    return (
        <motion.section
            className="faq-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="faq-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    className="faq-header"
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">Find answers to common questions about our services and processes</p>
                </motion.div>

                <motion.div
                    className="faq-content"
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {displayedQuestions.length > 0 ? (
                        <motion.div
                            className="faq-accordion"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            }}
                        >
                            {displayedQuestions.map(({ answer, title, category }, index) => {
                                const originalIndex = accordionData.findIndex(item =>
                                    item.title === title && item.answer === answer
                                );
                                const isEven = index % 2 === 1; // Even index for right side
                                return (
                                    <AccordionCard
                                        key={`${title}-${index}`}
                                        title={title}
                                        answer={answer}
                                        category={category}
                                        show={showAccordion[originalIndex]}
                                        showAccordion={showAccordion}
                                        setShowAccordion={setShowAccordion}
                                        index={originalIndex}
                                        isEven={isEven}
                                    />
                                );
                            })}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="faq-no-results"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.172 16.172L4.343 11.343M14.828 16.172L19.657 11.343M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>No questions found</h3>
                            <p>Try selecting a different category</p>
                        </motion.div>
                    )}

                </motion.div>

                <motion.div
                    className="faq-footer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <p>Still have questions? <a href="/contact" className="faq-contact-link">Contact us</a> and we'll get back to you within 24 hours.</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default FAQ;