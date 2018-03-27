# Phonegap Hardware Plugins

This is a demonstration tutorial of camera & vibration hardware plugins from Cordova.

## Prerequisites

You need the following tools to be able to do this tutorial.

### Tools

For this app I used the following tools:

* Xcode 9.2
* Visual Studio Code
* Phonegap
* Phonegap CLI tools
* iPhone 8 Plus

If you want to learn how to install Phonegap click [this](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/) link.

### Installing Dependencies

In iOS is mandatory to add some Privacy request on the Info.plist file of the project in order to use the camera hardware, so you must use this command:

```
cordova plugin add cordova-plugin-camera --variable CAMERA_USAGE_DESCRIPTION="your usage message" --variable PHOTOLIBRARY_USAGE_DESCRIPTION="your usage message"

```

In order to install the vibration hardware plugin use this command:

```
cordova plugin add cordova-plugin-vibration
```


## Phonegap Camera Tutorial

Explaining the Phonegap Camera plugin

### Camera Function

We can specify some options like the listed below

```Javascript
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
}
```

Option variables:

* **destinationType:** Chose the format of the return value.
* **sourceType:** Set the source of the picture.
* **mediaType:** Set the type of media to select from.
* **encodingType:** Choose the returned image file's encoding.
* **cameraDirection:** Choose the camera to use (front or back).

We must define successCallback and errorCallback methods for the `getPicture()` Function

```Javascript
successCallback: function(imgURI){
    document.getElementById('message').textContent = imgURI;
    document.getElementById('photo').src = imgURI;
}
```

```Javascript
errorCallback: function(msg){
    document.getElementById('message').textContent = msg;
}
```

### Phonegap camera.getPicture() method

Takes a photo using the camera. It opens the device default's camera application

```Javascript
navigator.camera.getPicture(app.successCallback, app.errorCallback, opts);
```

### Phonegap vibrate method

Vibrates for an declared amount of time. In this case 3 seconds.

```Javascript
navigator.vibrate(3000)
```

## Recap

This application just launch the phone's default camera, takes a picture with it, and then displays that picture in a `<img>` tag.
When the user taps the camera button, the device vibrates.

## Authors

* **Adrian Silva** - [Web](https://adri4silva.github.io)

## Acknowledgments

- [Cordova Camera Plugin Documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html)
- [Cordova Vibration Plugin Documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-vibration/index.html)
- [Apache Cordova Camera Github](https://github.com/apache/cordova-plugin-camera)
