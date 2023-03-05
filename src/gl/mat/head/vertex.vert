#define MPI 3.1415926535897932384626433832795

#include ../skinned.glsl


// attribute vec2 texcoord_2;
// varying vec2 v_texcord_2;



uniform float u_time;


varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;
varying vec3 v_pos;



void main() {
  include_skinned();

  vec3 worldNormal = normalize(normalMatrix * normal);
  

  
  v_uv = uv;
  v_pos = gl_Position.xyz;

  
  v_normal = worldNormal.rgb;

  // v_view = normalize(-tr.xyz);
  // v_texcord_2 = texcoord_2;
  
}


