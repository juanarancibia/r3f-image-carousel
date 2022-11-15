import { useTexture } from "@react-three/drei";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
} from "three";

const WallpaperFrame = (props: {
  image: string;
  position: number;
  radius: number;
}) => {
  const imageTexture = useTexture(props.image);
  const geometry = new BoxGeometry(3.5, 6.2, 0.001);
  const material = new MeshLambertMaterial();
  material.map = imageTexture;

  const mesh = new Mesh(geometry, material);
  mesh.position.setFromCylindricalCoords(props.radius * 0.7, props.position, 1);
  mesh.lookAt(0, 1, 0);

  return <primitive object={mesh} />;
};

export default WallpaperFrame;
