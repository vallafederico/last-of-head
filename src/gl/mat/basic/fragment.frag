uniform float u_time;


// uniform sampler2D u_diff_base;
uniform sampler2D u_diff1;
uniform sampler2D u_diff_back;
uniform sampler2D u_nor;
uniform sampler2D u_spec;
uniform sampler2D u_mtc_light;
uniform samplerCube u_cbm;

uniform vec2 u_mouse;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;
varying vec3 v_pos;




void main() {
  vec2 n_mouse = vec2(
    u_mouse.x + .5, 
    u_mouse.y + .8
  );


  // textures
  vec4 img = texture2D(u_diff1, v_uv);
  vec4 nor = texture2D(u_nor, v_uv);
  float spec = texture2D(u_spec, v_uv).r;

  // cubemap
  vec3 I = normalize(v_pos - vec3( u_mouse.x, u_mouse.y, 2.));
  vec3 R = reflect(I, normalize(v_normal));
  vec3 cubemap = vec4(texture2D(u_cbm, R).rgb, 1.0).rrr;

  img.rgb = mix(img.rgb, cubemap *  spec, spec * .03);

  
  // * lights
  float base_ptl = dot(normalize(vec3(
    n_mouse.x, 
    n_mouse.y, 
    1.
  )), v_normal * nor.rgb) * .3 + spec  * .2;

  img.rgb *= .6 + base_ptl; 

  vec3 hlight = mix(
    vec3(.1, .1, .1), 
    vec3(1., 1., 1.), 
    dot(vec3(
      u_mouse.x * .8, 
      u_mouse.y * .5, 
      1.
    ), v_normal * nor.rgb)) * .3 + spec  * .2;

  img.rgb *= 1. + (hlight); 



  gl_FragColor.rgb = img.rgb;
  // gl_FragColor.rgb = vec3(cubemap).rgb;
  gl_FragColor.a = 1.;
  
} 

