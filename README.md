# Phonegap Hardware Plugins

This is a demonstration tutorial of some hardware plugins from Cordova.

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

Explaining the Phonegap Camera

### Camera Function

When can specify some options like the listed below

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
