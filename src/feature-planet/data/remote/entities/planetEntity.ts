export interface PlanetEntity {
  id: string;
  name: string;
  tagline: string;
  tagline_icon: string;
  picture: string;
  textureUrl: string;
  description: string;
  distanceFromSun: string;
  yearLength: string;
  numberOfMoons: number;
  namesake: string;
  rings: {
    url_exists: boolean;
    url?: string;
  };
  spaceTexture_url: string;
  mass: string;
}
