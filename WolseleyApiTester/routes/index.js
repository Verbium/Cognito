var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/wuk/cs/CognitoTab/v1/Shipments', function(req, res, next) {
    //CognitoTab/v1/Shipments?deviceID={deviceid}&rel=oldest_unactioned
    var xml = router.get('InvItem');
    res.set('Content-Type', 'application/xml');
    console.log('xml is set to: '+xml);
    if (xml) {
        res.send(xml);
    } else {
        res.send('<?xml version="1.0" encoding="UTF-8"?><ns1:InvItem xmlns:ns1="http://www.cognitomobile.com/schemas/FieldForceIQ/1.0/TAMS" src="Wolseley" submitdt="2016-09-19T13:56:52.808+01:00" timezone="Europe/London"><ns1:Ref>SB-SHN-642132-1</ns1:Ref><ns1:EventDT>2016-09-19T09:52:20</ns1:EventDT><ns1:Ext /><ns1:InvItemDetail><ns1:Params><ns1:P name="SigName">JAMES</ns1:P><ns1:P name="CorrelationID">PICK.REQUEST-PROCESSSHIPMENT-algh-BR.SB-720-17795-35540050</ns1:P></ns1:Params><ns1:CreateDT>2016-09-19T13:56:52.808+01:00</ns1:CreateDT><ns1:UpdateDT>2016-09-19T13:56:52.808+01:00</ns1:UpdateDT><ns1:Type>CC</ns1:Type><ns1:Class>PARCEL</ns1:Class><ns1:SubClass>COLLECTION</ns1:SubClass><ns1:Status>ACTIVE</ns1:Status><ns1:Desc><ns1:Main /></ns1:Desc></ns1:InvItemDetail><ns1:Customer><ns1:Ref>7000V03</ns1:Ref><ns1:Type>ACCOUNT</ns1:Type><ns1:Name>A A SHEETMETAL (A SMITH &amp; A LAPPIN)</ns1:Name></ns1:Customer><ns1:Contact><ns1:Name>A A SHEETMETAL (A SMITH &amp; A LAPPIN)</ns1:Name><ns1:ContactDetail><ns1:Type>TELWORK</ns1:Type><ns1:Value /></ns1:ContactDetail></ns1:Contact><ns1:Order /><ns1:Location><ns1:Params><ns1:P name="AddrLine4">NORWICH</ns1:P><ns1:P name="AddrLine5" /><ns1:P name="AddrLine6" /></ns1:Params><ns1:Type>CUSTOMER</ns1:Type><ns1:AddrLine1>UNIT 1</ns1:AddrLine1><ns1:AddrLine2>FLETCHER WAY</ns1:AddrLine2><ns1:AddrLine3>WESTON ROAD</ns1:AddrLine3><ns1:Postcode>NR1 3ST</ns1:Postcode><ns1:Geotag><ns1:Lat>1.294150091707707</ns1:Lat><ns1:Long>52.622740119695663</ns1:Long><ns1:Validity>VALID</ns1:Validity></ns1:Geotag></ns1:Location><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">S55991</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>1</ns1:Id><ns1:Type>S</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>1</ns1:Rank><ns1:Desc><ns1:Main>BINZEL BIN26F-12SC 26F TIG TORCH 12FT / SWITCH &amp; [br] COVERED WITH EXTRA LINE OF FDS [br]TEXT FOR MULTI-DESC [br] LINE TEST&gt;</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">N51521</ns1:P><ns1:P name="Dimension">1.20</ns1:P><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">1.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>2.01</ns1:Id><ns1:Type>A</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>0.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>2</ns1:Rank><ns1:Desc><ns1:Main>22X75 FENCE PALE PTD TRTD BRWN L/MTR (F) **HEAVYSIDE**</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">N51521</ns1:P><ns1:P name="Dimension">2.10</ns1:P><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">2.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>2.02</ns1:Id><ns1:Type>A</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>2.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>3</ns1:Rank><ns1:Desc><ns1:Main>22X75 FENCE PALE PTD TRTD BRWN L/MTR (F) **HEAVYSIDE**</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">N53031</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">PAIR</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>3</ns1:Id><ns1:Type>S</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM>PAIR</ns1:UoM><ns1:Rank>4</ns1:Rank><ns1:Desc><ns1:Main>AM5EX CONNECTOR FOR REHAU 706</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">4332722</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>4</ns1:Id><ns1:Type>S</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>5</ns1:Rank><ns1:Desc><ns1:Main>DATAFUSE 2 ECU RA PLUG 447 SS FRAME</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">R01107</ns1:P><ns1:P name="Dimension">1.2</ns1:P><ns1:P name="QtyType">M</ns1:P><ns1:P name="Total">2.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>5.01</ns1:Id><ns1:Type>D</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>2.0</ns1:QtyDec><ns1:UoM>M</ns1:UoM><ns1:Rank>6</ns1:Rank><ns1:Desc><ns1:Main>CUT 4" ODX16SWG 304 DESC A269 HYG TUBE</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">R01107</ns1:P><ns1:P name="Dimension">2</ns1:P><ns1:P name="QtyType">M</ns1:P><ns1:P name="Total">3.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>5.02</ns1:Id><ns1:Type>D</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>3.0</ns1:QtyDec><ns1:UoM>M</ns1:UoM><ns1:Rank>7</ns1:Rank><ns1:Desc><ns1:Main>CUT 4" ODX16SWG 304 DESC A269 HYG TUBE</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">H12812</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">M2</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>6</ns1:Id><ns1:Type>S</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM>M2</ns1:UoM><ns1:Rank>8</ns1:Rank><ns1:Desc><ns1:Main>PLASMOR FIBOLITE 100MM 3.6N</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">B61018</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>7.01</ns1:Id><ns1:Type>V</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>9</ns1:Rank><ns1:Desc><ns1:Main>* CENTERSUITE 2012 550MM 1TH BASIN WHITE</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">B61020</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>7.02</ns1:Id><ns1:Type>V</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>10</ns1:Rank><ns1:Desc><ns1:Main>* CENTERSUITE 2012 FULL PEDESTAL WHITE</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">B61021</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>7.03</ns1:Id><ns1:Type>V</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>11</ns1:Rank><ns1:Desc><ns1:Main>* CENTERSUITE 2012 CC PAN WHITE</ns1:Main></ns1:Desc></ns1:LineItem><ns1:LineItem><ns1:Params><ns1:P name="ProductCode">B61022</ns1:P><ns1:P name="Dimension" /><ns1:P name="QtyType">DECIMAL</ns1:P><ns1:P name="Total">1.0</ns1:P><ns1:P name="AlreadyDone">0.0</ns1:P><ns1:P name="BackOrder">0.0</ns1:P><ns1:P name="SerialScanFlag">false</ns1:P><ns1:P name="CustProductCode" /><ns1:P name="HazardNotif" /></ns1:Params><ns1:Id>7.04</ns1:Id><ns1:Type>V</ns1:Type><ns1:Class>ITEM</ns1:Class><ns1:QtyDec>1.0</ns1:QtyDec><ns1:UoM /><ns1:Rank>12</ns1:Rank><ns1:Desc><ns1:Main>* CENTERSUITE 2012 6/3L P/B CISTERN WH</ns1:Main></ns1:Desc></ns1:LineItem></ns1:InvItem>');
    }
});


module.exports = router;
