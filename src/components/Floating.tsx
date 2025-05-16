import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  
  IconBrandWhatsapp,
  IconNewSection,
  IconMail,
  IconPhoneCalling
} from "@tabler/icons-react";

export function FloatingButtons() {
  const links = [
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-rose-800 " />
      ),
      href: "https://wa.link/a3sxqb",
    },

    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-rose-800 " />
      ),
      href: "tel:082083 05832",
    },
    {
      title: "Support",
      icon: (
        <IconPhoneCalling className="h-full w-full text-rose-800 " />
      ),
      href: "tel:082083 05832",
    }
  ];
  return (
    <div className="z-50 fixed bottom-4 right-4 items-center ">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
