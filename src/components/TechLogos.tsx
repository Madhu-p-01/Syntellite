import React from "react";

const logos = [
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vue.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Nuxt.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
  },
  {
    name: "Angular",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Svelte",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  },
  {
    name: "Flutter",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Go",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "AWS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Azure",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "PostgreSQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "GraphQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const TechLogos = () => {
  return (
    <div className="w-full bg-[--main-dark-bg] py-12">
      <div className="max-w-xl mx-auto relative overflow-hidden">
        <div className="flex gap-12 animate-scroll">
          <div className="flex gap-12 min-w-max items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={logo.url} alt={logo.name} className="h-6 w-auto" />
                <span className="text-xs text-gray-400">{logo.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col items-center gap-2"
              >
                <img src={logo.url} alt={logo.name} className="h-4 w-auto" />
                <span className="text-xs text-gray-400">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[--main-dark-bg] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[--main-dark-bg] to-transparent pointer-events-none z-10" />
      </div>
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
          animation: scroll 60s linear infinite;
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

export default TechLogos;
