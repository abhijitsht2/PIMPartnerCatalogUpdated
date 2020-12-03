import React, { useState, Component } from 'react';
import './Partner_Catalog_1.css';
import Header from './header';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { render } from "react-dom";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ChckCellRenderer from "./ChckCellRenderer";
import StateCellRenderer from "./StateCellRenderer";
import $ from 'jquery';
import Setting from '../../Icon.png';
import Filter from '../../Iconfilter.png';
import Column from '../../Iconcolumn.png';
import Group from '../../Icongroup.png';
import Sort from '../../Iconsort.png';
import ListIcon from '../../Iconlist.png';
import GridIcon from '../../Icongrid.png';
import ArrowIcon from '../../Arrow.png';
import Demo from './demo';
import history from '../../history';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Product1 from '../../Iconproduct1.png';
import Product2 from '../../Iconproduct2.png';
import ProductClose from '../../IconProductClose.png';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function closeProductDetails(){
      $('.sidebar').removeClass("sidebarHide");
      $('label #cancel').removeClass("sidebarHide");
      $('.listgrid').removeClass("listgridLeft");
      $('.searchinput').css("margin-left","600px");
      $('.searchinput').css("width","248px");
      $(".searchinput").attr("placeholder", "Search");
      $('.searchinput').css("background-color","");
      $('#productGrid').css("width","1120px");
      $('#productGrid').css("margin-left","250px");
      $('.topnav').css("margin-left","250px");
      $('.topnav .search-container').removeClass("searchAlignRight");
      $('.listgrid').removeClass("listAlignRight");
      $('.productDtlsBar').removeClass("productNavbarActive");
      $('.mapCatalog').removeClass("mapCatalogVisible");
}

