export const particleVertexShader = `
attribute float aScale;
attribute vec3 aColor;

varying vec3 vColor;

void main() {
  vColor = aColor;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aScale * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`

export const particleFragmentShader = `
varying vec3 vColor;

void main() {
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 10.0);

  vec3 color = mix(vec3(0.0), vColor, strength);
  gl_FragColor = vec4(color, 1.0);
}
`
