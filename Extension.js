class TestExtension {
  
  getInfo() {
    return {
      id: 'testextension',
      name: 'Cool Extension',

      blocks: [
        {
          opcode: 'e',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'e',
          opcode: 'leopard',
          blockType: Scratch.Blocktype.COMMAND,
          text: 'Leopard Test [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value',
            }
          }  
        }
      ]
    };
  }
  e() {
    return 'doo doo fart';
  }
  leopard() {
    yield* this.playSoundUntilDone(ONE);
  }
}

Scratch.extensions.register(new TestExtension());
