class ResourceFactory {
  createResource() {
    throw new Error("createResource() must be implemented by subclass");
  }
}

export default ResourceFactory;
