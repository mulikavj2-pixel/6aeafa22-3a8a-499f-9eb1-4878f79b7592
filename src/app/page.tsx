"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import BlogCardNine from '@/components/sections/blog/BlogCardNine';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Target, Zap, Briefcase, TrendingUp, Users, Quote, Handshake, BookOpen, Linkedin, Twitter, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Fresh Fund"
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "Insights", id: "blog" }
          ]}
          button={{
            text: "Get in Touch",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Investing in Israel's Next Generation of Tech Leaders"
          description="Fresh Fund identifies and nurtures bold entrepreneurs building the future. We provide more than capital—we bring strategic insight, network access, and operational expertise to accelerate growth."
          tag="Tel Aviv-Based Venture Fund"
          tagIcon={Sparkles}
          buttons={[
            { text: "View Our Portfolio", href: "#portfolio" },
            { text: "Become an Investor", href: "#contact" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810241908-tyzio2jn.jpg",
              imageAlt: "Modern tech startup workspace"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810243371-h54kzeer.jpg",
              imageAlt: "Innovation lab environment"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810245410-n0zpdevf.jpg",
              imageAlt: "Technology pitch event"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810246795-o1t0v11o.png",
              imageAlt: "Entrepreneur team collaboration"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810248787-bp8elmm7.jpg",
              imageAlt: "Venture capital conference"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810250325-yfcxezv4.jpg",
              imageAlt: "Future technology innovation"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout
          title="Who We Are"
          description="Fresh Fund is a venture capital firm based in Tel Aviv dedicated to discovering and supporting exceptional tech founders. Since our founding, we have backed over 30 companies across AI, fintech, cybersecurity, and developer tools. Our conviction is simple: the best entrepreneurs deserve partners who understand their vision and provide the resources to execute at scale."
          tag="About Fresh Fund"
          tagIcon={Target}
          buttons={[
            { text: "Learn Our Investment Philosophy", href: "#features" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810252060-9dmq3r7a.jpg"
          imageAlt="Tel Aviv tech hub skyline"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="What Makes Us Different"
          description="We combine deep domain expertise with genuine commitment to founder success. Every investment is a partnership."
          tag="Our Approach"
          tagIcon={Zap}
          features={[
            {
              id: 1,
              title: "Hands-On Support",
              description: "Beyond capital, we provide strategic guidance, operational expertise, and hands-on support to help founders navigate challenges and seize opportunities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810253289-yaxpzvcz.jpg",
              imageAlt: "Investment support and funding"
            },
            {
              id: 2,
              title: "Network Access",
              description: "Tap into our extensive network of operators, investors, customers, and advisors who are committed to your success. Fresh Fund founders don't build alone.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810254311-0iq7pr1d.jpg",
              imageAlt: "Venture capital network"
            },
            {
              id: 3,
              title: "Industry Expertise",
              description: "Our team brings 20+ years of experience across SaaS, AI, fintech, and cybersecurity. We've built, scaled, and invested in market leaders.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810255741-6w9kujry.jpg",
              imageAlt: "Tech industry expertise"
            },
            {
              id: 4,
              title: "Global Reach, Local Insight",
              description: "We understand the Israeli tech ecosystem intimately while maintaining strong connections with Silicon Valley, Europe, and Asia's largest markets.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810257247-uhkqc9y0.jpg",
              imageAlt: "Global expansion success"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Our Portfolio"
          description="Meet the exceptional founders and companies we're proud to back. Each represents the future of their industry."
          tag="Portfolio Companies"
          tagIcon={Briefcase}
          products={[
            {
              id: "1",
              name: "DataVault AI",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810258624-aabd0ydo.jpg",
              imageAlt: "DataVault AI platform"
            },
            {
              id: "2",
              name: "SecureFlow",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810259847-9l1ycc1p.jpg",
              imageAlt: "SecureFlow security platform"
            },
            {
              id: "3",
              name: "NeuroAnalytics",
              price: "Seed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810261244-0welkrss.jpg",
              imageAlt: "NeuroAnalytics AI technology"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Our Impact"
          description="By the numbers: Fresh Fund's commitment to founder success and market leadership."
          tag="Fund Performance"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "$350M+",
              title: "Assets Under Management",
              items: ["Across 3 active funds", "Deployed since 2015", "Growing annually"]
            },
            {
              id: "2",
              value: "32",
              title: "Portfolio Companies",
              items: ["Average 3.2x return multiple", "6 unicorn exits", "Active in 5+ verticals"]
            },
            {
              id: "3",
              value: "85%",
              title: "Founder Retention Rate",
              items: ["Top quartile in industry", "Follow-on investment", "Repeat founders choose us"]
            },
            {
              id: "4",
              value: "20+",
              title: "Years of Experience",
              items: ["Proven track record", "Market expertise", "Successful exits"]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardNine
          title="Meet the Team"
          description="Experienced operators and investors committed to your success"
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "David Rabin",
              role: "Founding Partner & CEO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810262678-arji3bm4.jpg",
              imageAlt: "David Rabin"
            },
            {
              id: "2",
              name: "Sarah Cohen",
              role: "Partner, Operations & Growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810264039-zxanzmrs.png",
              imageAlt: "Sarah Cohen"
            },
            {
              id: "3",
              name: "Avi Lev",
              role: "Investment Partner, Technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810265315-bbibn86o.jpg",
              imageAlt: "Avi Lev"
            },
            {
              id: "4",
              name: "Nira Mizrahi",
              role: "Chief Investment Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810266808-xlktiybh.jpg",
              imageAlt: "Nira Mizrahi"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Founders Say"
          description="Hear directly from the entrepreneurs we've invested in and supported."
          tag="Portfolio Founder Feedback"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              nameTitle: "Yuval Oren, Founder & CEO, DataVault AI",
              quote: "Fresh Fund didn't just write a check. They opened doors, made introductions, and gave us strategic guidance that accelerated our growth by 18 months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810268014-g05bj7j0.jpg",
              imageAlt: "Yuval Oren"
            },
            {
              id: "2",
              nameTitle: "Roni Glam, Founder, SecureFlow",
              quote: "The team at Fresh Fund understands the Israeli tech ecosystem like no other investor. They've helped us navigate our international expansion with confidence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810269191-l3643wpo.jpg",
              imageAlt: "Roni Glam"
            },
            {
              id: "3",
              nameTitle: "Orit Daniels, CEO, NeuroAnalytics",
              quote: "Beyond capital, they provided operational mentorship, customer introductions, and a genuine partnership. That's what every founder needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810270599-tozw85g6.jpg",
              imageAlt: "Orit Daniels"
            },
            {
              id: "4",
              nameTitle: "Lior Shushan, Co-founder, CloudOptimize",
              quote: "Fresh Fund's network was instrumental in landing our first enterprise clients. The value add goes far beyond the investment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810271620-9i37ugba.jpg",
              imageAlt: "Lior Shushan"
            },
            {
              id: "5",
              nameTitle: "Michal Terzian, Founder, FinSecure",
              quote: "They believed in us before others did and stood by us during the tough times. That trust is invaluable for a founder.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810273363-7bl70uuz.jpg",
              imageAlt: "Michal Terzian"
            },
            {
              id: "6",
              nameTitle: "Alon Kastiel, CEO, DevOpsFlow",
              quote: "The Fresh Fund team brings deep technical knowledge combined with business acumen. Exactly what you need as a founder.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810275055-vwcp3gyd.jpg",
              imageAlt: "Alon Kastiel"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Industry Leaders"
          description="Our portfolio companies have partnered with and been backed by the world's leading technology platforms and investors."
          tag="Strategic Partners"
          tagIcon={Handshake}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810276470-lxnm4f9h.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810278298-878otcsj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810279634-yt7bpkof.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810281664-wmf4wzz9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810283517-l5uebbbe.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810284865-8a9jn3hc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810285968-jabo553g.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810287843-3ys0n25n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810289701-e3gsyt9r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810291899-81ma711d.jpg"
          ]}
          speed={40}
          showCard={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardNine
          title="Fresh Fund Insights"
          description="Industry analysis, investment thesis, and insights from our team of experienced investors and operators."
          tag="Market Trends & Analysis"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Market Trends",
              title: "The Future of AI in Israeli Tech: Opportunities and Challenges",
              description: "Exploring AI opportunities and challenges in the Israeli tech ecosystem.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810293034-1qxp9bve.jpg",
              imageAlt: "AI technology trends"
            },
            {
              id: "2",
              category: "Founder Insights",
              title: "Navigating Series A: Everything First-Time Founders Need to Know",
              description: "A comprehensive guide for first-time founders navigating Series A fundraising.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810294063-s0t5zucr.jpg",
              imageAlt: "Series A fundraising guide"
            },
            {
              id: "3",
              category: "Industry Watch",
              title: "Why Tel Aviv is Becoming a Global Tech Powerhouse",
              description: "Understanding Tel Aviv's emergence as a global technology hub.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765810295570-etbtwpfw.jpg",
              imageAlt: "Tech industry insights"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Fresh Fund, our investment process, and partnership."
          faqs={[
            {
              id: "1",
              title: "What is Fresh Fund's typical investment size?",
              content: "We invest between $500K and $5M in seed, Series A, and Series B rounds. Our check sizes are flexible and depend on the opportunity and the founder's needs."
            },
            {
              id: "2",
              title: "How do you select companies to invest in?",
              content: "We focus on exceptional founders with deep domain expertise solving real market problems. We prioritize companies in AI, fintech, cybersecurity, and developer tools with the potential for significant exits."
            },
            {
              id: "3",
              title: "Do you require board seats?",
              content: "We typically take a board seat in Series A+ investments. However, this is flexible and negotiable based on the specific situation and our involvement level."
            },
            {
              id: "4",
              title: "How long does the investment process take?",
              content: "From initial meeting to final commitment typically takes 4-8 weeks. We move quickly when there's a strong founder-market fit and clear value proposition."
            },
            {
              id: "5",
              title: "Do you invest in non-Israeli founders?",
              content: "Yes, we invest in exceptional founders globally, particularly those building in the Israeli market or those of Israeli descent. We also support companies relocating to or expanding through Israel."
            },
            {
              id: "6",
              title: "What support do portfolio companies receive beyond capital?",
              content: "We provide strategic mentorship, customer introductions, operational guidance, help with follow-on fundraising, and access to our network of industry operators and advisors."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to partner with Fresh Fund? Whether you're a founder seeking investment or an LP interested in our fund, we'd love to hear from you."
          animationType="reveal-blur"
          buttons={[
            { text: "Start Conversation", href: "mailto:hello@freshfund.com" },
            { text: "Schedule a Call", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Fresh Fund"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Team", href: "#team" },
                { label: "Insights", href: "#blog" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "For Founders",
              items: [
                { label: "Portfolio", href: "#portfolio" },
                { label: "Apply to Fresh Fund", href: "mailto:hello@freshfund.com" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:hello@freshfund.com", ariaLabel: "Email" }
          ]}
          copyrightText="© Fresh Fund, Tel Aviv 2025"
        />
      </div>
    </ThemeProvider>
  );
}