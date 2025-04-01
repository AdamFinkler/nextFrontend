import { PAGINATION_SELECTORS, MOVIES_PER_PAGE } from "../../consts/consts";

export const getVisiblePages = (currentPageOneBased: number, totalPages: number) => {
    const maxWindowSize = totalPages < PAGINATION_SELECTORS ? totalPages : PAGINATION_SELECTORS;
    
    let start = currentPageOneBased - Math.floor(maxWindowSize / 2);
    if (start < 1) {
      start = 1;
    }
    if (start + maxWindowSize - 1 > totalPages) {
      start = totalPages - maxWindowSize + 1;
    }
    
    const visiblePages = [];
    for (let i = 0; i < maxWindowSize; i++) {
      visiblePages.push(start + i);
    }
    
    return visiblePages;
  };


  export const getNumOfPages = (amountOfMovies: number) => {
    if (!amountOfMovies) return 0;
    return Math.floor(
      amountOfMovies / MOVIES_PER_PAGE +
        (amountOfMovies % MOVIES_PER_PAGE ? 1 : 0)
    );
  };
  
