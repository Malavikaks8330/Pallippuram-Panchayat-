var wms_layers = [];

var format_ROAD_0 = new ol.format.GeoJSON();
var features_ROAD_0 = format_ROAD_0.readFeatures(json_ROAD_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_0.addFeatures(features_ROAD_0);
var lyr_ROAD_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_0, 
                style: style_ROAD_0,
                popuplayertitle: 'ROAD',
                interactive: true,
                title: '<img src="styles/legend/ROAD_0.png" /> ROAD'
            });
var lyr_DEM_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_1_0.png" /> <= 4<br />\
    <img src="styles/legend/DEM_1_1.png" /> 4 - 8<br />\
    <img src="styles/legend/DEM_1_2.png" /> 8 - 11<br />\
    <img src="styles/legend/DEM_1_3.png" /> 11 - 15<br />\
    <img src="styles/legend/DEM_1_4.png" /> > 15<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8478453.356798, 1132737.537688, 8483360.264219, 1139967.026440]
        })
    });
var format_BOUNDARY_2 = new ol.format.GeoJSON();
var features_BOUNDARY_2 = format_BOUNDARY_2.readFeatures(json_BOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_2.addFeatures(features_BOUNDARY_2);
var lyr_BOUNDARY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_2, 
                style: style_BOUNDARY_2,
                popuplayertitle: 'BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_2.png" /> BOUNDARY'
            });
var format_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_3 = format_GEOMORPHOLOGY_3.readFeatures(json_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_3.addFeatures(features_GEOMORPHOLOGY_3);
var lyr_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_3, 
                style: style_GEOMORPHOLOGY_3,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_1.png" /> Coastal Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_2.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_3.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_4.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_5.png" /> <br />' });
var format_GEOLOGY_4 = new ol.format.GeoJSON();
var features_GEOLOGY_4 = format_GEOLOGY_4.readFeatures(json_GEOLOGY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_4.addFeatures(features_GEOLOGY_4);
var lyr_GEOLOGY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_4, 
                style: style_GEOLOGY_4,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_4_0.png" /> Sand and Silt<br />\
    <img src="styles/legend/GEOLOGY_4_1.png" /> Tank/WB/River<br />\
    <img src="styles/legend/GEOLOGY_4_2.png" /> <br />' });
var format_BUILDINGS_5 = new ol.format.GeoJSON();
var features_BUILDINGS_5 = format_BUILDINGS_5.readFeatures(json_BUILDINGS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGS_5.addFeatures(features_BUILDINGS_5);
var lyr_BUILDINGS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDINGS_5, 
                style: style_BUILDINGS_5,
                popuplayertitle: 'BUILDINGS',
                interactive: true,
                title: '<img src="styles/legend/BUILDINGS_5.png" /> BUILDINGS'
            });
var format_WARD_6 = new ol.format.GeoJSON();
var features_WARD_6 = format_WARD_6.readFeatures(json_WARD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARD_6.addFeatures(features_WARD_6);
var lyr_WARD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARD_6, 
                style: style_WARD_6,
                popuplayertitle: 'WARD',
                interactive: true,
    title: 'WARD<br />\
    <img src="styles/legend/WARD_6_0.png" /> CHERAI KADAPPURAM<br />\
    <img src="styles/legend/WARD_6_1.png" /> CONVENT PALAM<br />\
    <img src="styles/legend/WARD_6_2.png" /> ELINJAMKULAM<br />\
    <img src="styles/legend/WARD_6_3.png" /> GOWREESWARAM<br />\
    <img src="styles/legend/WARD_6_4.png" /> JANATHA<br />\
    <img src="styles/legend/WARD_6_5.png" /> KARUTHALA<br />\
    <img src="styles/legend/WARD_6_6.png" /> KOMARANTHY<br />\
    <img src="styles/legend/WARD_6_7.png" /> KOVILAKAM SOUTH<br />\
    <img src="styles/legend/WARD_6_8.png" /> KOVILUNKAL<br />\
    <img src="styles/legend/WARD_6_9.png" /> MANAYATHUKADU<br />\
    <img src="styles/legend/WARD_6_10.png" /> MANI BAZAR<br />\
    <img src="styles/legend/WARD_6_11.png" /> MARKET<br />\
    <img src="styles/legend/WARD_6_12.png" /> MOSQUE<br />\
    <img src="styles/legend/WARD_6_13.png" /> MUNAMBAM HARBOUR<br />\
    <img src="styles/legend/WARD_6_14.png" /> MUNAMBAM JANAHITHA<br />\
    <img src="styles/legend/WARD_6_15.png" /> MUNAMBAM KADAPPURAM<br />\
    <img src="styles/legend/WARD_6_16.png" /> PALLIPPURAM FORT<br />\
    <img src="styles/legend/WARD_6_17.png" /> PANCHAYAT<br />\
    <img src="styles/legend/WARD_6_18.png" /> REKTHESWARY<br />\
    <img src="styles/legend/WARD_6_19.png" /> SAHODARA BHAVANAM<br />\
    <img src="styles/legend/WARD_6_20.png" /> SAMOOHYA SEVASANGHAM<br />\
    <img src="styles/legend/WARD_6_21.png" /> SMHS<br />\
    <img src="styles/legend/WARD_6_22.png" /> THRIKKADAKKAPPILLY<br />\
    <img src="styles/legend/WARD_6_23.png" /> VADAYIL<br />\
    <img src="styles/legend/WARD_6_24.png" /> <br />' });

lyr_ROAD_0.setVisible(true);lyr_DEM_1.setVisible(true);lyr_BOUNDARY_2.setVisible(true);lyr_GEOMORPHOLOGY_3.setVisible(true);lyr_GEOLOGY_4.setVisible(true);lyr_BUILDINGS_5.setVisible(true);lyr_WARD_6.setVisible(true);
var layersList = [lyr_ROAD_0,lyr_DEM_1,lyr_BOUNDARY_2,lyr_GEOMORPHOLOGY_3,lyr_GEOLOGY_4,lyr_BUILDINGS_5,lyr_WARD_6];
lyr_ROAD_0.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_BOUNDARY_2.set('fieldAliases', {'id': 'id', });
lyr_GEOMORPHOLOGY_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_GEOLOGY_4.set('fieldAliases', {'fid': 'fid', 'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_BUILDINGS_5.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_WARD_6.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_ROAD_0.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_BOUNDARY_2.set('fieldImages', {'id': 'TextEdit', });
lyr_GEOMORPHOLOGY_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_GEOLOGY_4.set('fieldImages', {'fid': 'TextEdit', 'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_BUILDINGS_5.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_WARD_6.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_ROAD_0.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_BOUNDARY_2.set('fieldLabels', {'id': 'no label', });
lyr_GEOMORPHOLOGY_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_GEOLOGY_4.set('fieldLabels', {'fid': 'no label', 'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_BUILDINGS_5.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_WARD_6.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_WARD_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});