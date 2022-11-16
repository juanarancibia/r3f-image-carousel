import { Canvas } from "@react-three/fiber";
import Background from "./Background";
import CameraController from "./camera-controller";
import WallpaperFrame from "./WallpaperFrame";

const IMAGES = [
  "image-1.jpeg",
  "image-2.jpeg",
  "image-4.jpeg",
  "image-3.jpeg",
  "image-5.jpeg",
  "image-6.jpeg",
  "image-7.jpeg",
  "image-8.jpeg",
  "image-10.jpeg",
  "image-11.png",
  "image-9.jpeg",
  "image-12.png",
];

const separation = (Math.PI * 2) / IMAGES.length;

const ThreeJS = () => {
  return (
    <div id="canvas-container" style={{ height: "100vh" }}>
      <Canvas>
        <Background />
        <CameraController />
        <ambientLight color={"0x202020"} intensity={1} />
        {/* <hemisphereLight
          args={["0xffffbb", "0x080820", 1]}
          color={color}
          groundColor={groundColor}
        /> */}
        <pointLight color={"0xffffff"} intensity={1} position={[0, 1, 0]} />
        {/* <gridHelper args={[100, 20]} />

        {/* <BaseGround /> */}

        {IMAGES.map((imgName, index) => {
          return (
            <WallpaperFrame
              key={index}
              image={`/images/${imgName}`}
              position={index * separation}
              radius={IMAGES.length}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default ThreeJS;
