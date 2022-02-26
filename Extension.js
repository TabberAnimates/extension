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
          text: 'Leopard Test [what]',
          arguments: {
            what: {
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
    yield* this.playSoundUntilDone(what);
  }
}

Scratch.extensions.register(new TestExtension());
