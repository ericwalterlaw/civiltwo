import { Building, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Maze Engineering</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building excellence for 25 Years. 100% employee-owned construction
              company delivering innovative solutions across the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Buildings
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Civil Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Industrial
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Special Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Design-Build
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/who-we-are"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-are"
                  className="hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div>645 N Selland Ave Fresno 93710</div>
              <div>(463) 314 6978</div>
              <div>(405) 208 9868</div>
              <div>info@nhconstructions.org</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Maze Engineering. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}