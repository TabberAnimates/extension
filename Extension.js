class TestExtension {
  
  getInfo() {
    return {
      id: 'testextension',
      name: 'Cool Extension',

      blocks: [
        {
          opcode: 'e',
          blockType: Scratch.BlockType.COMMAND,
          text: 'e'
        }
      ]
    };
  }
  e() {
    return 'doo doo fart';
  }
}

Scratch.extensions.register(new TestExtension());