class PartnerCatalog1 extends Component {
  
  
  constructor(props) {
    
    super(props);
    
    this.quickSearch = this.quickSearch.bind(this);
    this.gridApi= "this is a test";
    $(document).ready(function(){
      let tabHeader=document.getElementsByClassName("tab-header")[0];
      let tabIndicator=document.getElementsByClassName("tab-indicator")[0];
      let tabBody=document.getElementsByClassName("tab-body")[0];
      let tabsPane=tabHeader.getElementsByTagName("div");

      for(let i=0;i<tabsPane.length;i++){
        tabsPane[i].addEventListener("click",function(){
          
          tabHeader.getElementsByClassName("active")[0].classList.remove("active");
          tabsPane[i].classList.add("active");
          tabBody.getElementsByClassName("active")[0].classList.remove("active");
          tabBody.getElementsByTagName("div")[i].classList.add("active");
          tabIndicator.style.left=`calc(calc(100%/8)*${i})`;
        });
      }
     $('#category').click(function(){
      $('#refreshIcon').toggleClass("refreshVisible");
     });

     $('#cancel').click(function(){
      $('#productGrid').css("width","1390px");
      $('#productGrid').css("margin-left","50px");
      $('.topnav').css("margin-left","50px");
      $('.topnav .search-container').addClass("searchAlignRight");
      $('.listgrid').addClass("listAlignRight");
      
     });
     $('#btn').click(function(){
      $('.sidebar').removeClass("sidebarHide");
      $('label #cancel').removeClass("sidebarHide");
      $('.listgrid').removeClass("listgridLeft");
      $('.searchinput').css("margin-left","600px");
      $('.searchinput').css("width","248px");
      $(".searchinput").attr("placeholder", "Search");
      $('.searchinput').css("background-color","");
      $('#productGrid').css("width","1120px");
      $('#productGrid').css("margin-left","250px");
      $('.topnav').css("margin-left","250px");
      $('.topnav .search-container').removeClass("searchAlignRight");
      $('.listgrid').removeClass("listAlignRight");
      $('.productDtlsBar').removeClass("productNavbarActive");
      $('.mapCatalog').removeClass("mapCatalogVisible");
      $('.showSelected').removeClass("showSelectedDisplay");
     });
      var toggler = document.getElementsByClassName("filterCaret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    
    this.parentElement.querySelector(".filterNested").classList.toggle("filterInActive");
  });
}

var togglerTele = document.getElementsByClassName("filterTeleCaret");
var i;

for (i = 0; i < togglerTele.length; i++) {
  togglerTele[i].addEventListener("click", function() {
    
    this.parentElement.querySelector(".filterTeleNested").classList.toggle("filterActive");
  });
}

var togglerAudioVideo = document.getElementsByClassName("filterAudioVideoCaret");
var i;

for (i = 0; i < togglerAudioVideo.length; i++) {
  togglerAudioVideo[i].addEventListener("click", function() {
    
    this.parentElement.querySelector(".filterAudioVideoNested").classList.toggle("filterActive");
  });
}

$(".caret").click(function(){
$(".nested").toggleClass("active");
console.log($(".caret")[0].className);
if($(".caret")[0].className.includes("fa-chevron-right")){
  $(".caret").removeClass("fas fa-chevron-right");
  $(".caret").addClass("fas fa-chevron-down");
}
else{
  $(".caret").removeClass("fas fa-chevron-down");
  $(".caret").addClass("fas fa-chevron-right");
}
});

$(".caretgroup").click(function(){
  $(".nestedgroup").toggleClass("active");
  console.log($(".caretgroup")[0].className);
  if($(".caretgroup")[0].className.includes("fa-chevron-right")){
    $(".caretgroup").removeClass("fas fa-chevron-right");
    $(".caretgroup").addClass("fas fa-chevron-down");
  }
  else{
    $(".caretgroup").removeClass("fas fa-chevron-down");
    $(".caretgroup").addClass("fas fa-chevron-right");
  }
  });
  
    });

    this.state = {
      columnDefs: [
        {
          field: "select",
          cellRenderer: "chckCellRenderer",
          cellRendererParams: {
            clicked: function(field) {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 126,
          sortable:true,
          filter:true,
          checkboxSelection:true
          
        },
        {
          headerName: "SKU No.",
          field: "skuno",
          minWidth: 125,
          sortable:true,
          filter:true
        },
        {
          headerName: "Product Description",
          field: "productdescription",
          minWidth: 312,
          sortable:true,
          filter:true
        },
        {
          headerName: "Enrichment %",
          field: "enrichment",
          minWidth: 150,
          sortable:true,
          filter:true
        },
        {
          headerName: "State",
          field: "state",
          cellRenderer: "stateCellRenderer",
          cellRendererParams: {
            clicked: function(field) {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 150,
          sortable:true,
          filter:true
        }
        
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true
      },
      autoGroupColumnDef: {
        flex: 1,
        minWidth: 180,
      },
      frameworkComponents: {
        chckCellRenderer: ChckCellRenderer,
        stateCellRenderer:StateCellRenderer
      },
      rowData: []
    };
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
const data = [
        {skuno: 500009070, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 95,state:"Updated"},
        {skuno: 500009071, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 96,state:"Updated"},
        {skuno: 500009072, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 97,state:"Synced"},
        {skuno: 500009073, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 98,state:"Synced"},
        {skuno: 500009074, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 99,state:"Synced"}
    ];
    this.setState({ rowData: data });
    this.gridApi.setQuickFilter(document.getElementById('globalsearch').value);
  };
  onRowSelection=e=>{
    var rowCount=this.gridApi.getSelectedRows().length;
    document.getElementById("rowselected").innerHTML=rowCount;
  };
  openNav(){   
  $('#mySidebar').toggleClass("sidebarFilterToggle");
  $('#productGrid').toggleClass("faded");

  }
  showSelectedRow=()=>{
    const selectedNodes=this.gridApi.getSelectedNodes();
    if(this.gridApi.getSelectedRows().length!=0){
    for(var i=0;i<selectedNodes.length;i++){
      selectedNodes[i].setSelected(true);
    }
  }
  }
  

  openCity(cityName){
    var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
}
quickSearch(){
  this.gridApi.setQuickFilter(document.getElementById('globalsearch').value);
}
TeleParentClick(){
  if($("#televisionparent").is(':checked')){
  $("#televisioncroma").prop("checked", true);
  $("#televisionhitachi").prop("checked", true);
}
else{
  $("#televisioncroma").prop("checked", false);
  $("#televisionhitachi").prop("checked", false);
}
}

AudioVideoParentClick(){
  if($("#audiovideo").is(':checked')){
  $("#audiovideoaudio").prop("checked", true);
  $("#audiovideovideo").prop("checked", true);
}
else{
  $("#audiovideoaudio").prop("checked", false);
  $("#audiovideovideo").prop("checked", false);
}
}

AllClick(){
  if($("#all").is(':checked')){
    $("#televisionparent").prop("checked", true);
    $("#audiovideo").prop("checked", true);
    $("#audiovideoaudio").prop("checked", true);
    $("#audiovideovideo").prop("checked", true);
    $("#televisioncroma").prop("checked", true);
    $("#televisionhitachi").prop("checked", true);
    $("#homeappliances").prop("checked", true);
    $("#phoneswearables").prop("checked", true);
    $("#kitchenappliances").prop("checked", true);
    $("#computerstablets").prop("checked", true);
    $("#cameras").prop("checked", true);
    $("#grooming").prop("checked", true);
    $("#gaming").prop("checked", true);
    $("#accessories").prop("checked", true);
  }
  else{
    $("#televisionparent").prop("checked", false);
    $("#audiovideo").prop("checked", false);
    $("#audiovideoaudio").prop("checked", false);
    $("#audiovideovideo").prop("checked", false);
    $("#televisioncroma").prop("checked", false);
    $("#televisionhitachi").prop("checked", false);
    $("#homeappliances").prop("checked", false);
    $("#phoneswearables").prop("checked", false);
    $("#kitchenappliances").prop("checked", false);
    $("#computerstablets").prop("checked", false);
    $("#cameras").prop("checked", false);
    $("#grooming").prop("checked", false);
    $("#gaming").prop("checked", false);
    $("#accessories").prop("checked", false);
  }
}
  
CancelFilter(){
  $('#mySidebar').toggleClass("sidebarFilterToggle");
  $('#productGrid').toggleClass("faded");
}




SearchCategoryInfo(){
var input, filter,ulcatnested,licatnested,ulcatchildnested,licatchildnested,ulimmchild,liimmchild, label, i,j,k,l, txtValue;
    input = document.getElementById("searchCategory");
    
    filter = input.value.toUpperCase();
    ulcatnested = document.getElementById("filterNestedUL");
    licatnested = ulcatnested.getElementsByTagName("li");
    
    if(filter!=""){
    for (i = 0; i < licatnested.length; i++) {
      
      label = licatnested[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          console.log(txtValue);
          licatnested[i].style.display = "";
          ulimmchild=ulcatnested.getElementsByTagName("ul");
          for(l=0;l<ulimmchild.length;l++){
            console.log(ulimmchild.length);
            ulimmchild[l].style.display="";
            liimmchild = ulimmchild[l].getElementsByTagName("li");
            for(k=0;k<liimmchild.length;k++){
                liimmchild[k].style.display = "";
            }
        }
        }
         else {
          licatnested[i].style.display = "none";
        }
    }
  }
  else{
    ulcatnested.style.display= "";
    for (i = 0; i < licatnested.length; i++) {
      
      label = licatnested[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
          console.log(txtValue);
          licatnested[i].style.display = "";
          ulimmchild=ulcatnested.getElementsByTagName("ul");
          for(l=0;l<ulimmchild.length;l++){
            console.log(ulimmchild.length);
            ulimmchild[l].style.display="";
            liimmchild = ulimmchild[l].getElementsByTagName("li");
            for(k=0;k<liimmchild.length;k++){
                liimmchild[k].style.display = "";
            }
        }
        
    }
  }
    ulcatchildnested=ulcatnested.getElementsByTagName("ul");

    // for(j=0;j<ulcatchildnested.length;j++){
    //   licatchildnested = ulcatchildnested[j].getElementsByTagName("li");

    //   for(k=0;k<licatchildnested.length;k++){
    //     label = licatchildnested[k].getElementsByTagName("label")[0];
    //     txtValue = label.textContent || label.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       console.log(txtValue);
    //       licatchildnested[k].style.display = "block";
    //     } else {
    //       licatchildnested[k].style.display = "none";
    //     }
    //   }

    // }
    

}
GotoDashboard(){
  history.push('/dashboard');
}



  render() {
    return (<div>
      <Header />
      <div className="Partner1Background">
      <div className="catalogStatus">  
      <button className="Icon" onClick={this.GotoDashboard}><i className='fas fa-chevron-left'></i></button>
      <div class="c100 p88 center Oval">
        <span>88.8%</span>
        <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
        </div>
    </div>
      <div className="Standard"><p>Croma Retail (V6)</p>
      </div>
      <div className="maindiv">
          <div className="leftdiv" ><p className="Not-Filtered">15345 SKUs | </p></div>
          <div className="rightdiv"><a href="#" className="text-style-1">More Details</a></div>
      </div>
      </div>
      <div className="catalogMapping">
      <Demo />
      </div>
      </div>
      <input type="checkbox" id="check" />
      <label for="check">
      <img src={Setting} id="btn"/>
        <i className="fa fa-chevron-left cancelBtn" id="cancel"></i>
      </label>
      <div className="sidebar">
        <div className="sidebarheader"><div className="actionDetails"><a href="#" className="setting"><img src={Setting}/></a></div><div className="actionsPara"><p>Actions</p></div></div>
        <ul className="sidebaricon">
          <li id="filters"><div className="iconDetails"><a href="#"><img src={Filter}/></a></div><div className="iconsPara"><p>Filters</p></div><div className="filterIconBox"><i className='fas fa-chevron-right caret'></i></div>
          <ul className="nested">
      <li><a href="#" id="category" onClick={this.openNav}>By Category</a><div id="refreshIcon" className="refreshInvisible"><img src={ArrowIcon}/></div></li>
      <li><a href="#" id="brand">By Brand</a></li>
      <li><a href="#" id="status">By Status</a></li>
      </ul>
          </li>
          <li><div className="iconDetails"><a href="#"><img src={Column}/></a></div><div className="iconsPara"><p>Columns</p></div></li>
          <li><div className="iconDetails"><a href="#"><img src={Group}/></a></div><div className="iconsPara"><p>Group</p></div><div className="filterIconBox"><i className='fas fa-chevron-right caretgroup'></i></div>
          <ul className="nestedgroup">
      <li><a href="#" id="group1">By Group1</a></li>
      <li><a href="#" id="group2">By Group2</a></li>
      <li><a href="#" id="group3">By Group3</a></li>
      </ul>
          </li>
          <li><div className="iconDetails"><a href="#"><img src={Sort}/></a></div><div className="iconsPara"><p>Sort</p></div></li>
        </ul>
      </div>
      <div id="mySidebar" class="sidebarFilter">
      <div>
      <input id="searchCategory" className="Input-Field" type="text" placeholder="Search in categories" name="search"/>
      <button className="button-9-9" type="submit" onClick={this.SearchCategoryInfo}><i className="fa fa-search"></i></button>
      </div>
      <div>
      <ul id="filterUL">
  <li><span className="filterCaret"> <i className='fas fa-chevron-right '></i>
  <input id="all" type="checkbox" className="Checkbox_Checked_Background" onClick={this.AllClick}/>
  <label for="all" className="Column-Title">All</label></span>
    <ul id="filterNestedUL" className="filterNested">
  <li><span className="filterTeleCaret"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="televisionparent" type="checkbox" className="Checkbox_Checked_BackgroundTele" onClick={this.TeleParentClick}/>
  <label for="all" className="Column-Title-Item">Televisions</label>
    <ul id="filterTeleNested" className="filterTeleNested">
      <li><input id="televisioncroma" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Croma</label></li>
      <li><input id="televisionhitachi" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Hitachi</label></li>
    </ul>
  </li>
  <li>
  <span className="filterAudioVideoCaret"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="audiovideo" type="checkbox" className="Checkbox_Checked_BackgroundTele" onClick={this.AudioVideoParentClick}/>
  <label for="all" className="Column-Title-Item">Audio & Video</label>
  <ul id="filterAudioVideoNested" className="filterAudioVideoNested">
  <li><input id="audiovideoaudio" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Audio</label></li>
  <li><input id="audiovideovideo" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Video</label></li>
  </ul>
  </li>
  <li>
  <span className="filterHomeCaret"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="homeappliances" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Home Appliances</label>
  </li>
  <li>
  <span className="filterPhone"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="phoneswearables" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Phones & Wearables</label>
  </li>
  <li>
  <span className="filterKitchen"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="kitchenappliances" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Kitchen Appliances</label>
  </li>
  <li>
  <span className="filterComputer"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="computerstablets" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Computers & Tablets</label>
  </li>
  <li>
  <span className="filterCamera"> <i className='fas fa-chevron-right telespacing'></i></span>  
  <input id="cameras" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Cameras</label></li>
  <li>
  <span className="filterGrooming"> <i className='fas fa-chevron-right telespacing'></i></span>  
  <input id="grooming" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Grooming & Wellness</label></li>
  <li>
  <span className="filterGaming"> <i className='fas fa-chevron-right telespacing'></i></span> 
  <input id="gaming" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Gaming</label>
  </li>
  <li>
  <span className="filterAccessories"> <i className='fas fa-chevron-right telespacing'></i></span> 
  <input id="accessories" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Accessories</label>
  </li>
    </ul>
  </li>
</ul>
  <button className="filterCancel" onClick={this.CancelFilter}>Cancel</button>
  <button className="filterApply">Apply</button>
  </div>
</div>
      <div class="topnav">
  <a id="selectedProduct" className="selectProduct" href="#home">Select (<span id="rowselected">0</span>/5)</a>
  <div className="showSelected"><button id="showSelected" onClick={this.showSelectedRow} className="showSelectedBtn">Show Selected</button></div>
  <div className="search-container">
      <input id="globalsearch" className="searchinput" type="text" placeholder="Search" name="search"/>
      <button className="search" type="submit" onClick={this.quickSearch}><i className="fa fa-search"></i></button>
  </div>
  <div class="listgrid">
  <div class="square1"><a href="#" className="listgridLink"> <img className="Rectangle1" src={ListIcon} id="listicon"/></a></div>
<div class="square2"><a href="#" className="listgridLink"><img className="Rectangle2" src={GridIcon} id="gridicon"/></a></div>
</div>
</div>
      <div id="productGrid" className="ag-theme-alpine">
      <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            frameworkComponents={this.state.frameworkComponents}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
            rowSelection="multiple"
            onRowSelected={this.onRowSelection}
          />
      </div>
      <div className="productDtlsBar productNavbarInvisible">
      <div class="productNavbar">
        <div><img src={Product1}/><p className="productName">Samsung 198 L 3 Star Direct Cool Inverter Refrigerator ... </p><button className="closeBtn" onClick={closeProductDetails}><img src={ProductClose}/></button>
        </div>
        <div><img src={Product2} className="Product2"/></div>
      <div className="productHierarchy">
      <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
      Croma
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
      Home Appliances
      </Link>
      <Link
        color="inherit"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Refrigerators
      </Link>
      <Link
        color="inherit"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Single Door Refrigerators
      </Link>
    </Breadcrumbs>
    </div>
    <div className="tabs">
      <div className="tab-header">
       <div className="active">
         General
       </div>
       <div>
         Attributes
       </div>
       <div>
         Hierarchy
       </div>
       <div>
         Pricing
       </div>
       <div>
         Digital Assets
       </div>
      </div>
      <div className="tab-indicator">

      </div>
      <div className="tab-body">
        <div className="active">
          <p className="Product-Type">1. Product Type</p>
          <hr className="Line"/>
          <label htmlFor="type" className="Type">Type: </label><p className="productType">Tablet</p>
          <p className="Product-Type">2. Product Information</p>
          <hr className="Line"/>
          <label htmlFor="name" className="Name">Name: </label><p className="productOrgName">Phone</p><br/>
          <label htmlFor="weight" className="Weight">Weight: </label><p className="productWeight">123 g</p><br/>
          <label htmlFor="manufacturer" className="Manufacturer">Manufacturer: </label><p className="productManufacturer">Apple</p><br/>
          <label htmlFor="description" className="Description">Description: </label><p className="productDescription">Lorem ipsum dolor si amet.</p>
          <p className="Product-Type">3. Optional Information</p>
          <hr className="Line"/>
          <label htmlFor="Some-text" className="Some-text">Some text: </label><p className="productSome-text">Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod tempor
ut labore et dolore magna aliqua.</p><br/>
          <label htmlFor="mfgdate" className="Manufacturing-Date">Manufacturing Date: </label><p className="productManufacturing-Date">Aug 20, 2020</p><br/>
          <label htmlFor="availability" className="Availability">Availability: </label><p className="productAvailability">In Store</p><br/>
          <label htmlFor="size" className="Size">Size: </label><p className="productSize">n/a</p><br/>
          <p className="Product-Type">4. Pricing</p>
          <hr className="Line"/>
          <label htmlFor="price" className="Price">Price: </label><p className="productPrice">1,000.00 &#8364;</p><br/>
          <label htmlFor="discount" className="Discount">Discount Group: </label><p className="productDiscount">n/a</p>
        </div>
        <div>
        <p className="Product-Type">1. Product Type</p>
          <hr className="Line"/>
          <label htmlFor="type" className="Type">Type: </label><p className="productType">Tablet</p>
          <p className="Product-Type">2. Product Information</p>
          <hr className="Line"/>
          <label htmlFor="name" className="Name">Name: </label><p className="productOrgName">Phone</p><br/>
          <label htmlFor="weight" className="Weight">Weight: </label><p className="productWeight">123 g</p><br/>
          <label htmlFor="manufacturer" className="Manufacturer">Manufacturer: </label><p className="productManufacturer">Apple</p><br/>
          <label htmlFor="description" className="Description">Description: </label><p className="productDescription">Lorem ipsum dolor si amet.</p>
          <p className="Product-Type">3. Optional Information</p>
          <hr className="Line"/>
          <label htmlFor="Some-text" className="Some-text">Some text: </label><p className="productSome-text">Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod tempor
ut labore et dolore magna aliqua.</p><br/>
          <label htmlFor="mfgdate" className="Manufacturing-Date">Manufacturing Date: </label><p className="productManufacturing-Date">Aug 20, 2020</p><br/>
          <label htmlFor="availability" className="Availability">Availability: </label><p className="productAvailability">In Store</p><br/>
          <label htmlFor="size" className="Size">Size: </label><p className="productSize">n/a</p><br/>
          <p className="Product-Type">4. Pricing</p>
          <hr className="Line"/>
          <label htmlFor="price" className="Price">Price: </label><p className="productPrice">1,000.00 &#8364;</p><br/>
          <label htmlFor="discount" className="Discount">Discount Group: </label><p className="productDiscount">n/a</p>
        </div>
        <div>
        <p className="Product-Type">1. Product Type</p>
          <hr className="Line"/>
          <label htmlFor="type" className="Type">Type: </label><p className="productType">Tablet</p>
          <p className="Product-Type">2. Product Information</p>
          <hr className="Line"/>
          <label htmlFor="name" className="Name">Name: </label><p className="productOrgName">Phone</p><br/>
          <label htmlFor="weight" className="Weight">Weight: </label><p className="productWeight">123 g</p><br/>
          <label htmlFor="manufacturer" className="Manufacturer">Manufacturer: </label><p className="productManufacturer">Apple</p><br/>
          <label htmlFor="description" className="Description">Description: </label><p className="productDescription">Lorem ipsum dolor si amet.</p>
          <p className="Product-Type">3. Optional Information</p>
          <hr className="Line"/>
          <label htmlFor="Some-text" className="Some-text">Some text: </label><p className="productSome-text">Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod tempor
ut labore et dolore magna aliqua.</p><br/>
          <label htmlFor="mfgdate" className="Manufacturing-Date">Manufacturing Date: </label><p className="productManufacturing-Date">Aug 20, 2020</p><br/>
          <label htmlFor="availability" className="Availability">Availability: </label><p className="productAvailability">In Store</p><br/>
          <label htmlFor="size" className="Size">Size: </label><p className="productSize">n/a</p><br/>
          <p className="Product-Type">4. Pricing</p>
          <hr className="Line"/>
          <label htmlFor="price" className="Price">Price: </label><p className="productPrice">1,000.00 &#8364;</p><br/>
          <label htmlFor="discount" className="Discount">Discount Group: </label><p className="productDiscount">n/a</p>
        </div>
        <div>
          <p className="Product-Type">1. Pricing</p>
          <hr className="Line"/>
          <label htmlFor="price" className="Price">Price: </label><p className="productPrice">1,000.00 &#8364;</p><br/>
          <label htmlFor="discount" className="Discount">Discount Group: </label><p className="productDiscount">n/a</p>
        </div>
        <div>
        <p className="Product-Type">1. Product Type</p>
          <hr className="Line"/>
          <label htmlFor="type" className="Type">Type: </label><p className="productType">Tablet</p>
          <p className="Product-Type">2. Product Information</p>
          <hr className="Line"/>
          <label htmlFor="name" className="Name">Name: </label><p className="productOrgName">Phone</p><br/>
          <label htmlFor="weight" className="Weight">Weight: </label><p className="productWeight">123 g</p><br/>
          <label htmlFor="manufacturer" className="Manufacturer">Manufacturer: </label><p className="productManufacturer">Apple</p><br/>
          <label htmlFor="description" className="Description">Description: </label><p className="productDescription">Lorem ipsum dolor si amet.</p>
          <p className="Product-Type">3. Optional Information</p>
          <hr className="Line"/>
          <label htmlFor="Some-text" className="Some-text">Some text: </label><p className="productSome-text">Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod tempor
ut labore et dolore magna aliqua.</p><br/>
          <label htmlFor="mfgdate" className="Manufacturing-Date">Manufacturing Date: </label><p className="productManufacturing-Date">Aug 20, 2020</p><br/>
          <label htmlFor="availability" className="Availability">Availability: </label><p className="productAvailability">In Store</p><br/>
          <label htmlFor="size" className="Size">Size: </label><p className="productSize">n/a</p><br/>
          <p className="Product-Type">4. Pricing</p>
          <hr className="Line"/>
          <label htmlFor="price" className="Price">Price: </label><p className="productPrice">1,000.00 &#8364;</p><br/>
          <label htmlFor="discount" className="Discount">Discount Group: </label><p className="productDiscount">n/a</p>
        </div>
      </div>
    </div>

      </div>
</div>

    </div>);
  }
}

export default PartnerCatalog1
