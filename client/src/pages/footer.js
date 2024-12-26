import { Phone, Mail, MapPin } from 'lucide-react'; // Assuming you are using react-feather for icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} 
                     className="hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Permanent Staffing', 'Contract Hiring', 'Executive Search'].map((service) => (
                <li key={service}>
                  <a href={`#${service.toLowerCase().replace(' ', '-')}`} 
                     className="hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Legal</h3>
            <ul className="space-y-3">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Disclaimer',
                'Copyright Notice'
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                     className="hover:text-blue-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@kaarlo.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Business Ave, City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Kaarlo Staffing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
