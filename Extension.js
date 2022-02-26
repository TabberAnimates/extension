class TestExtension {
  
  getInfo() {
    return {
      id: 'testextension',
      name: 'Cool Extension',

      blocks: [
        {
          opcode: 'e',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'e'
        },
        { 
          opcode: 'leopard', 
          text: 'Leopard Lol [KEY]', 
          blockType: BlockType.COMMAND, 
          arguments: { 
            KEY: { 
              type: ArgumentType.STRING,
              defaultValue: 'what' } } };
      ]
    }
  }
  e() {
    return 'doo doo fart';
  },
  leopard(args) { 
    this.playSoundUntilDone([args.KEY]); 
  }
}

Scratch.extensions.register(new TestExtension());
