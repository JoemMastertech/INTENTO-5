/* @tweakable caching time in milliseconds */
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

class LoadCocktailsUseCase {
  constructor(cocktailRepository) {
    this.cocktailRepository = cocktailRepository;
    this.cachedData = null;
    this.lastFetch = null;
  }
  
  async execute() {
    // Check if we have cached data that's still fresh
    if (this.cachedData && this.lastFetch && (Date.now() - this.lastFetch) < CACHE_TIME) {
      return this.cachedData;
    }
    
    // Fetch fresh data
    const cocktails = await this.cocktailRepository.getAllCocktails();
    
    // Update cache
    this.cachedData = cocktails;
    this.lastFetch = Date.now();
    
    return cocktails;
  }
}

export default LoadCocktailsUseCase;