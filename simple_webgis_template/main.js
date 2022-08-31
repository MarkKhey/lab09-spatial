window.onload=init;

function init()
{
    const Peta = new ol.Map
    ({
            view: new ol.View({
                center:ol.proj.fromLonLat([0,0]), 
                zoom:4,    //default
                minZoom:2,
                maxZoom:8
            }),
            layers:[
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'peta' //this is DOM id
    })
}