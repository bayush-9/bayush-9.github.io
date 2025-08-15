import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
  FaDev,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/bayush-9",
    icon: <FaGithub color="#fff" size={30} />,
  },
  {
    href: "https://www.linkedin.com/in/ayush-bharsakle-4b4643200/",
    icon: <FaLinkedin color="#fff" size={30} />,
  },
  {
    href: "https://medium.com/@bharsakleaa",
    icon: <FaMedium color="#fff" size={30} />,
  },
  // { href: "/resume.pdf", icon: <HiOutlineDocumentText /> },
  // { href: "mailto:your.email@example.com", icon: <HiOutlineMail /> },
  {
    href: "https://x.com/AyushBharsakle",
    icon: <FaTwitter color="#fff" size={30} />,
  },
  // { href: "https://dev.to/your-username", icon: <FaDev color="#fff" /> },
];

export default function SocialIcons() {
  return socialLinks.map((link, idx) => (
    <a
      key={idx}
      href={link.href}
      target="_blank"

      // rel="noopener noreferrer"
      // className="hover:text-blue-500 transition-colors"
    >
      {link.icon}
    </a>
  ));
}
