import React from "react";
import { useLocation } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Check,
  MessageCircle,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "../lib/utils";
import logo from "../assets/syntellite_logo.png";

const FooterLink: React.FC<{
  children: React.ReactNode;
  href?: string;
  className?: string;
}> = ({ children, href, className }) => (
  <a
    href={href || "#"}
    className={cn(
      "text-[13px] leading-5 font-medium text-[#898989] hover:text-white transition-colors",
      className
    )}
  >
    {children}
  </a>
);

const FooterSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-white font-medium text-[15px] leading-6">{title}</h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const SocialIcon: React.FC<{
  icon: React.ReactNode;
  href?: string;
}> = ({ icon, href }) => (
  <a
    href={href || "#"}
    className="w-[22px] h-[22px] text-[#898989] hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const Footer = () => {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith("/services");

  return (
    <footer
      className={cn("bg-[--main-dark-bg] w-full", isServicesPage && "lg:ml-80")}
    >
      {/* Main Footer Content */}
      <div
        className={cn(
          "w-full mx-auto py-12 sm:py-24",
          isServicesPage
            ? "px-4 sm:px-6 lg:px-8 max-w-none"
            : "max-w-[1536px] px-4 sm:px-6 lg:px-20"
        )}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <div className="flex items-start">
              <img src={logo} alt="Syntellite Logo" className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/company/syntellite/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors touch-target-responsive"
              >
                <Linkedin className="footer-social-icon w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/syntellite/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors touch-target-responsive"
              >
                <Instagram className="footer-social-icon w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1GLdJut9Kw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors touch-target-responsive"
              >
                <Facebook className="footer-social-icon w-5 h-5" />
              </a>
              <a
                href="https://x.com/Syntellite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors touch-target-responsive"
              >
                <Twitter className="footer-social-icon w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Syntellite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors touch-target-responsive"
              >
                <Youtube className="footer-social-icon w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+919972200910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors touch-target-responsive"
              >
                <FaWhatsapp className="footer-social-icon w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Web and Apps Solutions */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Web and Apps Solutions">
              <FooterLink href="/services/web-development">Web Development</FooterLink>
              <FooterLink href="/services/app-development">App Development</FooterLink>
              <FooterLink href="/services/ecommerce-solutions">ECommerce Solutions</FooterLink>
              <FooterLink href="/services/payment-gateway">Payment Gateway</FooterLink>
              <FooterLink href="/services/payment-orchestration">Payment Orchestration</FooterLink>
              <FooterLink href="/services/progressive-web-apps">Progressive Web Apps</FooterLink>
            </FooterSection>
          </div>

          {/* Engineering and AI */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Engineering and AI">
              <FooterLink href="/services/software-development">Software Development</FooterLink>
              <FooterLink href="/services/api-microservices">API & Microservices</FooterLink>
              <FooterLink href="/services/ai-automation">AI and Automation</FooterLink>
              <FooterLink href="/services/white-label-solutions">White Label Solutions</FooterLink>
              <FooterLink href="/services/saas-development">SAAS</FooterLink>
              <FooterLink href="/services/system-integration">System Integration</FooterLink>
            </FooterSection>
          </div>

          {/* Build, Design and DevOps */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Build, Design and DevOps">
              <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
              <FooterLink href="/services/cloud-operations">Cloud Operations</FooterLink>
              <FooterLink href="/services/software-hardware-development">Software + Hardware Development</FooterLink>
              <FooterLink href="/services/rd-prototyping">R&D and Prototyping</FooterLink>
              <FooterLink href="/services/pcb-hardware-design">PCB and Hardware Design</FooterLink>
              <FooterLink href="/services/devops-cicd">DevOps CI/CD</FooterLink>
            </FooterSection>
          </div>

          {/* Growth Strategy and Consulting */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Growth Strategy and Consulting">
              <FooterLink href="/services/seo-optimization">SEO</FooterLink>
              <FooterLink href="/services/digital-marketing">Digital Marketing</FooterLink>
              <FooterLink href="/services/content-creation">Content Creation</FooterLink>
              <FooterLink href="/services/mvp-development">Prototyping and MVP</FooterLink>
              <FooterLink href="/services/consulting-strategy">Consulting & Strategy</FooterLink>
              <FooterLink href="/services/data-analytics">Data Analytics</FooterLink>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2E2E2E]">
        <div
          className={cn(
            "w-full mx-auto py-8",
            isServicesPage
              ? "px-4 sm:px-6 lg:px-8 max-w-none"
              : "max-w-[1536px] px-12"
          )}
        >
          <div className="flex items-center justify-center">
            <div className="text-[#898989] text-[11px] font-medium leading-4">
              © {new Date().getFullYear()} Syntellite Innovations Pvt Ltd. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
