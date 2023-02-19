uniform float u_time;
uniform vec2 uv2;

varying vec2 v_texcord_2;


// uniform sampler2D u_diff_base;
uniform sampler2D u_diff1;
uniform sampler2D u_diff_back;
uniform sampler2D u_nor;
uniform sampler2D u_spec;
uniform sampler2D u_mtc_light;
// uniform samplerCube u_cbm;

uniform vec2 u_mouse;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;
varying vec3 v_pos;


// CTRLS
const float MIX_TOP_STRENGHT = .2;
const float LI_PTL_STRENGTH = .8;
const float LI_HEMI_STRENGTH = .8;
const float LI_MTC_STRENGTH = .7;


void main() {
  vec2 n_mouse = vec2(
    u_mouse.x + .5, 
    u_mouse.y + .8
  );

  // float eyes_select = step(v_texcord_2, vec2(0., .5)).g;


  // * textures
  vec4 img = texture2D(u_diff1, v_uv);
  vec4 back = texture2D(u_diff_back, v_uv);
  vec4 nor = texture2D(u_nor, v_uv);
  float spec = texture2D(u_spec, v_uv).r ;

  // img.rgb = mix(
  //   img.rgb, 
  //   back.rgb, 
  //   (1. + u_mouse.y) * MIX_TOP_STRENGHT
  // );



  // * lights
  float base_ptl = dot(normalize(vec3(
    n_mouse.x, 
    n_mouse.y, 
    1.
  )), v_normal * nor.rgb) * .3 -spec  * .1;

  vec3 hlight = mix(
    vec3(.1, .1, .1), 
    vec3(1., 1., 1.), 
    dot(vec3(
      u_mouse.x * .8, 
      u_mouse.y * .5, 
      1.
    ), v_normal * nor.rgb)) * .3 - spec  * .1;

  vec3 x = normalize(vec3(v_view.z + u_mouse.y * .3, 0., -v_view.x + u_mouse.x * .3));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec3 mtc_1 = texture2D(u_mtc_light, fakeUv).rrr * .6;


  img.rgb *= LI_PTL_STRENGTH + base_ptl; 
  img.rgb *= LI_HEMI_STRENGTH + hlight; 
  // img.rgb *= LI_MTC_STRENGTH + mtc_1 ;





  gl_FragColor.rgb = img.rgb;
  // gl_FragColor.rgb = vec3(spec);
  gl_FragColor.a = 1.;
  
} 

