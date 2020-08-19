const path = require('path')
module.exports = class TestCase {
    getTestSource(methodName, classFile, isClass = false) {
        console.log('getTestSource', methodName)
        return `test('TEST ${methodName}',()=>{
            const ${isClass ? '{' + methodName + '}' : methodName} = require('../${classFile}')
            const ret = ${methodName}()
            expect(ret).toBe('test return')
        })`
    }
}