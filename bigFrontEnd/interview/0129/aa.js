handleWebsocketData(data){
    const savedMsg = JSON.parse(localStorage.getItem('websocketMsg')) || []
    const savedIds = savedMsg.map(n => n.Id)
    const newData = JSON.parse(data)
    // const findDouble = this.notification.find(n => n.Id === newData.Id)
    // 判断msg 是否重复，不重复，则加入通知中心
    if(!savedIds.includes(newData.Id)){
        this.notification.unshift(newData)
        this.updateUnReadLen()
        localStorage.setItem('websocketMsg', JSON.stringify(this.notification))
    } else {
        const index = savedIds.indexOf(newData.Id)
        this.$delete(this.notification, index)
        localStorage.setItem('websocketMsg', JSON.stringify(this.notification))
    }
}
mounted() {
    this.notification = JSON.parse(localStorage.getItem('websocketMsg')) || []
    this.updateUnReadLen()
    document.addEventListener('click', this.documentListener, false);
}
