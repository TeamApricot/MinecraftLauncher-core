class CustomModule {
  
  constructor(mclcInstance) {
    this._mclcInstance = mlclInstance
    this.name = 'CustomModule'
    this._options = null
  }

  register (options) {
    this._mclcInstance.emit('debug', `[MCLC/${this.getName()}]: Custom Module registered`);
    this._options = options
  }

  async download (handler) {
    this._mclcInstance.emit('debug', `[MCLC/${this.getName()}]: Downloading custom file... ;)`);
  }



  getName() {
    return this.name
  }
}

module.exports = CustomModule