import Image from "next/image";

type LogoProps = {
  className?: string;
  symbolOnly?: boolean;
};

export default function Logo({ className = "", symbolOnly = false }: LogoProps) {
  return (
    <Image
      src={symbolOnly ? "/images/yoo-school-symbol.svg" : "/images/yoo-school-logo.svg"}
      alt="YOO SCHOOL"
      width={symbolOnly ? 170 : 760}
      height={170}
      className={className}
      priority
    />
  );
}
