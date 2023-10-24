module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": 'module',
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "strict": ["error", "global"], // Enforce strict mode
    "max-len": ["error", { "code": 100 }], // Set max line length
    "quotes": ["error", "single"], // Use single quotes
    "semi": ["error", "always"], // Enforce semicolons
    "space-before-function-paren": ["error", "always"], // Enforce space before function parentheses
    "no-unused-vars": "error", // Check for unused variables
    "no-unused-imports": "error", // Check for unused imports
    "indent": ["error", 2], // Enforce 2-space indentation
    "no-console": ["error", { "allow": ["warn", "error"] }], // Prevent console.log in production
    "complexity": ["error", 10], // Limit function complexity
    "newline-before-return": "error", // Enforce newline before return statements
    "object-curly-newline": ["error", { "consistent": true }], // Enforce consistent object literal formatting
    "camelcase": ["error", { "properties": "always" }],
    // CamelCase for variable names
    "camelcase": ["error", { "properties": "always" }],
    // Descriptive variable and function names
    "id-length": ["error", { "min": 2, "properties": "always", "exceptions": ["i", "j", "k"] }],
    // Consistent naming conventions
    "id-match": ["error", "^[a-zA-Z][a-zA-Z0-9]+)*$", { "properties": true }],
    // Prefixes for boolean variables (e.g., is, has, can)
    "id-match": ["error", "^(is|has|can)[A-Z][a-zA-Z]*", { "properties": true }],
    'my-eslint-plugin/no-static-values': 'error'
    }
}
