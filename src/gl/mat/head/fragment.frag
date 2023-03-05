uniform float u_time;

// uniform sampler2D u_mtc_light;
// uniform samplerCube u_cbm;

uniform sampler2D u_diff1;
// uniform sampler2D u_diff_back;
// uniform sampler2D u_spec;


uniform vec2 u_mouse;

varying vec2 v_uv;
varying vec3 v_normal;
// varying vec3 v_view;
// varying vec3 v_pos;

#include ../lights.glsl

void main() {


  vec3 diff = texture2D(u_diff1, v_uv).rgb;

  // vec3 hlight = hemi_light(vec3(1., 0., 1.), v_normal);
  // float plight = pt_light(vec3(u_mouse.x, -1., 0.), v_normal);


  

  gl_FragColor.rgb = vec3(diff);
  gl_FragColor.a = 1.;
  
} 