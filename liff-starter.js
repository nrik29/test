window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
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
                    uri: "line://apps/1601769611-NVKq2lMZ"
                    },
                actions: [
                    {
                    type: "uri",
                    label: "View detail",
                    uri: "line://apps/1601769611-NVKq2lMZ"
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
                             uri: "line://apps/1601769611-NVKq2lMZ"}},
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
