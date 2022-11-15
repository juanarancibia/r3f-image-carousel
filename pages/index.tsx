import dynamic from "next/dynamic";

const ThreeJS = dynamic(() => import("../threejs/ThreeJS"), { ssr: false });

export default function Home() {
  return (
    <div>
      <ThreeJS />
    </div>
  );
}
