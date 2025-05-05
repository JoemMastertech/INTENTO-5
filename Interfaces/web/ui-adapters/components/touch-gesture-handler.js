/**
 * TouchGestureHandler - Handles touch gestures for mobile navigation
 */
const TouchGestureHandler = {
  touchStartX: 0,
  touchEndX: 0,
  minSwipeDistance: 100, // Minimum distance required for a swipe to register
  initialContentType: '',
  contentTypes: [],
  appInit: null,
  swipeIndicator: null,
  
  initialize: function(appInitInstance) {
    this.appInit = appInitInstance;
    this.contentTypes = appInitInstance.getContentTypes();
    
    // Add swipe indicators to the DOM
    this.addSwipeIndicators();
    
    // Add event listeners for touch events
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
    document.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
    
    console.log('Touch gesture handler initialized');
  },
  
  addSwipeIndicators: function() {
    // Create left indicator
    const leftIndicator = document.createElement('div');
    leftIndicator.className = 'swipe-indicator left-indicator';
    
    // Create right indicator
    const rightIndicator = document.createElement('div');
    rightIndicator.className = 'swipe-indicator right-indicator';
    
    // Add indicators to the body
    document.body.appendChild(leftIndicator);
    document.body.appendChild(rightIndicator);
  },
  
  handleTouchStart: function(event) {
    // Store the initial touch position
    this.touchStartX = event.touches[0].clientX;
    
    // Get the current content type
    const mainScreen = document.querySelector('.main-content-screen');
    if (mainScreen) {
      this.initialContentType = mainScreen.getAttribute('data-category');
    }
    
    // Check if we should handle this touch (don't handle during welcome sequence)
    const welcomeScreen = document.querySelector('.welcome-screen');
    const logoScreen = document.querySelector('.logo-screen');
    const categoryScreen = document.querySelector('.category-title-screen');
    
    if (welcomeScreen && welcomeScreen.style.display !== 'none' ||
        logoScreen && logoScreen.style.display !== 'none' ||
        categoryScreen && categoryScreen.style.display !== 'none') {
      return;
    }
    
    // Check if touch is on a non-swipeable element
    if (this.isNonSwipeableElement(event.target)) {
      return;
    }
    
    // Show initial feedback
    document.body.setAttribute('data-swiping', 'true');
  },
  
  handleTouchMove: function(event) {
    if (!this.initialContentType || document.body.getAttribute('data-swiping') !== 'true') {
      return;
    }
    
    // Calculate how far we've moved
    const currentX = event.touches[0].clientX;
    const difference = this.touchStartX - currentX;
    
    // Show visual feedback
    if (difference > 20) {
      // Swiping left - show right indicator
      document.querySelector('.right-indicator').style.opacity = '0.5';
      document.querySelector('.left-indicator').style.opacity = '0';
    } else if (difference < -20) {
      // Swiping right - show left indicator
      document.querySelector('.left-indicator').style.opacity = '0.5';
      document.querySelector('.right-indicator').style.opacity = '0';
    } else {
      // Hide both indicators for small movements
      document.querySelector('.left-indicator').style.opacity = '0';
      document.querySelector('.right-indicator').style.opacity = '0';
    }
  },
  
  handleTouchEnd: function(event) {
    if (!this.initialContentType) {
      return;
    }
    
    // Get touch end position
    this.touchEndX = event.changedTouches[0].clientX;
    
    // Calculate swipe distance
    const swipeDistance = this.touchStartX - this.touchEndX;
    
    // Reset visual feedback
    document.body.removeAttribute('data-swiping');
    document.querySelector('.left-indicator').style.opacity = '0';
    document.querySelector('.right-indicator').style.opacity = '0';
    
    // Check if we have a significant swipe
    if (Math.abs(swipeDistance) < this.minSwipeDistance) {
      return;
    }
    
    // Find current index in content types
    const currentIndex = this.contentTypes.indexOf(this.initialContentType);
    if (currentIndex === -1) {
      return;
    }
    
    // Determine new content type based on swipe direction
    let newIndex;
    
    if (swipeDistance > 0) {
      // Swipe Left - Go to next page
      newIndex = currentIndex + 1;
      if (newIndex >= this.contentTypes.length) {
        newIndex = 0; // Wrap around to the start
      }
    } else {
      // Swipe Right - Go to previous page
      newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = this.contentTypes.length - 1; // Wrap around to the end
      }
    }
    
    // Load the new content
    const newContentType = this.contentTypes[newIndex];
    
    // Add transition class to content container for animation
    const contentContainer = document.getElementById('content-container');
    
    if (contentContainer) {
      contentContainer.classList.add(swipeDistance > 0 ? 'slide-left' : 'slide-right');
      
      // After animation completes, remove class and load new content
      setTimeout(() => {
        contentContainer.classList.remove('slide-left', 'slide-right');
        this.appInit.loadContent(newContentType);
        
        // Highlight the corresponding nav button
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(btn => {
          if (btn.getAttribute('data-target') === newContentType) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      }, 300);
    }
  },
  
  isNonSwipeableElement: function(element) {
    // Don't handle swipes on certain elements
    const nonSwipeableSelectors = [
      '.nav-button', 
      '.price-button', 
      'video', 
      'img',
      '.modal',
      '.drink-option',
      '.counter-btn',
      'textarea',
      '#order-sidebar'
    ];
    
    // Check if the element or any of its parents match the selectors
    let currentElement = element;
    while (currentElement) {
      for (const selector of nonSwipeableSelectors) {
        if (currentElement.matches && currentElement.matches(selector)) {
          return true;
        }
      }
      currentElement = currentElement.parentElement;
    }
    
    return false;
  }
};

export default TouchGestureHandler;