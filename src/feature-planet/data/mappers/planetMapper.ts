import { PlanetModel } from "../models/planetModel";
import { PlanetEntity } from "../remote/entities/planetEntity";

export const planetMapper = (planets: PlanetEntity[]): PlanetModel[] => {
  return planets.map((planet) => ({
    id: planet.id,
    name: planet.name,
    tagline: planet.tagline,
    tagline_icon: planet.tagline_icon,
    picture: planet.picture,
    textureUrl: planet.textureUrl,
    description: planet.description,
    distanceFromSun: planet.distanceFromSun,
    yearLength: planet.yearLength,
    numberOfMoons: planet.numberOfMoons,
    namesake: planet.namesake,
    rings: planet.rings,
    spaceTexture_url: planet.spaceTexture_url,
    mass: planet.mass,
  }));
};
