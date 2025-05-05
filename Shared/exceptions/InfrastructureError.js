class InfrastructureError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InfrastructureError';
  }
}

export default InfrastructureError;

