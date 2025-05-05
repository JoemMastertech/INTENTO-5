import ScreenManager from '../../Interfaces/web/ui-adapters/screens/screen-manager.js';
import ProductRenderer from '../../Interfaces/web/ui-adapters/components/product-table.js';
import TouchGestureHandler from '../../Interfaces/web/ui-adapters/components/touch-gesture-handler.js';

/* @tweakable initial view timing in milliseconds */
const INITIAL_DELAY = 100;

/* @tweakable fade animation settings */
const FADE_CONFIG = {
  duration: 500,
  timing: 'ease-in-out'
};

const AppInit = {
  initialize: function() {
    // Make AppInit globally available first
    window.AppInit = this;
    
    // Start the welcome sequence after a brief delay
    setTimeout(() => {
      this.startWelcomeSequence();
      this.initializeNavigation();
      TouchGestureHandler.initialize(this);
    }, INITIAL_DELAY);
  },
  
  startWelcomeSequence: function() {
    ScreenManager.startWelcomeSequence();
  },
  
  initializeNavigation: function() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    // Set first button as active by default
    const defaultButton = navButtons[0];
    if (defaultButton) {
      defaultButton.classList.add('active');
    }

    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Get target before removing active class
        const target = button.getAttribute('data-target') || 'cocteleria';
        
        // Update button states
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Load content with validated target
        this.loadContent(target);
      });
    });
  },
  
  loadContent: function(contentType = 'cocteleria') {
    const contentContainer = document.getElementById('content-container');
    const pageTitle = document.querySelector('.page-title');
    const mainScreen = document.querySelector('.main-content-screen');
    
    if (!contentContainer || !pageTitle || !mainScreen) {
      console.error('Required DOM elements not found');
      return;
    }

    // Ensure contentType is valid
    contentType = this.validateContentType(contentType);
    
    // Update data-category attribute
    mainScreen.setAttribute('data-category', contentType);
    
    // Update the category title first
    const title = this.getCategoryTitle(contentType);
    pageTitle.textContent = title;

    contentContainer.style.opacity = 0;
    
    setTimeout(() => {
      const success = this.initializeContent(contentType, contentContainer);
      
      if (success) {
        contentContainer.style.opacity = 1;
      }
    }, 50);
  },
  
  validateContentType: function(contentType) {
    const validTypes = [
      'cocteleria', 'refrescos', 'licores', 'cervezas', 
      'pizzas', 'alitas', 'sopas', 'ensaladas', 
      'carnes', 'cafe', 'postres'
    ];
    
    return validTypes.includes(contentType) ? contentType : 'cocteleria';
  },
  
  getContentTypes: function() {
    return [
      'cocteleria', 'refrescos', 'licores', 'cervezas', 
      'pizzas', 'alitas', 'sopas', 'ensaladas', 
      'carnes', 'cafe', 'postres'
    ];
  },
  
  getCategoryTitle: function(contentType) {
    // Ensure contentType is not null/undefined
    if (!contentType) {
      return 'Coctelería';
    }
    
    // Map content type to display title
    const titles = {
      'cocteleria': 'Coctelería',
      'refrescos': 'Refrescos',
      'licores': 'Licores',
      'cervezas': 'Cervezas',
      'pizzas': 'Pizzas',
      'alitas': 'Alitas',
      'sopas': 'Sopas',
      'ensaladas': 'Ensaladas',
      'carnes': 'Carnes',
      'cafe': 'Café',
      'postres': 'Postres'
    };
    
    return titles[contentType] || contentType.charAt(0).toUpperCase() + contentType.slice(1);
  },

  initializeContent: function(contentType, container) {
    if (!container) return false;
    
    container.innerHTML = '';
    
    try {
      switch(contentType) {
        case 'cocteleria':
          ProductRenderer.renderCocktails(container);
          break;
        case 'refrescos':
          ProductRenderer.renderRefrescos(container);
          break;
        case 'licores':
          ProductRenderer.renderLicores(container);
          break;
        case 'cervezas':
          ProductRenderer.renderCervezas(container);
          break;
        case 'pizzas':
          ProductRenderer.renderPizzas(container);
          break;
        case 'alitas':
          ProductRenderer.renderAlitas(container);
          break;
        case 'sopas':
          ProductRenderer.renderSopas(container);
          break;
        case 'ensaladas':
          ProductRenderer.renderEnsaladas(container);
          break;
        case 'carnes':
          ProductRenderer.renderCarnes(container);
          break;
        case 'cafe':
          ProductRenderer.renderCafe(container);
          break;
        case 'postres':
          ProductRenderer.renderPostres(container);
          break;
        default:
          console.warn(`Contenido no disponible para: ${contentType}`);
          container.innerHTML = '<p>Contenido no disponible</p>';
          return false;
      }
      return true;
    } catch (err) {
      console.error('Error loading content:', err);
      container.innerHTML = '<p>Error cargando contenido</p>';
      return false;
    }
  }
};

export default AppInit;