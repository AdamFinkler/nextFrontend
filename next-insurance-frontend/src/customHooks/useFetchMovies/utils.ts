import DOMPurify from "dompurify";
import { IMovie } from "../../store/types";
export const decodeHtmlEntities = (input: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "text/html");
  return doc.documentElement.textContent || "";
};

export const cleanString = (input: string): string => {
  const sanitized = DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
  return decodeHtmlEntities(sanitized).trim();
};

export const cleanSynopsis = (input: string): string => {
  const stringAfterRegex = input.replace(/<br><b>.*?<\/b>/, "");
  const sanitized = DOMPurify.sanitize(stringAfterRegex);
  return decodeHtmlEntities(sanitized).trim();
};



export const cleanMovies = (movieArr: IMovie[]): IMovie[] => {
return movieArr.map((movie)=>({
  ...movie,
  title: cleanString(movie.title),
  synopsis: cleanSynopsis(movie.synopsis),
}))
}
