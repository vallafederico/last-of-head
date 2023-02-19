#define MPI 3.1415926535897932384626433832795

attribute vec2 texcoord_2;
varying vec2 v_texcord_2;

#include <skinning_pars_vertex>

uniform float u_time;
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;
varying vec3 v_pos;


void main() {
   #include <skinbase_vertex>
  
  vec3 pos = position;
  vec4 tr = modelViewMatrix * vec4(pos, 1.0);
  
  
  #include <begin_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>

  
  
  v_uv = uv;
  v_normal = normal;
  v_view = normalize(-tr.xyz);
  v_pos = gl_Position.xyz;

  v_texcord_2 = texcoord_2;
  
}
