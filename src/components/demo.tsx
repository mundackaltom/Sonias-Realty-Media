"use client";

import Menu, { IMenu } from "./ui/navbar";

// Sample menu data for demo
const demoMenus: IMenu[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
    dropdown: true,
    items: [
      { id: 31, title: "Property Search", url: "/services/property-search" },
      { id: 32, title: "Financial Planning", url: "/services/financial-planning" },
      { id: 33, title: "Real Estate Investment", url: "/services/real-estate-investment" },
      { id: 34, title: "Asset Management", url: "/services/asset-management" },
    ]
  },
  {
    id: 4,
    title: "Projects",
    url: "/projects",
    dropdown: true,
    items: [
      { id: 41, title: "All Projects", url: "/projects" },
      { id: 42, title: "Upcoming Projects", url: "/projects?filter=upcoming" },
      { id: 43, title: "Completed Projects", url: "/projects?filter=completed" },
    ]
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  }
];

export function NavBarDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Menu Component Demo</h1>
        
        {/* Demo 1: Basic Menu */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Basic Menu</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <Menu list={demoMenus} />
          </div>
        </div>

        {/* Demo 2: Menu with different styling context */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Menu with Dark Background</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-white">
              <Menu list={demoMenus} />
            </div>
          </div>
        </div>

        {/* Demo 3: Menu over image background */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Menu Over Image Background</h2>
          <div 
            className="relative bg-cover bg-center p-6 rounded-lg min-h-[300px] flex items-center justify-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}
          >
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <Menu list={demoMenus} />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Usage Instructions</h3>
          <p className="mb-2">Import the Menu component and IMenu type:</p>
          <code className="block bg-gray-100 p-2 rounded mb-2">
            {`import Menu, { IMenu } from "@/components/ui/navbar";`}
          </code>
          <p className="mb-2">Define your menu structure:</p>
          <code className="block bg-gray-100 p-2 rounded text-sm">
            {`const menuItems: IMenu[] = [
  { id: 1, title: "Home", url: "/" },
  { 
    id: 2, 
    title: "Services", 
    url: "/services", 
    dropdown: true,
    items: [
      { id: 21, title: "Service 1", url: "/services/1" }
    ]
  }
];`}
          </code>
          <p className="mt-2">Then use the component:</p>
          <code className="block bg-gray-100 p-2 rounded">
            {`<Menu list={menuItems} />`}
          </code>
        </div>
      </div>
    </div>
  );
}

export default NavBarDemo;