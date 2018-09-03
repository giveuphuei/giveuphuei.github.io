/**
 * @authors Hu Yan
 * @date    2018-05-14 16:41:36
 * @version $1.0$
 */
function hasClass( elements,cName ){
  return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
};
function addClass( elements,cName ){
  if( !hasClass( elements,cName ) ){
    elements.className += " " + cName;
  };
};
function removeClass( elements,cName ){
  if( hasClass( elements,cName ) ){
    elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
  };
};

// 弹框类型一： 轻提示
var Toast = {
  // 隐藏的 setTimeOut 引用
  hideTimeOut: null,
  /**
   * 初始化
   */
  init: function () {
    var toastNode = document.createElement('section');
    toastNode.innerHTML = '<span id="toast-block" style="min-width: 200px; max-width: 500px; max-height: 50vh; padding: 20px;margin-left:50%; position:absolute; top:50%;transform:translate(-50%,-50%);border-radius: 4px; background: rgba(0,0,0,0.5);"><i class="icon iconfont icon-success"></i><i class="icon iconfont icon-error"></i><span class="text" style="color: #FFF; font-size: 16px;"></span></span>';
    toastNode.id = 'toastWaka'; // 设置id，一个页面有且仅有一个Toast
    toastNode.setAttribute('class', 'toast');   // 设置类名
    toastNode.style.display = 'none';
    toastNode.style.zIndex = '999';
    toastNode.style.position = 'fixed';
    toastNode.style.width = '100%';
    toastNode.style.top = '0';
    toastNode.style.left = '0';
    toastNode.style.bottom = '0';
    toastNode.style.right = '0';
    toastNode.style.overflow = 'hidden';
    toastNode.style.background = 'rgba(0,0,0,0)';
    document.body.appendChild(toastNode);
  },
  /**
   * 显示Toast
   * @param text 文本内容
   * @param type 类型 success error
   * @param duration 持续时间
   */
  show: function (text, type, duration) {
    // 确保上一次的 TimeOut 已被清空
    if (this.hideTimeOut) {
      clearTimeout(this.hideTimeOut);
      this.hideTimeOut = null;
      // console.error('上一次的 TimeOut 还未走完!');
      // return;
    }
    if (!text) {
      console.error('text 不能为空!');
      return;
    }
    var domToastWaka = document.getElementById('toastWaka');
    // console.log('domToastWaka', domToastWaka);
    if (!domToastWaka) {
      // console.error('toastWaka DOM 不存在!');
      return;
    }
    var domIconSuccess = domToastWaka.querySelector('.icon-success');   // 成功图标
    var domIconError = domToastWaka.querySelector('.icon-error');   // 错误图标
    var domToastText = domToastWaka.querySelector('.text');   // 文字
    domToastText.innerHTML = text || '';
    switch (type) {
      case 'success':
        domIconSuccess.style.display = 'inline';
        domIconError.style.display = 'none';
        break;
      case 'error':
        domIconSuccess.style.display = 'none';
        domIconError.style.display = 'inline';
        break;
      default:
        domIconSuccess.style.display = 'none';
        domIconError.style.display = 'none';
        break;
    }
    domToastWaka.style.display = 'block';
    // 不传的话默认2s
    var that = this;
    this.hideTimeOut = setTimeout(function () {
      domToastWaka.style.display = 'none';
      that.hideTimeOut = null;    // 置 TimeOut 引用为空
    }, duration || 2000);
  },
  /**
   * 隐藏 Toast
   */
  hide: function () {
    // 如果 TimeOut 存在
    if (this.hideTimeOut) {
      // 清空 TimeOut 引用
      clearTimeout(this.hideTimeOut);
      this.hideTimeOut = null;
    }
    var domToastWaka = document.getElementById('toastWaka');
    if (domToastWaka) {
      domToastWaka.style.display = 'none';
      $jq(domToastWaka).addClass('xwt-default-toast-bg')
      $jq('#toast-block').addClass('xwt-default-toast-text')
    }
  }
};


