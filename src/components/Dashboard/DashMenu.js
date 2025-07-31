"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
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

// IMPORT useProfile from your dedicated context file
import { useProfile } from '@/context-api/ProfileContext'; // Adjust path if necessary

export default function DashMenu() {
  // Now useProfile correctly gets the context from the ProfileProvider in layout.js
  const { isSuperAdmin, isAgent, isAdmin, isClient } = useProfile();
  const pathname = usePathname();

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

  return (
    <div style={{ width: 240 }} className='hidden lg:block bg-gray-200 mt-0 overflow-y-autod shadow-lg'>
      <Sidenav appearance="dark" activeKey={activeKey}>
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
  );
}