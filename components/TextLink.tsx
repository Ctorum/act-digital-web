import Link from "next/link";
import { ComponentProps } from "react";

export function TextLink({
  href,
  children,
  ...props
}: Readonly<
  {
    href: string;
    children: React.ReactNode;
  } & Omit<ComponentProps<typeof Link>, "href">
>) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-primary"
      {...props}
    >
      {children}
    </Link>
  );
}
