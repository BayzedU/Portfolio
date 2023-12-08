import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../@/components/ui/navigation-menu";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../../@/components/ui/menubar";

const Menu = () => {
  return (
    // <div className="navbar">
    //   <h4>BayzedU.</h4>
    //   <ul className="nav">
    //     <li>
    //       <Link to="/Projects">Projects</Link>
    //     </li>
    //     <li>
    //       <Link to="/Blogs">Blogs</Link>
    //     </li>
    //     <li>
    //       <Link to="/Open-Source">Open Source</Link>
    //     </li>
    //     <li>
    //       <Link to="/About-me">About Me</Link>
    //     </li>
    //     <li>Contact Me</li>
    //   </ul>
    // </div>

    // <NavigationMenu className="flex flex-col">
    //   <NavigationMenuList className="flex flex-row gap-8">
    //     <NavigationMenuItem>
    //       <NavigationMenuLink className="">Home</NavigationMenuLink>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="flex flex-row">
    //         Projects
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <NavigationMenuLink>Content</NavigationMenuLink>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="flex flex-row">
    //         Blogs
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <NavigationMenuLink>Content</NavigationMenuLink>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="flex flex-row">
    //         About Me
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <NavigationMenuLink>Content</NavigationMenuLink>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="flex flex-row">
    //         Home
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <NavigationMenuLink>Contact</NavigationMenuLink>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>

    <Menubar className="gap-16">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Menu;
