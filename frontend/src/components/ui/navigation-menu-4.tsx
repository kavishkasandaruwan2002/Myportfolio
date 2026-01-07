import { Github, Twitter, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ui/ThemeToggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#home", label: "Home", sectionId: "#home" },
  { href: "#about", label: "About", sectionId: "#about" },
  { href: "#skills", label: "Skills", sectionId: "#skills" },
  { href: "#projects", label: "Projects", sectionId: "#projects" },
  { href: "#experience", label: "Experience", sectionId: "#experience" },
  { href: "#contact", label: "Contact", sectionId: "#contact" },
]

export default function Component({ darkMode, toggleDarkMode }) {
  return (
    <header className="backdrop-blur-sm bg-background/60 border-b px-4 md:px-6">
      <div className="container-custom flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink 
                        href={link.href} 
                        className="py-1.5 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.sectionId);
                        }}
                      >
                        {link.label}
                      </NavigationMenuLink>
                      {index < navigationLinks.length - 1 && (
                        <div
                          role="separator"
                          aria-orientation="horizontal"
                          className="bg-border -mx-1 my-1 h-px w-full"
                        />
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary/90 font-semibold text-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              Kavishka Sandaruwan
            </a>
            {/* Navigation menu */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary py-1.5 px-2 font-medium transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.sectionId);
                          }}
                        >
                          {link.label}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://github.com/" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
              <Github size={18} />
            </a>
            <a href="https://twitter.com/" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
              <Twitter size={18} />
            </a>
            <a href="mailto:you@example.com" aria-label="Email" className="text-muted-foreground hover:text-foreground">
              <Mail size={18} />
            </a>
          </div>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  )
}
