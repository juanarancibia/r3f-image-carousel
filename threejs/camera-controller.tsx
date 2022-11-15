import { Camera, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { PerspectiveCamera, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  (camera as PerspectiveCamera).fov = 50;
  (camera as PerspectiveCamera).zoom = 1.2;

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.target = new Vector3(0, 1, 0);
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;
    controls.rotateSpeed = 0.2;
    controls.enableZoom = true;
    controls.maxDistance = 8;
    controls.enablePan = false;

    controls.update();
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

export default CameraController;
