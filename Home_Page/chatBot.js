  var botui = new BotUI('botui-app');
  botui.message.add({
    content: 'Hello! How can I assist you today?'
  }).then(function () {
    return botui.action.text({
      action: {
        placeholder: 'Enter your question...'
      }
    });
  }).then(function (res) {
    botui.message.add({
      content: 'You asked: ' + res.value
    });
  });