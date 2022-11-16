import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Background = () => {
  const { scene } = useThree();

  const imageTexture = useTexture("background/trianglify-sm.png");

  scene.background = imageTexture;

  return null;
};

export default Background;
