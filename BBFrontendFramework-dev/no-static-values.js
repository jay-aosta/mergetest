module.exports = {
    create: function(context) {
      return {
        VariableDeclarator: function(node) {
          // Check if the variable declaration's init value is a static value
          if (node.init && node.init.type === 'Literal') {
            // Report an error if a static value is used
            context.report({
              node: node,
              message: 'Avoid using static values directly in variable declarations.'
            });
          }
        }
      };
    }
  };
  