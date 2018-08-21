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
    document.getElementById('inputsrc').value = getParameterByName('pkgid');
    document.getElementById('test').textContent = getParameterByName('stkid');
    //Array Image
    var stkidd = getParameterByName('stkid');
    var res = stkidd.split(",");
    document.getElementById('test2').textContent = res;
    var text = [];
    var i;
    for (i = 0; i < res.length; i++) {
        text += ['https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ res[i] +'/ANDROID/sticker.png'];
        }
    document.getElementById('test3').textContent = text;
    //var ArrayOfImages = ['https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg']; //your assumed array
    text.forEach(function(image) {
        var img = document.createElement('img');
        img.src = image;
        img.height = "45";
        img.width = "50";
        document.body.appendChild(img);
    });
    
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
    //document.getElementById('closewindowbutton').addEventListener('click', function () {
    //    liff.closeWindow();
    //});

    // sendMessagesButton call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "This is a buttons template",
              template: {
                type: "buttons",
                thumbnailImageUrl: "https://i.ebayimg.com/images/g/5Q8AAOSwPCVX9Moo/s-l300.jpg",
                imageAspectRatio: "rectangle",
                imageSize: "cover",
                imageBackgroundColor: "#FFFFFF",
                title: "Menu",
                text: "Please select",
                defaultAction: {
                    type: "uri",
                    label: "Button",
                    uri: "line://app/1601769611-9WQRv8EL"
                    },
                actions: [
                    {
                    type: "uri",
                    label: "View detail",
                    uri: "line://app/1601769611-9WQRv8EL"
                    }
                ]
            }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // sendMessagesCarousel call
    document.getElementById('sendmessagecarousel').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: "https://i.ebayimg.com/images/g/5Q8AAOSwPCVX9Moo/s-l300.jpg",
                         action: {
                             type: "uri",
                             label: "ini 1",
                             uri: "line://app/1601769611-9WQRv8EL"}},
                                 {
                         imageUrl: "https://i.ebayimg.com/images/g/5Q8AAOSwPCVX9Moo/s-l300.jpg",
                         action: {
                             type: "uri",
                             label: "ini 2",
                             uri: "line://nv/connectedDevices"}}
                                  ]
                                }
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
    
    // sendMessagesSticker call
    document.getElementById('sendsticker').addEventListener('click', function () {
        liff.sendMessages([{
              type: "template",
              altText: "Menu",
              template: {
                     type: "image_carousel",
                     columns: [{
                         imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/'+ document.getElementById('stkid').value + '/ANDROID/sticker_animation@2x.png',
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
