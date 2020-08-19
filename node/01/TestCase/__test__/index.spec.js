test('测试函数代码生成', () => {
    const src = new (require('../index'))()
    const ret = src.getTestSource('fun', 'class')
    console.log('ret', ret)
    expect(ret).toBe(`test('TEST fun',()=>{
            const fun = require('../class')
            const ret = fun()
            expect(ret).toBe('test return')
        })`)
})