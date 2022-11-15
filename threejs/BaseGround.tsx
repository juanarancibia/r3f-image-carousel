import { DoubleSide } from "three";

const BaseGround = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeBufferGeometry args={[105, 105]} />
      <meshLambertMaterial color={"(0.1, 1, 0.75)"} side={DoubleSide} />
    </mesh>
  );
};

export default BaseGround;
