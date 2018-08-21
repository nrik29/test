window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function initializeApp(data) {
    document.getElementById('titlee').textContent = getParameterByName('t');
    document.getElementById('main').src = 'https://stickershop.line-scdn.net/stickershop/v1/product/'+getParameterByName('pkgid')+'/LINEStorePC/thumbnail_shop.png';
    document.getElementById('1').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('1')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('2').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('2')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('3').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('3')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('4').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('4')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('5').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('5')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('6').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('6')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('7').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('7')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('8').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('8')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('9').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('9')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('10').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('10')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('11').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('11')+'/ANDROID/sticker_animation@2x.png';
    document.getElementById('12').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+getParameterByName('12')+'/ANDROID/sticker_animation@2x.png';
    //var mytext = getParameterByName('stkid');
    //document.getElementById('imgstk').src = 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('pkgid') + '/ANDROID/sticker_animation@2x.png';
    //document.getElementById('languagefield').textContent = data.language;
    //document.getElementById('viewtypefield').textContent = data.context.viewType;
    //document.getElementById('useridfield').textContent = data.context.userId;
    //document.getElementById('utouidfield').textContent = data.context.utouId;
    //document.getElementById('roomidfield').textContent = data.context.roomId;
    //document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    //document.getElementById('openwindowbutton').addEventListener('click', function () {
    //    liff.openWindow({
     //       url: 'https://line.me'
    //    });
    //});

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });
    
    document.getElementById('send1').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('1') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://shop/sticker/detail/"+getParameterByName('pkgid')}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send2').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('2') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send3').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('3') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send4').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('4') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send5').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('5') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send6').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('6') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send7').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('7') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send8').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('8') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send9').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('9') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send10').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('10') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send11').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('11') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
        document.getElementById('send12').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ getParameterByName('12') + '/ANDROID/sticker_animation@2x.png',
                         action: {
                             type: "uri",
                             uri: "line://nv/stickerShop"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // getValueParam
    
    //get profile call https://www.google.co.id/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png
    //document.getElementById('getprofilebutton').addEventListener('click', function () {
    //    liff.getProfile().then(function (profile) {
    //        document.getElementById('useridprofilefield').textContent = profile.userId;
     //       document.getElementById('displaynamefield').textContent = profile.displayName;

    //        var profilePictureDiv = document.getElementById('profilepicturediv');
    //        if (profilePictureDiv.firstElementChild) {
    //            profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
    //        }
     //       var img = document.createElement('img');
     //       img.src = profile.pictureUrl;
    //        img.alt = "Profile Picture";
    //        profilePictureDiv.appendChild(img);
//
   //         document.getElementById('statusmessagefield').textContent = profile.statusMessage;
   //         toggleProfileData();
   //     }).catch(function (error) {
   //         window.alert("Error getting profile: " + error);
   //     });
   // });
}

//function toggleProfileData() {
//    var elem = document.getElementById('profileinfo');
//    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
//        elem.style.display = "none";
//    } else {
//        elem.style.display = "block";
//    }
//}
