import DOMPurify from 'dompurify';

export const cleanString = (string: string) => {
    return DOMPurify.sanitize(string, { ALLOWED_TAGS: [] }); 
  };


  export const cleanSynopsis = (string: string): string => {

    const sanitized = DOMPurify.sanitize(string);
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitized, 'text/html');
  
    let result = '';
    doc.body.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        result += node.textContent;
      }
    });
    
    return cleanString(result).trim();
  };


 export const hasRating = (string: string):boolean  =>  {
    return string.trim().length > 0
  }