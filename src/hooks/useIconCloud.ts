import { useEffect, useState } from "react";
import { renderSimpleIcon, fetchSimpleIcons, SimpleIcon } from "react-icon-cloud";

export const useIconCloud = (slugs: Array<{ slug: string; url: string }>) => {
  const [icons, setIcons] = useState<{ simpleIcons: Record<string, SimpleIcon> }>();
  useEffect(() => {
    fetchSimpleIcons({ slugs: slugs.map(s => s.slug) }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map(icon =>
      renderSimpleIcon({
        icon,
        size: 199,
        aProps: {
          target: "_blank",
          rel: "noopener noreferrer",
          href: slugs.find(s => s.slug === icon.slug)?.url,
        },
      })
    );
  }

  return null;
};
