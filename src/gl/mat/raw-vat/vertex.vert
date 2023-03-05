#define MPI 3.1415926535897932384626433832795
// precision mediump float;

attribute vec3 position;
attribute vec2 uv;
attribute vec2 uv2;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float u_time;
varying vec2 v_uv;

// VAT
uniform sampler2D u_normal2;
uniform sampler2D  u_position2;
uniform sampler2D u_tangent2;
uniform float u_progress;

const float texture_width = 81.;
const float scale = 1.;
const float num_frames = 70.;
// const float frame = 10.;


void main() {
  vec3 pos = position;

  float frame = ((u_progress + 1.) * .5) * num_frames;

  float pixel = 1. / texture_width;
  float half_pixel = pixel * .5;
  float frame_width = 1. / num_frames;

  pos = texture2D(u_position2, uv2 + vec2(
    half_pixel, 
    -((frame + .5) * frame_width
  ))).xyz; 

  float new_x = (pos.x * 2.) - 1.;
  float new_y = (pos.z * 2.) - 1.;
  float new_z = ((pos.y * 2.) - 1.) * -1.;

  // vec3 nrm = texture2D(u_normal2, uv2 + vec2(
  //   half_pixel, 
  //   -((frame + .5) * frame_width
  // ))).xyz;

  // float nor_x = (nrm.x * 2.) - 1.;
  // float nor_y = (nrm.z * 2.) - 1.;
  // float nor_z = ((nrm.y * 2.) - 1.) ;

  
  pos = vec3(new_x, new_y, new_z) * scale;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
