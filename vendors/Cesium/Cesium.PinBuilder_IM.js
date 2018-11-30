


    /**
     * A utility class for generating custom map pins as canvas elements.
     * <br /><br />
     * <div align='center'>
     * <img src='images/PinBuilder_IM.png' width='500'/><br />
     * Example pins generated using both the maki icon set, which ships with Cesium, and single character text.
     * </div>
     *
     * @alias PinBuilder_IM
     * @constructor
     *
     * @demo {@link http://cesiumjs.org/Cesium/Apps/Sandcastle/index.html?src=Map%20Pins.html|Cesium Sandcastle PinBuilder_IM Demo}
     */
    var PinBuilder_IM = function() {
        this._cache = {};
    };

    /**
     * Creates an empty pin of the specified color and size.
     *
     * @param {Color} color The color of the pin.
     * @param {Number} size The size of the pin, in pixels.
     * @returns {Canvas} The canvas element that represents the generated pin.
     */
    PinBuilder_IM.prototype.fromColor = function(color, size) {
        //>>includeStart('debug', pragmas.debug);
        if (!Cesium.defined(color)) {
            throw new Cesium.DeveloperError('color is required');
        }
        if (!Cesium.defined(size)) {
            throw new Cesium.DeveloperError('size is required');
        }
        //>>includeEnd('debug');
        return createPin(undefined, undefined, color, size, this._cache);
    };

    /**
     * Creates a pin with the specified icon, color, and size.
     *
     * @param {String} url The url of the image to be stamped onto the pin.
     * @param {Color} color The color of the pin.
     * @param {Number} size The size of the pin, in pixels.
     * @returns {Canvas|Promise} The canvas element or a Promise to the canvas element that represents the generated pin.
     */
    PinBuilder_IM.prototype.fromUrl = function(url, color, size) {
        //>>includeStart('debug', pragmas.debug);
        if (!Cesium.defined(url)) {
            throw new Cesium.DeveloperError('url is required');
        }
        if (!Cesium.defined(color)) {
            throw new Cesium.DeveloperError('color is required');
        }
        if (!Cesium.defined(size)) {
            throw new Cesium.DeveloperError('size is required');
        }
        //>>includeEnd('debug');
        return createPin(url, undefined, color, size, this._cache);
    };

    /**
     * Creates a pin with the specified {@link https://www.mapbox.com/maki/|maki} icon identifier, color, and size.
     *
     * @param {String} id The id of the maki icon to be stamped onto the pin.
     * @param {Color} color The color of the pin.
     * @param {Number} size The size of the pin, in pixels.
     * @returns {Canvas|Promise} The canvas element or a Promise to the canvas element that represents the generated pin.
     */
    PinBuilder_IM.prototype.fromMakiIconId = function(id, color, size) {
        //>>includeStart('debug', pragmas.debug);
        if (!Cesium.defined(id)) {
            throw new Cesium.DeveloperError('id is required');
        }
        if (!Cesium.defined(color)) {
            throw new Cesium.DeveloperError('color is required');
        }
        if (!Cesium.defined(size)) {
            throw new Cesium.DeveloperError('size is required');
        }
        //>>includeEnd('debug');
        return createPin(Cesium.buildModuleUrl('Assets/Textures/maki/' + encodeURIComponent(id) + '.png'), undefined, color, size, this._cache);
    };

    /**
     * Creates a pin with the specified text, color, and size.  The text will be sized to be as large as possible
     * while still being contained completely within the pin.
     *
     * @param {String} text The text to be stamped onto the pin.
     * @param {Color} color The color of the pin.
     * @param {Number} size The size of the pin, in pixels.
     * @returns {Canvas} The canvas element that represents the generated pin.
     */
    PinBuilder_IM.prototype.fromText = function(text, color, size) {
        //>>includeStart('debug', pragmas.debug);
        if (!Cesium.defined(text)) {
            throw new Cesium.DeveloperError('text is required');
        }
        if (!Cesium.defined(color)) {
            throw new Cesium.DeveloperError('color is required');
        }
        if (!Cesium.defined(size)) {
            throw new Cesium.DeveloperError('size is required');
        }
        //>>includeEnd('debug');

        return createPin(undefined, text, color, size, this._cache);
    };

    var colorScratch = new Cesium.Color();

    //This function (except for the 3 commented lines) was auto-generated from an online tool,
    //http://www.professorcloud.com/svg-to-canvas/, using Assets/Textures/pin.svg as input.
    //The reason we simply can't load and draw the SVG directly to the canvas is because
    //it taints the canvas in Internet Explorer (and possibly some other browsers); making
    //it impossible to create a WebGL texture from the result.
    function drawPin_old(context2D, color, size) {
        context2D.save();
        context2D.scale(size / 24, size / 24); //Added to auto-generated code to scale up to desired size.
        context2D.fillStyle = color.toCssColorString(); //Modified from auto-generated code.
        context2D.strokeStyle = color.brighten(0.6, colorScratch).toCssColorString(); //Modified from auto-generated code.
        context2D.lineWidth = 0.846;
        context2D.beginPath();
        context2D.moveTo(6.72, 0.422);
        context2D.lineTo(17.28, 0.422);
        context2D.bezierCurveTo(18.553, 0.422, 19.577, 1.758, 19.577, 3.415);
        context2D.lineTo(19.577, 10.973);
        context2D.bezierCurveTo(19.577, 12.63, 18.553, 13.966, 17.282, 13.966);
        context2D.lineTo(14.386, 14.008);
        context2D.lineTo(11.826, 23.578);
        context2D.lineTo(9.614, 14.008);
        context2D.lineTo(6.719, 13.965);
        context2D.bezierCurveTo(5.446, 13.983, 4.422, 12.629, 4.422, 10.972);
        context2D.lineTo(4.422, 3.416);
        context2D.bezierCurveTo(4.423, 1.76, 5.447, 0.423, 6.718, 0.423);
        context2D.closePath();
        context2D.fill();
        context2D.stroke();
        context2D.restore();
    }
	
	
	function drawPin(ctx,color,size){
		
		ctx.save();
		ctx.scale(size / 25, size / 24); 
		
//Added to auto-generated code to scale up to desired size.
ctx.fillStyle = color.toCssColorString(); //Modified from auto-generated code.
ctx.strokeStyle = color.brighten(0.9, colorScratch).toCssColorString(); //Modified from auto-generated code.
 ctx.lineWidth = 1.046;
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(24,0);
ctx.lineTo(24,24);
ctx.lineTo(0,24);
ctx.closePath();
ctx.clip();
//ctx.translate(0,0);
//ctx.translate(0,0);
//ctx.scale(1,1);
//ctx.translate(0,0);

ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.beginPath();
ctx.moveTo(12.37585,23.748617);
ctx.bezierCurveTo(12.38345,23.724617,12.4073,23.795617,12.429,23.595517);
ctx.bezierCurveTo(12.45069,23.395817,12.49293,23.060717,12.522870000000001,22.850917000000003);
ctx.bezierCurveTo(12.552800000000001,22.641217,12.590110000000001,22.371617000000004,12.60579,22.251817000000003);
ctx.bezierCurveTo(12.62146,22.131817,12.6506,21.960317000000003,12.67056,21.870317000000004);
ctx.bezierCurveTo(12.69051,21.780317000000004,12.7399,21.519017000000005,12.780295,21.289317000000004);
ctx.bezierCurveTo(12.868845,20.785817000000005,12.935804000000001,20.470517000000005,13.046403000000002,20.036317000000004);
ctx.bezierCurveTo(13.246097,19.004217000000004,13.443639000000001,18.034817000000004,13.851221000000002,16.984517000000004);
ctx.bezierCurveTo(14.299927000000002,15.922617000000004,14.784316000000002,14.916717000000004,15.318652000000002,14.343217000000003);
ctx.bezierCurveTo(15.457251000000001,14.194517000000003,15.851169000000002,13.846217000000003,16.181472000000003,13.580317000000003);
ctx.bezierCurveTo(16.286692000000002,13.496317000000003,16.614123000000003,13.175017000000002,16.909095000000004,12.867817000000002);
ctx.bezierCurveTo(17.541127000000003,12.209417000000002,17.887523000000005,11.716317000000002,18.235578000000004,10.979317000000002);
ctx.bezierCurveTo(18.466944000000005,10.489417000000001,18.708189000000004,9.810416800000002,18.754979000000002,9.517516800000001);
ctx.bezierCurveTo(18.768909,9.430516800000001,18.793449000000003,9.332716800000002,18.809509000000002,9.301016800000001);
ctx.bezierCurveTo(18.870339,9.180516800000001,18.947157,8.306816800000002,18.947157,7.735316800000001);
ctx.bezierCurveTo(18.947157,6.792716800000002,18.839621,6.1133168000000015,18.554577000000002,5.254816800000001);
ctx.bezierCurveTo(18.235325000000003,4.2932168000000015,17.645586,3.3389168000000016,16.885538,2.5539168000000014);
ctx.bezierCurveTo(16.033988,1.6743168000000015,15.287131,1.1941168000000015,14.083366,0.7521168000000014);
ctx.bezierCurveTo(12.830972,0.29221630000000137,10.960766,0.29221630000000137,9.7083717,0.7521168000000014);
ctx.bezierCurveTo(8.618978700000001,1.1521168000000013,7.9271077000000005,1.5671168000000013,7.195611700000001,2.2596168000000016);
ctx.bezierCurveTo(5.8302997,3.5521168000000016,5.0820457,5.0215168000000014,4.875230700000001,6.816416800000002);
ctx.bezierCurveTo(4.822160700000001,7.277116800000002,4.856790700000001,8.819316800000001,4.926610700000001,9.104516800000003);
ctx.bezierCurveTo(4.955950700000002,9.224416800000002,5.013070700000001,9.461416800000002,5.053524700000001,9.631216800000002);
ctx.bezierCurveTo(5.093984700000002,9.800916800000003,5.1489147000000015,9.997016800000003,5.175582700000001,10.067017000000002);
ctx.bezierCurveTo(5.202252700000002,10.137017000000002,5.287742700000002,10.360517000000002,5.365553700000001,10.564017000000002);
ctx.bezierCurveTo(5.516833700000001,10.959617000000001,5.770013700000002,11.455417,6.007419700000002,11.821117000000001);
ctx.bezierCurveTo(6.383030700000002,12.399917,7.068022700000002,13.159017,7.567639700000002,13.550417000000001);
ctx.bezierCurveTo(8.251967700000002,14.086417,8.782644700000002,14.883617000000001,9.267517700000003,15.750817000000001);
ctx.bezierCurveTo(9.870083700000002,16.828417,10.381045000000002,18.673117,10.662369000000002,19.981917000000003);
ctx.bezierCurveTo(10.677399000000001,20.051917000000003,10.713289000000001,20.207117000000004,10.742139000000002,20.326817000000002);
ctx.bezierCurveTo(10.770979000000002,20.446817000000003,10.821669000000002,20.683717,10.854763000000002,20.853517000000004);
ctx.bezierCurveTo(10.887863000000001,21.023317000000002,10.935193000000002,21.243917000000003,10.959936000000003,21.343817000000005);
ctx.bezierCurveTo(10.984676000000002,21.443817000000006,11.038916000000002,21.762317000000007,11.080465000000002,22.051917000000003);
ctx.bezierCurveTo(11.122015000000003,22.341617000000003,11.172505000000003,22.684817000000002,11.192674000000002,22.814717);
ctx.bezierCurveTo(11.212844000000002,22.944517,11.243144000000003,23.189617000000002,11.260014000000002,23.359417);
ctx.bezierCurveTo(11.298074000000002,23.547417,11.265914000000002,23.727917,11.361002000000001,23.777017);
ctx.lineTo(11.848932000000001,23.794017);
ctx.bezierCurveTo(11.983506000000002,23.804017,12.366941,23.778017000000002,12.375873000000002,23.749017);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
		
		
	}	
	
	
	

    //This function takes an image or canvas and uses it as a template
    //to "stamp" the pin with a white image outlined in black.  The color
    //values of the input image are ignored completely and only the alpha
    //values are used.
    function drawIcon(context2D, image, size) {
        //Size is the largest image that looks good inside of pin box.
        var imageSize = size / 3.2;
        var sizeX = imageSize;
        var sizeY = imageSize;

        if (image.width > image.height) {
            sizeY = imageSize * (image.height / image.width);
        } else if (image.width < image.height) {
            sizeX = imageSize * (image.width / image.height);
        }

        //x and y are the center of the pin box
        var x = (size - sizeX) / 4;
        var y = ((7 / 24) * size) - (sizeY / 2);

        context2D.globalCompositeOperation = 'destination-out';
        context2D.drawImage(image, x - 1, y, sizeX, sizeY);
        context2D.drawImage(image, x, y - 1, sizeX, sizeY);
        context2D.drawImage(image, x + 1, y, sizeX, sizeY);
        context2D.drawImage(image, x, y + 1, sizeX, sizeY);

        context2D.globalCompositeOperation = 'destination-over';
        context2D.fillStyle = Cesium.Color.WHITE.toCssColorString();
        context2D.fillRect(x - 1, y - 1, sizeX + 1, sizeY + 1);

        context2D.globalCompositeOperation = 'destination-out';
        context2D.drawImage(image, x, y, sizeX, sizeY);

        context2D.globalCompositeOperation = 'destination-over';
        context2D.fillStyle = Cesium.Color.BLACK.toCssColorString();
        context2D.fillRect(x, y, sizeX, sizeY);
    }

    var stringifyScratch = new Array(4);
    function createPin(url, label, color, size, cache) {
        //Use the parameters as a unique ID for caching.
        stringifyScratch[0] = url;
        stringifyScratch[1] = label;
        stringifyScratch[2] = color;
        stringifyScratch[3] = size;
        var id = JSON.stringify(stringifyScratch);

        var item = cache[id];
        if (Cesium.defined(item)) {
            return item;
        }

        var canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;

        var context2D = canvas.getContext("2d");
        drawPin(context2D, color, size);

        if (Cesium.defined(url)) {
            //If we have an image url, load it and then stamp the pin.
            var promise = Cesium.loadImage(url).then(function(image) {
                drawIcon(context2D, image, size);
                cache[id] = canvas;
                return canvas;
            });
            cache[id] = promise;
            return promise;
        } else if (Cesium.defined(label)) {
            //If we have a label, write it to a canvas and then stamp the pin.
            var image = Cesium.writeTextToCanvas(label, {
                font : 'bold ' + size + 'px sans-serif'
            });
            drawIcon(context2D, image, size);
        }

        cache[id] = canvas;
        return canvas;
    }

  