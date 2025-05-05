/* @tweakable animation durations in milliseconds */
const WELCOME_DURATION = 3000;  // How long to show welcome screen
const LOGO_DURATION = 3000;     // How long to show logo screen  
const CATEGORY_DURATION = 2000; // How long to show category screen
const FADE_DURATION = 1000;     // Fade transition duration

const ScreenManager = {
  startWelcomeSequence: async function() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const logoScreen = document.querySelector('.logo-screen');
    const categoryTitleScreen = document.querySelector('.category-title-screen');
    const mainContentScreen = document.querySelector('.main-content-screen');
    
    // Show welcome screen
    setTimeout(() => {
      welcomeScreen.classList.add('fade-out');
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        logoScreen.style.display = 'flex';
        logoScreen.classList.add('fade-in');
        
        // Show logo and title
        setTimeout(() => {
          logoScreen.classList.add('fade-out');
          setTimeout(() => {
            logoScreen.style.display = 'none';
            categoryTitleScreen.style.display = 'flex';
            categoryTitleScreen.classList.add('fade-in');
            
            // Show category title
            setTimeout(() => {
              categoryTitleScreen.classList.add('fade-out');
              setTimeout(() => {
                categoryTitleScreen.style.display = 'none';
                mainContentScreen.style.display = 'flex';
                mainContentScreen.classList.add('fade-in');
                
                // Load initial content
                const AppInit = window.AppInit;
                if (AppInit) {
                  setTimeout(() => {
                    AppInit.loadContent('cocteleria');
                  }, 100);
                }
                
              }, FADE_DURATION);
            }, CATEGORY_DURATION);
          }, FADE_DURATION);
        }, LOGO_DURATION);
      }, FADE_DURATION);
    }, WELCOME_DURATION);
  }
};

export default ScreenManager;