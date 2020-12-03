import React, { useState } from "react";
import './StateCellRenderer.css';
import $ from 'jquery';
import Update from '../../update.png';
import RightArrow from '../../rightArrow.png';

function StateCellRenderer(props){
  
    $(document).ready(function(){
      // var i;
      // for(i=0;i<4;i++){
      //   var id=i+1;
      //   $('.Arrow')[i].id='ViewItem'+id;
      // }
      });

      function ArrowClick(){
        $('#productGrid').css("width","484px");
        $('#productGrid').css("margin-left","48px");
        $('.productDtlsBar').toggleClass("productNavbarActive");
        $('.attributeTab').toggleClass("productDetailsVisible"); 
        $('.mapCatalog').toggleClass("mapCatalogVisible");
        $('.sidebar').addClass("sidebarHide");
        $('label #cancel').addClass("sidebarHide");
        $('.topnav').css("margin-left","50px");
        $('.searchinput').css("margin-left","9px");
        $('.searchinput').css("width","36px");
        $('.searchinput').removeAttr('placeholder');
        $('.searchinput').val('');
        $('.searchinput').css("background-color","#ebf7ff");
        $('.listgrid').addClass("listgridLeft");
        $('.showSelected').toggleClass("showSelectedDisplay");
        //$("#cancel").trigger("click");
      }
      
    return(
      <div>
        <img src={Update} className="updateIcon"/><span className="update">Updated</span><button className="Arrow" onClick={ArrowClick}><img src={RightArrow}/></button>
      </div>
    );
  }


export default StateCellRenderer;
