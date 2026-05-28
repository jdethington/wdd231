function setTimestamp() {
    const now = new Date();
    const timestampField = document.getElementById('timestamp');
    timestampField.value = now.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: true
    })
}
setTimestamp();