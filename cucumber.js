module.exports = {
    default: [`--format-options '{"snippetInterface": "synchronous"}'`,
        '--require ./build/**/**/step_definitions/*.js'
    ].join(' ')
}