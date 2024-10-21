export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p className="text-sm">&copy; 2024 My App. All rights reserved.</p>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
