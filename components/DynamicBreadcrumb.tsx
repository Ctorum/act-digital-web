"use client";
import { DynamicBreadcrumbProps } from "@/types/dynamicBreadcrumbProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { capitalize } from "@/lib/utils";

export function DynamicBreadcrumb({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: DynamicBreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks ? capitalize(link) : link;
          return (
            <Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}
