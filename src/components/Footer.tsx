import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Check,
  MessageCircle,
  Youtube,
} from "lucide-react";
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
  return (
    <footer className="bg-[--main-dark-bg] w-full">
      {/* Security Banner */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-28">
          {/* Security Statement */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-white text-[14px] font-medium leading-5">
              Your Security is Our Priority.
            </span>
            <a
              href="#"
              className="text-[#59bfef] text-[14px] font-medium leading-5 hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-white text-[14px] font-medium leading-5">
                SOC2 Type 2
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-white text-[14px] font-medium leading-5">
                HIPAA Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2E2E2E] to-transparent" />

      {/* Main Footer Content */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-start">
              <img
                src={logo}
                alt="Syntellite Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center gap-5">
              <SocialIcon
                icon={<Twitter className="w-[22px] h-[22px]" />}
                href="https://twitter.com/syntellite"
              />
              <SocialIcon
                icon={<Github className="w-[22px] h-[22px]" />}
                href="https://github.com/syntellite"
              />
              <SocialIcon
                icon={<Linkedin className="w-[22px] h-[22px]" />}
                href="https://linkedin.com/company/syntellite"
              />
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Company">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterSection>
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Services">
              <FooterLink href="/services">Custom Software</FooterLink>
              <FooterLink href="/services">Mobile Apps</FooterLink>
              <FooterLink href="/services">Cloud & DevOps</FooterLink>
              <FooterLink href="/services">AI & Automation</FooterLink>
            </FooterSection>
          </div>

          {/* Resources */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Resources">
              <FooterLink>Case Studies</FooterLink>
              <FooterLink>Whitepapers</FooterLink>
              <FooterLink>System Status</FooterLink>
            </FooterSection>
          </div>

          {/* Legal */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Legal">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2E2E2E]">
        <div className="w-full max-w-[1536px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between">
            <div className="text-[#898989] text-[11px] font-medium leading-4">
              © {new Date().getFullYear()} Syntellite Innovations Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
