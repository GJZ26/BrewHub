export default function Avatar({ src }: { src?: string }) {
  return <img className="w-8 h-8" src={src ?? "avatar-dafault.png"} />;
}
