import React, { useState } from "react";
import './ChckCellRenderer.css';
import $ from 'jquery';
function CheckCellRenderer(props){
  
    return(
      <div>
          <div className="chckLeft"> </div>
         
          <div className="chckRight">
          <div className="square"></div>
          </div>
          
      </div>
    );
  }


export default CheckCellRenderer;
