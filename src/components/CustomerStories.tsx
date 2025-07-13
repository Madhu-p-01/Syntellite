import React from "react";
import { cn } from "../lib/utils";
import { Check, Github, Youtube, MessageCircle } from "lucide-react";

interface CompanyCardProps {
  logo: string;
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  logo,
  name,
  width = 140,
  height,
  className,
}) => (
  <div
    className={cn(
      "relative h-[142px] rounded-xl overflow-hidden group",
      "bg-gradient-to-b from-gray-800 to-gray-900",
      "p-[1px]",
      className
    )}
  >
    <div className="h-full w-full bg-[--card-dark-bg] rounded-[11px] flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="opacity-50 hover:opacity-75 transition-opacity"
        style={{ width: `${width}px`, height: height ? `${height}px` : "auto" }}
      />
    </div>
  </div>
);

interface CaseStudyCardProps {
  logo: string;
  title: string;
  companyName: string;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  logo,
  title,
  companyName,
  className,
}) => (
  <div
    className={cn(
      "relative min-h-[300px] rounded-xl overflow-hidden group",
      "bg-gradient-to-b from-gray-800 to-gray-900",
      "p-[1px]",
      className
    )}
  >
    <div className="h-full w-full bg-[--card-dark-bg] rounded-[11px] p-8 flex flex-col justify-between">
      <div className="opacity-50">
        <div className="w-[145px] h-[33px] flex items-center justify-center">
          <img
            src={logo}
            alt={companyName}
            className="w-[145px] h-[33px] object-contain"
          />
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-[#898989] text-[15px] font-medium leading-6">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Button: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}> = ({ children, variant = "primary", className }) => {
  const baseStyles =
    "h-[26px] px-3 py-1 rounded-md text-xs font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 border border-blue-500 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-800 border border-gray-700 text-white hover:bg-gray-700",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
};

export const CustomerStories: React.FC = () => {
  const companies = [
    {
      name: "Quivr",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8074c67ffe29db954dc594f16b48b43393ea9728?width=280",
      width: 140,
      height: 41.57,
    },
    {
      name: "1Password",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7590ba943c0a6d354d1fd509ec4cdb4c69bf6f2e?width=280",
      width: 140,
      height: 70.36,
    },
    {
      name: "Tinloof",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed1368a31ccaed63c66355bdf3d1babaa7004dd5?width=280",
      width: 140,
      height: 37.19,
    },
    {
      name: "Next Door Lending",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/5138a2e304912778b350222e1111e715dabe529c?width=280",
      width: 140,
      height: 34.27,
    },
    {
      name: "Shotgun",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/10cde601997648d2fc200d1f7b088ab9df94d649?width=280",
      width: 140,
      height: 26.25,
    },
    {
      name: "Mozilla",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/102ed4b760bc674650f07d36ced61494b57f5f45?width=280",
      width: 140,
      height: 30.62,
    },
    {
      name: "Mobbin",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/72b2c55b1defdad98b4b928448a16c697b67fa95?width=280",
      width: 140,
      height: 20.41,
    },
    {
      name: "HappyTeams",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/c79361c640e98f5ec09c5a40524b88db9338fbdd?width=280",
      width: 140,
      height: 30.98,
    },
  ];

  const caseStudies = [
    {
      companyName: "Maergo",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/34fe1eb8e738e9a744798f9196917b862b9cb189?width=290",
      title:
        "Maergo's Express Delivery: How Supabase Helped Achieve Scalability, Speed, and Cost Saving",
    },
    {
      companyName: "Chatbase",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fe33bf125ec2fee1871f7dfe13f6205040d0e1d?width=290",
      title:
        "Bootstrapped founder builds an AI app with Supabase and scales to $1M in 5 months.",
    },
  ];

  return (
    <div className="w-full bg-[--main-dark-bg]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            {/* Customer Stories Label */}
            <div className="text-sky-400 text-xs font-normal uppercase tracking-[1.2px] font-mono">
              Our Track Records
            </div>

            {/* Main Heading */}
            <h2 className="text-[35px] leading-[43px] font-medium max-w-[448px]">
              <span className="text-white">Trusted by the world's</span>
              <span className="text-gray-400"> most innovative companies.</span>
            </h2>

            {/* Description */}
            <p className="text-[#898989] text-[17px] leading-7 font-medium max-w-[768px]">
              We have a proven track record of delivering high-quality software
              solutions to a diverse range of clients.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="primary">View all stories</Button>
            <Button variant="secondary">View Events</Button>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="relative overflow-hidden">
          {/* Animated Company Cards Container */}
          <div className="flex gap-4 animate-scroll">
            {/* First row */}
            <div className="flex gap-4 min-w-max">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[0]} />
                <CompanyCard {...companies[2]} />
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[1]} />
                <CompanyCard {...companies[3]} />
              </div>

              {/* Case Study 1 */}
              <div className="w-[450px]">
                <CaseStudyCard {...caseStudies[0]} />
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[4]} />
                <CompanyCard {...companies[5]} />
              </div>

              {/* Case Study 2 */}
              <div className="w-[450px]">
                <CaseStudyCard {...caseStudies[1]} />
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[6]} />
                <CompanyCard {...companies[7]} />
              </div>

              {/* Repeat for infinite scroll effect */}
              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[0]} />
                <CompanyCard {...companies[2]} />
              </div>

              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[1]} />
                <CompanyCard {...companies[3]} />
              </div>

              <div className="w-[450px]">
                <CaseStudyCard {...caseStudies[0]} />
              </div>

              <div className="flex flex-col gap-4 w-[250px]">
                <CompanyCard {...companies[4]} />
                <CompanyCard {...companies[5]} />
              </div>
            </div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#171717] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#171717] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Custom Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
        `,
        }}
      />
    </div>
  );
};

export default CustomerStories;
