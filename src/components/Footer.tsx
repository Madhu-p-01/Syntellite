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
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Services", "Testimonials", "Contact"],
    },
    {
      title: "Services",
      links: [
        "Custom Software Development",
        "Mobile App Development",
        "Cloud Solutions",
        "Cybersecurity",
        "AI & Machine Learning",
        "Data Analytics",
        "UI/UX Design",
      ],
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Whitepapers"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="bg-[--main-dark-bg] w-full">
      {/* Security Banner */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-28">
          {/* Security Statement */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-white text-[14px] font-medium leading-5">
              We protect your data.
            </span>
            <a
              href="#"
              className="text-[#59bfef] text-[14px] font-medium leading-5 hover:underline"
            >
              More on Security
            </a>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-white text-[14px] font-medium leading-5">
                SOC2 Type 2
              </span>
              <span className="text-[#898989] text-[14px] font-medium leading-5">
                Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-white text-[14px] font-medium leading-5">
                HIPAA
              </span>
              <span className="text-[#898989] text-[14px] font-medium leading-5">
                Compliant
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
                href="#"
              />
              <SocialIcon
                icon={<Github className="w-[22px] h-[22px]" />}
                href="#"
              />
              <SocialIcon
                icon={<Linkedin className="w-[22px] h-[22px]" />}
                href="#"
              />
            </div>
          </div>


          {/* Solutions */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Solutions">
              <FooterLink>AI Builders</FooterLink>
              <FooterLink>No Code</FooterLink>
              <FooterLink>Beginners</FooterLink>
              <FooterLink>Developers</FooterLink>
              <FooterLink>Postgres Devs</FooterLink>
              <FooterLink>Switch From Neon</FooterLink>
              <FooterLink>Startups</FooterLink>
              <FooterLink>Enterprise</FooterLink>
            </FooterSection>
          </div>

          {/* Resources */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Resources">
              <FooterLink>Blog</FooterLink>
              <FooterLink>Support</FooterLink>
              <FooterLink>System Status</FooterLink>
              <FooterLink>Become a Partner</FooterLink>
              <FooterLink>Integrations</FooterLink>
              <FooterLink>Brand Assets</FooterLink>
              <FooterLink>Security & Compliance</FooterLink>
              <FooterLink>DPA</FooterLink>
              <FooterLink>SOC2</FooterLink>
              <FooterLink>HIPAA</FooterLink>
            </FooterSection>
          </div>

          {/* Developers */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Developers">
              <FooterLink>Documentation</FooterLink>
              <FooterLink>Supabase UI</FooterLink>
              <FooterLink>Changelog</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Contributing</FooterLink>
              <FooterLink>Open Source</FooterLink>
              <FooterLink>SupaSquad</FooterLink>
              <FooterLink>DevTo</FooterLink>
              <FooterLink>RSS</FooterLink>
            </FooterSection>
          </div>

          {/* Company */}
          <div className="col-span-1 flex flex-col gap-4">
            <FooterSection title="Company">
              <FooterLink>Company</FooterLink>
              <FooterLink>General Availability</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Privacy Settings</FooterLink>
              <FooterLink>Acceptable Use Policy</FooterLink>
              <FooterLink>Support Policy</FooterLink>
              <FooterLink>Service Level Agreement</FooterLink>
              <FooterLink>Humans.txt</FooterLink>
              <FooterLink>Lawyers.txt</FooterLink>
              <FooterLink>Security.txt</FooterLink>
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
