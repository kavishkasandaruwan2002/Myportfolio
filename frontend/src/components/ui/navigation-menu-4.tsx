import { Github, Twitter, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
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
const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Navigation links
const navigationLinks = [
  { href: "#home", label: "Home", sectionId: "#home" },
  { href: "#about", label: "About", sectionId: "#about" },
  { href: "#skills", label: "Skills", sectionId: "#skills" },
  { href: "#projects", label: "Work", sectionId: "#projects" },
  { href: "#experience", label: "Exp", sectionId: "#experience" },
  { href: "#contact", label: "Contact", sectionId: "#contact" },
]

import ThemeToggle from "./ThemeToggle"

export default function Component() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="container-custom flex h-20 items-center justify-between gap-4">
        {/* Left side: Logo */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-foreground font-black text-xl tracking-tighter hover:text-violet-600 transition-colors"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            KAVISHKA<span className="text-violet-600">.</span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground py-2 px-4 font-bold text-sm transition-all rounded-xl hover:bg-accent cursor-pointer"
                        onClick={(e: React.MouseEvent) => {
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
          </nav>
        </div>

        {/* Right side: Actions & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 border-r border-border pr-4 mr-2">
            {[
              { icon: Github, href: "https://github.com/kavishkasandaruwan2002" },
              { icon: Twitter, href: "https://twitter.com/" },
              { icon: Mail, href: "mailto:kavishkasandaruwan608@gmail.com" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon size={20} strokeWidth={2.5} />
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-black hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Let's Talk
          </button>

          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="size-10 md:hidden bg-secondary border-border rounded-xl"
                variant="outline"
                size="icon"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-64 p-2 rounded-2xl shadow-2xl border-border bg-popover glass mt-2">
              <nav className="flex flex-col gap-1">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="p-3 font-bold text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-colors"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      scrollToSection(link.sectionId);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}
