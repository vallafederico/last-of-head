  /* Hemispehere Light */
  vec3 hemi_light(vec3 light_direction, vec3 light_normal) {
    vec3 h_sky = vec3(1., 1., 1.);
    vec3 h_ground = vec3(.1, .1, .1);
    return mix(h_ground, h_sky, 1. - dot(normalize(light_direction), light_normal));
  }


  /* Point Light */
  float pt_light(vec3 light_direction, vec3 light_normal) {
    return abs(dot(normalize(light_direction), light_normal));
  } 
