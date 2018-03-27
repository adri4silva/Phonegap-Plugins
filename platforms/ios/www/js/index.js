var app = {
    // Application Constructor
    initialize: function() {
      document.getElementById('pictureButton').addEventListener('click', app.takePhoto);
    },

    takePhoto: function(){
        let opts = {
            quality: 80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight: 400
        };

        navigator.vibrate(3000)
        navigator.camera.getPicture(app.successCallback, app.errorCallback, opts);
    },

    successCallback: function(imgURI){
        document.getElementById('message').textContent = imgURI;
        document.getElementById('photo').src = imgURI;

    },

    errorCallback: function(msg){
        document.getElementById('message').textContent = msg;
    }
};

document.addEventListener('deviceready', app.init);
