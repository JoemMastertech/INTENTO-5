import DomainError from './DomainError.js';

class ValidationError extends DomainError {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

export default ValidationError;