// 弹框类型二： 重提示，有一个按钮
var Alert = {

  // 初始化提示框
  init: function () {
    var alertContainer = document.createElement('section')
    alertContainer.innerHTML = '<div class="alert_dialog_content" style="width: 80%; max-width: 400px; max-height: 50vh; position:absolute;left:50%; top:50%;transform:translate(-50%,-50%);border-radius: 4px; background: #FFF;overflow:hidden; "><div class="alert_head" style="height:40px;padding-left:20px;padding-right:20px; background: #F4F4F4;border-radius: 2px 2px 0 0;display:flex;justify-content:space-between;align-items:center; "><span class="alert_title" style="font-size: 16px;color: #333;"></span> <i class="icon iconfont icon-close alert_close_dialog" style="color:#777;"></i></div><div class="alert_message" style="color: #666; font-size: 14px;padding: 30px 20px;"></div><div style="display:flex;align-items:center;justify-content: center;padding-left:20px; padding-right:20px;background:#FFF;height:50px; "><button class="alert_btn" style="background: #007AFF; color:#FFF;font-size:14px;min-width:80px;height:32px;display:inline-block; border-radius:4px;border: 1px #DDD solid;outline:none;"></button></div></div>'

    alertContainer.id = 'alertContainer'
    alertContainer.setAttribute('class', 'alertContainer');
    alertContainer.style.display = 'none'
    alertContainer.style.zIndex = '999';
    alertContainer.style.position = 'fixed';
    alertContainer.style.width = '100%';
    alertContainer.style.top = '0';
    alertContainer.style.left = '0';
    alertContainer.style.bottom = '0';
    alertContainer.style.right = '0';
    alertContainer.style.overflow = 'hidden';
    alertContainer.style.background = 'rgba(0,0,0,0.3)';

    document.body.appendChild(alertContainer);
  },

  show: function (title, message, btnText) {
    if (!title) {
      console.error('text 不能为空!');
      return;
    }
    if (!message) {
      console.error('message 不能为空!');
      return;
    }
    if (!btnText) {
      console.error('btnText 不能为空!');
      return;
    }
    var alertDialog = document.getElementById('alertContainer');
    console.log('alertDialog', alertDialog);
    if (!alertDialog) {
      console.error('alertDialog 不存在!');
      return;
    }
    var alertTitle = document.querySelector('.alert_title')
    var alertMessage = document.querySelector('.alert_message')
    var alertBtn = document.querySelector('.alert_btn')
    var alertCloseDialog = document.querySelector('.alert_close_dialog')
    alertTitle.innerHTML = title || '';
    alertMessage.innerHTML = message || '';
    alertBtn.innerHTML = btnText || '';
    alertDialog.style.display = 'block'
    alertCloseDialog.addEventListener("click", this.hidden, false);
  },

  hidden: function () {
    var alertDialog = document.getElementById('alertContainer');
    alertDialog.style.display = 'none'
  }

}


// 弹框类型三： 重提示，有两个按钮
var Confirm = {

  // 初始化提示框
  init: function () {
    var confirmContainer = document.createElement('section')
    confirmContainer.innerHTML = '<div class="confirm_dialog_content" style="width: 80%; max-width: 400px; max-height: 50vh; position:absolute;left:50%; top:50%;transform:translate(-50%,-50%);border-radius: 4px; background: #FFF;overflow:hidden; "><div class="confirm_head" style="height:40px;padding-left:20px;padding-right:20px; background: #F4F4F4;border-radius: 2px 2px 0 0;display:flex;justify-content:space-between;align-items:center; "><span class="confirm_title" style="font-size: 16px;color: #333;"></span> <i class="icon iconfont icon-close confirm_close_dialog" style="color:#777;"></i></div><div class="confirm_message" style="color: #666; font-size: 14px;padding: 30px 20px;max-height: 500px;"></div><div style="display:flex;align-items:center;justify-content: flex-end;padding-right:20px;background:#FFF;height:50px; "><button class="confirm_btn" style="background: #007AFF; color:#FFF;font-size:14px;min-width:80px;height:32px;display:inline-block; border-radius:4px;border: 1px #DDD solid;outline:none;margin-left:10px;"></button><button class="cancel_btn" style="background: #FFF; color:#444;font-size:14px;min-width:80px;height:32px;display:inline-block; border-radius:4px;border: 1px #DEDEDE solid;outline:none;margin-left:10px;"></button></div></div>'

    confirmContainer.id = 'confirmContainer'
    confirmContainer.setAttribute('class', 'confirmContainer');
    confirmContainer.style.display = 'none'
    confirmContainer.style.zIndex = '999';
    confirmContainer.style.position = 'fixed';
    confirmContainer.style.width = '100%';
    confirmContainer.style.top = '0';
    confirmContainer.style.left = '0';
    confirmContainer.style.bottom = '0';
    confirmContainer.style.right = '0';
    confirmContainer.style.overflow = 'hidden';
    confirmContainer.style.background = 'rgba(0,0,0,0.3)';
    document.body.appendChild(confirmContainer);
  },

  show: function (title, message, confirmBtnText, cancelBtnText) {
    if (!title) {
      console.error('text 不能为空!');
      return;
    }
    if (!message) {
      console.error('message 不能为空!');
      return;
    }
    if (!confirmBtnText) {
      console.error('confirmBtnText 不能为空!');
      return;
    }
    if (!cancelBtnText) {
      console.error('cancelBtnText 不能为空!');
      return;
    }
    var confirmDialog = document.getElementById('confirmContainer');
    console.log('confirmDialog', confirmDialog);
    if (!confirmDialog) {
      console.error('confirmDialog 不存在!');
      return;
    }
    var confirmTitle = document.querySelector('.confirm_title')
    var confirmMessage = document.querySelector('.confirm_message')
    var confirmBtn = document.querySelector('.confirm_btn')
    var cancelBtn = document.querySelector('.cancel_btn')
    var confirmCloseDialog = document.querySelector('.confirm_close_dialog')
    confirmTitle.innerHTML = title || '';
    confirmMessage.innerHTML = message || '';
    confirmBtn.innerHTML = confirmBtnText || '';
    cancelBtn.innerHTML = cancelBtnText || '';
    confirmDialog.style.display = 'block'
    confirmCloseDialog.addEventListener("click", this.hidden, false);
  },

  hidden: function () {
    var confirmDialog = document.getElementById('confirmContainer');
    confirmDialog.style.display = 'none'
  }

}