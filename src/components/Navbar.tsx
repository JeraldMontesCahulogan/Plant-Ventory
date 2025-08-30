import Link from "next/link";
import { Button } from "./ui/button";
import { HomeIcon, Sprout } from "lucide-react";
import ModeToggle from "./ModeTogggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          {/*Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold font-mono tracking-wider"
            >
              🌱 Plantventory
            </Link>
          </div>

          {/*Navbar components*/}
          <div className="hidden md:flex items-center space-x-4">
            {/*Plants button that links to the plants page*/}
            <Button
              variant="ghost" // ghost variant is a button with no background and no border
              className="flex items-center gap-2"
              asChild // this prop allows us to use a Link component as a child of Button, rather than wrapping the Button in a Link. This is useful for accessibility, as it allows the Link to be announced as a link to screen readers.
            >
              <Link href="/plants">
                <Sprout className="w-4 h-4" />{" "}
                {/* Sprout is the icon for plants  */}
                <span className="hidden lg:inline">Plants</span>
              </Link>
            </Button>

            {/*Home button that links to the home page*/}
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            {/*Theme mode toggle*/}
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
