
function drawVisualization() {
var rowData1= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',1,0]
,
['Cphaxx',0,0]
,
['Drew',1,0]
,
['Euan',1,0]
,
['Fin',0,0]
,
['Fish',0,0]
,
['Guymondo',1,0]
,
['Hfb',1,0]
,
['Hodge',1,0]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',0,0]
,
['Keith',3,0]
,
['Mal',0,0]
,
['Nichols',1,0]
,
['Pablo',0,1]
,
['Pearce',3,0]
,
['Regan',0,0]
,
['Skippa',0,1]
,
['Spoon',0,2]
,
['Steveg',0,0]
,
['Swoosh',2,0]
,
['Truck',0,0]
,
['dIG',0,0]
];
var rowData2= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',1,0]
,
['Cphaxx',0,0]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',0,0]
,
['Fish',0,0]
,
['Guymondo',0,1]
,
['Hfb',1,0]
,
['Hodge',0,0]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',0,0]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,1]
,
['Steveg',0,0]
,
['Swoosh',1,0]
,
['Truck',0,1]
,
['dIG',0,0]
];
var rowData3= [
['Beast',0,1]
,
['Benc',0,1]
,
['Clyde',0,0]
,
['Cphaxx',2,4]
,
['Drew',1,1]
,
['Euan',0,0]
,
['Fin',2,3]
,
['Fish',0,3]
,
['Guymondo',0,1]
,
['Hfb',3,2]
,
['Hodge',0,2]
,
['Jammo',0,0]
,
['John',0,2]
,
['Justin',1,4]
,
['Keith',1,2]
,
['Mal',0,0]
,
['Nichols',1,2]
,
['Pablo',0,0]
,
['Pearce',1,2]
,
['Regan',0,0]
,
['Skippa',3,0]
,
['Spoon',0,0]
,
['Steveg',1,1]
,
['Swoosh',2,2]
,
['Truck',0,1]
,
['dIG',1,4]
];
var rowData4= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',4,2]
,
['Cphaxx',0,0]
,
['Drew',1,0]
,
['Euan',0,0]
,
['Fin',1,0]
,
['Fish',3,0]
,
['Guymondo',0,3]
,
['Hfb',1,1]
,
['Hodge',2,1]
,
['Jammo',0,0]
,
['John',1,1]
,
['Justin',1,1]
,
['Keith',2,0]
,
['Mal',0,0]
,
['Nichols',5,0]
,
['Pablo',0,1]
,
['Pearce',1,1]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,0]
,
['Steveg',7,0]
,
['Swoosh',0,0]
,
['Truck',2,0]
,
['dIG',1,0]
];
var rowData5= [
['Beast',0,1]
,
['Benc',0,0]
,
['Clyde',1,1]
,
['Cphaxx',0,1]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',2,3]
,
['Fish',0,0]
,
['Guymondo',1,1]
,
['Hfb',0,0]
,
['Hodge',3,1]
,
['Jammo',0,0]
,
['John',1,1]
,
['Justin',1,1]
,
['Keith',1,1]
,
['Mal',0,0]
,
['Nichols',1,1]
,
['Pablo',1,0]
,
['Pearce',1,1]
,
['Regan',0,0]
,
['Skippa',2,1]
,
['Spoon',1,2]
,
['Steveg',2,1]
,
['Swoosh',1,1]
,
['Truck',0,0]
,
['dIG',1,1]
];
var rowData6= [
['Beast',0,1]
,
['Benc',0,0]
,
['Clyde',0,0]
,
['Cphaxx',0,0]
,
['Drew',0,0]
,
['Euan',1,1]
,
['Fin',0,0]
,
['Fish',0,0]
,
['Guymondo',0,0]
,
['Hfb',0,0]
,
['Hodge',0,0]
,
['Jammo',0,0]
,
['John',0,1]
,
['Justin',0,0]
,
['Keith',0,1]
,
['Mal',0,0]
,
['Nichols',0,0]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,1]
,
['Steveg',0,0]
,
['Swoosh',0,0]
,
['Truck',0,0]
,
['dIG',0,1]
];
var rowData7= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',3,2]
,
['Cphaxx',0,1]
,
['Drew',3,2]
,
['Euan',0,0]
,
['Fin',0,0]
,
['Fish',1,0]
,
['Guymondo',1,0]
,
['Hfb',1,4]
,
['Hodge',1,1]
,
['Jammo',1,0]
,
['John',1,0]
,
['Justin',0,2]
,
['Keith',1,1]
,
['Mal',0,0]
,
['Nichols',6,1]
,
['Pablo',0,1]
,
['Pearce',1,2]
,
['Regan',0,0]
,
['Skippa',2,2]
,
['Spoon',2,1]
,
['Steveg',3,3]
,
['Swoosh',4,2]
,
['Truck',0,1]
,
['dIG',1,0]
];
var rowData8= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',3,0]
,
['Cphaxx',0,3]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',0,1]
,
['Fish',0,0]
,
['Guymondo',1,0]
,
['Hfb',1,0]
,
['Hodge',2,0]
,
['Jammo',0,0]
,
['John',2,0]
,
['Justin',0,2]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',1,0]
,
['Pablo',2,0]
,
['Pearce',0,2]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',1,1]
,
['Steveg',1,0]
,
['Swoosh',4,2]
,
['Truck',0,0]
,
['dIG',0,1]
];
var rowData9= [
['Beast',0,1]
,
['Benc',1,0]
,
['Clyde',1,0]
,
['Cphaxx',3,0]
,
['Drew',1,1]
,
['Euan',0,0]
,
['Fin',0,1]
,
['Fish',0,1]
,
['Guymondo',0,0]
,
['Hfb',0,0]
,
['Hodge',0,1]
,
['Jammo',0,0]
,
['John',1,0]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',3,1]
,
['Pablo',2,0]
,
['Pearce',1,2]
,
['Regan',0,0]
,
['Skippa',1,0]
,
['Spoon',2,0]
,
['Steveg',2,1]
,
['Swoosh',1,0]
,
['Truck',0,0]
,
['dIG',0,2]
];
var rowData10= [
['Beast',0,1]
,
['Benc',0,1]
,
['Clyde',2,3]
,
['Cphaxx',1,1]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',4,1]
,
['Fish',0,1]
,
['Guymondo',0,0]
,
['Hfb',0,0]
,
['Hodge',2,1]
,
['Jammo',1,0]
,
['John',1,3]
,
['Justin',1,2]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',3,3]
,
['Pablo',2,1]
,
['Pearce',3,1]
,
['Regan',0,0]
,
['Skippa',2,2]
,
['Spoon',2,2]
,
['Steveg',2,2]
,
['Swoosh',1,2]
,
['Truck',0,1]
,
['dIG',0,2]
];
var rowData11= [
['Beast',0,1]
,
['Benc',0,0]
,
['Clyde',2,0]
,
['Cphaxx',1,2]
,
['Drew',1,3]
,
['Euan',0,0]
,
['Fin',1,1]
,
['Fish',0,2]
,
['Guymondo',1,0]
,
['Hfb',1,2]
,
['Hodge',0,0]
,
['Jammo',0,0]
,
['John',2,1]
,
['Justin',1,0]
,
['Keith',1,2]
,
['Mal',0,0]
,
['Nichols',4,2]
,
['Pablo',0,1]
,
['Pearce',0,2]
,
['Regan',0,1]
,
['Skippa',2,5]
,
['Spoon',2,4]
,
['Steveg',4,4]
,
['Swoosh',0,2]
,
['Truck',0,1]
,
['dIG',3,1]
];
var rowData12= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',0,0]
,
['Cphaxx',0,0]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',0,1]
,
['Fish',0,0]
,
['Guymondo',0,0]
,
['Hfb',0,1]
,
['Hodge',0,0]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',1,0]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,0]
,
['Steveg',0,0]
,
['Swoosh',0,0]
,
['Truck',0,0]
,
['dIG',0,1]
];
var rowData13= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',2,0]
,
['Cphaxx',1,1]
,
['Drew',1,1]
,
['Euan',1,0]
,
['Fin',0,1]
,
['Fish',0,2]
,
['Guymondo',0,1]
,
['Hfb',3,1]
,
['Hodge',1,2]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',1,1]
,
['Keith',1,0]
,
['Mal',0,0]
,
['Nichols',4,3]
,
['Pablo',0,0]
,
['Pearce',1,2]
,
['Regan',0,0]
,
['Skippa',2,3]
,
['Spoon',1,0]
,
['Steveg',3,1]
,
['Swoosh',4,0]
,
['Truck',0,1]
,
['dIG',3,1]
];
var rowData14= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',4,1]
,
['Cphaxx',1,1]
,
['Drew',1,1]
,
['Euan',0,0]
,
['Fin',2,0]
,
['Fish',2,0]
,
['Guymondo',0,0]
,
['Hfb',2,1]
,
['Hodge',0,1]
,
['Jammo',0,0]
,
['John',1,1]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',3,0]
,
['Pablo',0,1]
,
['Pearce',1,1]
,
['Regan',0,0]
,
['Skippa',1,1]
,
['Spoon',1,0]
,
['Steveg',1,0]
,
['Swoosh',1,1]
,
['Truck',0,0]
,
['dIG',2,1]
];
var rowData15= [
['Beast',0,3]
,
['Benc',0,0]
,
['Clyde',2,1]
,
['Cphaxx',0,2]
,
['Drew',1,1]
,
['Euan',1,0]
,
['Fin',1,1]
,
['Fish',0,0]
,
['Guymondo',0,0]
,
['Hfb',0,0]
,
['Hodge',2,1]
,
['Jammo',0,0]
,
['John',0,1]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',2,1]
,
['Pablo',2,0]
,
['Pearce',1,2]
,
['Regan',0,0]
,
['Skippa',0,1]
,
['Spoon',0,0]
,
['Steveg',1,1]
,
['Swoosh',1,0]
,
['Truck',0,0]
,
['dIG',0,0]
];
var rowData16= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',0,0]
,
['Cphaxx',0,0]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',0,0]
,
['Fish',0,0]
,
['Guymondo',0,0]
,
['Hfb',0,0]
,
['Hodge',0,0]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',0,0]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,0]
,
['Steveg',0,0]
,
['Swoosh',0,0]
,
['Truck',1,0]
,
['dIG',0,0]
];
var rowData17= [
['Beast',0,1]
,
['Benc',0,0]
,
['Clyde',2,1]
,
['Cphaxx',0,5]
,
['Drew',1,1]
,
['Euan',0,0]
,
['Fin',1,6]
,
['Fish',0,1]
,
['Guymondo',1,3]
,
['Hfb',3,3]
,
['Hodge',2,4]
,
['Jammo',0,1]
,
['John',3,4]
,
['Justin',0,3]
,
['Keith',1,2]
,
['Mal',0,0]
,
['Nichols',0,0]
,
['Pablo',1,1]
,
['Pearce',1,4]
,
['Regan',0,0]
,
['Skippa',1,2]
,
['Spoon',1,3]
,
['Steveg',3,3]
,
['Swoosh',1,4]
,
['Truck',0,3]
,
['dIG',0,1]
];
var rowData18= [
['Beast',1,0]
,
['Benc',0,0]
,
['Clyde',0,0]
,
['Cphaxx',1,0]
,
['Drew',0,1]
,
['Euan',0,0]
,
['Fin',1,0]
,
['Fish',0,2]
,
['Guymondo',0,2]
,
['Hfb',1,2]
,
['Hodge',1,0]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',1,0]
,
['Keith',0,2]
,
['Mal',0,0]
,
['Nichols',1,1]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',1,1]
,
['Spoon',1,0]
,
['Steveg',4,0]
,
['Swoosh',2,0]
,
['Truck',0,1]
,
['dIG',1,2]
];
var rowData19= [
['Beast',0,3]
,
['Benc',0,0]
,
['Clyde',2,1]
,
['Cphaxx',1,1]
,
['Drew',1,1]
,
['Euan',0,0]
,
['Fin',2,1]
,
['Fish',2,0]
,
['Guymondo',2,1]
,
['Hfb',1,3]
,
['Hodge',2,0]
,
['Jammo',0,0]
,
['John',2,1]
,
['Justin',1,1]
,
['Keith',2,1]
,
['Mal',0,0]
,
['Nichols',4,1]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',3,0]
,
['Spoon',1,1]
,
['Steveg',1,0]
,
['Swoosh',3,0]
,
['Truck',0,2]
,
['dIG',1,1]
];
var rowData20= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',0,0]
,
['Cphaxx',0,0]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',0,0]
,
['Fish',0,0]
,
['Guymondo',0,0]
,
['Hfb',0,0]
,
['Hodge',1,0]
,
['Jammo',0,0]
,
['John',0,0]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',0,0]
,
['Pablo',0,0]
,
['Pearce',0,0]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,0]
,
['Steveg',0,0]
,
['Swoosh',0,0]
,
['Truck',0,0]
,
['dIG',0,0]
];
var rowData21= [
['Beast',1,0]
,
['Benc',0,0]
,
['Clyde',0,3]
,
['Cphaxx',0,0]
,
['Drew',1,2]
,
['Euan',0,0]
,
['Fin',2,2]
,
['Fish',0,0]
,
['Guymondo',0,1]
,
['Hfb',2,2]
,
['Hodge',5,2]
,
['Jammo',0,0]
,
['John',3,2]
,
['Justin',1,1]
,
['Keith',1,0]
,
['Mal',0,0]
,
['Nichols',2,1]
,
['Pablo',1,1]
,
['Pearce',0,3]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,0]
,
['Steveg',2,0]
,
['Swoosh',1,1]
,
['Truck',2,1]
,
['dIG',0,1]
];
var rowData22= [
['Beast',2,0]
,
['Benc',1,0]
,
['Clyde',0,0]
,
['Cphaxx',0,0]
,
['Drew',2,1]
,
['Euan',1,0]
,
['Fin',1,2]
,
['Fish',1,1]
,
['Guymondo',0,2]
,
['Hfb',2,2]
,
['Hodge',4,2]
,
['Jammo',0,0]
,
['John',0,1]
,
['Justin',0,1]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',3,1]
,
['Pablo',0,1]
,
['Pearce',1,1]
,
['Regan',0,0]
,
['Skippa',0,0]
,
['Spoon',0,0]
,
['Steveg',0,2]
,
['Swoosh',2,1]
,
['Truck',0,4]
,
['dIG',3,1]
];
var rowData23= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',1,1]
,
['Cphaxx',0,7]
,
['Drew',1,2]
,
['Euan',0,0]
,
['Fin',3,3]
,
['Fish',0,1]
,
['Guymondo',1,2]
,
['Hfb',2,2]
,
['Hodge',4,4]
,
['Jammo',0,0]
,
['John',1,3]
,
['Justin',0,1]
,
['Keith',1,1]
,
['Mal',0,0]
,
['Nichols',3,3]
,
['Pablo',0,4]
,
['Pearce',0,1]
,
['Regan',0,0]
,
['Skippa',0,2]
,
['Spoon',2,0]
,
['Steveg',0,0]
,
['Swoosh',4,4]
,
['Truck',2,3]
,
['dIG',1,4]
];
var rowData24= [
['Beast',0,2]
,
['Benc',0,1]
,
['Clyde',2,2]
,
['Cphaxx',0,0]
,
['Drew',1,1]
,
['Euan',0,0]
,
['Fin',2,4]
,
['Fish',2,4]
,
['Guymondo',0,1]
,
['Hfb',2,1]
,
['Hodge',2,0]
,
['Jammo',0,0]
,
['John',0,4]
,
['Justin',1,1]
,
['Keith',0,1]
,
['Mal',0,0]
,
['Nichols',4,1]
,
['Pablo',0,2]
,
['Pearce',0,3]
,
['Regan',0,0]
,
['Skippa',1,1]
,
['Spoon',1,2]
,
['Steveg',4,4]
,
['Swoosh',0,0]
,
['Truck',1,2]
,
['dIG',2,5]
];
var rowData25= [
['Beast',0,0]
,
['Benc',1,0]
,
['Clyde',1,0]
,
['Cphaxx',0,2]
,
['Drew',0,0]
,
['Euan',0,0]
,
['Fin',1,0]
,
['Fish',0,0]
,
['Guymondo',0,0]
,
['Hfb',1,0]
,
['Hodge',1,0]
,
['Jammo',0,0]
,
['John',1,0]
,
['Justin',0,0]
,
['Keith',0,0]
,
['Mal',0,1]
,
['Nichols',3,0]
,
['Pablo',1,0]
,
['Pearce',2,0]
,
['Regan',0,0]
,
['Skippa',1,2]
,
['Spoon',4,0]
,
['Steveg',3,2]
,
['Swoosh',2,1]
,
['Truck',0,0]
,
['dIG',0,0]
];
var rowData26= [
['Beast',0,0]
,
['Benc',0,0]
,
['Clyde',4,1]
,
['Cphaxx',0,1]
,
['Drew',1,1]
,
['Euan',1,0]
,
['Fin',0,1]
,
['Fish',1,0]
,
['Guymondo',2,0]
,
['Hfb',2,0]
,
['Hodge',1,3]
,
['Jammo',1,0]
,
['John',1,3]
,
['Justin',1,2]
,
['Keith',0,0]
,
['Mal',0,0]
,
['Nichols',1,0]
,
['Pablo',2,1]
,
['Pearce',1,1]
,
['Regan',0,0]
,
['Skippa',1,0]
,
['Spoon',1,3]
,
['Steveg',4,1]
,
['Swoosh',5,2]
,
['Truck',0,0]
,
['dIG',0,0]
];
var data = [];
data[0] = new google.visualization.DataTable();
data[0].addColumn('string', 'Date');
data[0].addColumn('number', 'KOBy');
data[0].addColumn('number', 'KO');
data[0].addRows(rowData1);
data[1] = new google.visualization.DataTable();
data[1].addColumn('string', 'Date');
data[1].addColumn('number', 'KOBy');
data[1].addColumn('number', 'KO');
data[1].addRows(rowData2);
data[2] = new google.visualization.DataTable();
data[2].addColumn('string', 'Date');
data[2].addColumn('number', 'KOBy');
data[2].addColumn('number', 'KO');
data[2].addRows(rowData3);
data[3] = new google.visualization.DataTable();
data[3].addColumn('string', 'Date');
data[3].addColumn('number', 'KOBy');
data[3].addColumn('number', 'KO');
data[3].addRows(rowData4);
data[4] = new google.visualization.DataTable();
data[4].addColumn('string', 'Date');
data[4].addColumn('number', 'KOBy');
data[4].addColumn('number', 'KO');
data[4].addRows(rowData5);
data[5] = new google.visualization.DataTable();
data[5].addColumn('string', 'Date');
data[5].addColumn('number', 'KOBy');
data[5].addColumn('number', 'KO');
data[5].addRows(rowData6);
data[6] = new google.visualization.DataTable();
data[6].addColumn('string', 'Date');
data[6].addColumn('number', 'KOBy');
data[6].addColumn('number', 'KO');
data[6].addRows(rowData7);
data[7] = new google.visualization.DataTable();
data[7].addColumn('string', 'Date');
data[7].addColumn('number', 'KOBy');
data[7].addColumn('number', 'KO');
data[7].addRows(rowData8);
data[8] = new google.visualization.DataTable();
data[8].addColumn('string', 'Date');
data[8].addColumn('number', 'KOBy');
data[8].addColumn('number', 'KO');
data[8].addRows(rowData9);
data[9] = new google.visualization.DataTable();
data[9].addColumn('string', 'Date');
data[9].addColumn('number', 'KOBy');
data[9].addColumn('number', 'KO');
data[9].addRows(rowData10);
data[10] = new google.visualization.DataTable();
data[10].addColumn('string', 'Date');
data[10].addColumn('number', 'KOBy');
data[10].addColumn('number', 'KO');
data[10].addRows(rowData11);
data[11] = new google.visualization.DataTable();
data[11].addColumn('string', 'Date');
data[11].addColumn('number', 'KOBy');
data[11].addColumn('number', 'KO');
data[11].addRows(rowData12);
data[12] = new google.visualization.DataTable();
data[12].addColumn('string', 'Date');
data[12].addColumn('number', 'KOBy');
data[12].addColumn('number', 'KO');
data[12].addRows(rowData13);
data[13] = new google.visualization.DataTable();
data[13].addColumn('string', 'Date');
data[13].addColumn('number', 'KOBy');
data[13].addColumn('number', 'KO');
data[13].addRows(rowData14);
data[14] = new google.visualization.DataTable();
data[14].addColumn('string', 'Date');
data[14].addColumn('number', 'KOBy');
data[14].addColumn('number', 'KO');
data[14].addRows(rowData15);
data[15] = new google.visualization.DataTable();
data[15].addColumn('string', 'Date');
data[15].addColumn('number', 'KOBy');
data[15].addColumn('number', 'KO');
data[15].addRows(rowData16);
data[16] = new google.visualization.DataTable();
data[16].addColumn('string', 'Date');
data[16].addColumn('number', 'KOBy');
data[16].addColumn('number', 'KO');
data[16].addRows(rowData17);
data[17] = new google.visualization.DataTable();
data[17].addColumn('string', 'Date');
data[17].addColumn('number', 'KOBy');
data[17].addColumn('number', 'KO');
data[17].addRows(rowData18);
data[18] = new google.visualization.DataTable();
data[18].addColumn('string', 'Date');
data[18].addColumn('number', 'KOBy');
data[18].addColumn('number', 'KO');
data[18].addRows(rowData19);
data[19] = new google.visualization.DataTable();
data[19].addColumn('string', 'Date');
data[19].addColumn('number', 'KOBy');
data[19].addColumn('number', 'KO');
data[19].addRows(rowData20);
data[20] = new google.visualization.DataTable();
data[20].addColumn('string', 'Date');
data[20].addColumn('number', 'KOBy');
data[20].addColumn('number', 'KO');
data[20].addRows(rowData21);
data[21] = new google.visualization.DataTable();
data[21].addColumn('string', 'Date');
data[21].addColumn('number', 'KOBy');
data[21].addColumn('number', 'KO');
data[21].addRows(rowData22);
data[22] = new google.visualization.DataTable();
data[22].addColumn('string', 'Date');
data[22].addColumn('number', 'KOBy');
data[22].addColumn('number', 'KO');
data[22].addRows(rowData23);
data[23] = new google.visualization.DataTable();
data[23].addColumn('string', 'Date');
data[23].addColumn('number', 'KOBy');
data[23].addColumn('number', 'KO');
data[23].addRows(rowData24);
data[24] = new google.visualization.DataTable();
data[24].addColumn('string', 'Date');
data[24].addColumn('number', 'KOBy');
data[24].addColumn('number', 'KO');
data[24].addRows(rowData25);
data[25] = new google.visualization.DataTable();
data[25].addColumn('string', 'Date');
data[25].addColumn('number', 'KOBy');
data[25].addColumn('number', 'KO');
data[25].addRows(rowData26);
var options1 = {
width: "100%",
height: 250,
title: "Who knocked you out"
};
var options2 = {
width: "100%",
height: 250,
title: "Who you knocked out"
};
var view1 = new google.visualization.DataView(data[current]);
view1.setColumns([0, 1])
var view2 = new google.visualization.DataView(data[current]);
view2.setColumns([0, 2])
var chart1 = new google.visualization.PieChart(document.getElementById('chart1'));
chart1.draw(view1, options1);
var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
chart2.draw(view2, options2);
}
google.setOnLoadCallback(drawVisualization);
var current = 0;
function changeCurrent(value) {
current=parseInt(value, 10);
drawVisualization();

$(window).smartresize(function(){
chart1.draw(view1, options1);
chart2.draw(view2, options2);
});

}

