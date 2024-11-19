const resources = {
  color: "/brewhub-color.png",
  white: "/brewhub-white.png",
};

export function Logo({
  version,
  className,
}: {
  version: "color" | "white";
  className?: string;
}) {
  return <img src={resources[version]} className={className} />;
}
