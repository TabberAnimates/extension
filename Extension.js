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
          blockType: BlockType.COMMAND,
          text: 'Leopard Lol [ONE]',
          arguments: {
            ONE: {
              type: ArgumentType.STRING,
              defaultValue: 'what'
            }
          }
        }
      ]
    }
  }
  e() {
    return 'doo doo fart';
  },
  leopard(args) { 
    this.playSoundUntilDone(args.ONE); 
  }
}

Scratch.extensions.register(new TestExtension());
