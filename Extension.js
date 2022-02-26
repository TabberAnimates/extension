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
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  e() {
    return 'doo doo fart';
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }

}

Scratch.extensions.register(new TestExtension());
