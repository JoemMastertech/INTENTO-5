/* @tweakable state transition logging */
const enableLogging = true;

class StateManager {
  constructor() {
    this.state = {};
    this.listeners = [];
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    
    if (enableLogging) {
      console.log('State updated:', newState);
    }
    
    this.notifyListeners();
  }
  
  getState() {
    return this.state;
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
  
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

export default new StateManager();