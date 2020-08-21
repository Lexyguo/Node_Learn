const fakekoa = {
  info: { name: 'fake', desc: 'fake koa' },
  get name() {
    return this.info.name
  },
  set name(val) {
    console.log('new name is ' + val)
    this.info.name = val + 'hahaha'
  }
}

console.log('name :>> ', fakekoa.name);
fakekoa.name = 'lexy';
console.log('name :>> ', fakekoa.name);