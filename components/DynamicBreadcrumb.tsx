"use client";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { TextLink } from "./TextLink";
import { portugueseNavigation } from "@/lib/constants";

export function DynamicBreadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div className="container mx-auto px-4 py-3 text-sm">
      <TextLink href="/">{portugueseNavigation.home}</TextLink>
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathNames.length - 1;
        const translatedLink =
          portugueseNavigation[link as keyof typeof portugueseNavigation] ||
          link;
        return (
          <Fragment key={index}>
            <span className="mx-2 text-muted-foreground">/</span>
            {isLast ? (
              <span>{translatedLink}</span>
            ) : (
              <TextLink href={href}>{translatedLink}</TextLink>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
