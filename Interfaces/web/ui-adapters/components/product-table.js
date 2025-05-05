import ProductData from '../../../../Infraestructura/data-providers/product-data.js';

const ProductRenderer = {
  createProductTable: function(container, headers, data, fields, tableClass) {
    const table = document.createElement('table');
    table.className = tableClass;
    table.style.width = tableClass === 'product-table' ? 'var(--table-width)' : 'var(--table-width)';
    table.style.maxWidth = tableClass === 'product-table' ? 'var(--table-max-width)' : 'var(--table-max-width)';
    
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    data.forEach(item => {
      const row = document.createElement('tr');
      
      fields.forEach(field => {
        const td = document.createElement('td');
        
        if (field === 'nombre') {
          td.className = 'product-name';
          td.textContent = item[field];
        } else if (field === 'ingredientes') {
          td.className = 'product-ingredients';
          td.textContent = item[field] || '';
        } else if (field.includes('precio') || field === 'precioBotella' || field === 'precioLitro' || field === 'precioCopa') {
          td.className = 'product-price';
          const priceButton = document.createElement('button');
          priceButton.className = 'price-button';
          priceButton.textContent = item[field] || '--';
          priceButton.dataset.productName = item.nombre;
          priceButton.dataset.priceType = field;
          td.appendChild(priceButton);
        } else if (field === 'video') {
          td.className = 'video-icon';
          if (item[field]) {
            const iconContainer = document.createElement('span');
            iconContainer.innerHTML = '▶️';
            iconContainer.style.cursor = 'pointer';
            iconContainer.dataset.videoUrl = item[field];
            iconContainer.addEventListener('click', () => this.showVideoModal(item[field], item.nombre));
            td.appendChild(iconContainer);
          } else {
            td.textContent = '--';
          }
        } else if (field === 'imagen' || field === 'ruta_archivo') {
          td.className = 'image-icon';
          if (item[field]) {
            const img = document.createElement('img');
            img.src = item[field];
            img.alt = item.nombre;
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.objectFit = 'contain';
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => this.showImageModal(item[field], item.nombre));
            td.appendChild(img);
          } else {
            td.textContent = '--';
          }
        } else {
          td.textContent = item[field] || '';
        }
        
        row.appendChild(td);
      });
      
      tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
  },

  showVideoModal: function(videoUrl, title) {
    // Create modal backdrop
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop';
    modalBackdrop.style.position = 'fixed';
    modalBackdrop.style.top = '0';
    modalBackdrop.style.left = '0';
    modalBackdrop.style.width = '100%';
    modalBackdrop.style.height = '100%';
    modalBackdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modalBackdrop.style.display = 'flex';
    modalBackdrop.style.justifyContent = 'center';
    modalBackdrop.style.alignItems = 'center';
    modalBackdrop.style.zIndex = '9999';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.position = 'relative';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '800px';
    modalContent.style.padding = '20px';
    modalContent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modalContent.style.borderRadius = '10px';
    modalContent.style.boxShadow = '0 0 20px var(--primary-light)';
    
    // Add title
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;
    modalTitle.style.color = 'var(--primary-color)';
    modalTitle.style.marginBottom = '15px';
    modalTitle.style.textAlign = 'center';
    modalContent.appendChild(modalTitle);
    
    // Add video
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.autoplay = true;
    video.style.width = '100%';
    video.style.borderRadius = '5px';
    modalContent.appendChild(video);
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.className = 'nav-button';
    closeButton.style.marginTop = '15px';
    closeButton.style.padding = '8px 15px';
    closeButton.style.display = 'block';
    closeButton.style.margin = '15px auto 0';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modalBackdrop);
    });
    modalContent.appendChild(closeButton);
    
    // Add modal to body
    modalBackdrop.appendChild(modalContent);
    document.body.appendChild(modalBackdrop);
    
    // Close modal on backdrop click
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        document.body.removeChild(modalBackdrop);
      }
    });
  },

  showImageModal: function(imageUrl, title) {
    // Create modal backdrop
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop';
    modalBackdrop.style.position = 'fixed';
    modalBackdrop.style.top = '0';
    modalBackdrop.style.left = '0';
    modalBackdrop.style.width = '100%';
    modalBackdrop.style.height = '100%';
    modalBackdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modalBackdrop.style.display = 'flex';
    modalBackdrop.style.justifyContent = 'center';
    modalBackdrop.style.alignItems = 'center';
    modalBackdrop.style.zIndex = '9999';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.position = 'relative';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '600px';
    modalContent.style.padding = '20px';
    modalContent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modalContent.style.borderRadius = '10px';
    modalContent.style.boxShadow = '0 0 20px var(--primary-light)';
    
    // Add title
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;
    modalTitle.style.color = 'var(--primary-color)';
    modalTitle.style.marginBottom = '15px';
    modalTitle.style.textAlign = 'center';
    modalContent.appendChild(modalTitle);
    
    // Add image
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = title;
    image.style.width = '100%';
    image.style.borderRadius = '5px';
    image.style.objectFit = 'contain';
    modalContent.appendChild(image);
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.className = 'nav-button';
    closeButton.style.marginTop = '15px';
    closeButton.style.padding = '8px 15px';
    closeButton.style.display = 'block';
    closeButton.style.margin = '15px auto 0';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modalBackdrop);
    });
    modalContent.appendChild(closeButton);
    
    // Add modal to body
    modalBackdrop.appendChild(modalContent);
    document.body.appendChild(modalBackdrop);
    
    // Close modal on backdrop click
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        document.body.removeChild(modalBackdrop);
      }
    });
  },

  renderCocktails: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.cocteles, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderRefrescos: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO'], 
      ProductData.refrescos, 
      ['nombre', 'ruta_archivo', 'precio'],
      'product-table'
    );
  },

  renderLicores: function(container) {
    const licoresHTML = `
      <div class="subcategory-prompt">
        <h3>Elige una categoría</h3>
      </div>
      <div class="category-grid">
        ${this.createLicoresCategories()}
      </div>
    `;
    container.innerHTML = licoresHTML;
    
    // Add click handlers for licores categories
    const categoryCards = container.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const category = card.getAttribute('data-category');
        this.renderLicorSubcategory(container, category);
      });
    });
  },

  createLicoresCategories: function() {
    return ProductData.licoresCategories.map(category => `
      <div class="category-card" data-category="${category.nombre.toLowerCase()}">
        <img src="${category.icono}" alt="${category.nombre}" class="category-image">
        <h3 class="category-name">${category.nombre}</h3>
      </div>
    `).join('');
  },

  renderLicorSubcategory: function(container, category) {
    container.innerHTML = '';
    
    // Back button
    const backButton = document.createElement('button');
    backButton.className = 'nav-button';
    backButton.textContent = 'Volver a Licores';
    backButton.style.marginBottom = '20px';
    backButton.addEventListener('click', () => this.renderLicores(container));
    container.appendChild(backButton);
    
    // Update the page title
    document.querySelector('.page-title').textContent = category.toUpperCase();
    
    // Load specific subcategory
    switch(category) {
      case 'whisky':
        this.renderWhisky(container);
        break;
      case 'tequila':
        this.renderTequila(container);
        break;
      case 'ron':
        this.renderRon(container);
        break;
      case 'vodka':
        this.renderVodka(container);
        break;
      case 'brandy':
        this.renderBrandy(container);
        break;
      case 'ginebra':
        this.renderGinebra(container);
        break;
      case 'mezcal':
        this.renderMezcal(container);
        break;
      case 'cognac':
        this.renderCognac(container);
        break;
      case 'digestivos':
        this.renderDigestivos(container);
        break;
      case 'espumosos':
        this.renderEspumosos(container);
        break;
      default:
        container.innerHTML += '<p>Categoría no disponible</p>';
    }
  },

  renderWhisky: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.whiskies, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderTequila: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.tequilas, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderRon: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.rones, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderBrandy: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.brandies, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderVodka: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.vodkas, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderGinebra: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.ginebras, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderMezcal: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.mezcales, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderCognac: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO LITRO', 'PRECIO COPA'], 
      ProductData.cognacs, 
      ['nombre', 'imagen', 'precioBotella', 'precioLitro', 'precioCopa'],
      'liquor-table'
    );
  },

  renderDigestivos: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA', 'PRECIO COPA'], 
      ProductData.digestivos, 
      ['nombre', 'imagen', 'precioBotella', 'precioCopa'],
      'liquor-table'
    );
  },

  renderEspumosos: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO BOTELLA'], 
      ProductData.espumosos, 
      ['nombre', 'imagen', 'precioBotella'],
      'liquor-table'
    );
  },

  renderCervezas: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'IMAGEN', 'PRECIO'], 
      ProductData.cervezas, 
      ['nombre', 'ruta_archivo', 'precio'],
      'product-table'
    );
  },

  renderPizzas: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.pizzas, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderAlitas: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.alitas, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderSopas: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.sopas, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderEnsaladas: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.ensaladas, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderCarnes: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.carnes, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderCafe: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.cafes, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  },

  renderPostres: function(container) {
    this.createProductTable(container, 
      ['NOMBRE', 'INGREDIENTES', 'VIDEO', 'PRECIO'], 
      ProductData.postres, 
      ['nombre', 'ingredientes', 'video', 'precio'],
      'product-table'
    );
  }
};

export default ProductRenderer;