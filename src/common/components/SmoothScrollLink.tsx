import { Link as RouterLink, LinkProps } from "react-router-dom";

interface SmoothScrollLinkProps extends LinkProps {
  to: string;
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
}) => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <RouterLink
      to={to}
      onClick={handleScroll}
      style={{ textDecoration: "none" }}>
      {children}
    </RouterLink>
  );
};
