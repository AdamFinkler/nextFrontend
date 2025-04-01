import DOMPurify from "dompurify";


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
  const stringAfterRegex = input.replace(/<br>\s*<b>New on[^<]*<\/b>/i, "");
  const sanitized = DOMPurify.sanitize(stringAfterRegex);
  return decodeHtmlEntities(sanitized).trim();
};

export const hasRating = (string: string): boolean => {
  return string.trim().length > 0;
};
