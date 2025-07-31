"use client";
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import DetailIcon from '@rsuite/icons/Detail';
import ListIcon from '@rsuite/icons/List';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import PeoplesIcon from '@rsuite/icons/Peoples';
import GridIcon from '@rsuite/icons/Grid';
import TagIcon from '@rsuite/icons/Tag';
import MessageIcon from '@rsuite/icons/Message';
import GearIcon from '@rsuite/icons/Gear';
import { useProfile } from '@/context-api/ProfileContext';

export default function DashHeader() {
  const { isSuperAdmin, isAdmin, isAgent, isClient, user } = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (openDropdown) setOpenDropdown(false);
  };

  // Map route paths to eventKeys for RSuite Sidenav active state
  // Note: Paths should match your Next.js App Router folder structure (e.g., /dashboard/my-account)
  const menuKeyByPath = {
    '/dashboard/my-account': '1',
    '/dashboard/all-shipments': '2-1',
    '/dashboard/all-shipments': '2-2',
    '/dashboard/my-assigned-quote': '3-1',
    '/dashboard/quote-responses': '3-2',
    '/request-quote': '3-3',
    '/dashboard/manage-shipment': '4-1',
    '/dashboard/create-shipment': '4-2',
    '/track-shipment': '4-3',
    '/dashboard/send-newsletter': '5-1',
    '/dashboard/all-newsletters': '5-2',
    '/dashboard/subscribers': '5-3',
    '/dashboard/all-posts': '6-1',
    '/dashboard/add-new-post': '6-2',
    '/dashboard/all-users': '7-1',
    '/dashboard/add-new-user': '7-2',
    '/dashboard/change-user-password': '7-3',
    '/dashboard/my-account': '8-1',
    '/dashboard/my-account': '8-2',
    '/dashboard/my-account': '8-3',
    '/dashboard/contact-responses': '9',
    '/dashboard/profile': '10',
    '/dashboard/settings': '11',
  };
  const activeKey = menuKeyByPath[pathname];

  const handleLogout = () => {
    console.log('User logged out');
    setOpenDropdown(false); // Close dropdown after logout
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.push('/login');
  };

  // Placeholder for user avatar image path
  const userAvatarPath = "/svg/avatar.svg";

  return (
    <nav className="bg-green-800 text-white px-3 font-inter sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/cargo1.jpg"
            alt="Care Cargo Logo"
            className="h-auto w-auto rounded-full mr-0"
            height={56}
            width={56}
            priority 
          />
        </Link>

        {/* Desktop Navigation (Main Site Links) */}
        <div className="hidden lg:flex items-center space-x-6 text-lg">
          <Link href="/" className="hover:text-red-600 transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-red-600 transition-colors duration-300">About Us</Link>
          <Link href="/services" className="hover:text-red-600 transition-colors duration-300">Our Services</Link>
          <Link href="/track-shipment" className="hover:text-red-600 transition-colors duration-300">Track Shipment</Link>
          <Link href="/contact" className="hover:text-red-600 transition-colors duration-300">Contact Us</Link>
        </div>

        {/* Icons for Desktop (User Profile Dropdown) */}
        <div className="hidden lg:flex items-center space-x-4 relative" ref={menuRef}>
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="hover:text-red-600 transition-colors flex flex-row justify-start items-center gap-2 duration-300 cursor-pointer focus:outline-none"
          >
            <Image
              src={userAvatarPath}
              alt="User Avatar"
              className='w-9 h-9 rounded-full border-2 border-red-600'
              width={36}
              height={36}
            />
            <div className='mr-4 flex flex-col items-start justify-center'>
              <div className='text-sm font-semibold'>{user?.fullName || user?.name || 'NA'}</div>
              <div className='text-xs capitalize text-gray-400'>{user.role}</div>
            </div>
            {/* Dropdown arrow icon */}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openDropdown ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {openDropdown && (
            <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-48 text-gray-800">
              <ul className="py-2">
                <li>
                  <Link href="/" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpenDropdown(false)}>
                    Back to Home
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/profile" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpenDropdown(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center relative" ref={menuRef}>
          {/* Mobile User Info */}
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="hover:text-red-600 transition-colors flex flex-row justify-start items-center gap-2 duration-300 mr-2 focus:outline-none"
          >
            <Image
              src={userAvatarPath}
              alt="User Avatar"
              className='w-9 h-9 rounded-full border-2 border-red-600'
              width={36}
              height={36}
            />
            <div className='mr-4 flex flex-col items-start justify-center'>
              <div className='text-sm font-semibold'>Azeez Fasasi</div>
              <div className='text-xs capitalize text-gray-400'>Admin</div>
            </div>
          </button>

          {/* Mobile User Dropdown (positioned differently for mobile) */}
          {openDropdown && (
            <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-48 text-gray-800">
              <ul className="py-2">
                <li>
                  <Link href="/" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpenDropdown(false)}>
                    Back to Home
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/profile" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpenDropdown(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="focus:outline-none ml-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered slide-out sidebar) */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden w-64 z-40 overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <Sidenav appearance="dark"  activeKey={activeKey}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<DashboardIcon />} as={Link} href="/dashboard/my-account">
              Dashboard
            </Nav.Item>
            {( isSuperAdmin || isAdmin || isAgent) && (
              <Nav.Item eventKey="2-1" icon={<DashboardIcon />} as={Link} href="/dashboard/all-shipments">
                All Shipments
              </Nav.Item>
            )}
            {isClient && (
              <Nav.Item eventKey="2-2" icon={<DashboardIcon />} as={Link} href="/dashboard/all-shipments">
                My Shipments
              </Nav.Item>
            )}
            <Nav.Menu eventKey="3" title="Quote" icon={<ListIcon />}>
              {(isSuperAdmin || isAdmin || isAgent) && (
                <>
                <Nav.Item eventKey="3-1" as={Link} href="/dashboard/my-assigned-quote">My Assigned Quotes</Nav.Item>
                <Nav.Item eventKey="3-2" as={Link} href="/dashboard/quote-responses">Quote Responses</Nav.Item>
                </>
              )}
              {isClient && (
                <Nav.Item eventKey="3-3" as={Link} href="/request-quote">Request Quote</Nav.Item>
              )}
            </Nav.Menu>
            {( isSuperAdmin || isAdmin || isAgent) && (
              <Nav.Menu eventKey="4" title="Shipments" icon={<ListIcon />}>
                <Nav.Item eventKey="4-1" as={Link} href="/dashboard/manage-shipment">Manage Shipment</Nav.Item>
                <Nav.Item eventKey="4-1" as={Link} href="/dashboard/create-shipment">Create Shipment</Nav.Item>
                <Nav.Item eventKey="4-3" as={Link} href="/track-shipment">Track Shipments</Nav.Item>
              </Nav.Menu>
            )}
            {( isSuperAdmin || isAdmin || isAgent) && (
              <Nav.Menu eventKey="5" title="Newsletter" icon={<MessageIcon />}>
                <Nav.Item eventKey="5-1" as={Link} href="/dashboard/send-newsletter">Send Newsletter</Nav.Item>
                <Nav.Item eventKey="5-2" as={Link} href="/dashboard/all-newsletters">All Newsletters</Nav.Item>
                <Nav.Item eventKey="5-3" as={Link} href="/dashboard/subscribers">Subscribers</Nav.Item>
              </Nav.Menu>
            )}
            {( isSuperAdmin || isAdmin || isAgent) && (
              <Nav.Menu eventKey="6" title="Blog Posts" icon={<GridIcon />}>
                <Nav.Item eventKey="6-1" as={Link} href="/dashboard/all-posts">All Postst</Nav.Item>
                <Nav.Item eventKey="6-2" as={Link} href="/dashboard/add-new-post">Add Blog Post</Nav.Item>
              </Nav.Menu>
            )}
            {( isSuperAdmin || isAdmin || isAgent) && (
              <Nav.Menu eventKey="7" title="Manage Users" icon={<PeoplesIcon />}>
                <Nav.Item eventKey="7-1" as={Link} href="/dashboard/all-users">All Users</Nav.Item>
                <Nav.Item eventKey="7-2" as={Link} href="/dashboard/add-new-user">Add New User</Nav.Item>
                <Nav.Item eventKey="7-3" as={Link} href="/dashboard/change-user-password">Change User Password</Nav.Item>
              </Nav.Menu>
            )}
              <Nav.Menu eventKey="8" title="Appointments" icon={<PeoplesIcon />}>
                <Nav.Item eventKey="8-1" as={Link} href="/dashboard/my-account">My Appointments</Nav.Item>
                <Nav.Item eventKey="8-2" as={Link} href="/dashboard/my-account">Book Appointment</Nav.Item>
                {( isSuperAdmin || isAdmin || isAgent) && (
                  <Nav.Item eventKey="8-3" as={Link} href="/dashboard/my-account">All Appointments</Nav.Item>
                )}
              </Nav.Menu>
              {( isSuperAdmin || isAdmin || isAgent) && (
              <Nav.Item eventKey="9" icon={<TagIcon />} as={Link} href="/dashboard/contact-responses">
                Contact Responses
              </Nav.Item>
              )}
              <Nav.Item eventKey="10" icon={<UserInfoIcon />} as={Link} href="/dashboard/profile">
                Profile
              </Nav.Item>
              <Nav.Item eventKey="11" icon={<GearIcon />} as={Link} href="/dashboard/settings">
                Settings
              </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      </div>
    </nav>
  );
}
