class DomainError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DomainError';
  }
}

export default DomainError;

